import { MetadataRoute } from 'next'
import { chains } from '@/data'

export default function sitemap(): MetadataRoute.Sitemap {
  // Static pages
  const staticPages = [
    {
      url: 'https://fastketo.co',
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: 'https://fastketo.co/about',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: 'https://fastketo.co/guides',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: 'https://fastketo.co/privacy',
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
  ]

  // Category pages
  const categoryPages = [
    'fast-food',
    'pub-chains',
    'cafes',
    'casual-dining',
    'sushi',
  ].map((category) => ({
    url: `https://fastketo.co/${category}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // Dynamic chain pages
  const chainPages = chains.map((chain) => ({
    url: `https://fastketo.co/chains/${chain.slug}`,
    lastModified: new Date(chain.menuLastUpdated),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [...staticPages, ...categoryPages, ...chainPages]
}