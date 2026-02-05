'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const navLinks = [
    {
      name: 'Pricing',
      href: '/tbd',
    },
    {
      name: 'Docs',
      href: '/tbd',
    },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex-shrink-0">
          <a href="#" aria-label="TaskFlow Home">
            <Logo />
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:items-center md:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
          >
            Login
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            aria-controls="mobile-menu"
            aria-expanded={isMobileMenuOpen}
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            {isMobileMenuOpen ? (
              <X className="block h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="block h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white" id="mobile-menu">
          <div className="space-y-1 px-4 pb-3 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block rounded-md px-3 py-2 text-base font-medium text-slate-600 hover:bg-slate-50 hover:text-blue-600"
              >
                {link.name}
              </a>
            ))}
            <div className="mt-4 pt-4 border-t border-slate-100">
              <a
                href="#"
                className="block w-full rounded-md bg-blue-600 px-3 py-2 text-center text-base font-medium text-white shadow-sm hover:bg-blue-700"
              >
                Login
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
