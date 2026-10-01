// import { Analytics } from '@vercel/analytics/next'
// import type { Metadata, Viewport } from 'next'
// import './globals.css'

// export const metadata: Metadata = {
//   title: 'Joanna Savage | Luxury Business Services',
//   description: 'Private aviation, super yachts, real estate and future-forward business consulting by Joanna Savage.',
//   generator: 'v0.app',
//   icons: {
//     icon: [
//       {
//         url: '/icon-light-32x32.png',
//         media: '(prefers-color-scheme: light)',
//       },
//       {
//         url: '/icon-dark-32x32.png',
//         media: '(prefers-color-scheme: dark)',
//       },
//       {
//         url: '/icon.svg',
//         type: 'image/svg+xml',
//       },
//     ],
//     apple: '/apple-icon.png',
//   },
// }

// export const viewport: Viewport = {
//   colorScheme: 'light dark',
//   themeColor: [
//     { media: '(prefers-color-scheme: light)', color: 'white' },
//     { media: '(prefers-color-scheme: dark)', color: 'black' },
//   ],
// }

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode
// }>) {
//   return (
//     <html lang="en">
//       <body className="antialiased">
//         {children}
//         {process.env.NODE_ENV === 'production' && <Analytics />}
//       </body>
//     </html>
//   )
// }
import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Montserrat } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-serif',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-sans',
  display: 'swap',
})

const siteTitle = 'Joanna Savage | Luxury Brokerage & Private Advisory'
const siteDescription =
  'Experience the epitome of luxury with Joanna Savage. Explore a world where opulence meets sophistication across Supercars, Real Estate, Luxury Performance Yachts, and Private Aviation.'

export const metadata: Metadata = {
  metadataBase: new URL('https://joannasavage.vercel.app'),
  title: {
    default: siteTitle,
    template: '%s · Joanna Savage',
  },
  description: siteDescription,
  applicationName: 'Joanna Savage Luxury',
  keywords: [
    'Joanna Savage',
    'luxury sales',
    'luxury broker',
    'supercars',
    'real estate',
    'luxury yachts',
    'private aviation',
    'high-profile clients',
    'exclusive opportunities',
    'personalized guidance',
    'opulent experiences',
    'unparalleled luxury',
  ],
  authors: [{ name: 'Joanna Savage' }],
  creator: 'Joanna Savage',
  publisher: 'Joanna Savage',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon-light-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-dark-32x32.png', sizes: '32x32', type: 'image/png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: [{ url: '/apple-icon.png' }],
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Joanna Savage',
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: '/assets/og-banner.png',
        width: 1200,
        height: 630,
        alt: 'Joanna Savage | Luxury Brokerage & Private Advisory',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: ['/assets/og-banner.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: '/',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  colorScheme: 'dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#091715' },
    { media: '(prefers-color-scheme: dark)', color: '#091715' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${montserrat.variable}`}>
      <head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Joanna Savage" />
        <meta name="mobile-web-app-capable" content="yes" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
      </head>
      <body className={`${montserrat.className} min-h-screen bg-[#091715] text-white antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}