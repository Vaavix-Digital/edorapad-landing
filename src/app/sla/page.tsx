import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: "Service Level Agreement (SLA) | Edorapad",
  description: "Edorapad Service Level Agreement for Enterprise and Professional tiers.",
};

export default function SLA() {
  return (
    <main className="w-full min-h-screen bg-[#FBFBF9] py-20 px-6 md:px-16 lg:px-24">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 shadow-sm rounded-xl border border-[#111416]/5">
        
        <div className="mb-10">
          <Link href="/" className="text-sm font-semibold tracking-wide text-[#49A796] hover:text-[#155863] transition-colors">
            ← Back to Home
          </Link>
        </div>

        <header className="mb-12 border-b border-[#111416]/10 pb-8">
          <p className="text-xs font-semibold tracking-[0.2em] text-[#155863] mb-4 uppercase">
            Legal & Compliance
          </p>
          <h1 className="font-heading text-4xl md:text-5xl leading-tight text-[#111416] mb-6">
            Service Level Agreement
          </h1>
          <p className="text-[#6B8185] leading-[1.6] text-lg">
            This Service Level Agreement (SLA) defines the availability, reliability, and support commitments for Edorapad's cloud-based educational infrastructure.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 text-sm font-medium text-[#111416]/60">
            <span>Effective Date: September 25, 2026</span>
            <span>•</span>
            <span>Version: 1.0</span>
          </div>
        </header>

        <article className="prose prose-slate max-w-none text-[#4A5568] space-y-8">
          <section>
            <h2 className="text-2xl font-heading text-[#111416] mb-4">1. Uptime Commitment</h2>
            <p>
              Edorapad guarantees a Monthly Uptime Percentage of <strong>99.9%</strong> for our core platform services, including the institute dashboard, attendance ledger, and administrative APIs. Live video classroom streaming is guaranteed at 99.5% due to third-party network dependencies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading text-[#111416] mb-4">2. Incident Response Times</h2>
            <p>
              Our engineering team categorizes incidents into three priority levels. We commit to the following initial response times:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li><strong>P1 (Critical):</strong> Complete system outage preventing core operations. Response within 15 minutes.</li>
              <li><strong>P2 (High):</strong> Major feature malfunction affecting multiple users (e.g., fee collection failure). Response within 2 hours.</li>
              <li><strong>P3 (Normal):</strong> Minor bug or non-critical feature issue. Response within 24 hours.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-heading text-[#111416] mb-4">3. Scheduled Maintenance</h2>
            <p>
              To maintain system architecture integrity, Edorapad requires regular maintenance windows. We will notify administrative users of any scheduled downtime that is expected to last longer than 15 minutes at least 48 hours in advance. Maintenance is typically scheduled during non-peak hours (between 2:00 AM and 5:00 AM UTC).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading text-[#111416] mb-4">4. Data Backup and Recovery</h2>
            <p>
              All institutional data, including ledgers, attendance records, and course timelines, is redundantly backed up across multiple availability zones. Our Recovery Point Objective (RPO) is 1 hour, and our Recovery Time Objective (RTO) is 4 hours in the event of a catastrophic infrastructure failure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading text-[#111416] mb-4">5. Service Credits</h2>
            <p>
              If Edorapad fails to meet the 99.9% Monthly Uptime Percentage, eligible Enterprise customers may request service credits. Credits are calculated as a percentage of the monthly subscription fee for the affected billing cycle:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>&lt; 99.9% to 99.0%: 10% Service Credit</li>
              <li>&lt; 99.0% to 95.0%: 25% Service Credit</li>
              <li>&lt; 95.0%: 50% Service Credit</li>
            </ul>
          </section>

          <div className="bg-[#F5FAF9] border border-[#79CFC0]/30 p-6 rounded-lg mt-12">
            <h3 className="font-heading text-[#155863] text-xl mb-2">Need to report an incident?</h3>
            <p className="text-sm text-[#4A5568]">
              Enterprise customers can access our 24/7 dedicated support portal or contact their designated technical account manager for immediate assistance.
            </p>
          </div>
        </article>

      </div>
    </main>
  );
}
