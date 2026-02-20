"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toolsData } from "@/data/tools";

export default function CompareHub() {
  const router = useRouter();

  const [tool1, setTool1] = useState(null);
  const [tool2, setTool2] = useState(null);

  const [query1, setQuery1] = useState("");
  const [query2, setQuery2] = useState("");

  const handleCompare = () => {
    if (!tool1 || !tool2) return;
    if (tool1.slug === tool2.slug) {
      alert("Please select different tools.");
      return;
    }
    router.push(`/compare/${tool1.slug}-vs-${tool2.slug}`);
  };

  const filteredTools1 =
    query1 === ""
      ? [...toolsData].sort((a, b) => (b.rating || 0) - (a.rating || 0))
      : toolsData.filter((t) =>
          t.name.toLowerCase().includes(query1.toLowerCase())
        );

  const filteredTools2 =
    query2 === ""
      ? [...toolsData].sort((a, b) => (b.rating || 0) - (a.rating || 0))
      : toolsData.filter((t) =>
          t.name.toLowerCase().includes(query2.toLowerCase())
        );

  return (
    <div className="min-h-screen bg-[#0B1120] text-gray-300 py-16 md:py-24 px-4 sm:px-6 lg:px-8 flex flex-col items-center relative overflow-x-hidden font-sans">

      {/* Soft Background Glow */}
      <div className="absolute top-[-150px] w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>

      {/* HEADER */}
      <div className="max-w-2xl w-full text-center mb-20 animate-fadeIn">
        <div className="inline-block bg-[#141821] border border-gray-800 text-gray-400 px-4 py-1.5 rounded-full text-xs font-medium mb-6 uppercase tracking-wider">
          
          Comparison Hub
        </div>

        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white leading-tight mb-6">
          Build Your Own{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            AI Comparison
          </span>
        </h1>

        <p className="text-gray-400 text-base md:text-lg">
          Select any two tools and instantly see a detailed side by side breakdown.
        </p>
      </div>

      {/* SELECT AREA */}
      <div className="max-w-5xl w-full bg-[#111722]/50 border border-gray-800 rounded-2xl p-5 md:p-10 shadow-2xl flex flex-col md:flex-row items-center gap-4 md:gap-6 backdrop-blur-sm">

        {/* TOOL 1 */}
        <div className="w-full flex-1 relative">
          <label className="block text-xs font-medium text-gray-500 mb-3 uppercase tracking-wide">
            First Tool
          </label>

          {tool1 ? (
            <div className="bg-[#161c28] border border-blue-500/30 rounded-xl p-4 flex justify-between items-center transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
              <div>
                <h3 className="text-lg font-semibold text-white">
                  {tool1.name}
                </h3>
                <span className="text-xs text-gray-400 uppercase">
                  {tool1.category}
                </span>
              </div>
              <button
                onClick={() => setTool1(null)}
                className="text-gray-400 hover:text-red-400 transition-colors"
              >
                ✕
              </button>
            </div>
          ) : (
            <div className="relative group">
              <input
                type="text"
                placeholder="Search tools..."
                value={query1}
                onChange={(e) => setQuery1(e.target.value)}
                className="w-full bg-[#050505] border border-gray-700 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-blue-500 transition-all"
              />

              <div className="absolute w-full mt-2 bg-[#161c28] border border-gray-700 rounded-xl shadow-xl overflow-hidden z-50 max-h-60 overflow-y-auto hidden group-focus-within:block">
                {filteredTools1.length > 0 ? (
                  filteredTools1.map((t) => (
                    <div
                      key={t.id}
                      onMouseDown={() => setTool1(t)}
                      className="px-4 py-3 hover:bg-[#1f2634] cursor-pointer flex justify-between items-center border-b border-gray-800 last:border-0 transition-all duration-200"
                    >
                      <span className="text-sm font-medium text-white">
                        {t.name}
                      </span>
                      <span className="text-xs text-gray-400">
                        {t.category}
                      </span>
                    </div>
                  ))
                ) : (
                  <div className="px-4 py-3 text-gray-500 text-sm text-center">
                    No tools found
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* VS */}
        <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-gray-700 flex items-center justify-center text-sm font-semibold text-white transition-transform duration-300 hover:scale-110">
          VS
        </div>

        {/* TOOL 2 */}
        <div className="w-full flex-1 relative">
          <label className="block text-xs font-medium text-gray-500 mb-3 uppercase tracking-wide md:text-right">
            Second Tool
          </label>

          {tool2 ? (
            <div className="bg-[#161c28] border border-purple-500/30 rounded-xl p-4 flex justify-between items-center transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
              <div>
                <h3 className="text-lg font-semibold text-white">
                  {tool2.name}
                </h3>
                <span className="text-xs text-gray-400 uppercase">
                  {tool2.category}
                </span>
              </div>
              <button
                onClick={() => setTool2(null)}
                className="text-gray-400 hover:text-red-400 transition-colors"
              >
                ✕
              </button>
            </div>
          ) : (
            <div className="relative group">
              <input
                type="text"
                placeholder="Search tools..."
                value={query2}
                onChange={(e) => setQuery2(e.target.value)}
                className="w-full bg-[#161c28] border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-all duration-300"
              />

              <div className="absolute w-full mt-2 bg-[#161c28] border border-gray-700 rounded-xl shadow-xl overflow-hidden z-50 max-h-60 overflow-y-auto hidden group-focus-within:block">
                {filteredTools2.length > 0 ? (
                  filteredTools2.map((t) => (
                    <div
                      key={t.id}
                      onMouseDown={() => setTool2(t)}
                      className="px-4 py-3 hover:bg-[#1f2634] cursor-pointer flex justify-between items-center border-b border-gray-800 last:border-0 transition-all duration-200"
                    >
                      <span className="text-sm font-medium text-white">
                        {t.name}
                      </span>
                      <span className="text-xs text-gray-400">
                        {t.category}
                      </span>
                    </div>
                  ))
                ) : (
                  <div className="px-4 py-3 text-gray-500 text-sm text-center">
                    No tools found
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* BUTTON */}
      <div className="mt-14">
        <button
          onClick={handleCompare}
          disabled={!tool1 || !tool2}
          className="px-12 py-3 rounded-xl font-semibold text-base transition-all duration-300
          bg-gradient-to-r from-white to-gray-200 text-black
          disabled:bg-[#1a1f27] disabled:text-gray-600 disabled:cursor-not-allowed
          hover:scale-105 hover:shadow-xl active:scale-95"
        >
          {tool1 && tool2
            ? "Generate Comparison"
            : "Select two tools"}
        </button>
      </div>
    </div>
  );
}