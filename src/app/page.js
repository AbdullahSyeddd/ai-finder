// src/app/page.js
import React from 'react'; 
import ClientHome from '../components/ClientHome'; 

export const metadata = {
  title: "AI-Finder - Discover Top AI Tools (2026) ",
  description: "Explore 100+ free & premium AI tools for writing, image creation, and productivity Your all-in-one platform for creators, developers & innovators.",
};

export default function Home() {
  return <ClientHome />;
}