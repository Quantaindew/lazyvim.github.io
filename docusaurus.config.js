// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const theme = require("./src/themes/tokyonight_moon");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "LazyVim",
  tagline: "A Neovim config for the lazy",
  url: "https://lazyvim.github.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "LazyVim", // Usually your GitHub org/user name.
  projectName: "lazyvim.github.io", // Usually your repo name.
  deploymentBranch: "gh-pages",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/LazyVim/lazyvim.github.io/tree/master/",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "LazyVim",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.png",
        },
        items: [
          {
            href: "https://github.com/LazyVim/LazyVim",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Getting Started",
                to: "/",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discussions",
                href: "https://github.com/LazyVim/LazyVim/discussions",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/folke",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/LazyVim/LazyVim",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()
          } LazyVim, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: theme,
        darkTheme: theme,
        additionalLanguages: ["lua", "bash"],
      },
    }),
};

module.exports = config;
