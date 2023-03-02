const CONFIG = {
  // profile setting (required)
  profile: {
    name: "yoosion",
    image: "/avatar.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "frontend developer",
    bio: "I can do it.",
    email: "yoosioff@gmail.com",
    linkedin: "시온-유-021b02236",
    github: "yoosion030",
    instagram: "",
  },
  projects: [
    {
      name: "Hello, GSM",
      href: "https://www.hellogsm.kr/",
    },
    {
      name: "GGV",
      href: "https://gsm-golden-village.vercel.app/",
    },
    {
      name: "Loven",
      href: "https://loven.vercel.app/",
    },
  ],
  // blog setting (required)
  blog: {
    title: "sion-log",
    description: "welcome to sion-log!",
    theme: "auto", // ['light', 'dark', 'auto']
  },

  // CONFIG configration (required)
  link: "https://sion-log.vercel.app",
  since: 2022, // If leave this empty, current year will be used.
  lang: "ko-KR", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash
  seo: {
    keywords: ["Blog", "Website", "Notion"],
  },

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: true,
    config: {
      siteVerification: process.env.GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: "yoosion030/sion-log",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}
module.exports = CONFIG
