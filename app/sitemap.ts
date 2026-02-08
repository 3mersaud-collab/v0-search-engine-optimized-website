import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://liilsol.com'
  const currentDate = new Date()

  // Article slugs
  const articleSlugs = [
    'siyola-tabby-guide',
    'cash-tamara-steps',
    'salfa-tabby-tamara',
    'siyola-guide-beginners',
    'best-stores-siyola',
    'avoid-scams-siyola',
  ]

  const staticPages: MetadataRoute.Sitemap = [
    // Homepage - highest priority
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1,
    },
    // Main keyword landing pages - very high priority for SEO
    {
      url: `${baseUrl}/siyola`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/siyola-tabby`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/cash-tamara`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    // Check limit page
    {
      url: `${baseUrl}/check-limit`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    // Articles index
    {
      url: `${baseUrl}/articles`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    // Order page
    {
      url: `${baseUrl}/order`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    // Track order
    {
      url: `${baseUrl}/track-order`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    // Reviews
    {
      url: `${baseUrl}/reviews`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.85,
    },
    // Add review
    {
      url: `${baseUrl}/add-review`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    // Referral
    {
      url: `${baseUrl}/referral`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    // About
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    // Terms
    {
      url: `${baseUrl}/terms`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]

  // Article pages
  const articlePages: MetadataRoute.Sitemap = articleSlugs.map((slug) => ({
    url: `${baseUrl}/articles/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...articlePages]
}
