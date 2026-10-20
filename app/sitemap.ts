import type { MetadataRoute } from 'next'

const siteUrl = 'https://joannasavage.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/about', '/services', '/yachts', '/contact']
  const lastModified = new Date()

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.8,
  }))
}
