"use client";

import { motion } from 'framer-motion';

export default function Enterprise() {
  return (
    <section id="enterprise" className="w-full bg-[#F5FAF9] py-24 md:py-36 border-t border-[#111416]/10">
      <div className="w-full max-w-[120rem] mx-auto px-6 md:px-16 lg:px-24">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-6"
          >
            <div className="border border-[#17343A]/15 aspect-[4/3] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1200" 
                alt="Premium academic research space" 
                className="w-full h-full object-cover" 
              />
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 lg:col-start-8"
          >
            <p className="text-xs font-semibold tracking-[0.25em] text-[#155863] mb-6 uppercase">
              More About Edorapad
            </p>
            <h2 className="font-heading text-3xl md:text-[3rem] leading-[1.08] tracking-tightest text-[#111416]">
              An Educational Operating System, not another app.
            </h2>
            <p className="mt-6 text-lg text-[#6B8185] leading-[1.6]">
              Edorapad brings educational institutions, faculty, students, parents, financial and marketing teams, course creators, and administrators into one synchronized platform — an all-in-one EdTech ERP and learning platform engineered for scale.
            </p>
            <p className="mt-4 text-[#6B8185] leading-[1.6]">
              From AI facial verification clock-in to hybrid live classrooms, integrated fee collection, payroll, and parental transparency — every module speaks the same language, on the same ledger.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 border-t border-l border-[#17343A]/15">
          {[
            { value: "1", label: "Unified platform for the whole institution" },
            { value: "3", label: "Surfaces — Web, iOS & Android in sync" },
            { value: "AI", label: "Facial-verified attendance clock-in" },
            { value: "∞", label: "Students, courses & branches supported" }
          ].map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
              className="border-r border-b border-[#17343A]/15 p-8 md:p-10 hover:bg-white transition-colors duration-500"
            >
              <p className="font-heading text-4xl md:text-5xl text-[#155863] mb-3">{stat.value}</p>
              <p className="text-sm text-[#6B8185] leading-[1.5]">{stat.label}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
