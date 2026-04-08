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
    default: 'مطر | سيولة تابي وكاش تمارا وتحويل الجوالات إلى كاش خلال ساعة',
    template: '%s | مطر'
  },
  description: 'مطر — سيولة تابي وكاش تمارا في السعودية. احسب سيولتك بالحاسبة، تحقق من قبول طلبك، واستلم الكاش خلال ساعة. خدمة موثوقة في الرياض وجدة والدمام.',
  keywords: [
    'سيولة تابي', 'كاش تابي', 'سلفة تابي', 'تسييل تابي', 'تحويل رصيد تابي',
    'كاش تمارا', 'سيولة تمارا', 'سلفة تمارا', 'تسييل تمارا', 'تحويل رصيد تمارا',
    'كيف احول رصيد تابي الى كاش', 'طريقة استخراج سيولة من تمارا',
    'سيولة تابي بدون تحويل راتب', 'كم عمولة تسييل تابي',
    'سيولة تابي الرياض', 'كاش تمارا الرياض', 'سيولة جدة', 'سيولة الدمام',
    'تقسيط جوالات الى كاش', 'تحويل جوالات الى كاش',
    'سيولة نقدية فورية', 'سيولة فورية في السعودية',
    'مطر', 'سحابة غيث ماحسبت حسابها',
    'tabby cash', 'tamara cash', 'tabby سيولة', 'tamara سيولة'
  ].join(', '),
  openGraph: {
    title: 'مطر | سيولة تابي وكاش تمارا — تقسيط جوالات الى كاش خلال ساعة',
    description: 'مطر — سيولة تابي وكاش تمارا في الرياض وجدة والدمام. احسب سيولتك، تحقق من القبول، استلم الكاش خلال ساعة. حاسبة دقيقة ورسوم شفافة.',
    locale: 'ar_SA',
    type: 'website',
    siteName: 'مطر - سيولة تابي وتمارا',
    url: 'https://liilsol.com',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'مطر - سيولة تابي وتمارا - كاش فوري'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'مطر | سيولة تابي وتمارا',
    description: 'مطر - سحابة غيث ماحسبت حسابها. نقوم بالدخول كشركاء معكم في شراء الجهاز ونتكفل بالدفعة الأولى - سيولة فورية خلال ساعة.',
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
    google: 'TsLjNXq-Ybp-y-LRZ5sTwVhpwyiTn2cZ5EaipzJG5Ek',
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
