import { NextResponse } from 'next/server';

export async function POST() {
  return NextResponse.json({ status: 'disabled', message: 'Sanity webhook revalidation is disabled.' });
}
