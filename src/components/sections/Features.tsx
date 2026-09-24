"use client";

import { motion } from 'framer-motion';

export default function Features() {
  return (
    <section id="features" className="w-full bg-white py-24 md:py-36">
      <div className="w-full max-w-[120rem] mx-auto px-6 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-5"
          >
            <p className="text-xs font-semibold tracking-[0.25em] text-[#155863] mb-6 uppercase">
              Edorapad Engine
            </p>
            <h2 className="font-heading text-3xl md:text-[3rem] leading-[1.08] tracking-tightest text-[#111416]">
              Absolute Clarity Over Every <span className="whitespace-normal sm:whitespace-nowrap">Enrollment, Lesson,</span> and Transaction.
            </h2>
            <p className="mt-6 text-base md:text-lg text-[#6B8185] leading-[1.6] max-w-md">
              A unified SaaS engine engineered to manage, scale, and distribute world-class education academies — built for institutes, hybrid classrooms, and independent tutors alike.
            </p>
          </motion.div>

          <div className="lg:col-span-7 lg:col-start-6">
            {[
              {
                num: "01",
                title: "Smart Sync Architecture",
                desc: "Course material, attendance, and announcements auto-update across every branch and cohort instantly — no manual re-uploads, no version drift."
              },
              {
                num: "02",
                title: "The Knowledge Ledger",
                desc: "A clear overview of student progress, lesson-time metrics, and dynamic activity scores — for every tutor, department, and campus."
              },
              {
                num: "03",
                title: "AI Facial Verification",
                desc: "Camera-based faculty clock-in authentication replaces manual attendance logs with tamper-proof, instant verification."
              },
              {
                num: "04",
                title: "Native Capital Matrix",
                desc: "Seamless fee collection, installment tracking, automated reminders, and payroll — with global multi-currency support."
              }
            ].map((feature, idx) => (
              <motion.div 
                key={feature.num}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.15, ease: "easeOut" }}
                className="border-t border-[#17343A]/15 py-8 first:border-t-0 md:first:border-t md:pt-8"
              >
                <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8">
                  <span className="text-sm font-semibold text-[#155863] tracking-wide shrink-0">{feature.num} //</span>
                  <div>
                    <h3 className="font-heading text-xl md:text-2xl text-[#111416] mb-2">{feature.title}</h3>
                    <p className="text-[#6B8185] leading-[1.6] max-w-xl">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
