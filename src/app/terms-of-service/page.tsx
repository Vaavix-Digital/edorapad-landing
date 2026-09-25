import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: "Terms of Service | Edorapad",
  description: "Edorapad Terms of Service and Acceptable Use Policy.",
};

export default function TermsOfService() {
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
            Terms of Service
          </h1>
          <p className="text-[#6B8185] leading-[1.6] text-lg">
            These Terms of Service govern your access to and use of the Edorapad educational management platform, mobile applications, and associated services.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 text-sm font-medium text-[#111416]/60">
            <span>Effective Date: September 24, 2026</span>
            <span>•</span>
            <span>Last Updated: September 24, 2026</span>
            <span>•</span>
            <span>Version: 1.0</span>
          </div>
        </header>

        <article className="prose prose-slate max-w-none text-[#4A5568] space-y-8">
          <section>
            <h2 className="text-2xl font-heading text-[#111416] mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the Edorapad website (<a href="https://edorapad.com" className="text-[#49A796] hover:underline">https://edorapad.com</a>), the web portal (<a href="https://app.edorapad.com" className="text-[#49A796] hover:underline">https://app.edorapad.com</a>), or our mobile applications (collectively, the "Platform"), you agree to be bound by these Terms of Service. If you are accepting these terms on behalf of an educational institution, you represent that you have the authority to bind that institution to these terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading text-[#111416] mb-4">2. Description of Service</h2>
            <p className="mb-4">
              Edorapad is a multi-role educational management ecosystem designed to digitally connect educational institutions, tutors, students, parents, and administrative staff. The Platform provides tools for:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Batch, course, and student lifecycle management</li>
              <li>Live video classrooms and offline attendance tracking</li>
              <li>Fee collection and staff payroll processing</li>
              <li>Academic assessments and automated certificate issuance</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-heading text-[#111416] mb-4">3. User Roles & Responsibilities</h2>
            <p className="mb-4">The Platform designates specific access levels based on Role-Based Access Control (RBAC). You agree to use your designated role strictly for its intended educational or administrative purpose:</p>
            
            <h3 className="text-lg font-bold text-[#111416] mb-2 mt-6">A. Educational Institutions</h3>
            <p>Institutes are responsible for the accuracy of all student and staff data entered into the Platform. Institutions must ensure they have obtained necessary consent from parents/guardians before enrolling minors.</p>
            
            <h3 className="text-lg font-bold text-[#111416] mb-2 mt-6">B. Online & Offline Tutors</h3>
            <p>Tutors are granted access to manage assigned batches, mark attendance, and conduct live or offline classes. Tutors utilizing the web portal consent to the use of camera-based face verification solely for the purpose of secure login and session attendance validation.</p>
            
            <h3 className="text-lg font-bold text-[#111416] mb-2 mt-6">C. Students & Parents</h3>
            <p>Students and Parents are provided access to track academic progress, attend classes, view exam results, and process fee payments. Users must maintain the confidentiality of their login credentials.</p>
          </section>

          <section>
            <h2 className="text-2xl font-heading text-[#111416] mb-4">4. Payment Processing & Fees</h2>
            <p className="mb-4">
              Edorapad integrates with third-party payment gateways (including Razorpay and Stripe) to facilitate the collection of student tuition fees and processing of staff payroll.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Transaction Security:</strong> Edorapad does not store full credit card numbers or banking passwords. All transactions are securely processed by PCI-DSS compliant providers.</li>
              <li><strong>Platform Fees:</strong> Institutions are responsible for any applicable subscription fees to Edorapad. Transaction fees levied by payment gateways during fee collection are subject to the terms of the respective gateway provider.</li>
              <li><strong>Refunds:</strong> Tuition fee disputes or refund requests must be handled directly between the Student/Parent and the Educational Institution. Edorapad is not liable for tuition refunds.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-heading text-[#111416] mb-4">5. Acceptable Use Policy</h2>
            <p className="mb-4">While utilizing the Platform (including live video classrooms and community chat features), you agree not to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Transmit any content that is unlawful, harassing, defamatory, abusive, or explicit.</li>
              <li>Attempt to bypass the Role-Based Access Control (RBAC) or access data belonging to other institutions or users.</li>
              <li>Distribute malware, viruses, or use the Platform for any automated data scraping.</li>
              <li>Share or broadcast copyrighted educational materials without authorization.</li>
            </ul>
            <p className="mt-4">Edorapad reserves the right to suspend or terminate accounts that violate this Acceptable Use Policy.</p>
          </section>

          <section>
            <h2 className="text-2xl font-heading text-[#111416] mb-4">6. Face Verification Technology</h2>
            <p>
              To ensure the integrity of tutor logins and prevent unauthorized access, Edorapad employs camera-based face verification for Tutors and Accounts staff accessing the web portal. By using these roles, you consent to the temporary capture and processing of facial landmarks for identity verification. This data is encrypted, processed locally or securely transmitted, and is never sold to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading text-[#111416] mb-4">7. Intellectual Property</h2>
            <p>
              The Edorapad Platform, including its source code (React.js, React Native, Node.js), UI/UX designs, algorithms, and logos, are the exclusive intellectual property of Edorapad. Educational materials, courses, and certificates uploaded or generated by Institutions and Course Creators remain the property of their respective owners.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading text-[#111416] mb-4">8. Limitation of Liability</h2>
            <p>
              Edorapad provides the Platform on an "as is" and "as available" basis. While we strive for maximum uptime and data integrity (utilizing cloud-hosted MongoDB and secure AWS infrastructure), we do not guarantee uninterrupted service. In no event shall Edorapad be liable for any indirect, incidental, or consequential damages arising from the use of or inability to use the Platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading text-[#111416] mb-4">9. Account Termination</h2>
            <p>
              Users may request account deletion at any time via the in-app Settings menu or by contacting <a href="mailto:privacy@edorapad.com" className="text-[#49A796] hover:underline">privacy@edorapad.com</a>. Edorapad reserves the right to suspend or terminate access for any Institution or User that breaches these Terms of Service or fails to pay applicable subscription fees.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading text-[#111416] mb-4">10. Modifications to Terms</h2>
            <p>
              We may update these Terms of Service periodically to reflect changes in our technology or legal requirements. We will notify Users of significant changes via email or platform notifications. Continued use of the Platform after such updates constitutes acceptance of the revised Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading text-[#111416] mb-4">11. Contact Information</h2>
            <p className="mb-4">For questions regarding these Terms of Service, please contact our support team:</p>
            <div className="bg-[#17343A]/5 p-6 rounded-lg border border-[#17343A]/10">
              <ul className="space-y-1">
                <li>Email: <a href="mailto:support@edorapad.com" className="text-[#49A796] hover:underline">support@edorapad.com</a></li>
                <li>Legal Inquiries: <a href="mailto:privacy@edorapad.com" className="text-[#49A796] hover:underline">privacy@edorapad.com</a></li>
                <li>Website: <a href="https://edorapad.com" className="text-[#49A796] hover:underline">https://edorapad.com</a></li>
              </ul>
            </div>
          </section>
        </article>
      </div>
    </main>
  );
}
