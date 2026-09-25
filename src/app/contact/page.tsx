import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: "Contact Us | Edorapad",
  description: "Get in touch with the Edorapad team for sales, support, or general inquiries.",
};

export default function Contact() {
  return (
    <main className="w-full min-h-screen bg-[#FBFBF9] py-20 px-6 md:px-16 lg:px-24">
      <div className="max-w-5xl mx-auto">
        
        <div className="mb-10">
          <Link href="/" className="text-sm font-semibold tracking-wide text-[#49A796] hover:text-[#155863] transition-colors">
            ← Back to Home
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold tracking-[0.2em] text-[#155863] mb-4 uppercase">
              Get in Touch
            </p>
            <h1 className="font-heading text-4xl md:text-5xl leading-tight text-[#111416] mb-6">
              Let's talk about your institution.
            </h1>
            <p className="text-[#6B8185] leading-[1.6] text-lg mb-10">
              Whether you need a custom enterprise quote, have technical questions, or want to schedule a personalized demo, our team is ready to help.
            </p>
            
            <div className="space-y-8">
              <div>
                <h3 className="font-bold text-[#111416] mb-1">Sales & Enterprise</h3>
                <p className="text-[#6B8185] mb-1">Talk to our sales team about custom plans.</p>
                <a href="mailto:sales@edorapad.com" className="text-[#49A796] font-medium hover:underline">sales@edorapad.com</a>
              </div>
              
              <div>
                <h3 className="font-bold text-[#111416] mb-1">Technical Support</h3>
                <p className="text-[#6B8185] mb-1">Need help with the platform?</p>
                <a href="mailto:support@edorapad.com" className="text-[#49A796] font-medium hover:underline">support@edorapad.com</a>
              </div>
              
              <div>
                <h3 className="font-bold text-[#111416] mb-1">Global Headquarters</h3>
                <p className="text-[#6B8185]">
                  101 Education Way<br />
                  Suite 400<br />
                  San Francisco, CA 94105
                </p>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-7 bg-white p-8 md:p-10 shadow-sm rounded-xl border border-[#111416]/5">
            <h2 className="text-2xl font-heading text-[#111416] mb-6">Send a Message</h2>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-[#111416] mb-2">First Name</label>
                  <input type="text" id="firstName" className="w-full px-4 py-3 bg-[#FBFBF9] border border-[#111416]/10 rounded-md focus:outline-none focus:border-[#49A796] focus:ring-1 focus:ring-[#49A796] transition-colors" placeholder="Jane" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-[#111416] mb-2">Last Name</label>
                  <input type="text" id="lastName" className="w-full px-4 py-3 bg-[#FBFBF9] border border-[#111416]/10 rounded-md focus:outline-none focus:border-[#49A796] focus:ring-1 focus:ring-[#49A796] transition-colors" placeholder="Doe" />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#111416] mb-2">Work Email</label>
                <input type="email" id="email" className="w-full px-4 py-3 bg-[#FBFBF9] border border-[#111416]/10 rounded-md focus:outline-none focus:border-[#49A796] focus:ring-1 focus:ring-[#49A796] transition-colors" placeholder="jane@institution.edu" />
              </div>
              
              <div>
                <label htmlFor="institution" className="block text-sm font-medium text-[#111416] mb-2">Institution / Company Name</label>
                <input type="text" id="institution" className="w-full px-4 py-3 bg-[#FBFBF9] border border-[#111416]/10 rounded-md focus:outline-none focus:border-[#49A796] focus:ring-1 focus:ring-[#49A796] transition-colors" placeholder="Global Academy" />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#111416] mb-2">How can we help?</label>
                <textarea id="message" rows={4} className="w-full px-4 py-3 bg-[#FBFBF9] border border-[#111416]/10 rounded-md focus:outline-none focus:border-[#49A796] focus:ring-1 focus:ring-[#49A796] transition-colors resize-none" placeholder="Tell us about your requirements..."></textarea>
              </div>
              
              <button type="button" className="w-full py-4 bg-[#155863] text-white font-medium rounded-md hover:bg-[#49A796] transition-colors duration-300">
                Send Message
              </button>
              
              <p className="text-xs text-[#6B8185] text-center mt-4">
                By submitting this form, you agree to our <Link href="/privacy-policy" className="underline hover:text-[#111416]">Privacy Policy</Link>.
              </p>
            </form>
          </div>

        </div>

      </div>
    </main>
  );
}
