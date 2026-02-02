import ThemeProvider from '@/components/theme-provider/ThemeProvider'; // A theme provider for light/dark mode
import Toaster from '@/components/ui/toaster/Toaster'; // A toaster component for notifications
import Footer from '@/components/ui/footer/Footer'; // The footer component
import Navbar from '@/components/ui/navbar/Navbar'; // The navbar component

import './../lib/env';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Dashboard Demo',
  description: 'A demo dashboard application using Next.js and Supabase',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
