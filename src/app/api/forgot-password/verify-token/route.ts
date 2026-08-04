import { NextResponse } from 'next/server';

export async function POST() {
  return NextResponse.json({ status: 'disabled', message: 'Password reset verification is disabled.' }, { status: 503 });
}
