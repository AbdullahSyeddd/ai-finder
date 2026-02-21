// src/app/privacy/page.js
import React from 'react';

export const metadata = {
  title: "Privacy Policy | AI Finder", 
  description: "Read the Privacy Policy of AI Finder to understand how we protect user data, ensure secure browsing, and maintain transparency.",
};

const ShieldIcon = () => (
  <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const CookieIcon = () => (
  <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const LockIcon = () => (
  <svg className="w-6 h-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  </svg>
);

export default function Privacy() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-400 font-sans selection:bg-indigo-500/30">
      
      {/* Background Ambience */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-indigo-900/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-slate-900/20 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-32 pb-20">
        
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-indigo-500"></span>
            <span className="text-indigo-400 font-mono text-sm tracking-wider uppercase">Legal Documentation</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-lg text-slate-500 max-w-2xl">
            We value your trust. This document explains how AI Directory handles your data, cookies, and your rights transparently.
            <br/>
            <span className="text-xs font-mono bg-slate-900 border border-slate-800 px-2 py-1 rounded mt-3 inline-block text-slate-500">
              Last Updated: February 12, 2026
            </span>
          </p>
        </div>

        {/* ⚡ Quick Summary Cards (The Unique Part) */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {/* Card 1 */}
          <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm hover:border-emerald-500/30 transition-colors group">
            <div className="mb-4 bg-slate-950 w-12 h-12 rounded-lg flex items-center justify-center border border-slate-800 group-hover:border-emerald-500/30">
              <ShieldIcon />
            </div>
            <div className="text-white font-semibold mb-2">Data Protection</div>
            <p className="text-sm text-slate-500">We prioritize your privacy. We do not sell your personal data to third parties.</p>
          </div>
          
          {/* Card 2 */}
          <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm hover:border-amber-500/30 transition-colors group">
            <div className="mb-4 bg-slate-950 w-12 h-12 rounded-lg flex items-center justify-center border border-slate-800 group-hover:border-amber-500/30">
              <CookieIcon />
            </div>
            <div className="text-white font-semibold mb-2">Cookies & Ads</div>
            <p className="text-sm text-slate-500">We use cookies to improve experience and display relevant ads via Google AdSense.</p>
          </div>

          {/* Card 3 */}
          <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm hover:border-indigo-500/30 transition-colors group">
            <div className="mb-4 bg-slate-950 w-12 h-12 rounded-lg flex items-center justify-center border border-slate-800 group-hover:border-indigo-500/30">
              <LockIcon />
            </div>
            <div className="text-white font-semibold mb-2">Your Rights</div>
            <p className="text-sm text-slate-500">You have full control over your data under CCPA and GDPR regulations.</p>
          </div>
        </div>

        {/* 📜 Detailed Content */}
        <div className="space-y-12 border-l border-slate-800 pl-8 ml-4 md:ml-0">
          
          {/* Section 1 */}
          <section className="relative">
            <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-slate-950 bg-slate-800"></span>
            <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
            <p className="leading-relaxed mb-4">
              When you visit <strong>AI Directory</strong>, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device.
            </p>
            <p className="leading-relaxed">
              Standard log files are used. These files log visitors when they visit websites. The information collected includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks.
            </p>
          </section>

          {/* Section 2 */}
          <section className="relative">
            <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-slate-950 bg-slate-800"></span>
            <h2 className="text-2xl font-bold text-white mb-4">2. Cookies and Web Beacons</h2>
            <p className="leading-relaxed mb-4">
              Like any other website, AI Directory uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited.
            </p>
            <div className="p-4 bg-slate-900 border border-slate-800 rounded-lg text-sm">
              <strong className="text-indigo-400 block mb-2">Google DoubleClick DART Cookie</strong>
              Google is a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to our site and other sites on the internet. <a href="https://policies.google.com/technologies/ads" className="text-indigo-400 underline hover:text-white transition-colors" target="_blank" rel="nofollow noopener noreferrer" >Click here to opt-out</a>.
            </div>
          </section>

          {/* Section 3 */}
          <section className="relative">
            <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-slate-950 bg-slate-800"></span>
            <h2 className="text-2xl font-bold text-white mb-4">3. Third Party Policies</h2>
            <p className="leading-relaxed">
              AI Directory's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.
            </p>
          </section>

          {/* Section 4 */}
          <section className="relative">
            <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-slate-950 bg-slate-800"></span>
            <h2 className="text-2xl font-bold text-white mb-4">4. GDPR & CCPA Rights</h2>
            <p className="leading-relaxed mb-4">
              We would like to make sure you are fully aware of all of your data protection rights.
            </p>
            <ul className="grid md:grid-cols-2 gap-4">
              <li className="flex items-center gap-2 text-sm text-slate-400">
                <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span> The right to access
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-400">
                <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span> The right to rectification
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-400">
                <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span> The right to erasure
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-400">
                <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span> The right to restrict processing
              </li>
            </ul>
          </section>

          {/* Footer Note */}
          <div className="pt-10 border-t border-slate-800">
            <p className="text-sm text-slate-600">
              If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}