import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    // Extract the client's real IP address from headers so the backend can determine geolocation
    const forwardedFor = request.headers.get('x-forwarded-for');
    const realIp = request.headers.get('x-real-ip');
    const clientIp = forwardedFor ? forwardedFor.split(',')[0] : (realIp || '');

    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type') || 'institute';
    const apiUrl = `https://server.edorapad.com/api/pricing`;

    const response = await fetch(apiUrl, {
      headers: {
        'x-forwarded-for': clientIp,
        'x-real-ip': clientIp,
      },
      // Ensure Next.js doesn't aggressively cache the API response so geolocation works
      cache: 'no-store'
    });

    if (!response.ok) {
      throw new Error(`Backend API responded with status ${response.status}`);
    }

    const json = await response.json();
    
    // The backend now returns a unified response with both institute and courseCreator data.
    // We split it here so the UI components continue receiving exactly what they expect.
    if (json.success && json.data) {
      const { country, countrySource, currency, fx, institute, courseCreator } = json.data;
      
      const specificData = (type === 'courseCreator' || type === 'marketplace' || type === 'creator') ? courseCreator : institute;
      
      return NextResponse.json({
        success: true,
        data: {
          country,
          countrySource,
          currency,
          fx,
          ...specificData
        }
      });
    }

    return NextResponse.json(json);
  } catch (error) {
    console.error("Pricing API proxy error:", error);
    return NextResponse.json({ success: false, error: "Failed to fetch pricing data" }, { status: 500 });
  }
}
