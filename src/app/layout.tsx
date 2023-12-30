import type { Metadata } from 'next'
import { Inter, Roboto } from 'next/font/google'
import './globals.scss'

const inter = Inter({ subsets: ['latin'] });

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
      <body className={inter.className}>{children}</body>
    </html>
  )
}
