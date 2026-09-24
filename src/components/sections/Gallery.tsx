"use client";

import { motion } from 'framer-motion';

const galleryItems = [
  {
    title: "Course Timeline",
    description: "A structured lesson journey with progress tracking for every cohort.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1200",
    alt: "Course Timeline"
  },
  {
    title: "Attendance Ledger",
    description: "Institutional-grade attendance records, AI-verified and tamper-proof.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
    alt: "Attendance Ledger"
  },
  {
    title: "Fee Collection",
    description: "Installments, receipts, and reminders — all on one ledger.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
    alt: "Fee Collection"
  },
  {
    title: "Live Classroom",
    description: "Hybrid live classes with participants, chat, and shared materials.",
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=1200",
    alt: "Live Classroom"
  }
];

export default function Gallery() {
  return (
    <section id="gallery" className="w-full bg-[#F5FAF9] py-24 md:py-36 border-t border-[#111416]/10">
      <div className="w-full max-w-[120rem] mx-auto px-6 md:px-16 lg:px-24">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-2xl mb-14"
        >
          <p className="text-xs font-semibold tracking-[0.25em] text-[#155863] mb-6 uppercase">
            Inside The Platform
          </p>
          <h2 className="font-heading text-3xl md:text-[3rem] leading-[1.08] tracking-tightest text-[#111416]">
            A Look at the Real Interface.
          </h2>
          <p className="mt-6 text-lg text-[#6B8185] leading-[1.6]">
            Snapshots of the actual Edorapad experience — from course timelines to attendance ledgers and live classrooms. Tap any frame to expand.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {galleryItems.map((item, index) => (
            <motion.button 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
              className="group block text-left border border-[#17343A]/15 overflow-hidden bg-[#111416] shadow-sm hover:shadow-lg transition-all duration-500"
            >
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <img 
                  src={item.image}
                  loading="lazy"
                  className="w-full h-full inset-0 absolute object-cover transition-transform duration-700 group-hover:scale-105" 
                  alt={item.alt}
                />
                <div className="absolute inset-0 bg-[#17343A]/0 group-hover:bg-[#17343A]/40 transition-colors duration-500"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#111416]/90 via-[#111416]/50 to-transparent">
                  <p className="font-heading text-xl md:text-2xl text-[#F5FAF9] translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    {item.title}
                  </p>
                  <p className="text-sm text-[#F5FAF9]/80 mt-2 leading-[1.5] opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.button>
          ))}
        </div>

      </div>
    </section>
  );
}
