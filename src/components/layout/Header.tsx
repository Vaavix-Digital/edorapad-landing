import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-gray-100 py-4">
      <div className="container mx-auto px-6 max-w-6xl flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="Edorapad Logo" width={150} height={40} className="h-8 w-auto" priority />
          </Link>
        </div>
        
        <nav className="hidden md:flex gap-8 items-center">
          <Link href="#features" className="text-sm font-medium text-[#111416]/80 hover:text-[#111416] transition-colors tracking-wide">Features</Link>
          <Link href="#for-you" className="text-sm font-medium text-[#111416]/80 hover:text-[#111416] transition-colors tracking-wide">For You</Link>
          <Link href="#how-it-works" className="text-sm font-medium text-[#111416]/80 hover:text-[#111416] transition-colors tracking-wide">How It Works</Link>
          <Link href="#pricing" className="text-sm font-medium text-[#111416]/80 hover:text-[#111416] transition-colors tracking-wide">Pricing</Link>
        </nav>
        
        <div className="flex items-center gap-2">
          <Link href="https://app.edorapad.com/login" className="hidden sm:inline-flex text-sm font-medium px-5 py-2.5 text-[#111416] hover:text-[#155863] transition-colors">Log in</Link>
          <Link href="https://app.edorapad.com/register" className="text-sm font-medium px-5 py-2.5 bg-[#111416] text-[#FBFBF9] hover:bg-[#155863] transition-colors duration-300">Sign up</Link>
        </div>
      </div>
    </header>
  );
}
