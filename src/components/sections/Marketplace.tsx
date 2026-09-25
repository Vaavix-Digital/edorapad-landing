"use client";

import { motion } from 'framer-motion';

import { useState, useEffect } from 'react';

export default function Marketplace() {
  // @ts-ignore
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchMarketplacePricing = async () => {
      try {
        // Fetch from internal Next.js proxy route to bypass browser CORS errors
        // Pass type=courseCreator so it maps to the correct backend endpoint
        const response = await fetch('/api/pricing?type=courseCreator');
        if (response.ok) {
          const result = await response.json();
          if (result.success && result.data) {
            setData(result.data);
          }
        }
      } catch (error) {
        console.error("Failed to fetch marketplace pricing data:", error);
      }
    };
    
    fetchMarketplacePricing();
  }, []);

  if (!data) {
    return (
      <section id="marketplace" className="w-full bg-[#F5FAF9] py-24 md:py-36 min-h-[50vh] flex items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="w-8 h-8 border-4 border-[#49A796] border-t-transparent rounded-full animate-spin"></div>
          <p className="text-sm text-[#155863] font-medium tracking-wide animate-pulse">Loading localized pricing...</p>
        </div>
      </section>
    );
  }

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
          
          {data.plans.map((plan: any, idx: number) => {
            const isElite = plan.id === "ELITE";
            
            // Format fee dynamically based on currency
            const locale = plan.currency === 'USD' ? 'en-US' : 'en-IN';
            let formattedFee = plan.feeLabel;
            
            if (plan.monthlyFee > 0) {
              formattedFee = new Intl.NumberFormat(locale, { 
                style: 'currency', 
                currency: plan.currency || 'INR', 
                maximumFractionDigits: 0 
              }).format(plan.monthlyFee);
              formattedFee = `${formattedFee}/mo`;
            }

            return (
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
                <span className="font-heading text-3xl text-[#111416]">{formattedFee}</span>
              </div>
              <p className="text-[#155863] font-semibold text-sm mb-6">{plan.commissionLabel}</p>
              
              <ul className="space-y-3 mt-4 text-[#6B8185] leading-[1.6] text-sm flex-1">
                {plan.includes.map((item: string, i: number) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-[#49A796] mt-0.5 shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )})}

        </div>

        {/* Marketplace Add-ons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-1 gap-px bg-[#17343A]/10 border border-[#17343A]/15 max-w-xl"
        >
          {data.addOns?.map((addon: any, idx: number) => (
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
