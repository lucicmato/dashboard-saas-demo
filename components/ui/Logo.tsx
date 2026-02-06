import React from 'react';
import { CheckCircle2 } from 'lucide-react';

interface LogoProps {
  className?: string;
}

export function Logo({ className = '' }: LogoProps) {
  return (
    <div className={`flex items-center gap-2 font-bold text-xl text-slate-900 ${className}`}>
      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white">
        <CheckCircle2 size={20} strokeWidth={3} />
      </div>
      <span>Dashboard</span>
    </div>
  );
}
