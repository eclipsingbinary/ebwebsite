import type { Metadata } from 'next'
import './globals.css'
import CosmicNavigation from '@/components/CosmicNavigation'

export const metadata: Metadata = {
  title: 'Eclipsing Binary - Traversing space and time singing about the cosmos, society and love',
  description: 'Electronic music artist exploring cosmic themes through immersive soundscapes. Space and Tech meets Spiritual and Ancient in a musical journey across the universe.',
  keywords: ['electronic music', 'ambient', 'cosmic', 'space music', 'experimental', 'eclipsing binary'],
  authors: [{ name: 'Eclipsing Binary' }],
  creator: 'Eclipsing Binary',
  publisher: 'Eclipsing Binary',
  metadataBase: new URL('https://eclipsingbinary.net'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://eclipsingbinary.net',
    title: 'Eclipsing Binary - Cosmic Electronic Music',
    description: 'Traversing space and time singing about the cosmos, society and love',
    siteName: 'Eclipsing Binary',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eclipsing Binary - Cosmic Electronic Music',
    description: 'Traversing space and time singing about the cosmos, society and love',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.cdnfonts.com/css/spin-cycle"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-black text-white min-h-screen">
        <CosmicNavigation />
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  )
} 