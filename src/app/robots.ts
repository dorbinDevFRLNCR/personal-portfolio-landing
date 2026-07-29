// src/app/robots.ts
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/*/impressum', '/*/datenschutz'], // Блокирует доступ для всех языковых роутов (/de/, /en/, /ru/)
      },
    ],
    sitemap: 'https://kirill-pavlov-portfolio.vercel.app/sitemap.xml',
  }
}
