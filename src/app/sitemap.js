// src/app/sitemap.js
import { toolsData } from "@/data/tools";

// ✅ ADDED: Same clean slug logic to ensure your sitemap URLs exactly match your live site
const generateSlug = (text) => {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
};

export default function sitemap() {
  const baseUrl = 'https://aiifinder.com';

  // 1. Static Pages (Stack aur Compare Hub shamil hain)
  const staticPages = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'daily', priority: 1 },
    { url: `${baseUrl}/compare`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/stack`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.5 },
    { url: `${baseUrl}/privacy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.5 },
  ];

  // 2. Featured Dynamic Comparisons (Google ko sample dene ke liye)
  const featuredComparisons = [
    "chatgpt-vs-claude-3",
    "midjourney-vs-dall-e-3",
    "jasper-ai-vs-copy-ai",
  ].map((slug) => ({
    url: `${baseUrl}/compare/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  // 3. DYNAMIC CATEGORY PAGES
  const uniqueCategories = [...new Set(toolsData.map((tool) => tool.category))];
  const categoryPages = uniqueCategories.map((category) => {
    // ✅ UPDATED: Used generateSlug for flawless URL generation
    const categorySlug = generateSlug(category); 
    return {
      url: `${baseUrl}/category/${categorySlug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8, 
    };
  });

  // 4. DYNAMIC TOOLS LOOP (All tools automatically included)
  const toolPages = toolsData.map((tool) => ({
    url: `${baseUrl}/tool/${tool.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.9, 
  }));

  // Sab ko mila kar return karo
  return [...staticPages, ...featuredComparisons, ...categoryPages, ...toolPages];
}