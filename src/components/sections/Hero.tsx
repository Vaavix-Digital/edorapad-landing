import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative w-full pt-36 pb-24 md:pt-44 md:pb-32 overflow-hidden bg-[#F5FAF9]">
      <div className="w-full max-w-[120rem] mx-auto px-6 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-end">
          <div className="lg:col-span-8" style={{ opacity: 1, transform: 'none' }}>
            <p className="text-xs md:text-sm font-semibold tracking-[0.25em] text-[#155863] mb-6 uppercase">
              Edorapad — Educational Operating System
            </p>
            <h1 className="font-heading text-[2.75rem] md:text-[4.5rem] leading-[1.03] tracking-tightest text-[#111416]">
              The Architecture of Elite Knowledge Transmission.
            </h1>
            <p className="mt-8 text-lg md:text-xl text-[#6B8185] max-w-xl leading-[1.6]">
              One synchronized platform for institutes, tutors, students, and parents — attendance, live classrooms, fee collection, payroll, and AI facial verification, unified into a single system of record.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <Link
                href="#pricing"
                className="inline-flex items-center px-8 py-4 bg-[#155863] text-white text-sm font-medium tracking-wide hover:bg-[#17343A] transition-colors duration-300 rounded-md shadow-sm"
              >
                Begin Architecture
              </Link>
              <Link
                href="#architecture"
                className="text-sm font-medium text-[#17343A] border-b border-[#17343A]/40 hover:border-[#155863] hover:text-[#155863] transition-colors duration-300 pb-1"
              >
                Explore the System
              </Link>
            </div>
          </div>
          <div className="lg:col-span-4" style={{ opacity: 1, transform: 'none' }}>
            <div className="relative w-full aspect-[4/3] border border-[#17343A]/15 overflow-hidden bg-[#17343A] rounded-xl shadow-lg">
              <div className="absolute inset-0" style={{ opacity: 1, transform: 'none' }}>
                <span
                  className="inline-block relative w-full h-full"
                  data-base44-image=""
                  data-base44-image-src="https://media.base44.com/images/public/user_6a857d349dc49710b92336d0/9bd4b11a5_WhatsAppImage2026-09-22at0936101.jpeg"
                >
                  <span className="block relative w-full h-full overflow-hidden">
                    <img
                      src="https://media.base44.com/images/public/user_6a857d349dc49710b92336d0/9bd4b11a5_WhatsAppImage2026-09-22at0936101.jpeg/v1/fill/w_391,h_293,al_c,q_90,usm_0.66_1.00_0.01,enc_webp,quality_auto/9bd4b11a5_WhatsAppImage2026-09-22at0936101.webp"
                      srcSet="https://media.base44.com/images/public/user_6a857d349dc49710b92336d0/9bd4b11a5_WhatsAppImage2026-09-22at0936101.jpeg/v1/fill/w_391,h_293,al_c,q_90,usm_0.66_1.00_0.01,enc_webp,quality_auto/9bd4b11a5_WhatsAppImage2026-09-22at0936101.webp 1x, https://media.base44.com/images/public/user_6a857d349dc49710b92336d0/9bd4b11a5_WhatsAppImage2026-09-22at0936101.jpeg/v1/fill/w_781,h_585,al_c,q_90,usm_0.66_1.00_0.01,enc_webp,quality_auto/9bd4b11a5_WhatsAppImage2026-09-22at0936101.webp 2x, https://media.base44.com/images/public/user_6a857d349dc49710b92336d0/9bd4b11a5_WhatsAppImage2026-09-22at0936101.jpeg/v1/fill/w_1172,h_878,al_c,q_90,usm_0.66_1.00_0.01,enc_webp,quality_auto/9bd4b11a5_WhatsAppImage2026-09-22at0936101.webp 3x"
                      loading="lazy"
                      className="w-full h-full inset-0 absolute object-cover"
                      alt="Edorapad platform preview"
                    />
                  </span>
                </span>
              </div>
              <div className="absolute bottom-4 left-4 flex gap-2">
                <span className="h-1 rounded-full transition-all duration-500 w-1.5 bg-[#F5FAF9]/40"></span>
                <span className="h-1 rounded-full transition-all duration-500 w-1.5 bg-[#F5FAF9]/40"></span>
                <span className="h-1 rounded-full transition-all duration-500 w-6 bg-[#F5FAF9]"></span>
              </div>
            </div>
            <p className="mt-4 text-xs tracking-[0.15em] uppercase text-[#6B8185]">
              Live Institute Dashboard — Real-Time Sync
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
