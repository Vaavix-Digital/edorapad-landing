"use client";

import { motion } from 'framer-motion';

// Exact API Response from User
const marketplaceData = {
  success: true,
  data: {
    country: { code: "IN", name: "India" },
    currency: "INR",
    headline: "Selling plans for tutors and course creators listing on Edorapad",
    plans: [
      {
        id: "BASIC",
        name: "Basic",
        currency: "INR",
        monthlyFee: 0,
        feeLabel: "Free",
        commissionPercent: 18,
        commissionRate: 0.18,
        commissionLabel: "18% per sale",
        includes: [
          "Course listing",
          "Payment processing",
          "Basic analytics",
          "Standard support"
        ]
      },
      {
        id: "PRO",
        name: "Pro",
        currency: "INR",
        monthlyFee: 999,
        feeLabel: "₹999/mo",
        commissionPercent: 10,
        commissionRate: 0.1,
        commissionLabel: "10% per sale",
        includes: [
          "Everything in Basic",
          "Priority placement in search",
          "Coupon/discount tools",
          "Advanced analytics",
          "Email marketing tools"
        ]
      },
      {
        id: "ELITE",
        name: "Elite",
        currency: "INR",
        monthlyFee: 4999,
        feeLabel: "₹4,999/mo",
        commissionPercent: 5,
        commissionRate: 0.05,
        commissionLabel: "5% per sale",
        includes: [
          "Everything in Pro",
          "Dedicated creator storefront (custom subdomain)",
          "Bulk course upload",
          "Custom certificates",
          "Dedicated account manager"
        ]
      }
    ],
    addOns: [
      {
        id: "FEATURED_LISTING",
        name: "Featured listing — homepage/category placement",
        unit: "month",
        currency: "INR",
        price: 5000,
        priceLabel: "₹5,000/mo"
      }
    ],
    terms: {
      payoutCycle: {
        description: "15 days, direct bank transfer.",
        days: 15,
        method: "Direct bank transfer"
      },
      institutionalCreators: {
        description: "Schools listing their own paid courses get the 5% Elite rate automatically when already on a Growth/Institution subscription — no separate marketplace fee stacking.",
        qualifyingPackages: [
          "GROWTH",
          "INSTITUTION"
        ],
        effectiveCommissionPercent: 5
      }
    },
    countrySource: "geolocation"
  }
};

export default function Marketplace() {
  const { data } = marketplaceData;

  return (
    <section id="marketplace" className="w-full bg-[#F5FAF9] py-24 md:py-36">
      <div className="w-full max-w-[120rem] mx-auto px-6 md:px-16 lg:px-24">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-2xl mb-14"
        >
          <p className="text-xs font-semibold tracking-[0.25em] text-[#155863] mb-6 uppercase">
            Course Creator Marketplace
          </p>
          <h2 className="font-heading text-3xl md:text-[2.5rem] leading-[1.08] tracking-tightest text-[#111416] mb-6">
            {data.headline}
          </h2>
          <p className="text-lg text-[#6B8185] leading-[1.6]">
            Payouts every {data.terms.payoutCycle.days} days via {data.terms.payoutCycle.method.toLowerCase()}. {data.terms.institutionalCreators.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-[#17343A]/15 bg-white mb-16">
          
          {data.plans.map((plan, idx) => (
            <motion.div 
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
              className="border-r border-b border-[#17343A]/15 p-8 md:p-10 hover:bg-[#F5FAF9] transition-colors duration-500 flex flex-col"
            >
              <h3 className="font-heading text-2xl text-[#111416] mb-6">{plan.name}</h3>
              <div className="flex items-baseline gap-3 mb-2">
                <span className="font-heading text-3xl text-[#111416]">{plan.feeLabel}</span>
              </div>
              <p className="text-[#155863] font-semibold text-sm mb-6">{plan.commissionLabel}</p>
              
              <ul className="space-y-3 mt-4 text-[#6B8185] leading-[1.6] text-sm flex-1">
                {plan.includes.map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-[#49A796] mt-0.5 shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

        </div>

        {/* Marketplace Add-ons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-1 gap-px bg-[#17343A]/10 border border-[#17343A]/15 max-w-xl"
        >
          {data.addOns.map((addon, idx) => (
            <div key={idx} className="bg-white p-6 flex items-center justify-between">
              <span className="text-sm text-[#111416]/80">{addon.name}</span>
              <span className="text-sm font-semibold text-[#155863] shrink-0 ml-4">{addon.priceLabel}</span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
