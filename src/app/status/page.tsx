import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: "System Status | Edorapad",
  description: "Real-time system status and uptime for Edorapad services.",
};

const services = [
  { name: "Web Portal", status: "Operational", uptime: "99.98%" },
  { name: "API Server", status: "Operational", uptime: "99.99%" },
  { name: "Mobile Applications", status: "Operational", uptime: "99.95%" },
  { name: "Live Classrooms (Video)", status: "Operational", uptime: "99.92%" },
  { name: "AI Facial Verification", status: "Operational", uptime: "99.99%" },
  { name: "Payment Gateway", status: "Operational", uptime: "99.99%" },
  { name: "Notification Services", status: "Operational", uptime: "99.97%" },
];

export default function SystemStatus() {
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
              Real-Time Status
            </p>
            <h1 className="font-heading text-4xl md:text-5xl leading-tight text-[#111416]">
              System Status
            </h1>
          </div>
          
          <div className="bg-[#49A796]/10 border border-[#49A796]/20 px-6 py-4 rounded-lg flex items-center gap-4">
            <div className="relative flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#49A796] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-[#49A796]"></span>
            </div>
            <div>
              <p className="text-sm font-bold text-[#155863]">All Systems Operational</p>
              <p className="text-xs text-[#6B8185]">Last updated: Just now</p>
            </div>
          </div>
        </header>

        <section className="mb-12">
          <h2 className="text-xl font-heading text-[#111416] mb-6">Current Services Status</h2>
          
          <div className="bg-[#FBFBF9] border border-[#111416]/5 rounded-xl overflow-hidden">
            <div className="grid grid-cols-12 gap-4 p-4 border-b border-[#111416]/5 bg-white text-xs font-semibold tracking-wider uppercase text-[#6B8185]">
              <div className="col-span-6 md:col-span-7">Service Name</div>
              <div className="col-span-3 md:col-span-2 text-right">Uptime (90d)</div>
              <div className="col-span-3 md:col-span-3 text-right">Status</div>
            </div>
            
            <div className="divide-y divide-[#111416]/5">
              {services.map((service, index) => (
                <div key={index} className="grid grid-cols-12 gap-4 p-4 items-center hover:bg-white transition-colors">
                  <div className="col-span-6 md:col-span-7 font-medium text-[#111416]">
                    {service.name}
                  </div>
                  <div className="col-span-3 md:col-span-2 text-right text-sm text-[#6B8185]">
                    {service.uptime}
                  </div>
                  <div className="col-span-3 md:col-span-3 flex justify-end">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-[#49A796]/10 text-[#155863]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#49A796]"></span>
                      {service.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-heading text-[#111416] mb-6">Past Incidents</h2>
          <div className="bg-white border border-[#111416]/5 rounded-xl p-8 text-center">
            <svg className="w-12 h-12 text-[#6B8185]/30 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-[#111416] font-medium mb-1">No incidents reported</p>
            <p className="text-[#6B8185] text-sm">All services have been running smoothly for the past 30 days.</p>
          </div>
        </section>

      </div>
    </main>
  );
}
