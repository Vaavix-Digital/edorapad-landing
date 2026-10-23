/**
 * The web app (login, sign-up, checkout, dashboards) lives on its own domain;
 * this landing site only links to it. Set NEXT_PUBLIC_APP_URL locally
 * (e.g. http://localhost:3000); production falls back to the live app.
 */
export const APP_URL = (process.env.NEXT_PUBLIC_APP_URL || 'https://www.app.edorapad.com').replace(/\/+$/, '');

export const appUrl = (path = '/') => `${APP_URL}${path.startsWith('/') ? path : `/${path}`}`;

/**
 * Mobile store listings. Set NEXT_PUBLIC_PLAY_STORE_URL / NEXT_PUBLIC_APP_STORE_URL
 * to the real listing URLs; until then these fall back to a store search.
 */
export const PLAY_STORE_URL = process.env.NEXT_PUBLIC_PLAY_STORE_URL || 'https://play.google.com/store/apps/details?id=com.edorapad.app';
export const APP_STORE_URL = process.env.NEXT_PUBLIC_APP_STORE_URL || 'https://apps.apple.com/';
