// src/app/layout.js
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CookieBanner from "../components/CookieBanner";
import ExitIntentPopup from "../components/ExitIntentPopup"; // ✅ Exit-Intent Import kiya gaya hai

const inter = Inter({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata = {
  metadataBase: new URL('https://aiifinder.com'),

  title: {
    default: "AI Finder | Best AI Tools Directory (2026)",
    template: "%s | AI Finder",
  },

  description:
    "AI Finder is the ultimate AI tools directory to discover, compare, and choose the best AI software for writing, image generation, coding, marketing, productivity, automation, and business growth.",

  applicationName: "AI Finder",

  alternates: {
    canonical: "./",
  },

  openGraph: {
    title: "AI Finder | Best AI Tools Directory (2026)",
    description:
      "Discover and compare 100+ AI tools for writing, coding, image generation, productivity, and automation. Updated rankings and detailed comparisons on AI Finder.",
    url: "https://aiifinder.com",
    siteName: "AI Finder",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "AI Finder | Discover the Best AI Tools (2026)",
    description:
      "Explore top AI tools for writing, coding, marketing, productivity, and automation. Compare features, pricing, and reviews on AI Finder.",
  },

  verification: {
    google: "stHlXSSxczJ6p8U6fUq-Uw0OqNCwtSXW9iXTR0fKOx4",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#0B1120] text-slate-200 antialiased`}>
        
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-0TH0R2E8D1" 
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0TH0R2E8D1');
          `}
        </Script>

        <Navbar />
        
        {/* ✅ ExitIntentPopup yahan active hai, jo user ke jane par nazar aayega */}
        <ExitIntentPopup /> 

        {/* Padding-top added to ensure content doesn't hide under fixed Navbar */}
        <main className="relative z-10 pt-10">{children}</main>
        <Footer />
        <CookieBanner /> 
      </body>
    </html>
  );
}