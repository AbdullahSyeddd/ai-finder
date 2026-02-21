import { toolsData } from "@/data/tools";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const categoryName = slug.charAt(0).toUpperCase() + slug.slice(1);

  return {
    title: `Best ${categoryName} AI Tools (2026) | Top Rated Software & Reviews`,
    description: `Discover the best ${categoryName} AI tools. Compare features, pricing plans, pros and cons, and find the right AI software for your business or workflow.`,
  };
}

export default async function CategoryPage({ params }) {
  const { slug } = await params;

    const filteredTools = toolsData.filter(
    (t) => t.category.toLowerCase().replace(/\s+/g, '-') === slug.toLowerCase()
  );

  if (filteredTools.length === 0) return notFound();

  const categoryName = filteredTools[0].category;

  return (
    <div className="relative min-h-screen bg-[#0B1120] text-gray-300 py-20 px-4 sm:px-6 lg:px-8 overflow-x-hidden font-sans">

      {/* Background Glow */}
      <div className="absolute top-[-250px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-600/10 blur-[160px] rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* HEADER */}
        <div className="text-center mb-20">

          <div className="inline-block bg-[#141821] border border-gray-800 text-gray-400 px-4 py-1.5 rounded-full text-xs font-medium mb-6 uppercase tracking-wider">
            AI Tools Directory
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white mb-6">
            Best{" "}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              {categoryName}
            </span>{" "}
            AI Tools
          </h1>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Discover and compare the top-rated AI tools for{" "}
            {categoryName.toLowerCase()}. Find the right fit for your workflow
            in minutes.
          </p>
        </div>

        {/* TOOLS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {filteredTools.map((tool) => (
            <div
              key={tool.id}
              className="bg-[#111722] border border-gray-800 rounded-2xl p-6 flex flex-col transition-all duration-300 hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1 group"
            >

              {/* Title + Rating */}
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                  {tool.name}
                </h2>

                <span className="bg-yellow-400/10 text-yellow-400 text-xs font-semibold px-2.5 py-1 rounded-lg">
                  ★ {tool.rating}
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                {tool.shortDescription}
              </p>

              {/* Buttons */}
              <div className="flex gap-3 mt-auto">

                <Link
                  href={`/tool/${tool.slug}`}
                  className="flex-1 text-center bg-[#1c2433] hover:bg-[#222c3d] text-gray-200 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-[1.02]"
                >
                  Details
                </Link>

                <a
                  href={tool.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-gradient-to-r from-white to-gray-200 text-black py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-md active:scale-95"
                >
                  Visit Site
                </a>

              </div>
            </div>
          ))}

        </div>

      </div>
    </div>
  );
}