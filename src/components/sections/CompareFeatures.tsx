"use client";

import React from 'react';
import { motion } from 'framer-motion';

const features = [
  { category: "Platform", items: [
    { name: "Institute, student, parent & tutor portals", starter: true, growth: true, institution: true, enterprise: true },
    { name: "Web + iOS & Android apps", starter: true, growth: true, institution: true, enterprise: true },
    { name: "Mobile attendance marking", starter: true, growth: true, institution: true, enterprise: true },
  ]},
  { category: "Learning", items: [
    { name: "Basic LMS & course builder", starter: true, growth: true, institution: true, enterprise: true },
    { name: "Live classes & hybrid learning", starter: false, growth: true, institution: true, enterprise: true },
    { name: "Custom certificates", starter: false, growth: false, institution: true, enterprise: true },
    { name: "Course creator marketplace (5% rate)", starter: false, growth: false, institution: true, enterprise: true },
  ]},
  { category: "Operations", items: [
    { name: "Fee collection & installments", starter: true, growth: true, institution: true, enterprise: true },
    { name: "AI facial-verification clock-in", starter: false, growth: true, institution: true, enterprise: true },
    { name: "Payroll & HR", starter: false, growth: true, institution: true, enterprise: true },
    { name: "Marketing & lead tracking", starter: false, growth: true, institution: true, enterprise: true },
  ]},
  { category: "Scale", items: [
    { name: "Student cap", starter: "200", growth: "1,000", institution: "5,000", enterprise: "Unlimited" },
    { name: "Multi-branch support", starter: false, growth: false, institution: true, enterprise: true },
    { name: "Advanced institutional analytics", starter: false, growth: false, institution: true, enterprise: true },
    { name: "White-label platform", starter: false, growth: false, institution: false, enterprise: true },
    { name: "Full API access & SSO", starter: false, growth: false, institution: false, enterprise: true },
  ]},
  { category: "Support", items: [
    { name: "Standard support", starter: true, growth: true, institution: true, enterprise: true },
    { name: "Priority processing queue", starter: false, growth: true, institution: true, enterprise: true },
    { name: "Dedicated onboarding & migration", starter: false, growth: false, institution: true, enterprise: true },
    { name: "SLA-backed account manager", starter: false, growth: false, institution: false, enterprise: true },
  ]},
];

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check w-4 h-4 text-[#49A796] mx-auto">
    <path d="M20 6 9 17l-5-5"></path>
  </svg>
);

const MinusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-minus w-4 h-4 text-[#17343A]/25 mx-auto">
    <path d="M5 12h14"></path>
  </svg>
);

const renderCell = (val: boolean | string) => {
  if (typeof val === 'string') return <span className="text-sm font-medium text-[#111416]">{val}</span>;
  if (val) return <CheckIcon />;
  return <MinusIcon />;
};

export default function CompareFeatures() {
  return (
    <section id="compare-features" className="w-full bg-white pt-12 pb-24 md:pb-36 border-t border-[#17343A]/15">
      <div className="w-full max-w-[120rem] mx-auto px-6 md:px-16 lg:px-24">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mt-10 md:mt-20 max-w-2xl mb-10"
        >
          <p className="text-xs font-semibold tracking-[0.25em] text-[#155863] mb-4 uppercase">
            Compare Every Tier
          </p>
          <h3 className="font-heading text-2xl md:text-[2.5rem] leading-[1.1] tracking-tightest text-[#111416]">
            The Feature Ledger.
          </h3>
          <p className="mt-4 text-[#6B8185] leading-[1.6]">
            No hidden surprises. Detailed side-by-side comparison of every plan feature.
          </p>
        </motion.div>

        {/* Desktop Table */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="hidden lg:block overflow-x-auto border border-[#17343A]/15 rounded-xl bg-white shadow-sm"
        >
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-[#17343A]/15 bg-white">
                <th className="text-left p-5 text-xs font-semibold tracking-[0.15em] uppercase text-[#6B8185] w-[34%]">Feature</th>
                <th className="text-center p-5 text-sm font-heading transition-colors bg-[#17343A]/5 text-[#155863]">Starter</th>
                <th className="text-center p-5 text-sm font-heading transition-colors text-[#155863]">Growth</th>
                <th className="text-center p-5 text-sm font-heading transition-colors text-[#155863]">Institution</th>
                <th className="text-center p-5 text-sm font-heading transition-colors text-[#155863]">Enterprise</th>
              </tr>
            </thead>
            <tbody>
              {features.map((section, sIdx) => (
                <React.Fragment key={sIdx}>
                  <tr>
                    <td colSpan={5} className="bg-[#17343A]/5 px-5 py-3 text-[10px] font-semibold tracking-[0.2em] uppercase text-[#6B8185]">
                      {section.category}
                    </td>
                  </tr>
                  {section.items.map((item, iIdx) => (
                    <tr key={iIdx} className="border-t border-[#17343A]/5 hover:bg-[#F5FAF9]/50 transition-colors">
                      <td className="p-5 text-sm text-[#111416]/85">{item.name}</td>
                      <td className="text-center p-5 bg-[#17343A]/[0.02]">
                        {renderCell(item.starter)}
                      </td>
                      <td className="text-center p-5">
                        {renderCell(item.growth)}
                      </td>
                      <td className="text-center p-5">
                        {renderCell(item.institution)}
                      </td>
                      <td className="text-center p-5">
                        {renderCell(item.enterprise)}
                      </td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Mobile View - simplified as per user HTML */}
        <div className="lg:hidden mt-8">
          <p className="text-sm text-[#6B8185] mb-4 italic">Please view on desktop for the full comparison table.</p>
        </div>

      </div>
    </section>
  );
}
