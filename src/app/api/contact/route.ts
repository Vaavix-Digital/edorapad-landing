import { NextResponse } from 'next/server';

/**
 * Proxies the contact form to the backend (POST {backend}/api/public/contact),
 * so the browser avoids CORS and the backend rate-limits by the visitor's IP.
 */
export async function POST(request: Request) {
  try {
    const forwardedFor = request.headers.get('x-forwarded-for');
    const realIp = request.headers.get('x-real-ip');
    const clientIp = forwardedFor ? forwardedFor.split(',')[0] : (realIp || '');

    const backendUrl = (process.env.BACKEND_URL || 'https://server.edorapad.com').replace(/\/+$/, '');
    const response = await fetch(`${backendUrl}/api/public/contact`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-forwarded-for': clientIp,
        'x-real-ip': clientIp,
      },
      body: JSON.stringify(await request.json()),
      cache: 'no-store',
    });

    // Pass the backend's answer through, so validation messages reach the form.
    return NextResponse.json(await response.json(), { status: response.status });
  } catch (error) {
    console.error("Contact API proxy error:", error);
    return NextResponse.json(
      { success: false, message: "Your message could not be sent right now. Please email us at sales@edorapad.com." },
      { status: 500 }
    );
  }
}
