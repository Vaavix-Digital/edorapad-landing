"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const tabData: Record<string, { heading: string; description: string; features: string[] }> = {
  Institutes: {
    heading: "Run your entire institution from one ledger.",
    description: "Admissions, attendance, fee collection, payroll, multi-branch analytics, and live classrooms — unified into a single system of record your admin team actually trusts.",
    features: [
      "Multi-branch management with consolidated analytics",
      "Automated fee collection, installments & receipts",
      "Payroll, marketing & lead tracking built in",
      "Role-based access for admins, staff & finance teams"
    ]
  },
  Creators: {
    heading: "Build and sell courses on your own terms.",
    description: "Independent tutors and course creators get a marketplace storefront, instant payouts, coupon tools, and marketing — without surrendering your brand or your margins.",
    features: [
      "List and sell courses directly on Edorapad",
      "Payouts every 15 days to your bank account",
      "Custom storefront, coupons & email marketing",
      "Certificates, bulk uploads & advanced analytics"
    ]
  },
  Parents: {
    heading: "Total transparency into your child's progress.",
    description: "Live attendance, grades, homework, fee dues, and instant alerts — so you're never left guessing. One app, every update, full peace of mind.",
    features: [
      "Live attendance & AI-verified clock-in alerts",
      "Grades, homework & report cards in real time",
      "Fee dues, receipts & WhatsApp/SMS reminders",
      "Direct messaging with tutors and the institute"
    ]
  },
  Students: {
    heading: "Your entire classroom in your pocket.",
    description: "Access live and recorded classes, assignments, timetables, results, and fee history from a single app — on Android, iOS, or the web.",
    features: [
      "Live + recorded hybrid classes anywhere",
      "Assignments, timetables & results in one place",
      "Downloadable certificates on completion",
      "Seamless sync across phone, tablet & web"
    ]
  },
  Tutors: {
    heading: "Teach more. Track less.",
    description: "AI facial verification clock-in replaces manual attendance, while smart sync keeps your course material current across every cohort automatically.",
    features: [
      "AI facial-verification attendance clock-in",
      "Auto-syncing course material across cohorts",
      "Student progress, lesson-time & activity scores",
      "Live classroom tools for hybrid teaching"
    ]
  }
};

const tabs = Object.keys(tabData);

export default function Audience() {
  const [activeTab, setActiveTab] = useState("Institutes");
  const content = tabData[activeTab];

  return (
    <section id="audience" className="w-full bg-[#F5FAF9] py-24 md:py-36 border-t border-[#111416]/10">
      <div className="w-full max-w-[120rem] mx-auto px-6 md:px-16 lg:px-24">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-2xl mb-14"
        >
          <p className="text-xs font-semibold tracking-[0.25em] text-[#155863] mb-6 uppercase">
            Built for Every Role
          </p>
          <h2 className="font-heading text-3xl md:text-[3rem] leading-[1.08] tracking-tightest text-[#111416]">
            One Platform. Every Stakeholder.
          </h2>
        </motion.div>
        
        <div className="flex flex-wrap gap-2 md:gap-3 mb-12 border-b border-[#111416]/10 pb-6">
          {tabs.map((tab) => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2.5 text-sm font-medium tracking-wide transition-all duration-300 border ${
                activeTab === tab 
                  ? "bg-[#155863] text-white border-[#155863]" 
                  : "bg-transparent text-[#111416]/70 border-[#111416]/15 hover:border-[#49A796]/40 hover:text-[#49A796]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-10"
          >
            <div className="lg:col-span-6">
              <h3 className="font-heading text-2xl md:text-[2.5rem] leading-[1.1] tracking-tightest text-[#111416]">
                {content.heading}
              </h3>
              <p className="mt-6 text-lg text-[#6B8185] leading-[1.6] max-w-lg">
                {content.description}
              </p>
            </div>
            <div className="lg:col-span-5 lg:col-start-8">
              <ul className="space-y-4">
                {content.features.map((feature, idx) => (
                  <li key={idx} className="flex gap-4 text-[#111416] leading-[1.6] border-b border-[#111416]/10 pb-4">
                    <span className="text-[#49A796] font-semibold shrink-0">—</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
