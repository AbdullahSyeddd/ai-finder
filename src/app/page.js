// src/app/page.js
import React from 'react'; 
import ClientHome from '../components/ClientHome'; 

export const metadata = {
  title: "AI Finder – Discover the Best AI Tools for Writing, Coding & Productivity (2026)",
  description: "Explore 100+ free and premium AI tools for writing, image generation, coding, video editing, automation, and business growth. Compare features, pricing, and reviews on AI Finder.",
};

export default function Home() {
  return <ClientHome />;
}