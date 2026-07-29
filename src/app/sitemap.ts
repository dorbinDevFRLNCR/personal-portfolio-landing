import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://kirill-pavlov-portfolio.vercel.app'
  const locales = ['de', 'en', 'ru']

  // Главные страницы для каждого языка
  const routes = locales.map((locale) => ({
    url: `${baseUrl}/${locale}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 1.0,
  }))

  return [...routes]
}
