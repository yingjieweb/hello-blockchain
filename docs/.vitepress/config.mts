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
                    text: "Blockchain Introduction",
                    link: "/bta/index.md",
                  },
                  {
                    text: "Reference",
                    link: "/bta/reference.md",
                  },
                ],
              },
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
                    text: "区块链简介",
                    link: "/zh/bta/index.md",
                  },
                  {
                    text: "参考资料",
                    link: "/zh/bta/reference.md",
                  },
                ],
              },
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
