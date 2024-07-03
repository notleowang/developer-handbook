import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Developer Handbook",
  description: "My notes and programming stuff",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Handbook', link: '/intro/introduction' }
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'What is this?', link: '/intro/introduction' },
          { text: 'Guide', link: '/intro/guide' }
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
          { text: 'Supervised Learning', link: '/machine-learning/supervised-learning' }
        ],
        collapsed: false
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/notleowang' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/notleowang' },
      { icon: 'twitter', link: 'https://twitter.com/notleowang' }
    ],

    search: {
      provider: 'local'
    },
  },
  srcDir: "src",      // I changed the Source Directory from root to src,
  cleanUrls: true,    // Hosting on GitHub pages which automatically supports generating "clean" URLs
  lastUpdated: true,
  base: '/developer-handbook/',
  markdown: {
    math: true
  }
})