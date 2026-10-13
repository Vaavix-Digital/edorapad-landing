import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: "Careers | Edorapad",
  description: "Join the team at Edorapad and help build the future of education.",
};

export default function Careers() {
  return (
    <main className="w-full min-h-screen bg-[#FBFBF9] py-20 px-6 md:px-16 lg:px-24">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 shadow-sm rounded-xl border border-[#111416]/5">

        <div className="mb-10">
          <Link href="/" className="text-sm font-semibold tracking-wide text-[#49A796] hover:text-[#155863] transition-colors">
            ← Back to Home
          </Link>
        </div>

        <header className="mb-16 pb-8 border-b border-[#111416]/10 text-center">
          <p className="text-xs font-semibold tracking-[0.2em] text-[#155863] mb-4 uppercase">
            Join the Mission
          </p>
          <h1 className="font-heading text-4xl md:text-5xl leading-tight text-[#111416] mb-6">
            Build the Future of Education
          </h1>
          <p className="text-[#6B8185] leading-[1.6] text-lg max-w-2xl mx-auto">
            At Edorapad, we are building an Educational Operating System that brings institutes, tutors, students, and parents onto one connected platform. If that is work you would like to be part of, we would like to hear from you.
          </p>
        </header>

        <section>
          <h2 className="text-2xl font-heading text-[#111416] mb-6">Open Roles</h2>

          <div className="text-center p-8 bg-[#FBFBF9] border border-[#111416]/5 rounded-lg">
            <p className="text-[#111416] font-medium mb-3">We don&apos;t have any open roles listed right now.</p>
            <p className="text-sm text-[#4A5568]">
              We are always glad to meet people who care about education. Send your resume and a brief intro to <a href="mailto:careers@edorapad.com" className="text-[#49A796] font-medium hover:underline">careers@edorapad.com</a> and we&apos;ll get in touch when a role opens up that fits.
            </p>
          </div>
        </section>

      </div>
    </main>
  );
}
