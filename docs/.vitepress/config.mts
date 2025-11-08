import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Hello Blockchain",
  description: "A blockchain learning website",
  locales: {
    root: {
      label: "English",
      lang: "en",
      link: "/",
      themeConfig: {
        nav: [
          { text: "Home", link: "/" },
          { text: "BTA", link: "/bta/" },
        ],
        sidebar: [
          {
            text: "Theoretical Section",
            items: [
              {
                text: "Blockchain Application and Technology",
                link: "/bta/",
                collapsed: true,
                items: [
                  {
                    text: "What is Blockchain?",
                    link: "/bta/index.md",
                  },
                  {
                    text: "Why is Blockchain important?",
                    link: "/bta/why-is-blockchain-important",
                  },
                ],
              },
              { text: "Markdown Examples", link: "/markdown-examples" },
              { text: "Runtime API Examples", link: "/api-examples" },
            ],
          },
        ],
      },
    },
    zh: {
      label: "中文",
      lang: "zh",
      link: "/zh/",
      themeConfig: {
        nav: [
          { text: "首页", link: "/zh/" },
          { text: "BTA", link: "/zh/bta/" },
        ],
        sidebar: [
          {
            text: "理论部分",
            items: [
              {
                text: "区块链应用与技术",
                link: "/zh/bta/",
                collapsed: true,
                items: [
                  {
                    text: "区块链是什么？",
                    link: "/zh/bta/index.md",
                  },
                  {
                    text: "为什么区块链很重要？",
                    link: "/zh/bta/why-is-blockchain-important",
                  },
                ],
              },
              { text: "Markdown 示例", link: "/markdown-examples" },
              { text: "API 示例", link: "/api-examples" },
            ],
          },
        ],
      },
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/yingjieweb/hello-blockchain",
      },
    ],
  },
});
