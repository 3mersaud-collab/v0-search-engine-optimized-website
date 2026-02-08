import React from "react"
import type { Metadata, Viewport } from 'next'
import { IBM_Plex_Sans_Arabic } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SeoSchema } from '@/components/seo-schema'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const ibmPlexArabic = IBM_Plex_Sans_Arabic({ 
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700"]
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0891b2',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://liilsol.com'),
  title: {
    default: 'سيولة تابي وتمارا | liilsol - كاش فوري خلال ساعتين - سلفة تابي سلفة تمارا',
    template: '%s | liilsol - سيولة تابي وتمارا'
  },
  description: 'سيولة فورية من تابي وتمارا ومدفوع خلال ساعتين فقط. كاش تابي، كاش تمارا، سلفة تابي، سلفة تمارا. حول رصيدك إلى نقد في حسابك البنكي. أفضل خدمة سيولة في الرياض والسعودية. تقييم 5 نجوم على Google.',
  keywords: [
    'سيولة', 'سلفة', 'كاش تمارا', 'كاش تابي', 
    'سيولة تابي', 'سيولة تمارا', 'سلفة تابي', 'سلفة تمارا',
    'تسييل تابي', 'تسييل تمارا', 'تحويل رصيد تابي', 'تحويل رصيد تمارا',
    'كاش من تابي', 'كاش من تمارا', 'سيولة الرياض', 'كاش السعودية',
    'تسييل فوري', 'سيولة فورية', 'سلفة فورية', 'نقد تابي', 'نقد تمارا',
    'liilsol', 'ليل سول', 'حلول الليل',
    'tabby cash', 'tamara cash', 'tabby سيولة', 'tamara سيولة'
  ].join(', '),
  openGraph: {
    title: 'سيولة تابي وتمارا | liilsol - كاش فوري وسلفة',
    description: 'سيولة فورية من تابي وتمارا ومدفوع. سلفة تابي، كاش تمارا، تحويل فوري لحسابك البنكي خلال ساعتين. تقييم 5 نجوم.',
    locale: 'ar_SA',
    type: 'website',
    siteName: 'liilsol - سيولة تابي وتمارا',
    url: 'https://liilsol.com',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'liilsol - سيولة تابي وتمارا - كاش فوري'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'سيولة تابي وتمارا | liilsol',
    description: 'سيولة فورية - كاش تابي - كاش تمارا - سلفة فورية خلال ساعتين. تقييم 5 نجوم على Google.',
    images: ['/og-image.jpg']
  },
  alternates: {
    canonical: 'https://liilsol.com',
    languages: {
      'ar-SA': 'https://liilsol.com',
    }
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code', // يجب تحديثه بالكود الحقيقي
  },
  category: 'finance',
  classification: 'خدمات مالية',
  icons: {
    icon: '/logo.jpg',
    apple: '/logo.jpg',
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        <SeoSchema />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-3TWCLCVPWB" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-3TWCLCVPWB');
            `,
          }}
        />
      </head>
      <body className={`${ibmPlexArabic.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
