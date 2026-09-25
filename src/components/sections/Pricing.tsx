"use client";

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

// Fallback data while API loads (or if it fails)
const initialPricingData = {
  "success": true,
  "data": {
    "country": {
      "code": "IN",
      "name": "India"
    },
    "currency": "INR",
    "fx": {
      "baseCurrency": "INR",
      "targetCurrency": "INR",
      "rate": 1,
      "provider": "fallback-api",
      "fetchedAt": "2026-09-25T08:28:33.520Z",
      "stale": false,
      "converted": false,
      "disclaimer": null
    },
    "headline": "Educational Operating System — ERP, LMS & Live Classrooms for institutes, tutors, students & parents",
    "packages": [
      {
        "id": "STARTER",
        "name": "Starter",
        "studentCap": 200,
        "sizeLabel": "Up to 200 students",
        "isCustomQuote": false,
        "isPurchasable": true,
        "description": null,
        "features": [
          "INSTITUTE_PORTAL",
          "STUDENT_PORTAL",
          "PARENT_PORTAL",
          "TUTOR_PORTAL",
          "ATTENDANCE",
          "FEE_COLLECTION",
          "BASIC_LMS",
          "MOBILE_APP"
        ],
        "currency": "INR",
        "monthlyPrice": 6000,
        "priceLabel": "₹6,000/mo",
        "annualPrice": 60000,
        "annualPriceLabel": "₹60,000/yr",
        "includes": [
          "Institute + student/parent/tutor portals",
          "Attendance",
          "Fee collection",
          "Basic LMS",
          "Mobile app"
        ]
      },
      {
        "id": "GROWTH",
        "name": "Growth",
        "studentCap": 1000,
        "sizeLabel": "Up to 1,000 students",
        "isCustomQuote": false,
        "isPurchasable": true,
        "description": null,
        "features": [
          "INSTITUTE_PORTAL",
          "STUDENT_PORTAL",
          "PARENT_PORTAL",
          "TUTOR_PORTAL",
          "ATTENDANCE",
          "FEE_COLLECTION",
          "BASIC_LMS",
          "MOBILE_APP",
          "LIVE_CLASSES",
          "FACIAL_VERIFICATION",
          "PAYROLL",
          "MARKETING_LEAD_TRACKING"
        ],
        "currency": "INR",
        "monthlyPrice": 18000,
        "priceLabel": "₹18,000/mo",
        "annualPrice": 180000,
        "annualPriceLabel": "₹1,80,000/yr",
        "includes": [
          "Everything in Starter",
          "Live classes",
          "AI facial verification clock-in",
          "Payroll",
          "Marketing & lead tracking"
        ]
      },
      {
        "id": "INSTITUTION",
        "name": "Institution",
        "studentCap": 5000,
        "sizeLabel": "Up to 5,000 students",
        "isCustomQuote": false,
        "isPurchasable": true,
        "description": null,
        "features": [
          "INSTITUTE_PORTAL",
          "STUDENT_PORTAL",
          "PARENT_PORTAL",
          "TUTOR_PORTAL",
          "ATTENDANCE",
          "FEE_COLLECTION",
          "BASIC_LMS",
          "MOBILE_APP",
          "LIVE_CLASSES",
          "FACIAL_VERIFICATION",
          "PAYROLL",
          "MARKETING_LEAD_TRACKING",
          "MULTI_BRANCH",
          "ADVANCED_ANALYTICS",
          "DEDICATED_ONBOARDING",
          "PRIORITY_SUPPORT"
        ],
        "currency": "INR",
        "monthlyPrice": 45000,
        "priceLabel": "₹45,000/mo",
        "annualPrice": 450000,
        "annualPriceLabel": "₹4,50,000/yr",
        "includes": [
          "Everything in Growth",
          "Multi-branch support",
          "Advanced analytics",
          "Dedicated onboarding",
          "Priority support"
        ]
      },
      {
        "id": "ENTERPRISE",
        "name": "Enterprise",
        "studentCap": null,
        "sizeLabel": "Unlimited / multicampus",
        "isCustomQuote": true,
        "isPurchasable": false,
        "description": null,
        "features": [
          "INSTITUTE_PORTAL",
          "STUDENT_PORTAL",
          "PARENT_PORTAL",
          "TUTOR_PORTAL",
          "ATTENDANCE",
          "FEE_COLLECTION",
          "BASIC_LMS",
          "MOBILE_APP",
          "LIVE_CLASSES",
          "FACIAL_VERIFICATION",
          "PAYROLL",
          "MARKETING_LEAD_TRACKING",
          "MULTI_BRANCH",
          "ADVANCED_ANALYTICS",
          "DEDICATED_ONBOARDING",
          "PRIORITY_SUPPORT",
          "WHITE_LABEL",
          "API_ACCESS",
          "SSO",
          "CUSTOM_INTEGRATIONS",
          "SLA_SUPPORT"
        ],
        "currency": "INR",
        "monthlyPrice": null,
        "priceLabel": "Custom quote",
        "annualPrice": null,
        "annualPriceLabel": null,
        "includes": [
          "White-label option",
          "API access",
          "SSO",
          "Custom integrations",
          "SLA-backed support"
        ]
      }
    ],
    /* "addOns": [
      {
        "id": "WHATSAPP_SMS_ALERTS",
        "name": "WhatsApp / SMS fee-due alerts",
        "unit": "month",
        "currency": "INR",
        "price": 2000,
        "priceLabel": "₹2,000/mo"
      },
      {
        "id": "ADVANCED_PAYROLL_HR",
        "name": "Advanced payroll & HR",
        "unit": "month",
        "currency": "INR",
        "price": 3000,
        "priceLabel": "₹3,000/mo"
      }
    ], */
    "terms": {
      "overageRule": "Exceeding a package student cap moves the institute to the next tier — no per-student metering, no surprise bills.",
      "annualPlan": {
        "description": "2 months free (pay for 10, get 12) on any package.",
        "billedMonths": 10,
        "freeMonths": 2
      },
      "foundingCustomerOffer": {
        "description": "First 30 institutes get Starter locked at ₹4,000/mo for 12 months, in exchange for a case study / testimonial.",
        "packageId": "STARTER",
        "seats": 30,
        "lockInMonths": 12,
        "currency": "INR",
        "monthlyPrice": 4000,
        "priceLabel": "₹4,000/mo"
      }
    },
    "countrySource": "geolocation"
  }
};

export default function Pricing() {
  const [data, setData] = useState(initialPricingData.data);
  const [isAnnual, setIsAnnual] = useState(true);

  useEffect(() => {
    const fetchPricing = async () => {
      try {
        // Fetch from internal Next.js proxy route to bypass browser CORS errors
        const response = await fetch('/api/pricing');
        if (response.ok) {
          const result = await response.json();
          if (result.success && result.data) {
            setData(result.data);
          }
        }
      } catch (error) {
        console.error("Failed to fetch pricing data:", error);
      }
    };
    
    fetchPricing();
  }, []);

  return (
    <section id="pricing" className="w-full bg-[#F5FAF9] pt-16 md:pt-24 pb-24 md:pb-36">
      <div className="w-full max-w-[120rem] mx-auto px-6 md:px-16 lg:px-24">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-2xl mb-12"
        >
          <p className="text-xs font-semibold tracking-[0.25em] text-[#155863] mb-6 uppercase">
            Simple, Transparent Pricing
          </p>
          <h2 className="font-heading text-3xl md:text-[3rem] leading-[1.08] tracking-tightest text-[#111416]">
            One Plan for Every Stage of Your Institution.
          </h2>
          <p className="mt-6 text-lg text-[#6B8185] leading-[1.6]">
            <span className="font-medium text-[#111416] block mb-2">{data.headline}</span>
            {data.terms.overageRule} {data.terms.annualPlan.description}
          </p>
        </motion.div>

        {/* Billing Toggle */}
        <div className="flex items-center justify-start mb-12 gap-4">
          <span className={`text-sm font-semibold transition-colors ${!isAnnual ? "text-[#111416]" : "text-[#6B8185]"}`}>Monthly</span>
          <button 
            onClick={() => setIsAnnual(!isAnnual)}
            className="relative inline-flex h-7 w-14 items-center rounded-full bg-[#155863] transition-colors"
          >
            <span className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${isAnnual ? "translate-x-8" : "translate-x-1"}`} />
          </button>
          <span className={`text-sm font-semibold transition-colors flex items-center gap-2 ${isAnnual ? "text-[#111416]" : "text-[#6B8185]"}`}>
            Annually 
            {isAnnual && (
              <span className="text-[10px] uppercase tracking-wider bg-[#49A796]/10 text-[#49A796] px-2 py-1 rounded-sm">
                {data.terms.annualPlan.freeMonths} Months Free
              </span>
            )}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
          
          {data.packages.map((pkg, idx) => {
            const isGrowth = pkg.id === "GROWTH";
            const isEnterprise = pkg.id === "ENTERPRISE";
            
            // Format pricing based on toggle
            let mainPrice = "";
            let subtext = "";
            
            if (pkg.isCustomQuote) {
              mainPrice = pkg.priceLabel;
              subtext = "";
            } else {
              // Dynamically set locale based on currency so USD formats as $100,000 and INR as ₹1,00,000
              const locale = pkg.currency === 'USD' ? 'en-US' : 'en-IN';
              const formattedPrice = new Intl.NumberFormat(locale, { 
                style: 'currency', 
                currency: pkg.currency || 'INR', 
                maximumFractionDigits: 0 
              }).format(pkg.monthlyPrice || 0);

              if (isAnnual) {
                mainPrice = formattedPrice;
                subtext = `Billed annually at ${pkg.annualPriceLabel}`;
              } else {
                mainPrice = formattedPrice;
                subtext = "/mo, billed monthly";
              }
            }
            
            return (
              <motion.div 
                key={pkg.id}
                initial={{ opacity: 0, scale: 1.05, y: 10 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className={`relative flex flex-col p-8 md:p-10 h-full shadow-sm transition-all duration-300 ${
                  isEnterprise 
                    ? "bg-[#17343A] text-white shadow-xl" 
                    : isGrowth 
                      ? "bg-white text-[#111416] border border-[#17343A]/15 shadow-xl scale-100 lg:scale-105 z-10" 
                      : "bg-white text-[#111416] border border-[#17343A]/15 hover:shadow-md"
                }`}
              >
                {isGrowth && <div className="absolute top-0 left-0 right-0 h-1 bg-[#49A796]"></div>}
                
                <p className={`text-[10px] sm:text-xs font-bold tracking-wider uppercase mb-4 ${
                  isEnterprise ? "text-[#79CFC0] opacity-90" : isGrowth ? "text-[#49A796]" : "text-[#6B8185] opacity-80"
                }`}>
                  {pkg.sizeLabel}
                </p>
                <h3 className={`font-heading text-2xl md:text-3xl mb-6 ${isEnterprise ? "text-white" : "text-[#155863]"}`}>
                  {pkg.name}
                </h3>
                
                <div className="mb-8 flex flex-col items-start min-h-[70px]">
                  <span className="font-heading text-4xl lg:text-[2.5rem] xl:text-5xl tracking-tight">{mainPrice}</span>
                  <span className={`text-sm mt-1 ${isEnterprise ? "text-[#F5FAF9]/60" : "text-[#6B8185]"}`}>
                    {subtext}
                  </span>
                </div>
                
                <ul className="space-y-3.5 mb-10 flex-1">
                  {pkg.includes.map((item, i) => (
                    <li key={i} className="flex gap-3 text-sm leading-[1.6]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`w-4 h-4 mt-0.5 shrink-0 ${isEnterprise ? "text-[#79CFC0]" : "text-[#49A796]"}`}>
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                      <span className={`${isEnterprise ? "text-white/85" : "text-[#111416]/85"}`}>{item}</span>
                    </li>
                  ))}
                </ul>
                
                <a 
                  href={isEnterprise ? "#contact" : "https://www.app.edorapad.com/"}
                  target={isEnterprise ? undefined : "_blank"}
                  rel={isEnterprise ? undefined : "noopener noreferrer"}
                  className={`text-center py-3.5 text-sm font-medium tracking-wide transition-colors duration-300 ${
                    isEnterprise
                      ? "bg-[#F5FAF9] text-[#17343A] hover:bg-[#49A796] hover:text-white"
                      : isGrowth
                        ? "bg-[#49A796] text-white hover:bg-[#155863]"
                        : "bg-[#155863] text-white hover:bg-[#49A796]"
                  }`}
                >
                  {isEnterprise ? "Talk to Us" : `Start with ${pkg.name}`}
                </a>
              </motion.div>
            );
          })}

        </div>

        {/* Founding-Customer Offer */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="border border-[#49A796]/30 bg-[#49A796]/10 px-8 py-6 mb-16 flex flex-col md:flex-row md:items-center gap-3 md:gap-6"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check w-5 h-5 text-[#49A796] shrink-0"><path d="M20 6 9 17l-5-5"></path></svg>
          <p className="text-[#111416] leading-[1.6]">
            <span className="font-semibold">Founding-Customer Offer</span> — {data.terms.foundingCustomerOffer.description.replace(data.terms.foundingCustomerOffer.priceLabel, '')} <span className="font-semibold">{data.terms.foundingCustomerOffer.priceLabel}</span> for 12 months, in exchange for a case study / testimonial.
          </p>
        </motion.div>

        {/* Add-ons 
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#17343A]/10 border border-[#17343A]/15"
        >
          {data.addOns?.map((addon, idx) => {
            let displayPrice = addon.priceLabel;
            
            if (isAnnual) {
              // Properly format the numerical annual amount based on the provided unit
              const annualAmount = (addon.price || 0) * 10;
              const formattedAnnual = new Intl.NumberFormat('en-IN', { 
                style: 'currency', 
                currency: addon.currency || 'INR', 
                maximumFractionDigits: 0 
              }).format(annualAmount);
              
              const suffix = addon.unit === "device/month" ? "/device/yr" : "/yr";
              displayPrice = `${formattedAnnual}${suffix}`;
            }

            return (
              <div key={idx} className="bg-white p-6 flex items-center justify-between">
                <span className="text-sm text-[#111416]/80">{addon.name}</span>
                <span className="text-sm font-semibold text-[#155863] shrink-0 ml-4">{displayPrice}</span>
              </div>
            );
          })}
        </motion.div>
        */}

      </div>
    </section>
  );
}
