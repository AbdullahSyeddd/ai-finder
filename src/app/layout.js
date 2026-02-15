// src/app/layout.js
import { Inter } from "next/font/google";
import Script from "next/script"; // 👈 1. Ye Import zaroori hai
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CookieBanner from "../components/CookieBanner";

const inter = Inter({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata = {
  metadataBase: new URL('https://aiifinder.com'), 

  title: {
    default: "AI-Finder | Best AI Tools Directory",
  },
  description: "Discover the best AI tools for coding, writing, video, and design. A curated directory updated daily.",
  
  alternates: {
    canonical: './',
  },

  verification: {
    google: 'stHlXSSxczJ6p8U6fUq-Uw0OqNCwtSXW9iXTR0fKOx4', // Aapka Google Verification code
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#0B1120] text-slate-200 antialiased`}>
        
        {/* 👇 Google Analytics Code Starts Here */}
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
        {/* 👆 Google Analytics Code Ends Here */}

        <Navbar />
        <main className="relative z-10">{children}</main>
        <Footer />
        <CookieBanner /> 
      </body>
    </html>
  );
}