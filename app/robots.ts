import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/cc', '/admin'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/cc', '/admin'],
      },
    ],
    sitemap: 'https://liilsol.com/sitemap.xml',
  }
}
