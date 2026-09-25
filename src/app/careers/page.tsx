import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: "Careers | Edorapad",
  description: "Join the team at Edorapad and help build the future of education.",
};

const openRoles = [
  {
    title: "Senior Full-Stack Engineer",
    department: "Engineering",
    location: "Remote (Global)",
    type: "Full-time"
  },
  {
    title: "Product Designer (UI/UX)",
    department: "Design",
    location: "Remote (US/Europe)",
    type: "Full-time"
  },
  {
    title: "Enterprise Account Executive",
    department: "Sales",
    location: "New York, NY (Hybrid)",
    type: "Full-time"
  },
  {
    title: "Customer Success Specialist",
    department: "Support",
    location: "Remote (Global)",
    type: "Full-time"
  }
];

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
            At Edorapad, we are engineering the ultimate Educational Operating System. We are looking for passionate, driven individuals to help us synchronize the world's educational institutions.
          </p>
        </header>

        <section className="mb-16">
          <h2 className="text-2xl font-heading text-[#111416] mb-6">Our Culture</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#F5FAF9] p-6 rounded-lg border border-[#155863]/10">
              <h3 className="font-bold text-[#155863] mb-2">Remote-First</h3>
              <p className="text-sm text-[#4A5568]">Work from anywhere. We believe in hiring the best talent, regardless of geography, and providing the tools to succeed asynchronously.</p>
            </div>
            <div className="bg-[#F5FAF9] p-6 rounded-lg border border-[#155863]/10">
              <h3 className="font-bold text-[#155863] mb-2">Continuous Learning</h3>
              <p className="text-sm text-[#4A5568]">We are an education company at heart. We provide a generous annual stipend for courses, books, and professional development.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-heading text-[#111416] mb-6">Open Roles</h2>
          
          <div className="space-y-4">
            {openRoles.map((role, index) => (
              <div key={index} className="group border border-[#111416]/10 rounded-lg p-6 hover:border-[#49A796] hover:shadow-md transition-all duration-300 flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer">
                <div>
                  <h3 className="text-lg font-bold text-[#111416] group-hover:text-[#155863] transition-colors">{role.title}</h3>
                  <div className="flex items-center gap-3 mt-2 text-sm text-[#6B8185]">
                    <span className="font-medium">{role.department}</span>
                    <span>•</span>
                    <span>{role.location}</span>
                    <span>•</span>
                    <span>{role.type}</span>
                  </div>
                </div>
                <div>
                  <span className="inline-flex items-center px-4 py-2 bg-[#111416] text-[#FBFBF9] text-sm font-medium rounded-md group-hover:bg-[#155863] transition-colors">
                    Apply Now
                  </span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center p-8 bg-[#FBFBF9] border border-[#111416]/5 rounded-lg">
            <p className="text-[#6B8185] mb-4">Don't see a role that fits?</p>
            <p className="text-sm text-[#4A5568]">
              Send your resume and a brief intro to <a href="mailto:careers@edorapad.com" className="text-[#49A796] font-medium hover:underline">careers@edorapad.com</a> and we'll keep you in mind for future openings.
            </p>
          </div>
        </section>

      </div>
    </main>
  );
}
