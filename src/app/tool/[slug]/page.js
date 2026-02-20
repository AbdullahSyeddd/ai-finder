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

  // ✅ BEST DEAL LOGIC (Added)
  const getBestDeal = (pricing) => {
    if (!pricing || pricing.length === 0) return null;
    const freePlan = pricing.find(p => p.cost === "$0" || p.plan?.toLowerCase().includes("free"));
    if (freePlan) return "Free Plan Available";
    
    const prices = pricing
      .map(p => parseFloat(typeof p === 'object' ? p.cost?.replace(/[^0-9.]/g, '') : p?.replace(/[^0-9.]/g, '')))
      .filter(n => !isNaN(n));
      
    return prices.length > 0 ? `Starts at $${Math.min(...prices)}/mo` : null;
  };

  const bestDeal = getBestDeal(tool.pricing);

  const relatedTools = toolsData
    .filter((t) => t.category === tool.category && t.slug !== tool.slug)
    .slice(0, 4);

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <svg key={i} className={`w-5 h-5 ${i <= Math.floor(rating) ? "text-yellow-400 fill-current" : "text-slate-600 fill-current"}`} viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
      );
    }
    return stars;
  };

  return (
    <div className="min-h-screen bg-[#030712] text-slate-200 relative overflow-hidden font-sans selection:bg-indigo-500/30">
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] -z-10 pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20 relative z-10">
        
        <nav className="flex items-center text-sm text-slate-500 mb-8 font-medium">
            <Link href="/" className="hover:text-indigo-400 transition-colors">Home</Link> 
            <span className="mx-3 text-slate-700">/</span>
            <Link href={`/category/${tool.category.toLowerCase()}`} className="hover:text-indigo-400 transition-colors capitalize">{tool.category}</Link>
            <span className="mx-3 text-slate-700">/</span>
            <span className="text-slate-200">{tool.name}</span>
        </nav>

        <div className="grid lg:grid-cols-12 gap-10">
            
            <div className="lg:col-span-8">
                
                <div className="mb-12">
                    {/* ✅ BEST DEAL BADGE (New Addition) */}
                    {bestDeal && (
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-widest mb-4">
                        ★ Best Deal: {bestDeal}
                      </div>
                    )}

                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-wider mb-6 w-fit">
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
                        <a href={tool.websiteUrl} target="_blank" rel="nofollow noopener noreferrer" className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-indigo-600 rounded-full hover:bg-indigo-700 shadow-[0_0_20px_-5px_rgba(79,70,229,0.5)]">
                            Visit Official Website
                            <svg className="w-5 h-5 ml-2 -mr-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                        </a>
                        
                        <div className="flex items-center gap-2 px-5 py-3.5 rounded-full bg-slate-800/50 border border-slate-700 backdrop-blur-sm">
                            <div className="flex text-yellow-400">{renderStars(tool.rating)}</div>
                            <span className="font-bold text-white">{tool.rating}</span>
                        </div>
                    </div>
                </div>

                <div className="prose prose-invert prose-lg max-w-none mb-12">
                    <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                        <span className="w-1 h-8 bg-indigo-500 rounded-full"/>
                        Why use {tool.name}?
                    </h2>
                    <p className="text-slate-300 leading-relaxed text-lg bg-slate-900/30 p-6 rounded-2xl border border-slate-800">
                        {tool.fullDescription}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-slate-900/40 border border-emerald-500/20 rounded-2xl p-6 hover:bg-slate-900/60 transition-colors">
                        <h3 className="text-xl font-bold text-emerald-400 mb-4 flex items-center gap-2">✅ The Good</h3>
                        <ul className="space-y-3">
                            {tool.pros?.map((pro, index) => (
                                <li key={index} className="flex items-start gap-3 text-slate-300">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2.5 flex-shrink-0"/>
                                    <span>{pro}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-slate-900/40 border border-rose-500/20 rounded-2xl p-6 hover:bg-slate-900/60 transition-colors">
                        <h3 className="text-xl font-bold text-rose-400 mb-4 flex items-center gap-2">❌ The Bad</h3>
                        <ul className="space-y-3">
                            {tool.cons?.map((con, index) => (
                                <li key={index} className="flex items-start gap-3 text-slate-300">
                                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2.5 flex-shrink-0"/>
                                    <span>{con}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <div className="lg:col-span-4">
                <div className="sticky top-32 space-y-8">
                    <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 shadow-2xl">
                        <h3 className="text-slate-400 text-sm font-semibold uppercase tracking-wider mb-4">Pricing Model</h3>
                        <div className="space-y-3 mb-6">
                            {tool.pricing?.map((p, i) => (
                                <div key={i} className="flex justify-between items-center p-2 rounded bg-slate-800/50 border border-slate-700">
                                    <span className="text-sm font-medium text-white">{typeof p === 'object' ? p.plan : p}</span>
                                    {typeof p === 'object' && <span className="text-xs font-bold text-emerald-400">{p.cost}</span>}
                                </div>
                            ))}
                        </div>
                        <div className="w-full h-px bg-slate-700/50 mb-4" />
                        <div className="flex flex-wrap gap-2">
                             {tool.keywords?.slice(0,5).map((kw, i) => (
                                <span key={i} className="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded border border-slate-700">#{kw}</span>
                            ))}
                        </div>
                    </div>

                    <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 backdrop-blur-sm">
                        <h3 className="text-white font-bold mb-4">Alternatives</h3>
                        <div className="space-y-3">
                            {relatedTools.map((alt) => (
                                <Link key={alt.id} href={`/tool/${alt.slug}`} className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/50 hover:bg-slate-800 transition group border border-transparent hover:border-indigo-500/30">
                                    <div className="w-10 h-10 rounded-lg bg-black/30 flex items-center justify-center shrink-0 p-1.5 border border-slate-700">
                                        <img src={`https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${alt.websiteUrl}&size=128`} alt={alt.name} className="w-full h-full object-contain" />
                                    </div>
                                    <div className="overflow-hidden">
                                        <div className="text-sm font-semibold text-white group-hover:text-indigo-400 transition truncate">{alt.name}</div>
                                        <div className="text-xs text-slate-500 truncate">{alt.category}</div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}