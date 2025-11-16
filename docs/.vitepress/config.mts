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
          { text: "Solidity", link: "/solidity/" },
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
              {
                text: "Bitcoin: A Peer-to-Peer Electronic Cash System",
                link: "/bitcoin/",
                collapsed: true,
                items: [
                  {
                    text: "What is Bitcoin?",
                    link: "/bitcoin/index.md",
                  },
                ],
              },
            ],
          },
          {
            text: "Practice section",
            items: [
              {
                text: "Solidity",
                link: "/solidity/",
                collapsed: true,
                items: [
                  {
                    text: "Solidity Introduction",
                    link: "/solidity/index.md",
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
            text: "理论篇",
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
              {
                text: "比特币：一种点对点的电子现金系统",
                link: "/zh/bitcoin/",
                collapsed: true,
                items: [
                  {
                    text: "什么是比特币？",
                    link: "/zh/bitcoin/index.md",
                  },
                ],
              },
            ],
          },
          {
            text: "实践篇",
            items: [
              {
                text: "Solidity",
                link: "/zh/solidity/",
                collapsed: true,
                items: [
                  {
                    text: "Solidity 简介",
                    link: "/zh/solidity/index.md",
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
