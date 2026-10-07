import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Hosts the landing page's photos and logo are served from.
    // `new URL(...)` patterns forbid query strings, so the object form is used:
    // Unsplash URLs carry sizing params (?auto=format&fit=crop&w=1200...).
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com', pathname: '/**' },
      { protocol: 'https', hostname: 'static.wixstatic.com', pathname: '/media/**', search: '' },
      { protocol: 'https', hostname: 'media.base44.com', pathname: '/images/**', search: '' },
    ],
  },
};

export default nextConfig;
