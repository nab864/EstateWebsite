import { MetadataRoute } from 'next'

export const dynamic = 'force-static'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://estate-website-black.vercel.app',
      lastModified: "2026-01-07",
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://estate-website-black.vercel.app/directory',
      lastModified: "2026-01-07",
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://estate-website-black.vercel.app/colorado-estate-management',
      lastModified: "2026-01-07",
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]
}