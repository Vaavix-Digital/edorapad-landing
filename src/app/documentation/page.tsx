import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: "Documentation | Edorapad",
  description: "Edorapad project and product documentation for the Educational Operating System.",
};

export default function Documentation() {
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
            Resources & Guides
          </p>
          <h1 className="font-heading text-4xl md:text-5xl leading-tight text-[#111416] mb-6">
            Project & Product Documentation
          </h1>
          <p className="text-[#6B8185] leading-[1.6] text-lg">
            Platform Version 1.0 | Web + iOS & Android
          </p>
        </header>

        <article className="prose prose-slate max-w-none text-[#4A5568] space-y-10">
          
          <section>
            <h2 className="text-2xl font-heading text-[#111416] mb-4 border-b border-[#111416]/10 pb-2">1. Executive Summary</h2>
            <p>
              Edorapad is an all-in-one Educational Operating System (EdTech ERP & Learning Platform) designed to bring educational institutions, faculty, students, parents, financial/marketing teams, course creators, and platform administrators into one synchronized platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading text-[#111416] mb-4 border-b border-[#111416]/10 pb-2">2. Core Value Propositions</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>All-in-One Educational ERP</strong> — LMS, live classrooms, attendance, admissions, fee collection, and payroll.</li>
              <li><strong>AI Facial Verification Clock-In</strong> — camera-based faculty attendance authentication.</li>
              <li><strong>Hybrid Learning</strong> — support for both physical and online classes.</li>
              <li><strong>Parental Transparency</strong> — attendance, grades, homework, fees, and alerts.</li>
              <li><strong>Integrated Financial Suite</strong> — installment tracking, receipts, reminders, and payroll.</li>
              <li><strong>Cross-Platform Sync</strong> — Android, iOS, and responsive web access.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-heading text-[#111416] mb-4 border-b border-[#111416]/10 pb-2">3. Main Portals</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
              <div>
                <h3 className="font-heading text-lg text-[#155863] mb-2">Institute Management Portal</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Executive dashboard and enrollment/revenue statistics</li>
                  <li>Department, course, batch, timetable, admissions, and staff management</li>
                  <li>Attendance, leave, certificates, and campus broadcasts</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-heading text-lg text-[#155863] mb-2">Tutor & Educator Portal</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Teaching schedule and classroom management</li>
                  <li>Facial verification check-in and attendance</li>
                  <li>Live classes, assessments, tasks, leave requests, and payroll settings</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-heading text-lg text-[#155863] mb-2">Student Portal & Mobile App</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Learning dashboard and study progress</li>
                  <li>Live/recorded lectures, assignments, exams, attendance</li>
                  <li>Fee center, certificates, referrals, and community learning</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-heading text-lg text-[#155863] mb-2">Parent & Guardian Portal</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Multi-child switching</li>
                  <li>Attendance and academic monitoring</li>
                  <li>Fee payments, due alerts, notifications, and teacher communication</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-heading text-lg text-[#155863] mb-2">Accounts & Marketing Portal</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Financial analytics and fee collection trends</li>
                  <li>Dues recovery and payment reminders</li>
                  <li>Payment history, payroll, marketing campaigns, and lead tracking</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-heading text-lg text-[#155863] mb-2">Course Creator Marketplace</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Curriculum builder</li>
                  <li>Pricing, discounts, reviews, payouts, and royalties</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6">
              <h3 className="font-heading text-lg text-[#155863] mb-2">Super Admin & Platform Operations</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Institution onboarding</li>
                <li>Course moderation and quality control</li>
                <li>Global revenue, payouts, system health, and audit logs</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-heading text-[#111416] mb-4 border-b border-[#111416]/10 pb-2">4. Technology & Security</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Web:</strong> React 19 + Vite</li>
              <li><strong>Mobile:</strong> React Native + Expo 57</li>
              <li><strong>Backend/API:</strong> Node.js / Express</li>
              <li><strong>Data protection:</strong> TLS 1.3 in transit and AES-256 at rest</li>
              <li><strong>Mobile security:</strong> iOS Keychain and Android SecureStore</li>
              <li><strong>Real-time delivery:</strong> WebSockets / Socket.io, Expo Push, FCM, and APNs</li>
              <li><strong>Compliance-ready architecture:</strong> FERPA, COPPA, and GDPR-K</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-heading text-[#111416] mb-4 border-b border-[#111416]/10 pb-2">5. Marketing Messaging</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>School Principals & Institute Owners:</strong> Run Your Entire Institution on One Unified Platform.</li>
              <li><strong>Tutors & Coaching Academies:</strong> Teach Without Boundaries — Online, Offline, or Hybrid.</li>
              <li><strong>Parents:</strong> Never Miss a Beat in Your Child's Education.</li>
              <li><strong>Students:</strong> Your Entire Academic World in Your Pocket.</li>
            </ul>
          </section>

          <section className="bg-[#F5FAF9] p-6 rounded-lg border border-[#155863]/10">
            <h2 className="text-2xl font-heading text-[#111416] mb-4">6. Official Links</h2>
            <div className="flex flex-col space-y-3">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                <span className="font-semibold text-[#155863]">Live Web Application</span>
                <a href="https://www.app.edorapad.com/" target="_blank" rel="noopener noreferrer" className="text-[#49A796] hover:underline break-all">https://www.app.edorapad.com/</a>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                <span className="font-semibold text-[#155863]">Official Privacy Policy</span>
                <a href="https://www.app.edorapad.com/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-[#49A796] hover:underline break-all">https://www.app.edorapad.com/privacy-policy</a>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                <span className="font-semibold text-[#155863]">Backend API Host</span>
                <a href="https://server.edorapad.com/" target="_blank" rel="noopener noreferrer" className="text-[#49A796] hover:underline break-all">https://server.edorapad.com/</a>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                <span className="font-semibold text-[#155863]">Mobile App Identifier</span>
                <span className="font-mono text-sm bg-[#111416]/5 px-2 py-1 rounded">com.edorapad.app</span>
              </div>
            </div>
          </section>

        </article>

      </div>
    </main>
  );
}
