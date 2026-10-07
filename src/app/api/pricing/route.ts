import { NextResponse } from 'next/server';

/**
 * Proxies the backend's pricing so the browser avoids CORS and the backend
 * still sees the visitor's IP for country detection.
 *
 *   /api/pricing                   → GET {backend}/api/pricing/institute
 *   /api/pricing?type=courseCreator → GET {backend}/api/pricing/course-creator
 *
 * Institutes and course creators have separate plans, each from its own endpoint.
 */
const CREATOR_TYPES = ['courseCreator', 'course-creator', 'creator', 'marketplace'];

export async function GET(request: Request) {
  try {
    const forwardedFor = request.headers.get('x-forwarded-for');
    const realIp = request.headers.get('x-real-ip');
    const clientIp = forwardedFor ? forwardedFor.split(',')[0] : (realIp || '');

    const { searchParams } = new URL(request.url);
    const isCreator = CREATOR_TYPES.includes(searchParams.get('type') || '');

    // Same backend the web app uses, so the landing price matches the checkout price.
    const backendUrl = (process.env.BACKEND_URL || 'https://server.edorapad.com').replace(/\/+$/, '');
    const apiUrl = `${backendUrl}/api/pricing/${isCreator ? 'course-creator' : 'institute'}`;

    const response = await fetch(apiUrl, {
      headers: {
        'x-forwarded-for': clientIp,
        'x-real-ip': clientIp,
      },
      // No caching, so prices follow the visitor's country.
      cache: 'no-store'
    });

    if (!response.ok) {
      throw new Error(`Backend API responded with status ${response.status}`);
    }

    return NextResponse.json(await response.json());
  } catch (error) {
    console.error("Pricing API proxy error:", error);
    return NextResponse.json({ success: false, error: "Failed to fetch pricing data" }, { status: 500 });
  }
}
