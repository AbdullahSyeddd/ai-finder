// src/app/layout.js
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CookieBanner from "../components/CookieBanner";

const inter = Inter({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata = {
  // 1. Apni site ka base URL yahan define karein (filhal Vercel ya ngrok ka daal sakte hain)
  metadataBase: new URL('https://ai-finderr.vercel.app/'), 

  title: {
    default: "AI-Finder | Best AI Tools Directory",
 
  },
  description: "Discover the best AI tools for coding, writing, video, and design. A curated directory updated daily.",
  
  alternates: {
    canonical: './',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#0B1120] text-slate-200 antialiased`}>
        <Navbar />
        <main className="relative z-10">{children}</main>
        <Footer />
        <CookieBanner /> 
      </body>
    </html>
  );
}