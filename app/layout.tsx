import React from "react"
import type { Metadata, Viewport } from 'next'
import { IBM_Plex_Sans_Arabic } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SeoSchema } from '@/components/seo-schema'
import { ThemeProvider } from '@/components/theme-provider'
import { ChatFab } from '@/components/chat-fab'
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
    default: 'مطر ليل | سيولة تابي وتمارا - كاش فوري خلال ساعتين - سلفة تابي سلفة تمارا',
    template: '%s | مطر ليل - سيولة تابي وتمارا'
  },
  description: 'مطر ليل - سحابة غيث ماحسبت حسابها. سيولة فورية من تابي وتمارا ومدفوع خلال ساعتين فقط. كاش تابي، كاش تمارا، سلفة تابي، سلفة تمارا. حول رصيدك إلى نقد في حسابك البنكي. أفضل خدمة سيولة في الرياض والسعودية.',
  keywords: [
    'سيولة', 'سلفة', 'كاش تمارا', 'كاش تابي', 
    'سيولة تابي', 'سيولة تمارا', 'سلفة تابي', 'سلفة تمارا',
    'تسييل تابي', 'تسييل تمارا', 'تحويل رصيد تابي', 'تحويل رصيد تمارا',
    'كاش من تابي', 'كاش من تمارا', 'سيولة الرياض', 'كاش السعودية',
    'تسييل فوري', 'سيولة فورية', 'سلفة فورية', 'نقد تابي', 'نقد تمارا',
    'مطر ليل', 'liilsol', 'ليل سول', 'سحابة غيث',
    'tabby cash', 'tamara cash', 'tabby سيولة', 'tamara سيولة'
  ].join(', '),
  openGraph: {
    title: 'مطر ليل | سيولة تابي وتمارا - كاش فوري وسلفة',
    description: 'مطر ليل - سحابة غيث ماحسبت حسابها. سيولة فورية من تابي وتمارا ومدفوع. تحويل فوري لحسابك البنكي خلال ساعتين.',
    locale: 'ar_SA',
    type: 'website',
    siteName: 'مطر ليل - سيولة تابي وتمارا',
    url: 'https://liilsol.com',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'مطر ليل - سيولة تابي وتمارا - كاش فوري'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'مطر ليل | سيولة تابي وتمارا',
    description: 'مطر ليل - سحابة غيث ماحسبت حسابها. سيولة فورية - كاش تابي - كاش تمارا - سلفة فورية خلال ساعتين.',
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
          <ChatFab />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
