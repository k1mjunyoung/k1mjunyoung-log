const CONFIG = {
  // profile setting (required)
  profile: {
    name: "김준영",
    image: "/avatar.jpg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "Backend developer",
    bio: "안녕하세요 백엔드 개발자, 김준영입니다.",
    email: "me@kimjunyoung.com",
    linkedin: "",
    github: "k1mjunyoung",
    instagram: "",
  },
  projects: [
     {
       name: `morethan-log`,
       href: "https://github.com/morethanmin/morethan-log",
     },
  ],
  // blog setting (required)
  blog: {
    title: "김준영의 기술블로그",
    description: "안녕하세요 백엔드 개발자, 김준영입니다.",
    scheme: "system", // 'light' | 'dark' | 'system'
  },

  // CONFIG configration (required)
  link: "https://tech.kimjunyoung.com",
  since: 1998, // If leave this empty, current year will be used.
  lang: "ko-KR", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  // ogImageGenerateURL: "https://og-image-korean.vercel.app", The link to generate OG image, don't end with a slash
  ogImageGenerateURL: "https://og-image-korean.vercel.app/%EA%B9%80%EC%A4%80%EC%98%81%EC%9D%98%20%EA%B8%B0%EC%88%A0%EB%B8%94%EB%A1%9C%EA%B7%B8.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fmorethan-log.vercel.app%2Favatar.svg", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: true,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: true,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  naverSearchAdvisor: {
    enable: true,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 60, // revalidate time for [slug], index
}

module.exports = { CONFIG }
