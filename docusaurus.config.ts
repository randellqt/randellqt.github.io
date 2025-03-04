import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Randell',
  tagline: 'Collection of my nonsense.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://randellqt.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'randellqt', // Usually your GitHub org/user name.
  projectName: 'randellqt.github.io', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: false,
        // docs: {
        //   path: 'docs',
        //   routeBasePath: 'docs',
        //   sidebarPath: require.resolve('./sidebars.ts'),
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   // editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          path: 'blogs/blog',
          routeBasePath: 'blog',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: [
            './src/css/base.css',
          ],
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'bareDesign',
        path: 'docs/bare-design/docs',
        routeBasePath: 'bare-design',
        sidebarPath: require.resolve('./docs/bare-design/sidebars.ts'),
        // remarkPlugins: [],
        // editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
      }
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'tutorial',
        path: 'docs/tutorial/docs',
        routeBasePath: 'tutorial',
        sidebarPath: require.resolve('./docs/tutorial/sidebars.ts'),
        // remarkPlugins: [],
        // editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
      }
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/social-card.jpg',
    navbar: {
      title: '@randellqt',
      logo: {
        alt: 'Randell logo',
        src: 'img/logo.svg',
      },
      items: [
        // Left Nav
        {
          to: '/bare-design',
          label: 'Bare Design',
          position: 'left',
          // activeBaseRegex: `/bare-design/`,
        },
        {
          type: 'dropdown',
          label: 'Collections',
          position: 'left',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
          ],
        },
        // Right Nav
        {
          type: 'dropdown',
          label: 'Community',
          position: 'right',
          items: [
            {
              label: 'Tutorial',
              to: '/tutorial/intro',
            },
            // {
            //   label: 'Tutorial',
            //   type: 'docSidebar',
            //   sidebarId: 'docsSidebar',
            // },
            // {
            //   type: 'doc',
            //   docId: 'intro', // The ID of the first doc in `instance-one`
            //   docPluginId: 'docs', // Must match the `id` in your plugin config
            //   label: 'Tutorial',
            // },
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/randellqt',
            },
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/randellqt',
            },
            // {
            //   type: 'doc',
            //   label: 'Social',
            //   docId: 'social',
            // },
            // ... more items
          ],
        },

      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'X',
              href: 'https://x.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()}, by Randell with 💔`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      // additionalLanguages: [ 'bash', 'diff', 'json', 'powershell' ],
    },
    customFields: {
      email: 'randelljy@gmail.com',
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
