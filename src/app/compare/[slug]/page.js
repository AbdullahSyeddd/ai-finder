import Link from "next/link";
import { toolsData } from "@/data/tools";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const slugs = slug.split("-vs-");

  if (slugs.length !== 2) return { title: "Comparison Not Found" };

  const tool1 = toolsData.find((t) => t.slug === slugs[0]);
  const tool2 = toolsData.find((t) => t.slug === slugs[1]);

  if (!tool1 || !tool2) return { title: "Tools Not Found" };

  return {
    title: `${tool1.name} vs ${tool2.name} (2026 Comparison) | Features, Pricing & Verdict`,
    description: `Compare ${tool1.name} vs ${tool2.name} side-by-side. See features, pricing, advantages, disadvantages, and decide which AI tool fits your needs.`,
  };
}

export default async function ComparePage({ params }) {
  const { slug } = await params;
  const slugs = slug.split("-vs-");

  if (slugs.length !== 2) return notFound();

  const tool1 = toolsData.find((t) => t.slug === slugs[0]);
  const tool2 = toolsData.find((t) => t.slug === slugs[1]);

  if (!tool1 || !tool2) return notFound();

  const winner =
    tool1.rating > tool2.rating
      ? tool1
      : tool2.rating > tool1.rating
      ? tool2
      : null;

  return (
    <div className="min-h-screen bg-[#0B1120] text-slate-200 py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative overflow-x-hidden font-sans">

      {/* Background Glow */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-600/10 blur-[140px] rounded-full pointer-events-none"></div>

      {/* HERO */}
      <div className="max-w-4xl mx-auto text-center mb-20">
        <div className="inline-block bg-[#141821] border border-gray-800 text-gray-400 px-4 py-1.5 rounded-full text-xs font-medium mb-6 uppercase tracking-wider">
          AI Tool Comparison
        </div>

        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">
          <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            {tool1.name}
          </span>{" "}
          vs{" "}
          <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
            {tool2.name}
          </span>
        </h1>

        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Which {tool1.category.toLowerCase()} tool fits your workflow better?
          We break down features, pricing and strengths so you can decide fast.
        </p>
      </div>

      <div className="max-w-5xl mx-auto">

        {/* TOOL CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">

          {/* TOOL 1 */}
          <div className="bg-white/[0.02] border border-white/5 backdrop-blur-xl rounded-[2rem] p-8 flex flex-col items-center text-center transition-all duration-500 hover:border-indigo-500/30 relative overflow-hidden group">

            {winner?.id === tool1.id && (
              <div className="absolute top-0 right-0 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-bl-lg">
                ★ Higher Rated
              </div>
            )}

            <h2 className="text-3xl font-semibold text-white mb-3">
              {tool1.name}
            </h2>

            <div className="flex items-center gap-2 mb-4">
              <span className="text-yellow-400 font-semibold">
                ★ {tool1.rating}
              </span>
              <span className="text-gray-500 text-sm">/ 5.0</span>
            </div>

            <p className="text-gray-400 mb-8 flex-grow text-sm leading-relaxed">
              {tool1.shortDescription}
            </p>

            <a
              href={tool1.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-gradient-to-r from-white to-gray-200 text-black py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-[1.03] hover:shadow-lg active:scale-95"
            >
              Try {tool1.name}
            </a>
          </div>

          {/* TOOL 2 */}
          <div className="bg-white/[0.02] border border-white/5 backdrop-blur-xl rounded-[2rem] p-8 flex flex-col items-center text-center transition-all duration-500 hover:border-indigo-500/30 relative overflow-hidden group">

            {winner?.id === tool2.id && (
              <div className="absolute top-0 right-0 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-bl-lg">
                ★ Higher Rated
              </div>
            )}

            <h2 className="text-3xl font-semibold text-white mb-3">
              {tool2.name}
            </h2>

            <div className="flex items-center gap-2 mb-4">
              <span className="text-yellow-400 font-semibold">
                ★ {tool2.rating}
              </span>
              <span className="text-gray-500 text-sm">/ 5.0</span>
            </div>

            <p className="text-gray-400 mb-8 flex-grow text-sm leading-relaxed">
              {tool2.shortDescription}
            </p>

            <a
              href={tool2.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-gradient-to-r from-white to-gray-200 text-black py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-[1.03] hover:shadow-lg active:scale-95"
            >
              Try {tool2.name}
            </a>
          </div>
        </div>

        {/* COMPARISON TABLE */}
        <div className="bg-[#111722] border border-gray-800 rounded-2xl overflow-hidden mb-16 shadow-lg">

          <div className="bg-[#141821] border-b border-gray-800 p-6">
            <h3 className="text-xl font-semibold text-white">
              Head-to-Head Comparison
            </h3>
          </div>

          <div className="divide-y divide-gray-800 text-sm">

            <div className="grid grid-cols-3 p-6 items-center">
              <div className="text-gray-400 font-medium">Category</div>
              <div className="text-center font-semibold text-white">
                {tool1.category}
              </div>
              <div className="text-center font-semibold text-white">
                {tool2.category}
              </div>
            </div>

            <div className="grid grid-cols-3 p-6 items-center">
              <div className="text-gray-400 font-medium">Starting Price</div>
              <div className="text-center">
                <span className="bg-[#1c2433] text-gray-200 px-3 py-1 rounded-lg text-xs font-semibold">
                  {tool1.pricing[0]?.cost || "N/A"}
                </span>
              </div>
              <div className="text-center">
                <span className="bg-[#1c2433] text-gray-200 px-3 py-1 rounded-lg text-xs font-semibold">
                  {tool2.pricing[0]?.cost || "N/A"}
                </span>
              </div>
            </div>

            {/* PROS */}
            <div className="grid grid-cols-1 md:grid-cols-3 p-6 gap-6">
              <div className="text-gray-400 font-medium">
                Key Strengths
              </div>

              <div className="space-y-2">
                {tool1.pros.map((pro, i) => (
                  <div key={i} className="flex gap-2 text-gray-300">
                    <span className="text-green-400">✓</span> {pro}
                  </div>
                ))}
              </div>

              <div className="space-y-2 md:border-l border-gray-800 md:pl-6">
                {tool2.pros.map((pro, i) => (
                  <div key={i} className="flex gap-2 text-gray-300">
                    <span className="text-green-400">✓</span> {pro}
                  </div>
                ))}
              </div>
            </div>

            {/* CONS */}
            <div className="grid grid-cols-1 md:grid-cols-3 p-6 gap-6 bg-[#0f141d]">
              <div className="text-gray-400 font-medium">
                Weaknesses
              </div>

              <div className="space-y-2">
                {tool1.cons.map((con, i) => (
                  <div key={i} className="flex gap-2 text-gray-400">
                    <span className="text-red-400">×</span> {con}
                  </div>
                ))}
              </div>

              <div className="space-y-2 md:border-l border-gray-800 md:pl-6">
                {tool2.cons.map((con, i) => (
                  <div key={i} className="flex gap-2 text-gray-400">
                    <span className="text-red-400">×</span> {con}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* FINAL VERDICT */}
        <div className="bg-gradient-to-br from-[#111722] to-[#1a2333] border border-gray-800 rounded-2xl p-10 text-center shadow-xl">
          <h3 className="text-2xl font-semibold text-white mb-4">
            Final Verdict
          </h3>

          <p className="text-gray-400 leading-relaxed max-w-3xl mx-auto mb-8">
            Both <strong>{tool1.name}</strong> and{" "}
            <strong>{tool2.name}</strong> are strong options in the{" "}
            {tool1.category.toLowerCase()} space. If{" "}
            {tool1.pros[0].toLowerCase()} matters most, go with{" "}
            {tool1.name}. If you value{" "}
            {tool2.pros[0].toLowerCase()}, then{" "}
            {tool2.name} is the better fit.
          </p>

          <div className="flex justify-center gap-6 text-sm">
            <Link
              href={`/tool/${tool1.slug}`}
              className="text-gray-400 hover:text-white transition-colors underline"
            >
              Read full {tool1.name} review
            </Link>

            <Link
              href={`/tool/${tool2.slug}`}
              className="text-gray-400 hover:text-white transition-colors underline"
            >
              Read full {tool2.name} review
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}