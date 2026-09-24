import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Audience from "@/components/sections/Audience";
import Architecture from "@/components/sections/Architecture";
import HowItWorks from "@/components/sections/HowItWorks";
import Enterprise from "@/components/sections/Enterprise";
import Gallery from "@/components/sections/Gallery";
import Pricing from "@/components/sections/Pricing";
import CompareFeatures from "@/components/sections/CompareFeatures";
import Marketplace from "@/components/sections/Marketplace";
import MobileApps from "@/components/sections/MobileApps";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full overflow-x-hidden">
      <Hero />
      <Features />
      <Audience />
      <Architecture />
      <HowItWorks />
      <Enterprise />
      <Gallery />
      <Pricing />
      <CompareFeatures />
      <Marketplace />
      <MobileApps />
      <Footer />
    </main>
  );
}
