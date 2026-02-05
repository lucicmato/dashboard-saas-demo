import ThemeProvider from '@/components/theme-provider/ThemeProvider'; // A theme provider for light/dark mode
import Toaster from '@/components/ui/toaster/Toaster';
import Footer from '@/components/ui/footer/Footer';
import Header from '@/components/ui/header/Header';

import './../lib/env';

import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';

const siteUrl = 'http:xxx'; //TODO: <-- CHANGE
const title = 'Dashboard';
const description =
  'Dashboard helps you organize, prioritize, and get things done. Simple, powerful, and designed for modern teams.';

//TODO: Make it to work dynamic with ThemeProvider
const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: title,
    template: `%s | ${title}`,
  },
  description,

  openGraph: {
    type: 'website',
    url: '/',
    title,
    description,
    images: [
      {
        url: '/og-1200x630.png',
        width: 1200,
        height: 630,
        alt: 'Dashboard preview',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/twitter-1200x630.png'],
  },

  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light" style={{ colorScheme: 'light' }}>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
