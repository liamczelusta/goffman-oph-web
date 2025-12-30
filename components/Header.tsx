'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'HOME' },
    { href: '/about-us', label: 'ABOUT US' },
    { href: '/services', label: 'OUR SERVICES' },
    { href: '/eyewear', label: 'EYEWEAR' },
    { href: '/insurance', label: 'INSURANCE ACCEPTED' },
    { href: '/patient-forms', label: 'NEW PATIENT FORMS' },
    { href: '/contact', label: 'CONTACT US' },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top bar with phone numbers */}
      <div className="bg-slate-700 text-white py-2">
        <div className="container mx-auto px-4 flex justify-center items-center gap-6 text-sm">
          <a href="tel:7134670990" className="hover:text-slate-200 transition">
            (713) 467-0990
          </a>
          <a href="tel:7134618056" className="hover:text-slate-200 transition">
            (713) 461-8056
          </a>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Brand */}
          <Link href="/" className="text-2xl font-bold text-slate-700">
            Joel H. Goffman, M.D., P.A.
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-slate-700 font-medium transition text-sm"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-2 text-gray-700 hover:text-slate-700 font-medium transition"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}

