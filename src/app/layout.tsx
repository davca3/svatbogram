import type { Metadata } from 'next'
import { Inter, Roboto, Sacramento } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] });
const sacramento = Sacramento({ subsets: ['latin'], weight: "400" });

export const metadata: Metadata = {
  title: 'Svatbogram',
  description: 'Svatební aplikace pro fotky a videa'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${sacramento.className}`}>{children}</body>
    </html>
  )
}
