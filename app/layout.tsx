import React from "react"
import type { Metadata, Viewport } from 'next'
import { IBM_Plex_Sans_Arabic } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SeoSchema } from '@/components/seo-schema'
import { ThemeProvider } from '@/components/theme-provider'
import { ChatFab } from '@/components/chat-fab'
import { RainBackground } from '@/components/rain-background'
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
    default: 'مطر | سلفة تابي - تحويل تابي الى كاش فوري',
    template: '%s | مطر - سلفة تابي'
  },
  description: 'مطر - سلفة تابي فورية نحول لك تابي الى كاش في السعودية. تحويل جوالات الى كاش خلال ساعتين. كاش تابي برسوم شفافة 10-14%. سلفة تابي بنسبة شراكة واضحة. خدمة موثوقة في الرياض والسعودية. أفضل من تمارا في السرعة والخدمة.',
  keywords: [
    'سيولة', 'سلفة', 'كاش تابي', 'سيولة تابي', 'سلفة تابي',
    'تسييل تابي', 'تحويل رصيد تابي', 'تحويل تابي الى كاش',
    'كاش من تابي', 'سيولة الرياض', 'كاش السعودية',
    'تسييل فوري', 'سيولة فورية', 'سلفة فورية', 'نقد تابي',
    'تحويل جوالات الى كاش', 'تقسيط جوالات الى كاش',
    'سيولة نقدية', 'سيولة نقدية فورية في السعودية', 'سلفة فورية',
    'سلفة تابي فورية', 'تقسيط جوالات', 'شراكة في الشراء',
    'مطر', 'سحابة غيث ماحسبت حسابها', 'سحابة غيث',
    'tabby cash', 'tabby سيولة', 'افضل من تمارا', 'بديل تمارا'
  ].join(', '),
  openGraph: {
    title: 'مطر | سلفة تابي - تحويل تابي الى كاش فوري',
    description: 'مطر - سلفة تابي فورية نحول لك تابي الى كاش خلال ساعتين. خدمة موثوقة في الرياض والسعودية.',
    locale: 'ar_SA',
    type: 'website',
    siteName: 'مطر - سلفة تابي',
    url: 'https://liilsol.com',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'مطر - سلفة تابي - كاش فوري'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'مطر | سلفة تابي',
    description: 'مطر - سحابة غيث ماحسبت حسابها. نقوم بالدخول كشركاء معكم في شراء الجهاز ونتكفل بالدفعة الأولى - سلفة تابي فورية خلال ساعتين.',
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
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-18033444354" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-3TWCLCVPWB');
              gtag('config', 'AW-18033444354');

              // Track all contact button clicks as Google Ads conversions
              document.addEventListener('click', function(e) {
                var el = e.target;
                while (el && el.tagName !== 'A') { el = el.parentElement; }
                if (el && el.href) {
                  var href = el.href;
                  // Track WhatsApp, phone calls, email, and Instagram clicks
                  if (href.indexOf('wa.me') !== -1 || 
                      href.indexOf('whatsapp.com') !== -1 || 
                      href.indexOf('tel:') !== -1 || 
                      href.indexOf('mailto:') !== -1 || 
                      href.indexOf('instagram.com') !== -1) {
                    gtag('event', 'conversion', {
                      'send_to': 'AW-18033444354/4RONCODtkY8cEIKMgpdD',
                      'event_callback': function() {}
                    });
                  }
                }
              });
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
          <RainBackground />
          {children}
          <ChatFab />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
