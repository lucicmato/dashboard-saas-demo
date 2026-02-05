import React from 'react';
import { Construction, ArrowLeft } from 'lucide-react';

export default function CommingSoon() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 flex flex-col">
      <main className="flex-1 flex items-center justify-center px-6 py-24">
        <div className="text-center max-w-md">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 mb-6">
            <Construction className="h-8 w-8 text-blue-600" />
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Work in progress...</h1>

          <p className="mt-4 text-lg text-slate-600">
            Page is currently under development. We are working to bring you something great soon!
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/"
              className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 transition-colors"
            >
              <ArrowLeft size={16} />
              Back to Home
            </a>
          </div>

          <div className="mt-12 p-4 bg-slate-50 rounded-lg">
            <p className="text-sm text-slate-500">🚀 New feature coming soon!</p>
          </div>
        </div>
      </main>
    </div>
  );
}
