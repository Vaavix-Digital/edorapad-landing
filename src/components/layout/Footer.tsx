import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 pt-16 pb-8 border-t border-gray-200">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col lg:flex-row justify-between gap-12 mb-12">
          <div className="max-w-xs">
            <Link href="/" className="mb-4 inline-block">
              <Image src="/logo.png" alt="Edorapad Logo" width={150} height={40} className="h-8 w-auto" />
            </Link>
            <p className="text-gray-500 leading-relaxed">
              Empowering learners worldwide with cutting-edge tools and a supportive community.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-12 lg:gap-24">
            <div className="flex flex-col gap-4">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Product</h4>
              <Link href="#features" className="text-gray-600 hover:text-teal-700 transition-colors">Features</Link>
              <Link href="#pricing" className="text-gray-600 hover:text-teal-700 transition-colors">Pricing</Link>
              <Link href="#for-you" className="text-gray-600 hover:text-teal-700 transition-colors">For You</Link>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Company</h4>
              <Link href="/about" className="text-gray-600 hover:text-teal-700 transition-colors">About Us</Link>
              <Link href="/contact" className="text-gray-600 hover:text-teal-700 transition-colors">Contact</Link>
              <Link href="/privacy" className="text-gray-600 hover:text-teal-700 transition-colors">Privacy Policy</Link>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Edorapad. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
