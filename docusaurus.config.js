// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

console.log(process.env);
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "MDD OC",
  tagline: ">> tagline <<",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://xiduzo.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: process.env.NODE_ENV === "development" ? "/" : "/mdd-oc/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Master Digital Design", // Usually your GitHub org/user name.
  projectName: "mdd-oc", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/xiduzo/mdd-oc/tree/main/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/xiduzo/mdd-oc/tree/main/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      tableOfContents: {
        maxHeadingLevel: 5,
      },
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "MDD OC",
        logo: {
          alt: "MDD logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Meetings",
          },
          { to: "/blog", label: "Rapports", position: "left" },
          {
            href: "https://github.com/xiduzo/mdd-oc",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        // links: [
        //   // {
        //   //   title: "Docs",
        //   //   items: [
        //   //     {
        //   //       label: "Meetings",
        //   //       to: "/docs/intro",
        //   //     },
        //   //   ],
        //   // },
        //   // {
        //   //   title: "Community",
        //   //   items: [
        //   //     {
        //   //       label: "Stack Overflow",
        //   //       href: "https://stackoverflow.com/questions/tagged/docusaurus",
        //   //     },
        //   //     {
        //   //       label: "Discord",
        //   //       href: "https://discordapp.com/invite/docusaurus",
        //   //     },
        //   //     {
        //   //       label: "Twitter",
        //   //       href: "https://twitter.com/docusaurus",
        //   //     },
        //   //   ],
        //   // },
        //   // {
        //   //   title: "More",
        //   //   items: [
        //   //     {
        //   //       label: "Rapports",
        //   //       to: "/blog",
        //   //     },
        //   //     {
        //   //       label: "GitHub",
        //   //       href: "https://github.com/xiduzo/mdd-oc",
        //   //     },
        //   //   ],
        //   // },
        // ],
        copyright: `Copyright © ${new Date().getFullYear()} MDD OC, Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
