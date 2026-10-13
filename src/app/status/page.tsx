import React from 'react';
import Link from 'next/link';
import { APP_URL } from '@/lib/appUrl';

export const metadata = {
  title: "System Status | Edorapad",
  description: "Live status of Edorapad services.",
};

// Checked on the server when the page is requested, at most once a minute.
export const revalidate = 60;

const BACKEND_URL = (process.env.BACKEND_URL || 'https://server.edorapad.com').replace(/\/+$/, '');

type Check = { name: string; url: string; ok: (response: Response) => Promise<boolean> };

const checks: Check[] = [
  {
    name: "API Server",
    url: `${BACKEND_URL}/`,
    ok: async (response) => response.ok && (await response.json()).success === true,
  },
  {
    name: "Plans & Pricing",
    url: `${BACKEND_URL}/api/pricing/institute`,
    ok: async (response) => response.ok && (await response.json()).success === true,
  },
  {
    name: "Web App",
    url: APP_URL,
    ok: async (response) => response.ok,
  },
];

type Result = { name: string; up: boolean; ms: number | null };

const runCheck = async (check: Check): Promise<Result> => {
  const started = Date.now();
  try {
    const response = await fetch(check.url, { signal: AbortSignal.timeout(8000), cache: 'no-store' });
    const up = await check.ok(response);
    return { name: check.name, up, ms: up ? Date.now() - started : null };
  } catch {
    return { name: check.name, up: false, ms: null };
  }
};

export default async function SystemStatus() {
  const results = await Promise.all(checks.map(runCheck));
  const allUp = results.every((result) => result.up);
  const checkedAt = new Date().toLocaleString('en-GB', { dateStyle: 'medium', timeStyle: 'short', timeZone: 'UTC' });

  return (
    <main className="w-full min-h-screen bg-[#FBFBF9] py-20 px-6 md:px-16 lg:px-24">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 shadow-sm rounded-xl border border-[#111416]/5">

        <div className="mb-10">
          <Link href="/" className="text-sm font-semibold tracking-wide text-[#49A796] hover:text-[#155863] transition-colors">
            ← Back to Home
          </Link>
        </div>

        <header className="mb-10 pb-8 border-b border-[#111416]/10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-[#155863] mb-4 uppercase">
              Live Status
            </p>
            <h1 className="font-heading text-4xl md:text-5xl leading-tight text-[#111416]">
              System Status
            </h1>
          </div>

          <div className={`px-6 py-4 rounded-lg flex items-center gap-4 border ${allUp ? "bg-[#49A796]/10 border-[#49A796]/20" : "bg-red-50 border-red-200"}`}>
            <div className="relative flex h-4 w-4">
              {allUp && <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#49A796] opacity-75"></span>}
              <span className={`relative inline-flex rounded-full h-4 w-4 ${allUp ? "bg-[#49A796]" : "bg-red-500"}`}></span>
            </div>
            <div>
              <p className={`text-sm font-bold ${allUp ? "text-[#155863]" : "text-red-700"}`}>
                {allUp ? "All Systems Operational" : "Some Services Unavailable"}
              </p>
              <p className="text-xs text-[#6B8185]">Checked {checkedAt} UTC</p>
            </div>
          </div>
        </header>

        <section className="mb-12">
          <h2 className="text-xl font-heading text-[#111416] mb-6">Current Services Status</h2>

          <div className="bg-[#FBFBF9] border border-[#111416]/5 rounded-xl overflow-hidden">
            <div className="grid grid-cols-12 gap-4 p-4 border-b border-[#111416]/5 bg-white text-xs font-semibold tracking-wider uppercase text-[#6B8185]">
              <div className="col-span-6 md:col-span-7">Service Name</div>
              <div className="col-span-3 md:col-span-2 text-right">Response</div>
              <div className="col-span-3 md:col-span-3 text-right">Status</div>
            </div>

            <div className="divide-y divide-[#111416]/5">
              {results.map((result) => (
                <div key={result.name} className="grid grid-cols-12 gap-4 p-4 items-center hover:bg-white transition-colors">
                  <div className="col-span-6 md:col-span-7 font-medium text-[#111416]">
                    {result.name}
                  </div>
                  <div className="col-span-3 md:col-span-2 text-right text-sm text-[#6B8185]">
                    {result.ms === null ? "—" : `${result.ms} ms`}
                  </div>
                  <div className="col-span-3 md:col-span-3 flex justify-end">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${result.up ? "bg-[#49A796]/10 text-[#155863]" : "bg-red-50 text-red-700"}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${result.up ? "bg-[#49A796]" : "bg-red-500"}`}></span>
                      {result.up ? "Operational" : "Unavailable"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-heading text-[#111416] mb-6">Something not working?</h2>
          <div className="bg-white border border-[#111416]/5 rounded-xl p-8 text-center">
            <p className="text-[#6B8185] text-sm">
              This page checks our public services each time it is loaded. If something isn&apos;t working for you, email <a href="mailto:support@edorapad.com" className="text-[#49A796] font-medium hover:underline">support@edorapad.com</a>.
            </p>
          </div>
        </section>

      </div>
    </main>
  );
}
