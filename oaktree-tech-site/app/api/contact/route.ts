import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();

  if (!body?.name || !body?.email) {
    return NextResponse.json(
      { message: 'Please provide at least a name and email address.' },
      { status: 400 },
    );
  }

  return NextResponse.json({
    message:
      'Inquiry received. This demo endpoint is ready for deployment, and can be connected to Resend, Formspree, or HubSpot next.',
  });
}
