import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: "Privacy Policy | Edorapad",
  description: "Edorapad Privacy & Data Protection Commitment.",
};

export default function PrivacyPolicy() {
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
            Privacy & Data Protection Commitment
          </p>
          <h1 className="font-heading text-4xl md:text-5xl leading-tight text-[#111416] mb-6">
            Edorapad Privacy Policy
          </h1>
          <p className="text-[#6B8185] leading-[1.6] text-lg">
            This document outlines how Edorapad collects, utilizes, stores, and protects personal, academic, and institutional data across our web platform and mobile applications.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 text-sm font-medium text-[#111416]/60">
            <span>Effective Date: September 21, 2026</span>
            <span>•</span>
            <span>Last Updated: September 21, 2026</span>
            <span>•</span>
            <span>Version: 1.0 (Production Release)</span>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="p-6 bg-[#F5FAF9] rounded-lg">
            <h3 className="font-heading text-lg text-[#111416] mb-2">Student & Child Privacy</h3>
            <p className="text-sm text-[#6B8185]">Strict adherence to educational data protection laws (FERPA, COPPA, GDPR-K).</p>
          </div>
          <div className="p-6 bg-[#F5FAF9] rounded-lg">
            <h3 className="font-heading text-lg text-[#111416] mb-2">Zero Data Selling</h3>
            <p className="text-sm text-[#6B8185]">We never sell, rent, or monetize personal information or student academic records.</p>
          </div>
          <div className="p-6 bg-[#F5FAF9] rounded-lg">
            <h3 className="font-heading text-lg text-[#111416] mb-2">End-to-End Encryption</h3>
            <p className="text-sm text-[#6B8185]">TLS 1.3 encryption in transit and AES-256 for secure cloud database storage.</p>
          </div>
          <div className="p-6 bg-[#F5FAF9] rounded-lg">
            <h3 className="font-heading text-lg text-[#111416] mb-2">Account Deletion Rights</h3>
            <p className="text-sm text-[#6B8185]">Complete user control to request account and data deletion in-app or via email.</p>
          </div>
        </div>

        <article className="prose prose-slate max-w-none text-[#4A5568] space-y-8">
          <section>
            <h2 className="text-2xl font-heading text-[#111416] mb-4">1. Introduction & Scope</h2>
            <p>
              Edorapad ("Edorapad", "we", "our", or "us") operates a multi-role educational management platform comprising our website at <a href="https://edorapad.com" className="text-[#49A796] hover:underline">https://edorapad.com</a>, the Edorapad mobile application for Android and iOS devices, and related cloud services (collectively, the "Services").
            </p>
            <p>
              Our platform connects educational institutions, online and offline tutors, students, parents/guardians, and administrative personnel to streamline academic scheduling, attendance tracking, classroom lectures, homework management, tuition fee records, and institutional communications.
            </p>
            <p>
              This Privacy Policy governs the manner in which Edorapad collects, uses, maintains, and discloses information collected from users. By registering an account, downloading the mobile application, or accessing any part of the Services, you acknowledge that you have read and understood this Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading text-[#111416] mb-4">2. Information We Collect</h2>
            <p className="mb-4">We collect information necessary to deliver educational workflows and manage platform integrity across our distinct user roles:</p>
            
            <h3 className="text-lg font-bold text-[#111416] mb-2 mt-6">A. Account & Profile Information</h3>
            <p>When registering or onboarding an account, we collect: full name, email address, password credentials (stored using salted one-way hashes), phone number, profile photo, date of birth, gender, nationality, and user role designation (Student, Parent, Online Tutor, Offline Tutor, Institute Admin, Accounts & Marketing Staff).</p>
            
            <h3 className="text-lg font-bold text-[#111416] mb-2 mt-6">B. Student, Parent & Tutor Information</h3>
            <p>Student enrollment details, student IDs, roll numbers, department and batch assignments, parent-student relationships, guardian contact credentials, tutor academic qualifications, subject specializations, and faculty rosters.</p>
            
            <h3 className="text-lg font-bold text-[#111416] mb-2 mt-6">C. Attendance & Academic Data</h3>
            <p>Class attendance logs, timestamps for online and offline classroom presence, leave requests and approval records, assessment submissions, exam and quiz marks, teacher remarks, certificates earned, and academic performance summaries.</p>
            
            <h3 className="text-lg font-bold text-[#111416] mb-2 mt-6">D. Face Verification Data (Faculties/Tutors)</h3>
            <p>For tutors utilizing optional face verification for lecture clock-in, facial landmarks are captured temporarily to verify identity at the start of a session. Facial geometry templates are processed strictly for verification, are encrypted, and are never sold, licensed, or shared with commercial brokers.</p>
            
            <h3 className="text-lg font-bold text-[#111416] mb-2 mt-6">E. Device & Technical Information</h3>
            <p>Device model, operating system version, screen resolution, IP address, unique device identifiers, network connection status, crash logs, and diagnostic telemetry necessary to maintain app stability and prevent unauthorized multiple-device takeovers.</p>
          </section>

          <section>
            <h2 className="text-2xl font-heading text-[#111416] mb-4">3. How We Use Your Information</h2>
            <p className="mb-4">Edorapad uses collected information strictly for educational, operational, and safety purposes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Core Educational Delivery:</strong> Facilitating live online video classrooms, offline lecture scheduling, batch assignments, and course materials access.</li>
              <li><strong>Attendance & Grade Tracking:</strong> Calculating monthly attendance percentages, compiling report cards, and issuing verified certificates.</li>
              <li><strong>Institutional Administration:</strong> Enabling institutions and faculty to review leave requests, student progress, fee payments, and admissions.</li>
              <li><strong>Parent-Institute Transparency:</strong> Providing parents visibility into their child's attendance, teacher assessments, and pending fee dues.</li>
              <li><strong>Security & Authentication:</strong> Verifying user role permissions (RBAC), defending against brute-force attacks, and preventing unauthorized account sharing.</li>
              <li><strong>Platform Reliability:</strong> Monitoring application health, resolving bugs, and ensuring smooth performance on low-bandwidth networks.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-heading text-[#111416] mb-4">4. Mobile Device Permissions</h2>
            <p className="mb-4">The Edorapad mobile application requests runtime device permissions only when strictly required for explicit features:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Camera Permission:</strong> Used for live video lecture participation, profile photo capture, tutor lecture clock-in verification, and scanning admission verification documents.</li>
              <li><strong>Microphone Permission:</strong> Used exclusively for interactive classroom discussions, student Q&A sessions, and tutor presentations during scheduled live lectures.</li>
              <li><strong>Notifications Permission:</strong> Used to deliver class reminders, live lecture start alerts, fee due dates, exam marks notifications, and urgent institutional broadcasts.</li>
              <li><strong>Secure Storage:</strong> Mobile authentication session tokens are stored in hardware-backed encrypted storage (iOS Keychain and Android Keystore/EncryptedSharedPreferences).</li>
            </ul>
            <p>Users can view, grant, or revoke permissions at any time through their device's Settings menu. Revoking camera or microphone will only disable live streaming functionality while keeping other features active.</p>
          </section>

          <section>
            <h2 className="text-2xl font-heading text-[#111416] mb-4">5. Notifications & Push Tokens</h2>
            <p className="mb-4">When you allow notifications, Edorapad collects a unique push notification device token (such as an Expo Push Token, Apple APNs token, or Google Firebase Cloud Messaging token).</p>
            <p className="mb-4">These tokens are linked to your authenticated user account and are used solely for:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Notifying you when a live lecture is starting or when a class schedule is updated.</li>
              <li>Informing parents of student absence or late check-in.</li>
              <li>Delivering tuition fee payment receipts and due date reminders.</li>
              <li>Announcing exam scores, certificates, and institutional community updates.</li>
            </ul>
            <p>We do not use push tokens for third-party commercial advertisements. You can disable push notifications directly inside the Edorapad application settings or via device settings at any time.</p>
          </section>

          <section>
            <h2 className="text-2xl font-heading text-[#111416] mb-4">6. Payment & Financial Information</h2>
            <p>Edorapad facilitates tuition fee tracking, payment collection receipts, and tutor salary record-keeping.</p>
            <p className="mt-2"><strong>Security of Financial Credentials:</strong> When payments are submitted electronically, transactions are processed directly by certified, PCI-DSS Level 1 compliant payment gateways. Edorapad does not store full credit card numbers, CVVs, or online banking passwords on its servers.</p>
            <p className="mt-2">We store only transaction reference metadata required for accounting audit trails: transaction ID, installment amount, currency, timestamp, payment method type (e.g. Card, UPI, NetBanking), and payment confirmation status.</p>
          </section>

          <section>
            <h2 className="text-2xl font-heading text-[#111416] mb-4">7. Data Sharing & Third-Party Disclosures</h2>
            <p className="mb-4">We respect the privacy of academic and personal records. We do not sell or rent personal information. Data is shared strictly under the following circumstances:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>With Your Enrolled Institution:</strong> Student academic records, attendance history, and course progress are shared directly with the authorized administration and assigned faculty of the student's institution.</li>
              <li><strong>With Verified Parents / Guardians:</strong> Parents linked to a student account can view their child's academic assessments, attendance statistics, fee records, and institutional feedback.</li>
              <li><strong>With Infrastructure Service Providers:</strong> Trusted third-party cloud hosting providers, database providers, push notification services (Expo, Firebase), and payment gateways that process data on our behalf under strict Data Processing Agreements (DPAs).</li>
              <li><strong>Legal Requirements:</strong> When required by applicable law, regulation, subpoena, or enforceable governmental order to protect the rights, property, or safety of students, users, or the public.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-heading text-[#111416] mb-4">8. Children's & Student Privacy (COPPA & FERPA)</h2>
            <p className="mb-4">Edorapad is committed to the protection of young learners. Where students under 13 (or the legal age in their jurisdiction) access the Services:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Student accounts are created either by the educational institution or under the authorization and consent of the student's parent or legal guardian.</li>
              <li>Student personal data is used solely for educational purposes, classroom learning, and institutional administration.</li>
              <li>We do not build advertising profiles or conduct behavioral marketing targeting students of any age.</li>
            </ul>
            <p>Parents and legal guardians have the right to inspect their child's records, request corrections, or request deletion of their child's personal information by contacting their institution or our privacy team.</p>
          </section>

          <section>
            <h2 className="text-2xl font-heading text-[#111416] mb-4">9. Data Retention & Account Deletion Policy</h2>
            <p className="mb-4">We retain personal information for the period necessary to fulfill the educational purposes outlined in this Privacy Policy, unless a longer retention period is required by statutory educational regulations or tax accounting obligations.</p>
            
            <h3 className="text-lg font-bold text-[#111416] mb-2">How to Request Account & Data Deletion</h3>
            <p className="mb-4">Users have the full right to delete their account and associated personal data at any time, in compliance with Google Play Store and Apple App Store policies:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>In-App Deletion:</strong> Navigate to Settings {">"} Profile {">"} Delete Account inside the mobile application or web portal.</li>
              <li><strong>Email Request:</strong> Send an account deletion request to <a href="mailto:privacy@edorapad.com" className="text-[#49A796] hover:underline">privacy@edorapad.com</a> from your registered email address with the subject "Account Deletion Request".</li>
            </ul>
            <p>Upon receipt and verification of your request, your personal profile data, authentication credentials, and active tokens will be permanently removed from our active databases within 30 days. Certain academic records (such as completed course transcripts) may be archived by your enrolled institution as required by educational regulatory laws.</p>
          </section>

          <section>
            <h2 className="text-2xl font-heading text-[#111416] mb-4">10. Data Security & Safeguards</h2>
            <p className="mb-4">We deploy multi-layered physical, technical, and administrative defenses to safeguard your personal data:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Transport Layer Security (TLS):</strong> All communications between mobile clients, browsers, and our backend servers are encrypted using modern TLS 1.3 / HTTPS.</li>
              <li><strong>Database Encryption at Rest:</strong> User tables, credentials, and records stored in cloud databases are protected using AES-256 bit encryption.</li>
              <li><strong>Role-Based Access Control (RBAC):</strong> Strict backend middleware ensures students, parents, tutors, and staff can only access data explicitly permitted for their role.</li>
              <li><strong>Token Protection:</strong> Stateless JWT tokens are signed with rotating cryptographic secrets and securely stored in device-native secure keystores.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-heading text-[#111416] mb-4">11. Your Privacy Rights</h2>
            <p className="mb-4">Depending on your jurisdiction (including GDPR, CCPA, and Indian Digital Personal Data Protection laws), you possess the following rights:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Right to Access:</strong> Request a copy of the personal data Edorapad holds about you.</li>
              <li><strong>Right to Rectification:</strong> Request correction of inaccurate, out-of-date, or incomplete profile details.</li>
              <li><strong>Right to Erasure:</strong> Request deletion of your personal data when it is no longer required for educational or legal duties.</li>
              <li><strong>Right to Restriction of Processing:</strong> Request limits on how your data is handled during active dispute reviews.</li>
              <li><strong>Right to Withdraw Consent:</strong> Revoke granted permissions (camera, microphone, push notifications) at any time.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-heading text-[#111416] mb-4">12. Contact Information & Grievance Officer</h2>
            <p className="mb-4">If you have questions, concerns, or requests regarding this Privacy Policy or our data handling practices, please contact our Data Protection Officer:</p>
            <div className="bg-[#17343A]/5 p-6 rounded-lg border border-[#17343A]/10">
              <p className="font-semibold text-[#111416] mb-2">Edorapad Privacy & Data Protection Team</p>
              <ul className="space-y-1">
                <li>Email: <a href="mailto:privacy@edorapad.com" className="text-[#49A796] hover:underline">privacy@edorapad.com</a></li>
                <li>Support Desk: <a href="mailto:support@edorapad.com" className="text-[#49A796] hover:underline">support@edorapad.com</a></li>
                <li>Official Website: <a href="https://edorapad.com" className="text-[#49A796] hover:underline">https://edorapad.com</a></li>
              </ul>
            </div>
            <p className="mt-4 italic text-sm text-[#6B8185]">We respond to all verified privacy and data deletion inquiries within 30 days of submission.</p>
          </section>
        </article>
      </div>
    </main>
  );
}
