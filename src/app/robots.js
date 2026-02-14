// src/app/robots.js

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/', // Agar koi private page ho to yahan likhein
    },
    sitemap: 'https://ai-finderr.vercel.app//sitemap.xml',
  }
}