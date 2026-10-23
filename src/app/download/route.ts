import { NextResponse } from 'next/server';
import { APP_STORE_URL, PLAY_STORE_URL } from '@/lib/appUrl';

export async function GET(request: Request) {
  const userAgent = request.headers.get('user-agent') || '';
  
  // Detect Apple devices: iPhone, iPad, iPod, Mac, macOS, Darwin, Safari on Apple
  const isApple = /iPad|iPhone|iPod|Macintosh|Mac OS X|MacIntel|Darwin/i.test(userAgent);

  // Apple devices navigate to Apple App Store; Windows, Android, and others navigate to Google Play Store
  const targetUrl = isApple ? APP_STORE_URL : PLAY_STORE_URL;

  return NextResponse.redirect(targetUrl, 307);
}
