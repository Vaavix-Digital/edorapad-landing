import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: "About Us | Edorapad",
  description: "Learn about the mission and vision behind the Edorapad educational management platform.",
};

export default function AboutUs() {
  return (
    <main className="w-full min-h-screen bg-[#FBFBF9] py-20 px-6 md:px-16 lg:px-24">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 shadow-sm rounded-xl border border-[#111416]/5">
        
        <div className="mb-10">
          <Link href="/" className="text-sm font-semibold tracking-wide text-[#49A796] hover:text-[#155863] transition-colors">
            ← Back to Home
          </Link>
        </div>

        <header className="mb-16 border-b border-[#111416]/10 pb-12">
          <p className="text-xs font-semibold tracking-[0.2em] text-[#155863] mb-4 uppercase">
            Our Mission
          </p>
          <h1 className="font-heading text-4xl md:text-[3.5rem] leading-[1.05] text-[#111416] mb-8">
            Eliminating fragmentation in educational operations.
          </h1>
          <p className="text-[#6B8185] leading-[1.6] text-xl max-w-2xl">
            Edorapad is a multi-role, all-in-one educational management platform built to replace paper-based and manual processes with an intelligent, real-time digital ecosystem.
          </p>
        </header>

        <article className="prose prose-slate max-w-none text-[#4A5568]">
          <section className="mb-16">
            <h2 className="text-2xl font-heading text-[#111416] mb-6">The Edorapad Vision</h2>
            <p className="text-lg mb-4">
              For too long, educational institutions have been forced to rely on a scattered mix of disconnected tools: one software for live classes, another for fee collection, spreadsheets for attendance, and disparate chat apps for communication. 
            </p>
            <p className="text-lg">
              We built <strong>Edorapad</strong> to digitally connect educational institutions, tutors, students, parents, and administrative staff onto a single, unified system of record. Whether accessing our responsive web portal or our native mobile applications for iOS and Android, every user experiences a synchronized platform designed specifically for their role.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-heading text-[#111416] mb-8">Empowering Every Role</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-[#F5FAF9] p-8 rounded-xl border border-[#155863]/10">
                <h3 className="font-heading text-xl text-[#111416] mb-3">Institutions & Admin</h3>
                <p className="text-[#6B8185] leading-[1.6]">Manage students, courses, batches, staff, attendance, fee collection, leaves, admissions, and payroll from a centralized command center.</p>
              </div>
              <div className="bg-[#F5FAF9] p-8 rounded-xl border border-[#155863]/10">
                <h3 className="font-heading text-xl text-[#111416] mb-3">Educators & Tutors</h3>
                <p className="text-[#6B8185] leading-[1.6]">Schedule live video classes, manage assigned batches, track attendance, and seamlessly manage tasks—whether teaching online or in physical classrooms.</p>
              </div>
              <div className="bg-[#F5FAF9] p-8 rounded-xl border border-[#155863]/10">
                <h3 className="font-heading text-xl text-[#111416] mb-3">Students</h3>
                <p className="text-[#6B8185] leading-[1.6]">Attend live video lectures, track academic progress, view and pay tuition fees, earn certificates, and engage with peers in community chat groups.</p>
              </div>
              <div className="bg-[#F5FAF9] p-8 rounded-xl border border-[#155863]/10">
                <h3 className="font-heading text-xl text-[#111416] mb-3">Parents & Guardians</h3>
                <p className="text-[#6B8185] leading-[1.6]">Monitor your child's attendance in real-time, review exam results, track the class schedule, and receive instant institutional notifications.</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-heading text-[#111416] mb-6">Security & Technology</h2>
            <p className="text-lg mb-6">
              Education requires absolute trust. That's why Edorapad is engineered using modern, secure technologies including TLS 1.3 encryption, scalable cloud databases, and PCI-DSS compliant payment gateways like Razorpay and Stripe. 
            </p>
            <p className="text-lg">
              We've also pioneered the integration of <strong>camera-based face verification</strong> for tutor and staff logins, ensuring that classroom attendance and payroll metrics are tamper-proof and cryptographically secure.
            </p>
          </section>

        </article>
      </div>
    </main>
  );
}
