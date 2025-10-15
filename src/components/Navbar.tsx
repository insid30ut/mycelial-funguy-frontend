import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-mfg-dark/80 backdrop-blur-sm shadow-lg shadow-mfg-purple/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <h1 className="text-3xl font-display font-black text-mfg-light drop-shadow-[0_2px_2px_rgba(157,78,221,0.8)]">
              <Link href="/">🍄 Mycelial FunGuy</Link>
            </h1>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-mfg-light hover:text-mfg-purple transition-colors duration-300 text-lg font-semibold">
              Home
            </Link>
            <Link href="/blog" className="text-mfg-light hover:text-mfg-purple transition-colors duration-300 text-lg font-semibold">
              Blog
            </Link>
            <Link href="/teks" className="text-mfg-light hover:text-mfg-purple transition-colors duration-300 text-lg font-semibold">
              Teks & Tips
            </Link>
            <Link href="/calculators" className="text-mfg-light hover:text-mfg-purple transition-colors duration-300 text-lg font-semibold">
              Calculators
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}