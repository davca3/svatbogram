import type { Metadata, Viewport } from 'next';

import '../components/globals.css';
import Header from './_components/Header';
import { inter } from '@/components/fonts';
import Providers from '@/lib/Provider';
import { Toaster } from '@/components/ui/sonner';
import Head from 'next/head';

export const metadata: Metadata = {
  title: 'Svatbogram',
  applicationName: 'Svatbogram',
  description: 'Svatební aplikace pro fotky a videa',
  icons: {
    icon: 'https://budemetretinovi.cz/favicon/favicon-32x32.png',
    apple: '/apple-touch-icon.png',
  },
  authors: [{ name: 'David Třetina' }, { name: 'Daniel Neuman' }],
  manifest: '/manifest.json'
};

export const viewport: Viewport = {
  themeColor: '#6B7557',
  colorScheme: 'light',
  initialScale: 1,
  width: 'device-width',
  height: 'device-height',
  viewportFit: 'cover'
};

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang="cs-cz">
      <Head>
        <link rel="preload" href="/api/uploadthing" as="fetch" crossOrigin="anonymous" />
      </Head>
      <body className={`${inter.className} bg-white min-h-screen h-auto w-screen overflow-auto`}>
        <Providers>
          <Header />

          <div className="container mx-auto bg-cool-white overflow-scroll">
            {children}
            {modal}
            <Toaster />
          </div>
        </Providers>
      </body>
    </html>
  );
}
