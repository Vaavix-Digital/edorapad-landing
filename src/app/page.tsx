import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Audience from "@/components/sections/Audience";
import Architecture from "@/components/sections/Architecture";
import HowItWorks from "@/components/sections/HowItWorks";
import Enterprise from "@/components/sections/Enterprise";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full">
      <Hero />
      <Features />
      <Audience />
      <Architecture />
      <HowItWorks />
      <Enterprise />
      <Footer />
    </main>
  );
}
