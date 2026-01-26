'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Blog', href: '/blog' },
  { name: 'Teks & Tips', href: '/teks' },
  { name: 'Partners', href: '/partners' },
  { name: 'Calculators', href: '/calculators' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="bg-mfg-dark/80 backdrop-blur-sm shadow-lg shadow-mfg-purple/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Link href="/" className="text-3xl font-display font-black text-mfg-light drop-shadow-[0_2px_2px_rgba(157,78,221,0.8)]">
                🍄 Mycelial FunGuy
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-lg font-semibold transition-colors duration-300 ${
                    pathname === link.href
                      ? 'text-mfg-gold'
                      : 'text-mfg-light hover:text-mfg-purple'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-mfg-light hover:text-mfg-purple focus:outline-none focus:ring-2 focus:ring-inset focus:ring-mfg-purple"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-mfg-dark bg-opacity-95 z-40">
          <div className="flex flex-col items-center justify-center h-full">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block text-2xl font-bold py-4 transition-colors duration-300 ${
                  pathname === link.href
                    ? 'text-mfg-gold'
                    : 'text-mfg-light hover:text-mfg-purple'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}