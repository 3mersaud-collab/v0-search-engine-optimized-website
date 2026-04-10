export function SeoSchema() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://liilsol.com/#business",
    "name": "مطر",
    "alternateName": ["مطر", "سحابة غيث ماحسبت حسابها", "مطر - سحابة غيث ماحسبت حسابها"],
    "description": "سيولة نقدية فورية وسلفة من رصيدك. ندخل كشركاء معكم في شراء الجهاز عبر تابي وتمارا ومدفوع ونتكفل بالدفعة الأولى. كاش تابي، كاش تمارا، سلفة تابي، سلفة تمارا، تحويل جوالات الى كاش خلال ساعة.",
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
    "serviceType": "خدمة سيولة وسلفة بالشراكة",
    "name": "سيولة تابي وتمارا ومدفوع - شراكة في شراء الجهاز",
    "description": "نقوم بالدخول كشركاء معكم في شراء الجهاز عبر تابي وتمارا ومدفوع ونتكفل بالدفعة الأولى مقابل نسبة الشراكة ثم نبيعه ونحول لكم السيولة خلال ساعة.",
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
            "alternateName": ["كاش تابي", "سلفة تابي", "تحويل تابي"],
            "description": "تحويل رصيد تابي إلى كاش نقدي فوري في حسابك البنكي"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "كاش تمارا",
            "alternateName": ["سيولة تمارا", "سلفة تمارا", "تحويل تمارا"],
            "description": "تحويل رصيد تمارا إلى كاش نقدي فوري في حسابك البنكي"
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

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://liilsol.com/#faq",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "كيف أحصل على سيولة من تابي؟",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ادخل متجر نون أو اكسترا، أضف منتجات بالمبلغ المطلوب، اختر تابي كوسيلة دفع، وبعد ظهور تقسيم الدفعات صور الشاشة وأرسلها لنا على واتساب 0563457734. نحول الكاش لحسابك خلال ساعة."
        }
      },
      {
        "@type": "Question",
        "name": "كيف أحصل على كاش من تمارا؟",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ادخل متجر نون أو اكسترا، أضف منتجات بالمبلغ المطلوب، اختر تمارا كوسيلة دفع، أضف بطاقة بنكية بدون رصيد (لا تستخدم Apple Pay أو بطاقة برصيد)، اضغط ادفع، وصور الشاشة وأرسلها لنا."
        }
      },
      {
        "@type": "Question",
        "name": "ما هي رسوم سيولة تابي وتمارا؟",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "الرسوم الإدارية 10% من مبلغ البيع. الدفعة الأولى 25%. فرق البيع يتراوح من 10% للمبالغ فوق 12,000 ريال إلى 15% للمبالغ الأقل من 5,500 ريال."
        }
      },
      {
        "@type": "Question",
        "name": "كم يستغرق تحويل الكاش؟",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "يتم تحويل المبلغ لحسابك البنكي غالباً خلال ساعة من اكتمال الخطوات وإرسال صورة الشاشة عبر الواتساب."
        }
      },
      {
        "@type": "Question",
        "name": "هل التقديم يتم من الموقع أم من الواتساب؟",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "الحسبة والشرح متاحة داخل الموقع، أما إكمال الطلب والتأكيد النهائي فيتم عبر الواتساب مباشرة على الرقم 0563457734."
        }
      },
      {
        "@type": "Question",
        "name": "ما هي المتاجر المتاحة لخدمة السيولة؟",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "تابي وتمارا متاحين في متجر نون (noon.com) ومتجر اكسترا (extra.com). مدفوع متاح في متجر المنيع (almanea.sa)."
        }
      },
      {
        "@type": "Question",
        "name": "هل خدمة السيولة آمنة؟",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "نعم، خدمتنا آمنة 100%. نحن لا نطلب كلمات مرور أو بيانات حساسة. العملية تتم من خلالك مباشرة وأنت تتحكم في كل الخطوات. لدينا تقييم 5 نجوم على Google Maps."
        }
      },
      {
        "@type": "Question",
        "name": "كيف أفحص حدي في تابي وتمارا؟",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "افتح تطبيق تابي أو تمارا، ادخل أحد المتاجر المتاحة، أضف منتجات في السلة، واختر التطبيق كوسيلة دفع. سيظهر لك الحد المتاح أو رسالة الرفض."
        }
      },
      {
        "@type": "Question",
        "name": "ما هو رقم التوا��ل للحصول على سيولة؟",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "تواصل معنا عبر واتساب على الرقم 0563457734 أو البريد الإلكتروني matar@liilsa.com. نحن متاحين 24/7."
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
    "description": "سيولة تابي وتمارا ومدفوع مع حاسبة دقيقة وإكمال الطلب عبر الواتساب. خدمة سريعة في السعودية خلال ساعة.",
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
