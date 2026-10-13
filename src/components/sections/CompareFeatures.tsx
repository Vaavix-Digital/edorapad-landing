"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

/** The slice of `/api/pricing` (institute packages) this table reads. */
interface Package {
  id: string;
  name: string;
  studentCap: number | null;
  features: string[];
}

interface InstitutePricing {
  packages: Package[];
  terms?: { institutionalCreators?: { qualifyingPackages: string[] } };
}

/** How a row is decided for one package: a backend feature code, or a rule. */
type Cell = string | ((pkg: Package, pricing: InstitutePricing) => boolean | string);

const always: Cell = () => true;

const formatCap = (pkg: Package) =>
  pkg.studentCap === null ? 'Unlimited' : new Intl.NumberFormat('en-IN').format(pkg.studentCap);

// Institutes on these plans sell their own courses at the 5% Elite rate
// (CREATOR_TERMS.institutionalCreators in the backend's pricing config).
const marketplaceRate: Cell = (pkg, pricing) => {
  const qualifying = pricing.terms?.institutionalCreators?.qualifyingPackages ?? ['GROWTH', 'INSTITUTION'];
  if (qualifying.includes(pkg.id)) return true;
  return pkg.studentCap === null ? 'Custom' : false;
};

// Rows map to the backend's feature codes (src/config/packageFeatures.ts), so
// the checkmarks follow whatever each plan actually unlocks.
const categories: { name: string; items: { name: string; cell: Cell }[] }[] = [
  {
    name: "Platform",
    items: [
      { name: "Institute, student, parent & tutor portals", cell: "INSTITUTE_PORTAL" },
      { name: "Web + iOS & Android apps", cell: "MOBILE_APP" },
      { name: "Student & staff attendance", cell: "ATTENDANCE" },
    ]
  },
  {
    name: "Learning",
    items: [
      { name: "Basic LMS & course builder", cell: "BASIC_LMS" },
      { name: "Live classes & hybrid learning", cell: "LIVE_CLASSES" },
      { name: "Certificate templates & issuing", cell: always },
      { name: "Sell your own courses at the 5% marketplace rate", cell: marketplaceRate },
    ]
  },
  {
    name: "Operations",
    items: [
      { name: "Fee collection & installments", cell: "FEE_COLLECTION" },
      { name: "AI facial-verification clock-in", cell: "FACIAL_VERIFICATION" },
      { name: "Payroll", cell: "PAYROLL" },
      { name: "Marketing & lead tracking", cell: "MARKETING_LEAD_TRACKING" },
    ]
  },
  {
    name: "Scale",
    items: [
      { name: "Student cap", cell: formatCap },
      { name: "Multi-branch support", cell: "MULTI_BRANCH" },
      { name: "Advanced institutional analytics", cell: "ADVANCED_ANALYTICS" },
      { name: "White-label platform", cell: "WHITE_LABEL" },
      { name: "API access", cell: "API_ACCESS" },
      { name: "SSO", cell: "SSO" },
      { name: "Custom integrations", cell: "CUSTOM_INTEGRATIONS" },
    ]
  },
  {
    name: "Support",
    items: [
      { name: "Standard support", cell: always },
      { name: "Priority support", cell: "PRIORITY_SUPPORT" },
      { name: "Dedicated onboarding", cell: "DEDICATED_ONBOARDING" },
      { name: "SLA-backed support", cell: "SLA_SUPPORT" },
    ]
  },
];

// Shown until the live plans load (or if they cannot be fetched).
const fallbackPricing: InstitutePricing = {
  packages: [
    { id: "STARTER", name: "Starter", studentCap: 200, features: ["INSTITUTE_PORTAL", "STUDENT_PORTAL", "PARENT_PORTAL", "TUTOR_PORTAL", "ATTENDANCE", "FEE_COLLECTION", "BASIC_LMS", "MOBILE_APP"] },
    { id: "GROWTH", name: "Growth", studentCap: 1000, features: ["INSTITUTE_PORTAL", "STUDENT_PORTAL", "PARENT_PORTAL", "TUTOR_PORTAL", "ATTENDANCE", "FEE_COLLECTION", "BASIC_LMS", "MOBILE_APP", "LIVE_CLASSES", "FACIAL_VERIFICATION", "PAYROLL", "MARKETING_LEAD_TRACKING"] },
    { id: "INSTITUTION", name: "Institution", studentCap: 5000, features: ["INSTITUTE_PORTAL", "STUDENT_PORTAL", "PARENT_PORTAL", "TUTOR_PORTAL", "ATTENDANCE", "FEE_COLLECTION", "BASIC_LMS", "MOBILE_APP", "LIVE_CLASSES", "FACIAL_VERIFICATION", "PAYROLL", "MARKETING_LEAD_TRACKING", "MULTI_BRANCH", "ADVANCED_ANALYTICS", "DEDICATED_ONBOARDING", "PRIORITY_SUPPORT"] },
    { id: "ENTERPRISE", name: "Enterprise", studentCap: null, features: ["INSTITUTE_PORTAL", "STUDENT_PORTAL", "PARENT_PORTAL", "TUTOR_PORTAL", "ATTENDANCE", "FEE_COLLECTION", "BASIC_LMS", "MOBILE_APP", "LIVE_CLASSES", "FACIAL_VERIFICATION", "PAYROLL", "MARKETING_LEAD_TRACKING", "MULTI_BRANCH", "ADVANCED_ANALYTICS", "DEDICATED_ONBOARDING", "PRIORITY_SUPPORT", "WHITE_LABEL", "API_ACCESS", "SSO", "CUSTOM_INTEGRATIONS", "SLA_SUPPORT"] },
  ],
  terms: { institutionalCreators: { qualifyingPackages: ["GROWTH", "INSTITUTION"] } },
};

const resolveCell = (cell: Cell, pkg: Package, pricing: InstitutePricing) =>
  typeof cell === 'string' ? pkg.features.includes(cell) : cell(pkg, pricing);

const copy = {
  headline: "The Feature Ledger.",
  subheadline: "Compare Every Tier",
  description: "No hidden surprises. Detailed side-by-side comparison of every plan feature.",
};

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
  const data = copy;
  const [pricing, setPricing] = useState<InstitutePricing>(fallbackPricing);

  useEffect(() => {
    // Same proxy the Pricing section uses, so both always show the same plans.
    fetch('/api/pricing')
      .then((response) => (response.ok ? response.json() : null))
      .then((result) => {
        if (result?.success && result.data?.packages?.length) setPricing(result.data);
      })
      .catch((error) => console.error("Failed to fetch plan features:", error));
  }, []);

  const packages = pricing.packages;

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
            {data.subheadline}
          </p>
          <h3 className="font-heading text-2xl md:text-[2.5rem] leading-[1.1] tracking-tightest text-[#111416]">
            {data.headline}
          </h3>
          <p className="mt-4 text-[#6B8185] leading-[1.6]">
            {data.description}
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
                {packages.map((pkg, pIdx) => (
                  <th key={pkg.id} className={`text-center p-5 text-sm font-heading transition-colors text-[#155863] ${pIdx === 0 ? "bg-[#17343A]/5" : ""}`}>
                    {pkg.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {categories.map((section, sIdx) => (
                <React.Fragment key={sIdx}>
                  <tr>
                    <td colSpan={packages.length + 1} className="bg-[#17343A]/5 px-5 py-3 text-[10px] font-semibold tracking-[0.2em] uppercase text-[#6B8185]">
                      {section.name}
                    </td>
                  </tr>
                  {section.items.map((item, iIdx) => (
                    <tr key={iIdx} className="border-t border-[#17343A]/5 hover:bg-[#F5FAF9]/50 transition-colors">
                      <td className="p-5 text-sm text-[#111416]/85">{item.name}</td>
                      {packages.map((pkg, pIdx) => (
                        <td key={pkg.id} className={`text-center p-5 ${pIdx === 0 ? "bg-[#17343A]/[0.02]" : ""}`}>
                          {renderCell(resolveCell(item.cell, pkg, pricing))}
                        </td>
                      ))}
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
