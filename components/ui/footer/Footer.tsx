import React from 'react';
import { Logo } from '@/components/ui/header/Logo';

export default function Footer() {
  return (
    <footer className="bg-white" aria-label="Footer">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-12 sm:py-16 lg:px-8">
        <div className="flex justify-center mb-8">
          <Logo />
        </div>
        <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer Navigation">
          <div className="pb-6">
            <a href="/tbd" className="text-sm leading-6 text-slate-600 hover:text-blue-600">
              Pricing
            </a>
          </div>
          <div className="pb-6">
            <a href="/tbd" className="text-sm leading-6 text-slate-600 hover:text-blue-600">
              Docs
            </a>
          </div>
          <div className="pb-6">
            <a href="/login" className="text-sm leading-6 text-slate-600 hover:text-blue-600">
              Login
            </a>
          </div>
          <div className="pb-6">
            <a href="/tbd" className="text-sm leading-6 text-slate-600 hover:text-blue-600">
              Privacy
            </a>
          </div>
        </nav>
        <p className="mt-10 text-center text-xs leading-5 text-slate-500">&copy; All rights reserved TLOO.</p>
      </div>
    </footer>
  );
}
