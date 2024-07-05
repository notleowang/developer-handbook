import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

export default withMermaid(
  defineConfig({
    title: "Developer Handbook",
    description: "My notes and programming stuff",
    base: '/developer-handbook/',

    srcDir: "src",      // I changed the Source Directory from root to src,
    cleanUrls: true,    // Hosting on GitHub pages which automatically supports generating "clean" URLs
    lastUpdated: true,

    themeConfig: {
      nav: nav(),

      sidebar: sidebar(),

      socialLinks: [
        { icon: 'github', link: 'https://github.com/notleowang' },
        { icon: 'linkedin', link: 'https://www.linkedin.com/in/notleowang' },
        { icon: 'twitter', link: 'https://twitter.com/notleowang' }
      ],

      search: {
        provider: 'local'
      },
    },

    markdown: {
      math: true
    }
  })
);

function nav() {
  return [
    { text: 'Home', link: '/' },
    { text: 'Handbook', link: '/intro/introduction' }
  ];
}

function sidebar() {
  return [
    {
      text: 'Introduction',
      items: [
        { text: 'What is this?', link: '/intro/introduction' },
        { text: 'Guide', link: '/intro/guide' }
      ],
      collapsed: false
    },

    {
      text: 'SDE Topics',
      items: [
        { text: 'Data Structures', link: '/software-dev/data-structures' },
        { text: 'APIs', link: '/software-dev/api' }
      ],
      collapsed: false
    },

    {
      text: 'Version Control',
      items: [
        { text: 'Git', link: '/git'}
      ],
      collapsed: false
    },

    {
      text: 'Languages',
      items: [
        { text: 'Python', link: '/languages/python' }
      ],
      collapsed: false
    },

    {
      text: 'Machine Learning',
      items: [
        { text: 'Basic Concepts', link: '/machine-learning/concepts' },
        { text: 'Statistics', link: '/machine-learning/statistics' },
        { text: 'Supervised Learning', link: '/machine-learning/supervised-learning',
          items: [
            { text: 'Decision Trees', link: '/machine-learning/decision-trees' }
          ]
        },
        { text: 'Unsupervised Learning', link: '/machine-learning/unsupervised-learning' }
      ],
      collapsed: false
    }
  ];
}