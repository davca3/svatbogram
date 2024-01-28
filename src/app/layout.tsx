import type { Metadata } from 'next';

import '../components/globals.css';
import Header from './_components/Header';
import { inter } from '@/components/fonts';
import ThemeProvider from './_components/ThemeProvider';

export const metadata: Metadata = {
  title: 'Svatbogram',
  description: 'Svatební aplikace pro fotky a videa',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs-cz">
      <body className={`${inter.className} bg-white`}>
        <ThemeProvider>
          <div>
            <Header />

            <div className="container mx-auto min-h-[calc(100vh-4rem)] bg-cool-white">
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
