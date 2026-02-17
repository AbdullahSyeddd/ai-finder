// src/app/sitemap.js
import { toolsData } from "@/data/tools"; // 👈 Ye line zaroori hai data lane ke liye

export default function sitemap() {
  const baseUrl = 'https://aiifinder.com';

  // 1. Static Pages (Jo aapne pehle likhe thay)
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
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

  // 👇 2. DYNAMIC TOOLS LOOP (Ye line 106 tools ke URLs banayegi)
  const toolPages = toolsData.map((tool) => ({
    url: `${baseUrl}/tool/${tool.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.9, // Tools important hain, isliye high priority
  }));

  // Dono lists ko mila kar return karo
  return [...staticPages, ...toolPages];
}