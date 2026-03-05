import type { Metadata } from 'next'
import { Inter, Syne } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const _syne = Syne({ subsets: ["latin"], variable: "--font-syne" });

export const metadata: Metadata = {
  title: 'Krastweb — Mājas lapas un interneta veikali',
  description: 'Veidojam premium mājaslapas un interneta veikalus ambicioziem zīmoliem. Moderns dizains, ātra veiktspēja, uzticams atbalsts.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="lv" className={`${_inter.variable} ${_syne.variable}`}>
      <body className="font-sans antialiased noise-overlay">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
