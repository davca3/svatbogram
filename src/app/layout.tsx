import type { Metadata, Viewport } from 'next';

import '../components/globals.css';
import Header from './_components/Header';
import { inter } from '@/components/fonts';
import Providers from '@/lib/provider';

export const metadata: Metadata = {
  title: 'Svatbogram',
  applicationName: 'Svatbogram',
  description: 'Svatební aplikace pro fotky a videa',
  icons: {
    icon: 'https://budemetretinovi.cz/favicon/favicon-32x32.png',
    apple: 'https://budemetretinovi.cz/favicon/apple-touch-icon.png',
  },
  authors: [{ name: 'David Třetina' }, { name: 'Daniel Neuman' }],
};

export const viewport: Viewport = {
  themeColor: '#6B7557',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs-cz">
      <body className={`${inter.className} bg-white`}>
        <Providers>
          <Header />

          <div className="container mx-auto bg-cool-white">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
