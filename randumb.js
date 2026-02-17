export const toolsData = [
  {
    id: "chatgpt",
    name: "ChatGPT",
    slug: "chatgpt",
    seoTitle: "ChatGPT - Best AI Chatbot for Writing & Coding",
    seoDescription: "Use ChatGPT for AI writing, coding, summaries and research. Create content faster with OpenAI’s powerful AI chatbot.",
    keywords: ["AI chatbot", "ChatGPT AI", "AI writing tool", "coding assistant"],
    shortDescription: "OpenAI's powerful AI chatbot for writing, coding, and research.",
    fullDescription: "ChatGPT is one of the most widely used AI chatbots for content writing, programming, brainstorming, and research. It helps users generate blog posts, emails, scripts, and even complex code within seconds. Its conversational interface makes it easy for beginners and professionals alike.\n\nWhat makes ChatGPT stand out is its versatility. From debugging code to drafting SEO content and summarizing long documents, it handles multiple tasks in one place. With continuous model upgrades and integrations, it remains a top choice for productivity and automation.",
    category: "Writing",
    // 👇 FIX: ChatGPT ko bhi naye OBJECT format mein kar diya hai
    pricing: [
      { plan: "Free", cost: "$0", description: "Access to basic AI model" },
      { plan: "Plus", cost: "$20/mo", description: "Faster responses & priority access" }
    ],
    features: ["Code Generation", "Content Writing", "Translation"],
    pros: [
      "Excellent content generation",
      "Strong coding capabilities",
      "User-friendly interface"
    ],
    cons: [
      "Advanced features require paid plan",
      "May produce inaccurate facts"
    ],
    websiteUrl: "https://chat.openai.com",
    rating: 4.9
  },
  {
    id: "claude3",
    name: "Claude 3",
    slug: "claude-3",
    seoTitle: "Claude 3 - Best AI for Long Context Writing",
    seoDescription: "Claude 3 by Anthropic offers natural AI conversations and large context handling for research, writing, and analysis.",
    keywords: ["Claude 3 AI", "Anthropic AI", "AI writing assistant", "long context AI"],
    shortDescription: "Advanced AI assistant known for natural conversations and deep context.",
    fullDescription: "Claude 3 is Anthropic’s advanced AI model built for natural conversations and large context analysis. It excels in long-form writing, document review, and research-heavy tasks.\n\nWith improved reasoning and safer outputs, Claude 3 is ideal for professionals handling contracts, reports, and academic content. Its ability to process large documents gives it an edge for enterprise and research use.",
    category: "Writing",
    pricing: [
      { plan: "Free", cost: "$0", description: "Limited daily usage" },
      { plan: "Pro", cost: "$20/mo", description: "Priority access and advanced models" }
    ],
    pros: [
      "Handles large documents well",
      "Natural conversation flow",
      "Strong reasoning ability"
    ],
    cons: [
      "Usage limits on free plan",
      "Less ecosystem integration"
    ],
    websiteUrl: "https://claude.ai",
    rating: 4.8
  },
  {
    id: "jasperai",
    name: "Jasper AI",
    slug: "jasper-ai",
    seoTitle: "Jasper AI - Best AI Copywriting Tool for SEO",
    seoDescription: "Jasper AI helps marketers create high-converting SEO content, ads, and blog posts faster with advanced AI copywriting.",
    keywords: ["Jasper AI", "AI copywriting tool", "SEO content generator", "marketing AI"],
    shortDescription: "AI copywriting tool built for marketers and SEO experts.",
    fullDescription: "Jasper AI is a powerful AI writing tool designed for marketing teams and content creators. It helps generate blog posts, ad copy, product descriptions, and email campaigns optimized for conversions.\n\nIts built-in SEO features and brand voice customization make it ideal for businesses. Jasper focuses on high-quality marketing content that drives traffic and improves search rankings.",
    category: "Writing",
    pricing: [
      { plan: "Creator", cost: "$39/mo", description: "Basic content tools" },
      { plan: "Pro", cost: "$59/mo", description: "Advanced SEO and collaboration features" }
    ],
    pros: [
      "Excellent for marketing copy",
      "SEO optimization tools",
      "Brand voice control"
    ],
    cons: [
      "Expensive compared to alternatives",
      "Overkill for casual users"
    ],
    websiteUrl: "https://www.jasper.ai",
    rating: 4.7
  },
  {
    id: "copyai",
    name: "Copy.ai",
    slug: "copy-ai",
    seoTitle: "Copy.ai - AI Tool for Sales & Social Media Copy",
    seoDescription: "Create high-converting sales copy, emails, and social media posts instantly using Copy.ai’s AI writing platform.",
    keywords: ["Copy.ai", "AI sales copy", "social media AI", "AI content generator"],
    shortDescription: "Fast AI tool for sales copy and social posts.",
    fullDescription: "Copy.ai is built for entrepreneurs and marketers who need fast, engaging copy. It helps generate product descriptions, sales emails, and social media captions within seconds.\n\nIts simple interface and ready-made templates make it beginner-friendly. Businesses use Copy.ai to scale marketing efforts without hiring large content teams.",
    category: "Writing",
    pricing: [
      { plan: "Free", cost: "$0", description: "Limited credits" },
      { plan: "Pro", cost: "$36/mo", description: "Unlimited content generation" }
    ],
    pros: [
      "Easy to use",
      "Great marketing templates",
      "Quick content output"
    ],
    cons: [
      "Limited advanced editing",
      "Content may need refinement"
    ],
    websiteUrl: "https://www.copy.ai",
    rating: 4.6
  },
  {
    id: "grammarly",
    name: "Grammarly",
    slug: "grammarly",
    seoTitle: "Grammarly - Best AI Grammar Checker Online",
    seoDescription: "Improve grammar, spelling, and writing clarity with Grammarly’s AI-powered writing assistant for students and professionals.",
    keywords: ["Grammarly AI", "grammar checker", "AI writing assistant", "proofreading tool"],
    shortDescription: "AI grammar checker that improves clarity and tone.",
    fullDescription: "Grammarly is a leading AI writing assistant that checks grammar, spelling, punctuation, and tone in real time. It integrates with browsers, email, and documents.\n\nBeyond corrections, Grammarly offers clarity suggestions and tone adjustments, making it useful for business emails and academic writing.",
    category: "Writing",
    pricing: [
      { plan: "Free", cost: "$0", description: "Basic grammar suggestions" },
      { plan: "Premium", cost: "$12/mo", description: "Advanced writing insights" }
    ],
    pros: [
      "Real-time corrections",
      "Tone detection",
      "Wide integration support"
    ],
    cons: [
      "Advanced features paid",
      "Sometimes over-suggests edits"
    ],
    websiteUrl: "https://grammarly.com",
    rating: 4.8
  }
];