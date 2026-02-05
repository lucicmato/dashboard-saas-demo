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
    <header
      className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md"
      aria-label="Main Navigation"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex-shrink-0">
          <a href="/" aria-label="TaskFlow Home">
            <Logo />
          </a>
        </div>
        <nav className="hidden md:flex md:items-center md:gap-8" aria-label="Desktop Navigation">
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
            href="/login"
            className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
          >
            Login
          </a>
        </nav>
      </div>
    </header>
  );
}
