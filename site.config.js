const CONFIG = {
  // profile setting (required)
  profile: {
    name: "도봉구 영유아 복지정보자료집",
    image: "/avatar.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "도봉구 영유아 복지 서비스 정보집",
    bio: "도봉구 영유아의 건강한 성장을 돕기 위한 종합적인 정보를 담아 제작된 자료입니다. 자세한 내용은 서비스 제공 기관에 문의하시기 바랍니다.",
    email: "chanyoung@develop136.com",
    linkedin: "",
    github: "",
    instagram: "",
  },
  projects: [
    {
      name: `db365wil`,
      href: "https://db136kidwil.notion.site/2738ade50210807088b5e5ca72f833b1?v=2738ade50210819a8005000ce360a780",
    },
  ],
  // blog setting (required)
  blog: {
    title: "도봉구 영유아 복지정보자료집",
    description: "도봉구 영유아의 건강한 성장을 돕기 위한 종합적인 정보를 담아 제작된 자료입니다. 자세한 내용은 서비스 제공 기관에 문의하시기 바랍니다.",
    scheme: "system", // 'light'(밝음) | 'dark'(어두움) | 'system'(방문자 설정 따름)
  },

  // CONFIG configration (required)
  link: "https://db365-wil.vercel.app",
  since: 2026, // If leave this empty, current year will be used.
  lang: "ko-KR", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID || '2738ade50210807088b5e5ca72f833b1',
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  naverSearchAdvisor: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: false,
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
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
