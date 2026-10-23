"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { APP_STORE_URL, PLAY_STORE_URL } from '@/lib/appUrl';

const BANNER_STORAGE_KEY = 'edorapad_app_banner_dismissed';

/**
 * Robust detection for all Apple devices (iPhone, iPad, iPod, Mac, Safari)
 */
function checkIsAppleDevice(): boolean {
  if (typeof window === 'undefined') return false;

  const ua = navigator.userAgent || navigator.vendor || (window as any).opera || '';
  const platform = (navigator as any)?.userAgentData?.platform || navigator.platform || '';

  // 1. iOS check: iPhone, iPad, iPod
  if (/iPad|iPhone|iPod/i.test(ua) || /iPad|iPhone|iPod/i.test(platform)) {
    return true;
  }

  // 2. macOS & Mac devices: MacBook, iMac, Mac mini, Mac Studio, Mac Pro
  if (/Macintosh|Mac OS X|MacIntel/i.test(ua) || /Mac/i.test(platform)) {
    return true;
  }

  // 3. iPadOS 13+ desktop-class browsing (reports MacIntel with touch points)
  if (platform === 'MacIntel' && typeof navigator.maxTouchPoints === 'number' && navigator.maxTouchPoints > 0) {
    return true;
  }

  // 4. Apple Safari / Apple WebKit vendor
  if (/Apple/i.test(navigator.vendor || '') && !/Google|Android/i.test(navigator.vendor || '')) {
    return true;
  }

  return false;
}

export default function AppNotificationBanner() {
  const [isMounted, setIsMounted] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [isDismissing, setIsDismissing] = useState(false);
  const [storeUrl, setStoreUrl] = useState(PLAY_STORE_URL);
  const [storeName, setStoreName] = useState<'App Store' | 'Google Play'>('Google Play');

  useEffect(() => {
    // Check if user previously dismissed the banner in this session
    try {
      const dismissed = sessionStorage.getItem(BANNER_STORAGE_KEY);
      if (dismissed === 'true') {
        setIsDismissed(true);
      }
    } catch {
      // Ignore storage restrictions (e.g., incognito)
    }

    // Detect Apple devices vs Windows/Android
    const isApple = checkIsAppleDevice();
    if (isApple) {
      setStoreUrl(APP_STORE_URL);
      setStoreName('App Store');
    } else {
      setStoreUrl(PLAY_STORE_URL);
      setStoreName('Google Play');
    }

    setIsMounted(true);
  }, []);

  const handleDismiss = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDismissing(true);

    try {
      sessionStorage.setItem(BANNER_STORAGE_KEY, 'true');
    } catch {
      // Ignore storage restrictions
    }

    // Allow smooth slide-up animation to complete before removing from DOM
    setTimeout(() => {
      setIsDismissed(true);
    }, 280);
  };

  const handleBannerClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Double check platform dynamically at click time to guarantee accurate destination
    const isApple = checkIsAppleDevice();
    const targetUrl = isApple ? APP_STORE_URL : PLAY_STORE_URL;
    if (e.currentTarget.href !== targetUrl) {
      e.currentTarget.href = targetUrl;
    }
  };

  // Prevent SSR hydration mismatch
  if (!isMounted || isDismissed) {
    return null;
  }

  return (
    <div
      role="banner"
      aria-label="Mobile app notification banner"
      className={`w-full bg-[#F5FAF9] border-b border-[#17343A]/10 transition-all duration-300 ease-in-out overflow-hidden z-40 ${
        isDismissing ? 'max-h-0 opacity-0 -translate-y-2 py-0' : 'max-h-24 opacity-100 translate-y-0'
      }`}
    >
      <div className="container mx-auto px-3 sm:px-6 max-w-6xl flex items-center justify-between gap-2.5 sm:gap-3.5 py-2 sm:py-2.5">
        
        {/* Dismiss 'X' Button */}
        <button
          type="button"
          onClick={handleDismiss}
          aria-label="Dismiss app banner"
          className="p-1 -ml-1 text-[#6B8185] hover:text-[#111416] hover:bg-[#17343A]/5 active:scale-90 rounded-full transition-all shrink-0 cursor-pointer"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {/* Clickable Banner Body */}
        <a
          href={storeUrl}
          onClick={handleBannerClick}
          target="_blank"
          rel="noopener noreferrer"
          title={`Download Edorapad on ${storeName}`}
          className="flex items-center gap-2.5 sm:gap-3.5 flex-1 min-w-0 group cursor-pointer"
        >
          {/* App Icon */}
          <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-[10px] sm:rounded-xl bg-white border border-[#17343A]/10 shadow-xs flex items-center justify-center overflow-hidden shrink-0 p-1 group-hover:scale-105 transition-transform duration-200">
            <Image
              src="/favicon.png"
              alt="Edorapad App Icon"
              width={44}
              height={44}
              className="w-full h-full object-contain rounded-[6px]"
              priority
            />
          </div>

          {/* App Info & Star Ratings */}
          <div className="flex flex-col min-w-0 flex-1 justify-center">
            <div className="flex items-center gap-1.5">
              <span className="font-semibold text-xs sm:text-sm text-[#111416] tracking-tight group-hover:text-[#155863] transition-colors truncate">
                Edorapad App
              </span>
              <span className="hidden sm:inline-block text-[9px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded-sm bg-[#49A796]/15 text-[#155863]">
                Free
              </span>
            </div>

            <p className="text-[11px] sm:text-xs text-[#6B8185] truncate leading-tight mt-0.5">
              ERP, LMS, Attendance & Live Classes on the go!
            </p>

            {/* Rating Stars (4.8 / 5 with 2,904 reviews matching the image) */}
            <div className="flex items-center gap-1 mt-0.5">
              <div className="flex items-center gap-0.5" aria-label="Rating 4.8 out of 5 stars">
                {/* 4 Full Stars */}
                {[...Array(4)].map((_, i) => (
                  <svg key={i} className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#F59E0B] fill-[#F59E0B]" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}

                {/* 1 Half-filled Star */}
                <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3" viewBox="0 0 20 20">
                  <defs>
                    <linearGradient id="halfStarEdorapad">
                      <stop offset="65%" stopColor="#F59E0B" />
                      <stop offset="65%" stopColor="#CBD5E1" />
                    </linearGradient>
                  </defs>
                  <path fill="url(#halfStarEdorapad)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>

              <span className="text-[10px] text-[#6B8185] font-medium leading-none">
                (2,904)
              </span>
            </div>
          </div>

          {/* Action Button: Pill shaped GET Button */}
          <div className="shrink-0 pl-1">
            <span className="inline-flex items-center justify-center px-4 sm:px-5 py-1.5 text-xs sm:text-sm font-bold tracking-wide uppercase text-white bg-[#49A796] group-hover:bg-[#155863] active:scale-95 transition-all duration-200 rounded-full shadow-xs">
              GET
            </span>
          </div>
        </a>

      </div>
    </div>
  );
}
