export function SeoSchema() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://liilsol.com/#business",
    "name": "مطر",
    "alternateName": ["مطر", "سحابة غيث ماحسبت حسابها", "مطر - سيولة تابي وكاش تمارا"],
    "description": "خدمة سيولة تابي وكاش تمارا في السعودية عبر نظام شراكة واضح. ندخل مع العميل في شراء الجهاز عبر تابي أو تمارا أو مدفوع، ثم نبيع الجهاز ونحوّل الصافي إلى الحساب البنكي.",
    "url": "https://liilsol.com",
    "telephone": "+966590360039",
    "email": "matar@liilsa.com",
    "image": "https://liilsol.com/og-image.jpg",
    "logo": "https://liilsol.com/logo.jpg",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "حي المرسلات",
      "addressLocality": "الرياض",
      "addressRegion": "الرياض",
      "postalCode": "12345",
      "addressCountry": "SA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "24.7480288",
      "longitude": "46.6850197"
    },
    "hasMap": "https://www.google.com/maps/place/liilSOL/@24.7480288,46.6824448,17z",
    "areaServed": [
      {
        "@type": "City",
        "name": "الرياض"
      },
      {
        "@type": "Country",
        "name": "Saudi Arabia"
      }
    ],
    "priceRange": "$$",
    "currenciesAccepted": "SAR",
    "paymentAccepted": "تحويل بنكي",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "sameAs": [
      "https://www.instagram.com/liilsa.sol",
      "https://www.google.com/maps/place/liilSOL/@24.7480288,46.6824448,17z"
    ]
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://liilsol.com/#service",
    "serviceType": "خدمة سيولة بالشراكة",
    "name": "سيولة تابي وكاش تمارا ومدفوع",
    "description": "ندخل مع العميل كشركاء في شراء الجهاز عبر تابي أو تمارا أو مدفوع، ونتكفل بالدفعة الأولى بحسب الخطة، ثم نبيع الجهاز ونحوّل صافي المبلغ إلى الحساب البنكي.",
    "provider": {
      "@type": "LocalBusiness",
      "@id": "https://liilsol.com/#business"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Saudi Arabia"
    },
    "audience": {
      "@type": "Audience",
      "audienceType": "عملاء تابي وتمارا ومدفوع في السعودية"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "خدمات السيولة والكاش",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "سيولة تابي",
            "alternateName": ["كاش تابي", "تسييل تابي", "تحويل تابي إلى كاش"],
            "description": "تحويل رصيد تابي إلى كاش في الحساب البنكي بعد إكمال خطوات الشراء بالشراكة"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "كاش تمارا",
            "alternateName": ["سيولة تمارا", "سلفة تمارا", "تحويل رصيد تمارا"],
            "description": "تحويل رصيد تمارا إلى كاش في الحساب البنكي بعد إكمال خطوات الشراء بالشراكة"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "سيولة مدفوع",
            "alternateName": ["كاش مدفوع", "تحويل مدفوع"],
            "description": "تحويل رصيد مدفوع إلى كاش نقدي فوري في حسابك البنكي"
          }
        }
      ]
    }
  }

  // faqSchema removed - each page defines its own FAQPage to avoid duplication in Google Search Console
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "سيولة تابي وتمارا",
        "item": "https://liilsol.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "افحص حدك واطلب السيولة",
        "item": "https://liilsol.com/check-limit"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "سيولة تابي",
        "item": "https://liilsol.com/siyola-tabby"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "كاش تمارا",
        "item": "https://liilsol.com/cash-tamara"
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "الامتثال الشرعي",
        "item": "https://liilsol.com/shariah"
      },
      {
        "@type": "ListItem",
        "position": 6,
        "name": "سياسة الخصوصية",
        "item": "https://liilsol.com/privacy"
      }
    ]
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://liilsol.com/#website",
    "name": "مطر - سيولة تابي وتمارا",
    "alternateName": ["مطر", "سحابة غيث ماحسبت حسابها", "سيولة تابي", "كاش تمارا"],
    "url": "https://liilsol.com",
    "description": "سيولة تابي وكاش تمارا ومدفوع مع حاسبة للصافي وإكمال الطلب عبر الواتساب. خدمة متاحة في السعودية بنظام شراكة واضح.",
    "inLanguage": "ar-SA",
    "publisher": {
      "@type": "Organization",
      "@id": "https://liilsol.com/#business"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://liilsol.com/articles?search={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  }

const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "خدمة سيولة تابي وكاش تمارا",
    "description": "تحويل رصيد تابي وتمارا ومدفوع إلى كاش نقدي فوري",
    "brand": {
      "@type": "Brand",
      "name": "مطر"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "50",
      "bestRating": "5",
      "worstRating": "1"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "SAR",
      "lowPrice": "1000",
      "highPrice": "50000",
      "offerCount": "3"
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
    </>
  )
}
