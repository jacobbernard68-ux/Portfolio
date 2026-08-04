import { NextResponse } from 'next/server';

export async function POST() {
  return NextResponse.json({ status: 'disabled', message: 'Registration is disabled.' }, { status: 503 });
}
