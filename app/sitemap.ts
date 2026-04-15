import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://liilsol.com'
  const now = new Date()

  const articleSlugs = [
    'siyola-tabby-guide',
    'cash-tamara-steps',
    'salfa-tabby-tamara',
    'siyola-guide-beginners',
    'best-stores-siyola',
    'avoid-scams-siyola',
    'tabby-vs-tamara',
    'كيف-احول-رصيد-تابي-الى-كاش',
    'سيولة-تابي-بدون-تحويل-راتب',
    'كم-عمولة-تسييل-تابي-وتمارا',
  ]

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl,                              lastModified: now, changeFrequency: 'daily',   priority: 1.0  },
    { url: `${baseUrl}/siyola-tabby`,            lastModified: now, changeFrequency: 'weekly',  priority: 0.98 },
    { url: `${baseUrl}/cash-tamara`,             lastModified: now, changeFrequency: 'weekly',  priority: 0.98 },
    { url: `${baseUrl}/siyola`,                  lastModified: now, changeFrequency: 'weekly',  priority: 0.95 },
    // Local SEO pages
    { url: `${baseUrl}/siyola-riyadh`,           lastModified: now, changeFrequency: 'weekly',  priority: 0.93 },
    { url: `${baseUrl}/siyola-jeddah`,           lastModified: now, changeFrequency: 'weekly',  priority: 0.93 },
    { url: `${baseUrl}/siyola-dammam`,           lastModified: now, changeFrequency: 'weekly',  priority: 0.90 },
    // New keyword-targeted pages
    { url: `${baseUrl}/salfa-tabby`,             lastModified: now, changeFrequency: 'weekly',  priority: 0.96 },
    { url: `${baseUrl}/salfa-tamara`,            lastModified: now, changeFrequency: 'weekly',  priority: 0.96 },
    { url: `${baseUrl}/tasyeel-tabby`,           lastModified: now, changeFrequency: 'weekly',  priority: 0.95 },
    { url: `${baseUrl}/tahweel-tabby-cash`,      lastModified: now, changeFrequency: 'weekly',  priority: 0.95 },
    { url: `${baseUrl}/siyola-without-salary`,   lastModified: now, changeFrequency: 'weekly',  priority: 0.94 },
    // Supporting pages
    { url: `${baseUrl}/check-limit`,             lastModified: now, changeFrequency: 'weekly',  priority: 0.88 },
    { url: `${baseUrl}/reviews`,                 lastModified: now, changeFrequency: 'daily',   priority: 0.85 },
    { url: `${baseUrl}/articles`,                lastModified: now, changeFrequency: 'weekly',  priority: 0.80 },
    { url: `${baseUrl}/about`,                   lastModified: now, changeFrequency: 'monthly', priority: 0.70 },
    { url: `${baseUrl}/referral`,                lastModified: now, changeFrequency: 'monthly', priority: 0.65 },
    { url: `${baseUrl}/add-review`,              lastModified: now, changeFrequency: 'monthly', priority: 0.55 },
    { url: `${baseUrl}/shariah`,                 lastModified: now, changeFrequency: 'monthly', priority: 0.50 },
    { url: `${baseUrl}/track-order`,             lastModified: now, changeFrequency: 'monthly', priority: 0.45 },
    { url: `${baseUrl}/privacy`,                 lastModified: now, changeFrequency: 'yearly',  priority: 0.20 },
    { url: `${baseUrl}/terms`,                   lastModified: now, changeFrequency: 'yearly',  priority: 0.20 },
  ]

  const articlePages: MetadataRoute.Sitemap = articleSlugs.map((slug) => ({
    url: `${baseUrl}/articles/${encodeURIComponent(slug)}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }))

  return [...staticPages, ...articlePages]
}
