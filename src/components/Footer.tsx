import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-mfg-dark/80 backdrop-blur-sm shadow-lg shadow-mfg-purple/20">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-8">
          <Link href="/" className="text-mfg-light hover:text-mfg-purple transition-colors duration-300 text-lg font-semibold">
            Home
          </Link>
          <Link href="/blog" className="text-mfg-light hover:text-mfg-purple transition-colors duration-300 text-lg font-semibold">
            Blog
          </Link>
          <Link href="/teks" className="text-mfg-light hover:text-mfg-purple transition-colors duration-300 text-lg font-semibold">
            Teks & Tips
          </Link>
        </div>
        <div className="mt-8 text-center text-mfg-light/50">
          <p>&copy; {new Date().getFullYear()} Mycelial FunGuy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}