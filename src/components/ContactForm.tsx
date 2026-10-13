"use client";

import { useState, type FormEvent } from 'react';
import Link from 'next/link';

const inputCls = "w-full px-4 py-3 bg-[#FBFBF9] border border-[#111416]/10 rounded-md focus:outline-none focus:border-[#49A796] focus:ring-1 focus:ring-[#49A796] transition-colors";
const labelCls = "block text-sm font-medium text-[#111416] mb-2";

type Status = { state: 'idle' | 'sending' } | { state: 'sent' | 'error'; message: string };

/** Contact form; messages are emailed to the team via /api/contact. */
export default function ContactForm() {
  const [status, setStatus] = useState<Status>({ state: 'idle' });

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus({ state: 'sending' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      const result = await response.json();
      if (response.ok && result.success) {
        form.reset();
        setStatus({ state: 'sent', message: result.message });
      } else {
        setStatus({ state: 'error', message: result.message || 'Your message could not be sent. Please try again.' });
      }
    } catch {
      setStatus({ state: 'error', message: 'Your message could not be sent. Please email us at sales@edorapad.com.' });
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="firstName" className={labelCls}>First Name</label>
          <input type="text" id="firstName" name="firstName" required maxLength={80} className={inputCls} placeholder="Jane" />
        </div>
        <div>
          <label htmlFor="lastName" className={labelCls}>Last Name</label>
          <input type="text" id="lastName" name="lastName" maxLength={80} className={inputCls} placeholder="Doe" />
        </div>
      </div>

      <div>
        <label htmlFor="email" className={labelCls}>Work Email</label>
        <input type="email" id="email" name="email" required maxLength={160} className={inputCls} placeholder="jane@institution.edu" />
      </div>

      <div>
        <label htmlFor="institution" className={labelCls}>Institution / Company Name</label>
        <input type="text" id="institution" name="institution" maxLength={160} className={inputCls} placeholder="Global Academy" />
      </div>

      <div>
        <label htmlFor="message" className={labelCls}>How can we help?</label>
        <textarea id="message" name="message" required maxLength={3000} rows={4} className={`${inputCls} resize-none`} placeholder="Tell us about your requirements..."></textarea>
      </div>

      {/* Hidden from people; bots that fill it are ignored by the backend. */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

      <button
        type="submit"
        disabled={status.state === 'sending'}
        className="w-full py-4 bg-[#155863] text-white font-medium rounded-md hover:bg-[#49A796] transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status.state === 'sending' ? 'Sending…' : 'Send Message'}
      </button>

      {(status.state === 'sent' || status.state === 'error') && (
        <p role="status" className={`text-sm text-center ${status.state === 'sent' ? 'text-[#155863]' : 'text-red-600'}`}>
          {status.message}
        </p>
      )}

      <p className="text-xs text-[#6B8185] text-center mt-4">
        By submitting this form, you agree to our <Link href="/privacy-policy" className="underline hover:text-[#111416]">Privacy Policy</Link>.
      </p>
    </form>
  );
}
