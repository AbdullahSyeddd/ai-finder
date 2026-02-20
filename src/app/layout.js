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
    default: "AI-Finder | The Ultimate AI Tools Directory",
    template: "%s | AI-Finder"
  },
  description: "Discover, compare, and build your perfect AI stack. A curated directory of 100+ AI tools updated daily.",
  alternates: {
    canonical: './',
  },
  verification: {
    google: 'stHlXSSxczJ6p8U6fUq-Uw0OqNCwtSXW9iXTR0fKOx4',
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