import { toolsData } from "@/data/tools"; 
import { notFound } from "next/navigation";
import Link from "next/link";

export async function generateMetadata({ params }) {
  const { slug } = await params; 
  const tool = toolsData.find((t) => t.slug === slug);
  
  if (!tool) return { title: "Tool Not Found" };

  return {
    title: tool.seoTitle,
    description: tool.seoDescription,
    keywords: tool.keywords,
    alternates: {
      canonical: `https://aiifinder.com/tool/${tool.slug}`,
    },
    openGraph: {
      title: tool.seoTitle,
      description: tool.seoDescription,
      url: `https://aiifinder.com/tool/${tool.slug}`,
      type: 'article',
    }
  };
}

export default async function ToolPage({ params }) {
  const { slug } = await params; 
  const tool = toolsData.find((t) => t.slug === slug);

  if (!tool) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#030712] text-slate-200 relative overflow-hidden font-sans selection:bg-indigo-500/30">
      
      {/* 1. BACKGROUND FX (Ambient Glows) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] -z-10 pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 pt-32 pb-20 relative z-10">
        
        {/* 2. BREADCRUMBS (Clean & Minimal) */}
        <nav className="flex items-center text-sm text-slate-500 mb-8 font-medium">
            <Link href="/" className="hover:text-indigo-400 transition-colors">Home</Link> 
            <span className="mx-3 text-slate-700">/</span>
            <Link href="/" className="hover:text-indigo-400 transition-colors capitalize">{tool.category}</Link> 
            <span className="mx-3 text-slate-700">/</span>
            <span className="text-slate-200">{tool.name}</span>
        </nav>

        {/* 3. HERO SECTION (Glass Card + Gradient Text) */}
        <div className="grid lg:grid-cols-3 gap-10 mb-16">
            
            {/* Left: Main Info */}
            <div className="lg:col-span-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-wider mb-6">
                    <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"/> 
                    {tool.category} Tool
                </div>

                <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-6 text-white drop-shadow-2xl">
                    {tool.name}
                </h1>
                <p className="text-xl md:text-2xl text-slate-400 leading-relaxed font-light mb-8 max-w-2xl">
                    {tool.seoDescription}
                </p>

                <div className="flex flex-wrap items-center gap-4">
                    <a 
                      href={tool.websiteUrl} 
                      target="_blank" 
                      rel="nofollow noopener noreferrer"
                      className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-indigo-600 rounded-full hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 shadow-[0_0_20px_-5px_rgba(79,70,229,0.5)] hover:shadow-[0_0_25px_-5px_rgba(79,70,229,0.7)]"
                    >
                        Visit Official Website
                        <svg className="w-5 h-5 ml-2 -mr-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                    </a>
                    
                    {/* Rating Badge */}
                    <div className="flex items-center gap-2 px-5 py-3.5 rounded-full bg-slate-800/50 border border-slate-700 backdrop-blur-sm">
                        <div className="flex text-yellow-400">
                           {[...Array(5)].map((_, i) => (
                               <svg key={i} className={`w-5 h-5 ${i < Math.floor(tool.rating) ? "fill-current" : "text-slate-600 fill-current"}`} viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                           ))}
                        </div>
                        <span className="font-bold text-white">{tool.rating}</span>
                        <span className="text-slate-500 text-sm">/ 5.0</span>
                    </div>
                </div>
            </div>

            {/* Right: Pricing Card (Floating Glass) */}
            <div className="hidden lg:block">
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 shadow-2xl">
                    <h3 className="text-slate-400 text-sm font-semibold uppercase tracking-wider mb-4">Pricing Model</h3>
                    <div className="flex flex-wrap gap-2 mb-6">
                        {tool.pricing?.map((p, i) => (
                            <span key={i} className="px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium">
                                {p}
                            </span>
                        ))}
                    </div>
                    <div className="w-full h-px bg-slate-700/50 mb-4" />
                    <p className="text-slate-400 text-sm mb-2">Perfect for:</p>
                    <div className="flex flex-wrap gap-2">
                         {tool.keywords?.slice(0,3).map((kw, i) => (
                            <span key={i} className="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded border border-slate-700">#{kw}</span>
                        ))}
                    </div>
                </div>
            </div>
        </div>

        {/* 4. CONTENT GRID (Pros/Cons & Description) */}
        <div className="grid md:grid-cols-12 gap-10">
            
            {/* Main Content (8 Columns) */}
            <div className="md:col-span-8 space-y-10">
                
                {/* Description Box */}
                <div className="prose prose-invert prose-lg max-w-none">
                    <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                        <span className="w-1 h-8 bg-indigo-500 rounded-full"/>
                        Why use {tool.name}?
                    </h2>
                    <p className="text-slate-300 leading-relaxed text-lg bg-slate-900/30 p-6 rounded-2xl border border-slate-800">
                        {tool.fullDescription}
                    </p>
                </div>

                {/* Pros & Cons (Modern Cards) */}
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-slate-900/40 border border-emerald-500/20 rounded-2xl p-6 hover:bg-slate-900/60 transition-colors">
                        <h3 className="text-xl font-bold text-emerald-400 mb-4 flex items-center gap-2">
                           <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                           The Good
                        </h3>
                        <ul className="space-y-3">
                            {tool.pros?.map((pro, index) => (
                                <li key={index} className="flex items-start gap-3 text-slate-300">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2.5 flex-shrink-0"/>
                                    <span className="leading-snug">{pro}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-slate-900/40 border border-rose-500/20 rounded-2xl p-6 hover:bg-slate-900/60 transition-colors">
                        <h3 className="text-xl font-bold text-rose-400 mb-4 flex items-center gap-2">
                           <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                           The Bad
                        </h3>
                        <ul className="space-y-3">
                            {tool.cons?.map((con, index) => (
                                <li key={index} className="flex items-start gap-3 text-slate-300">
                                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2.5 flex-shrink-0"/>
                                    <span className="leading-snug">{con}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

            </div>

            {/* Sidebar (4 Columns) - Sticky */}
            <div className="md:col-span-4">
                <div className="sticky top-32 space-y-6">
                    <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 backdrop-blur-sm">
                        <h3 className="text-white font-bold mb-4">Alternatives</h3>
                        <div className="space-y-3">
                            {/* Dummy Alternatives - Ye baad mein dynamic hongay */}
                            <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/50 hover:bg-slate-800 transition cursor-pointer group">
                                <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400 font-bold">C</div>
                                <div>
                                    <div className="text-sm font-semibold text-white group-hover:text-indigo-400 transition">Claude 3</div>
                                    <div className="text-xs text-slate-500">Writing & Code</div>
                                </div>
                            </div>
                             <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/50 hover:bg-slate-800 transition cursor-pointer group">
                                <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold">G</div>
                                <div>
                                    <div className="text-sm font-semibold text-white group-hover:text-indigo-400 transition">Gemini</div>
                                    <div className="text-xs text-slate-500">Multimodal AI</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

      </div>
    </div>
  );
}