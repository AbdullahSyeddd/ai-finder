"use client";

import { useState } from "react";
import Link from "next/link";
import { toolsData } from "@/data/tools";

const questions = [
  {
    id: "role",
    title: "Select your primary role",
    subtitle: "This helps us understand your daily workflow and requirements.",
    options: [
      { label: "Developer / Engineer", value: "developer" },
      { label: "Content Creator / Writer", value: "writer" },
      { label: "Student / Academic", value: "student" },
      { label: "Marketer / Business", value: "business" },
    ],
  },
  {
    id: "goal",
    title: "What is your primary objective?",
    subtitle: "Select the task you spend the most time executing.",
    options: [
      { label: "Writing & Copywriting", value: "Writing" },
      { label: "Coding & Development", value: "Coding" },
      { label: "Design & Video Generation", value: "Image" },
      { label: "Research & Productivity", value: "Productivity" },
    ],
  },
  {
    id: "budget",
    title: "Select your budget preference",
    subtitle: "We will prioritize tools that align with your financial criteria.",
    options: [
      { label: "100% Free", value: "free" },
      { label: "Freemium (Free tier available)", value: "freemium" },
      { label: "Premium (Paid options)", value: "paid" },
    ],
  },
];

const XLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z"/>
  </svg>
);

const CopyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
  </svg>
);

export default function StackBuilder() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({ role: "", goal: "", budget: "" });
  const [isBuilding, setIsBuilding] = useState(false);
  const [finalStack, setFinalStack] = useState([]);
  const [copied, setCopied] = useState(false);

  // 👇 AUTO-ADVANCE LOGIC
  const handleSelect = (optionValue) => {
    const currentQuestionId = questions[currentStep].id;
    const newAnswers = { ...answers, [currentQuestionId]: optionValue };
    setAnswers(newAnswers);

    // If it's not the last step, move forward automatically
    if (currentStep < questions.length - 1) {
        setTimeout(() => setCurrentStep(currentStep + 1), 300); // Slight delay for visual feedback
    } else {
        // If last step, trigger build
        setTimeout(() => buildStack(newAnswers), 300);
    }
  };

  const buildStack = (finalAnswers) => {
    setIsBuilding(true);
    
    setTimeout(() => {
      const scoredTools = toolsData.map(tool => {
        let score = 0;
        const searchString = `${tool.category} ${tool.shortDescription} ${tool.fullDescription} ${(tool.keywords || []).join(" ")}`.toLowerCase();
        
        if (tool.category.toLowerCase() === finalAnswers.goal.toLowerCase()) {
          score += 20; 
        } else if (searchString.includes(finalAnswers.goal.toLowerCase())) {
          score += 10; 
        }

        if (searchString.includes(finalAnswers.role.toLowerCase())) {
          score += 10;
        }

        const hasFreePlan = tool.pricing?.some(p => p.cost === "$0" || p.plan.toLowerCase().includes("free") || p.cost.toLowerCase() === "free");
        const hasPaidPlan = tool.pricing?.some(p => p.cost !== "$0" && !p.plan.toLowerCase().includes("free") && p.cost.toLowerCase() !== "free");

        if (finalAnswers.budget === "free") {
          if (hasFreePlan && !hasPaidPlan) score += 15; 
          else if (hasFreePlan) score += 5; 
          else score -= 100; 
        } else if (finalAnswers.budget === "freemium") {
          if (hasFreePlan && hasPaidPlan) score += 15; 
          else if (hasFreePlan) score += 5;
        } else if (finalAnswers.budget === "paid") {
          if (hasPaidPlan) score += 15; 
        }

        score += (tool.rating || 0);
        return { ...tool, matchScore: score };
      });

      const bestMatches = scoredTools
        .filter(t => t.matchScore > 0)
        .sort((a, b) => b.matchScore - a.matchScore)
        .slice(0, 3);

      const finalResults = bestMatches.length > 0 
        ? bestMatches 
        : [...toolsData].sort((a, b) => b.rating - a.rating).slice(0, 3);

      setFinalStack(finalResults.map(t => ({
        name: t.name,
        category: t.category,
        desc: t.shortDescription,
        slug: t.slug
      })));

      setIsBuilding(false);
      setCurrentStep(questions.length); 
    }, 2000); 
  };

  const handleXShare = () => {
    const toolNames = finalStack.map(t => t.name).join(", ");
    const text = `I just generated my personalized AI Stack for ${answers.goal} on AiFinder! 🚀\n\nMy stack: ${toolNames}.\n\nBuild yours here:`;
    const url = "https://aiifinder.com/stack"; 
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
    window.open(twitterUrl, "_blank");
  };

  const handleCopyLink = async () => {
    const toolNames = finalStack.map(t => t.name).join(", ");
    const text = `I just built my personalized AI Stack for ${answers.goal} on AiFinder! 🚀\n\nMy tools: ${toolNames}.\n\nBuild yours here: https://aiifinder.com/stack`;
    try {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500); 
    } catch (err) {
        console.error('Failed to copy: ', err);
    }
  };

  return (
    <div className="min-h-screen bg-[#0B1120] text-slate-200 py-24 px-4 sm:px-6 flex flex-col items-center font-sans relative overflow-hidden">
      
      {/* BACKGROUND FX */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] -z-10 pointer-events-none mix-blend-screen" />

      {/* HEADER */}
      <div className="max-w-2xl w-full text-center mb-16 relative z-10">
        <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-white">
          AI Stack Builder
        </h1>
        <p className="text-slate-400 text-lg font-light leading-relaxed">
          Receive a personalized selection of AI tools tailored to your workflow.
        </p>
      </div>

      {/* MAIN CONTAINER */}
      <div className="max-w-2xl w-full bg-white/[0.02] border border-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl relative z-10 transition-all duration-500">
        
        {/* PROGRESS BAR (Starts at 0%) */}
        {currentStep < questions.length && (
          <div className="mb-12">
            <div className="flex justify-between text-[10px] font-bold text-slate-500 mb-3 uppercase tracking-widest">
              <span>Step {currentStep + 1} of {questions.length}</span>
              <span className="text-indigo-400">{Math.round((currentStep / questions.length) * 100)}% Complete</span>
            </div>
            <div className="w-full bg-white/5 rounded-full h-1">
              <div
                className="bg-indigo-500 h-1 rounded-full transition-all duration-700 ease-out shadow-[0_0_10px_rgba(99,102,241,0.4)]"
                style={{ width: `${(currentStep / questions.length) * 100}%` }}
              ></div>
            </div>
          </div>
        )}

        {/* QUESTIONS UI */}
        {currentStep < questions.length ? (
          <div className="animate-fadeIn">
            <h2 className="text-2xl font-bold mb-2 text-white">{questions[currentStep].title}</h2>
            <p className="text-sm text-slate-500 mb-10 font-light">{questions[currentStep].subtitle}</p>
            
            <div className="grid grid-cols-1 gap-4">
              {questions[currentStep].options.map((option) => {
                const isSelected = answers[questions[currentStep].id] === option.value;
                return (
                  <button
                    key={option.value}
                    onClick={() => handleSelect(option.value)}
                    className={`p-6 rounded-2xl border text-left transition-all duration-300 group relative overflow-hidden ${
                      isSelected
                        ? "border-indigo-500 bg-indigo-500/10 text-white shadow-[0_0_20px_rgba(99,102,241,0.1)]"
                        : "border-white/5 bg-[#050505] text-slate-400 hover:border-white/20 hover:text-white"
                    }`}
                  >
                    <span className="text-sm font-semibold tracking-wide relative z-10">{option.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        ) : isBuilding ? (
          
          /* LOADING STATE */
          <div className="text-center py-20 animate-pulse">
            <div className="w-12 h-12 border-2 border-slate-700 border-t-indigo-500 rounded-full animate-spin mx-auto mb-8"></div>
            <h2 className="text-xl font-bold text-white mb-2 uppercase tracking-widest">Generating Stack</h2>
            <p className="text-sm text-slate-500 font-light">Analyzing 100+ tools for the best match...</p>
          </div>
          
        ) : (
          
          /* RESULTS STATE */
          <div className="animate-fadeIn">
            <div className="mb-10 border-b border-white/5 pb-8 text-center">
              <h2 className="text-3xl font-black mb-2 text-white uppercase tracking-tighter">Your AI Stack</h2>
              <p className="text-sm text-slate-500 font-light tracking-wide">Optimized tools for your specific workflow.</p>
            </div>

            <div className="space-y-4 mb-12">
              {finalStack.map((tool, index) => (
                <div key={index} className="bg-[#050505] border border-white/5 p-6 rounded-2xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 hover:border-indigo-500/30 transition-all duration-500">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-bold text-white">{tool.name}</h3>
                      <span className="text-[10px] uppercase font-black tracking-widest bg-white/5 text-slate-500 px-2 py-0.5 rounded">
                        {tool.category}
                      </span>
                    </div>
                    <p className="text-sm text-slate-400 font-light leading-relaxed">{tool.desc}</p>
                  </div>
                  <Link href={`/tool/${tool.slug}`} className="w-full sm:w-auto">
                    <button className="w-full sm:w-auto bg-white text-black px-6 py-2.5 rounded-xl text-[11px] font-black uppercase tracking-widest hover:bg-slate-200 transition-all">
                      View Detail
                    </button>
                  </Link>
                </div>
              ))}
            </div>

            {/* VIRAL SHARE BUTTONS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                <button 
                    onClick={handleXShare}
                    className="flex items-center justify-center gap-3 bg-white text-black hover:bg-slate-200 py-4 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all shadow-xl"
                >
                    <XLogo /> Share Result
                </button>

                 <button 
                    onClick={handleCopyLink}
                    className={`flex items-center justify-center gap-3 border py-4 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all ${copied ? "bg-emerald-500/10 border-emerald-500 text-emerald-400" : "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10"}`}
                >
                    <CopyIcon /> {copied ? "Copied!" : "Copy Link"}
                </button>
            </div>

            <div className="text-center">
              <button 
                onClick={() => { setCurrentStep(0); setAnswers({ role: "", goal: "", budget: "" }); }}
                className="text-[10px] font-black uppercase tracking-widest text-slate-600 hover:text-white transition-colors"
              >
                ← Restart Builder
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}