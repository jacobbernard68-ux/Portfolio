import { getResend } from "@/libs/resend";
import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.string().trim().email().max(254),
  message: z.string().trim().min(10).max(3000),
  website: z.string().max(0).optional(),
});

const attempts = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;

function isRateLimited(ip: string) {
  const now = Date.now();
  const current = attempts.get(ip);
  if (!current || current.resetAt <= now) {
    attempts.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW });
    return false;
  }
  current.count += 1;
  return current.count > RATE_LIMIT_MAX;
}

export async function POST(request: Request) {
  if (Number(request.headers.get("content-length") ?? 0) > 10_000) {
    return NextResponse.json({ error: "Request is too large." }, { status: 413 });
  }

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json({ error: "Too many messages. Please try again in a few minutes." }, { status: 429 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Please enter a valid name, email, and message." }, { status: 400 });
  }
  if (parsed.data.website) return NextResponse.json({ ok: true });

  const to = process.env.CONTACT_EMAIL_TO;
  const from = process.env.CONTACT_EMAIL_FROM;
  if (!process.env.RESEND_API_KEY || !to || !from) {
    console.error("Contact email environment variables are not configured.");
    return NextResponse.json({ error: "Contact email is temporarily unavailable." }, { status: 503 });
  }

  const { name, email, message } = parsed.data;
  const { error } = await getResend().emails.send({
    from,
    to,
    replyTo: email,
    subject: `Portfolio inquiry from ${name}`,
    text: `New portfolio contact\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
  });

  if (error) {
    console.error("Resend contact email failed:", error);
    return NextResponse.json({ error: "Your message could not be sent. Please try again." }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
