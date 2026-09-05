import OpenAI from 'openai';
import { NextResponse } from 'next/server';

type IncomingMessage = { role: 'user' | 'assistant'; content: string };

const portfolioContext = `You are the concise portfolio assistant for Jacob Bernard, a frontend developer and UI designer with 16 years of technical experience. His featured work includes Furniture & Landscapes, Vintage Barbershop, Beans Place, Clearline professional cleaning, and Lumen Festival. His broader selected project collection also includes Backend & Data Systems, a consolidated classroom case study covering React interfaces, Express REST APIs, MySQL, MongoDB, authentication concepts, transactions, reporting, and relational database fundamentals. Help visitors understand his projects, frontend/UI capabilities, complementary backend and database coursework, and how to contact him. Do not imply that the Backend & Data Systems coursework is featured work, professional backend engineering, a production-ready system, or a live deployment. Do not imply that his other featured projects use MySQL. Never invent employers, credentials, project results, availability, pricing, or personal details. When information is unavailable, say so and recommend the Contact me form. Keep answers friendly, professional, and under 120 words.`;

export async function POST(request: Request) {
  if (!process.env.OPENAI_API_KEY) {
    return NextResponse.json(
      { error: 'AI chat is not configured yet. Please use Contact me.' },
      { status: 503 },
    );
  }

  try {
    const body = (await request.json()) as { messages?: IncomingMessage[] };
    const messages = Array.isArray(body.messages)
      ? body.messages
          .filter(
            (message) =>
              (message.role === 'user' || message.role === 'assistant') &&
              typeof message.content === 'string',
          )
          .slice(-10)
          .map((message) => ({
            role: message.role,
            content: message.content.trim().slice(0, 500),
          }))
          .filter((message) => message.content)
      : [];

    if (!messages.length || messages.at(-1)?.role !== 'user') {
      return NextResponse.json(
        { error: 'Please enter a question.' },
        { status: 400 },
      );
    }

    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    const completion = await openai.chat.completions.create({
      model: process.env.OPENAI_CHAT_MODEL || 'gpt-4.1-mini',
      messages: [{ role: 'system', content: portfolioContext }, ...messages],
      max_tokens: 220,
    });

    return NextResponse.json({
      message:
        completion.choices[0]?.message?.content ||
        'Please use Contact me for that question.',
    });
  } catch {
    return NextResponse.json(
      { error: 'AI chat is temporarily unavailable. Please use Contact me.' },
      { status: 500 },
    );
  }
}
