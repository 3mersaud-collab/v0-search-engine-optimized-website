export function SeoSchema() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://liilsol.com/#business",
    "name": "مطر",
    "alternateName": ["مطر", "سحابة غيث ماحسبت حسابها", "مطر - سحابة غيث ماحسبت حسابها"],
    "description": "سلفة تابي فورية وتحويل تابي الى كاش. ندخل كشركاء معكم في شراء الجهاز عبر تابي ونتكفل بالدفعة الأولى. كاش تابي، سلفة تابي، تحويل تابي الى كاش خلال ساعتين. أفضل من تمارا.",
    "url": "https://liilsol.com",
    "telephone": "+966590360039",
    "email": "matar@liilsa.com",
    "image": "https://liilsol.com/og-image.jpg",
    "logo": "https://liilsol.com/logo.png",
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
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "50",
      "bestRating": "5",
      "worstRating": "1"
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
    "serviceType": "سلفة تابي وتحويل تابي الى كاش",
    "name": "سلفة تابي - تحويل تابي الى كاش",
    "description": "نقوم بالدخول كشركاء معكم في شراء الجهاز عبر تابي ونتكفل بالدفعة الأولى مقابل نسبة الشراكة ثم نبيعه ونحول لكم سلفة تابي خلال ساعتين. أفضل وأسرع من تمارا.",
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
      "audienceType": "عملاء تابي في السعودية"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "خدمات سلفة تابي والكاش",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "سلفة تابي",
            "alternateName": ["كاش تابي", "سيولة تابي", "تحويل تابي الى كاش"],
            "description": "تحويل تابي الى كاش نقدي فوري في حسابك البنكي - أسرع من تمارا"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "كاش تابي",
            "alternateName": ["سلفة تابي", "تحويل تابي"],
            "description": "كاش تابي فوري في حسابك البنكي خلال ساعتين"
          }
        }
      ]
    }
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://liilsol.com/#faq",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "كيف أحصل على سلفة تابي؟",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ادخل متجر نون أو اكسترا، أضف منتجات بالمبلغ المطلوب، اختر تابي كوسيلة دفع، وبعد ظهور تقسيم الدفعات صور الشاشة وأرسلها لنا على واتساب 0590360039. نحول الكاش لحسابك خلال ساعتين."
        }
      },
      {
        "@type": "Question",
        "name": "لماذا تابي أفضل من تمارا؟",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "تابي أسهل في الاستخدام - فقط صور الشاشة وأرسلها. بينما تمارا يتطلب إضافة بطاقة بدون رصيد والضغط على ادفع، وخطوات أكثر تعقيداً."
        }
      },
      {
        "@type": "Question",
        "name": "ما هي رسوم سلفة تابي؟",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "الرسوم الإدارية 10% من مبلغ البيع. الدفعة الأولى 25%. فرق البيع يتراوح من 10% للمبالغ فوق 12,000 ريال إلى 15% للمبالغ الأقل من 5,500 ريال."
        }
      },
      {
        "@type": "Question",
        "name": "كم يستغرق تحويل كاش تابي؟",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "نقوم بتحويل المبلغ لحسابك البنكي خلال ساعتين فقط من استلام صورة الشاشة وموافقتك على العملية."
        }
      },
      {
        "@type": "Question",
        "name": "ما هي المتاجر المتاحة لسلفة تابي؟",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "تابي متاح في متجر نون (noon.com) ومتجر اكسترا (extra.com). خدمتنا أسرع وأسهل من تمارا."
        }
      },
      {
        "@type": "Question",
        "name": "هل سلفة تابي آمنة؟",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "نعم، خدمتنا آمنة 100%. نحن لا نطلب كلمات مرور أو بيانات حساسة. العملية تتم من خلالك مباشرة وأنت تتحكم في كل الخطوات. لدينا تقييم 5 نجوم على Google Maps."
        }
      },
      {
        "@type": "Question",
        "name": "كيف أفحص حدي في تابي؟",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "افتح تطبيق تابي، ادخل أحد المتاجر المتاحة، أضف منتجات في السلة، واختر تابي كوسيلة دفع. سيظهر لك الحد المتاح أو رسالة الرفض."
        }
      },
      {
        "@type": "Question",
        "name": "ما هو رقم التواصل للحصول على سلفة تابي؟",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "تواصل معنا عبر واتساب على الرقم 0590360039 أو البريد الإلكتروني matar@liilsa.com. نحن متاحين 24/7."
        }
      }
    ]
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "سلفة تابي",
        "item": "https://liilsol.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "افحص حدك واطلب سلفة تابي",
        "item": "https://liilsol.com/check-limit"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "سلفة تابي",
        "item": "https://liilsol.com/siyola-tabby"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "كاش تابي",
        "item": "https://liilsol.com/cash-tabby"
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
    "name": "مطر - سلفة تابي",
    "alternateName": ["مطر", "سحابة غيث ماحسبت حسابها", "سلفة تابي", "كاش تابي", "تحويل تابي الى كاش"],
    "url": "https://liilsol.com",
    "description": "سلفة تابي وتحويل تابي الى كاش - كاش فوري من رصيدك خلال ساعتين. أفضل خدمة سلفة تابي في السعودية - أسرع من تمارا.",
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
    "name": "خدمة سلفة تابي - تحويل تابي الى كاش",
    "description": "تحويل تابي الى كاش نقدي فوري - أفضل من تمارا",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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
