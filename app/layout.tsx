import type { Metadata } from 'next'
import './globals.css'
import CosmicNavigation from '@/components/CosmicNavigation'

export const metadata: Metadata = {
  title: 'Eclipsing Binary - Traversing space and time singing about the cosmos, society and love',
  description: 'Singing about the cosmos, society and love. Space and Tech meets Spiritual and Ancient in a musical journey across the universe.',
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
    title: 'Eclipsing Binary',
    description: 'Singing about the cosmos, society and love',
    siteName: 'Eclipsing Binary',
    images: [
      {
        url: 'https://eclipsingbinary.net/images/eclipsing-binary-og-static.svg',
        width: 1200,
        height: 630,
        alt: 'Eclipsing Binary - Cosmic Music Artist',
        type: 'image/svg+xml',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eclipsing Binary',
    description: 'Singing about the cosmos, society and love',
    images: ['https://eclipsingbinary.net/images/eclipsing-binary-og-static.svg'],
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
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MusicGroup",
    "name": "Eclipsing Binary",
    "description": "Singing about the cosmos, society and love",
    "url": "https://eclipsingbinary.net",
    "genre": ["Electronic", "Ambient", "Cosmic"],
    "image": "https://eclipsingbinary.net/images/eclipsing-binary-og.svg",
    "sameAs": [
      "https://app.t2.world/u/eclipsingbinary",
      "https://spinamp.xyz/artist/eclipsing-binary"
    ]
  }

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
        <link rel="icon" type="image/svg+xml" href="/images/eclipsing-binary-og.svg" />
        <meta name="theme-color" content="#000011" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
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