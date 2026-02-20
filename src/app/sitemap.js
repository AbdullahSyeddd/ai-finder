// src/app/sitemap.js
import { toolsData } from "@/data/tools"; // 👈 Ye line zaroori hai data lane ke liye

export default function sitemap() {
  const baseUrl = 'https://aiifinder.com';

  // 1. Static Pages (Naye Compare aur Stack pages add kiye gaye hain)
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/compare`, // 👈 Naya Compare Hub
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/stack`, // 👈 Naya Stack Builder
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ];

  // 2. DYNAMIC CATEGORY PAGES (Ye logic khud saari categories dhond kar unke URLs banayegi)
  const uniqueCategories = [...new Set(toolsData.map((tool) => tool.category))];
  const categoryPages = uniqueCategories.map((category) => {
    // "Image Gen" ko "image-gen" mein convert karta hai
    const categorySlug = category.toLowerCase().replace(/\s+/g, '-'); 
    return {
      url: `${baseUrl}/category/${categorySlug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8, 
    };
  });

  // 3. DYNAMIC TOOLS LOOP (Ye line 106 tools ke URLs banayegi)
  const toolPages = toolsData.map((tool) => ({
    url: `${baseUrl}/tool/${tool.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.9, // Tools important hain, isliye high priority
  }));

  // Teeno lists ko mila kar return karo
  return [...staticPages, ...categoryPages, ...toolPages];
}