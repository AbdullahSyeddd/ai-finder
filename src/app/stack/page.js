import StackClient from "./StackClient";

export const metadata = {
  title: "AI Stack Builder (2026) | Find the Best AI Tools for Your Workflow",
  description:
    "Build your perfect AI stack in seconds. Answer a few quick questions and discover the best AI tools for writing, coding, design, research, productivity, and business based on your role and budget.",
  keywords: [
    "AI stack builder",
    "best AI tools 2026",
    "AI tools for developers",
    "AI tools for writers",
    "AI productivity tools",
    "free AI tools",
    "AI software comparison",
    "AI tool recommendation engine"
  ],
  openGraph: {
    title: "AI Stack Builder | Discover Your Perfect AI Tool Stack",
    description:
      "Get personalized AI tool recommendations based on your role, goals, and budget. Compare and build your ideal AI workflow.",
    url: "https://aiifinder.com/stack",
    siteName: "AI Finder",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Stack Builder (2026)",
    description:
      "Find the best AI tools tailored to your workflow. Fast, smart, and personalized.",
  },
  alternates: {
    canonical: "/stack",
  },
};

export default function Page() {
  return <StackClient />;
}

