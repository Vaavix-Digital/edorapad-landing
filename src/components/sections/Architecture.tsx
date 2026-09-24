"use client";

import { motion } from 'framer-motion';

export default function Architecture() {
  return (
    <section id="architecture" className="w-full bg-[#17343A] py-24 md:py-36">
      <div className="w-full max-w-[120rem] mx-auto px-6 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-6 order-2 lg:order-1"
          >
            <div className="border border-[#F5FAF9]/15 aspect-[4/3] overflow-hidden">
              <span className="inline-block relative w-full h-full">
                <span className="block relative w-full h-full overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200" 
                    loading="lazy" 
                    className="w-full h-full inset-0 absolute object-cover" 
                    alt="Structural knowledge layers - Data sync visualization" 
                  />
                </span>
              </span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 lg:col-start-8 order-1 lg:order-2"
          >
            <p className="text-xs font-semibold tracking-[0.25em] text-[#155863] mb-6 uppercase">
              Cross-Platform Sync
            </p>
            <h2 className="font-heading text-3xl md:text-[3rem] leading-[1.08] tracking-tightest text-[#F5FAF9]">
              One System of Record, Across Every Device.
            </h2>
            <ul className="mt-8 space-y-5">
              {[
                "Institute, student, parent, and tutor portals in one login",
                "Live classrooms with hybrid physical + online support",
                "Marketing & lead tracking built for admissions season",
                "Multi-branch support with advanced institutional analytics"
              ].map((item, idx) => (
                <li key={idx} className="flex gap-4 text-[#F5FAF9]/80 leading-[1.6]">
                  <span className="text-[#49A796] mt-1 shrink-0">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
