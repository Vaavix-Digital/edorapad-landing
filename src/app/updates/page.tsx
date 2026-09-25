import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: "Product Updates | Edorapad",
  description: "Latest news, features, and platform updates from Edorapad.",
};

const updates = [
  {
    version: "v1.1.0",
    date: "September 24, 2026",
    title: "AI Facial Verification Clock-In",
    category: "Feature",
    description: "We are thrilled to introduce AI Facial Verification for faculty and staff attendance. This feature eliminates manual clock-ins and buddy punching by utilizing a highly secure, privacy-compliant facial recognition engine directly from the Edorapad mobile app.",
    changes: [
      "Added biometric registration flow for faculty.",
      "Introduced geo-fenced check-in boundaries.",
      "Real-time attendance syncing to the Institute Dashboard."
    ]
  },
  {
    version: "v1.0.5",
    date: "September 15, 2026",
    title: "Enhanced Fee Collection Gateway",
    category: "Improvement",
    description: "Our integrated financial suite has been overhauled to support split payments, automated late fee calculation, and direct deposit setups for payroll. Parents will now receive WhatsApp and push notification reminders 3 days before dues.",
    changes: [
      "Added multi-installment tracking.",
      "New automated notification engine for pending dues.",
      "Export financial ledgers directly to CSV/PDF."
    ]
  },
  {
    version: "v1.0.0",
    date: "September 1, 2026",
    title: "Edorapad Platform Launch",
    category: "Release",
    description: "Welcome to Edorapad 1.0. Our all-in-one Educational Operating System is now officially live for Web, iOS, and Android. Experience a truly synchronized platform for institutes, educators, students, and parents.",
    changes: [
      "Institute Management Portal goes live.",
      "Student & Parent mobile apps available on App Store and Google Play.",
      "Live hybrid classroom infrastructure deployed."
    ]
  }
];

export default function Updates() {
  return (
    <main className="w-full min-h-screen bg-[#FBFBF9] py-20 px-6 md:px-16 lg:px-24">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 shadow-sm rounded-xl border border-[#111416]/5">
        
        <div className="mb-10">
          <Link href="/" className="text-sm font-semibold tracking-wide text-[#49A796] hover:text-[#155863] transition-colors">
            ← Back to Home
          </Link>
        </div>

        <header className="mb-16 pb-8 border-b border-[#111416]/10">
          <p className="text-xs font-semibold tracking-[0.2em] text-[#155863] mb-4 uppercase">
            Changelog
          </p>
          <h1 className="font-heading text-4xl md:text-5xl leading-tight text-[#111416] mb-6">
            Product Updates
          </h1>
          <p className="text-[#6B8185] leading-[1.6] text-lg max-w-2xl">
            Discover the latest features, improvements, and bug fixes to the Edorapad platform. We are constantly evolving to provide the best educational operating system.
          </p>
        </header>

        <div className="space-y-16">
          {updates.map((update, index) => (
            <article key={index} className="relative pl-6 md:pl-10 border-l border-[#111416]/10">
              {/* Timeline dot */}
              <div className="absolute top-0 -left-1.5 w-3 h-3 rounded-full bg-[#49A796] ring-4 ring-white"></div>
              
              <div className="flex flex-col md:flex-row md:items-center gap-3 mb-4">
                <h2 className="text-2xl font-heading text-[#111416]">{update.title}</h2>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 text-xs font-semibold rounded-md bg-[#111416]/5 text-[#111416]/70">
                    {update.version}
                  </span>
                  <span className={`px-2.5 py-1 text-xs font-semibold rounded-md ${
                    update.category === 'Release' ? 'bg-blue-50 text-blue-700' :
                    update.category === 'Feature' ? 'bg-green-50 text-green-700' :
                    'bg-purple-50 text-purple-700'
                  }`}>
                    {update.category}
                  </span>
                </div>
              </div>
              
              <p className="text-sm font-medium text-[#6B8185] mb-6">{update.date}</p>
              
              <p className="text-[#4A5568] leading-relaxed mb-6">
                {update.description}
              </p>
              
              <div className="bg-[#F5FAF9] p-5 rounded-lg border border-[#155863]/10">
                <h3 className="text-sm font-bold text-[#155863] mb-3 uppercase tracking-wider">What's New</h3>
                <ul className="list-disc pl-5 space-y-2 text-[#4A5568] text-sm">
                  {update.changes.map((change, i) => (
                    <li key={i}>{change}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

      </div>
    </main>
  );
}
