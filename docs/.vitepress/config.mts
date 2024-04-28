import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "My Developer Handbook",
  description: "Documentation for helpful code snippets",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Documentation', link: '/documentation' }
    ],

    sidebar: [
      {
        text: 'Version Control',
        items: [
          { text: 'Git', link: '/documentation' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: 'Python',
        items: [
          { text: 'Idk'}
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/notleowang' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/notleowang' },
      { icon: 'twitter', link: 'https://twitter.com/notleowang' }
    ]
  },
  srcDir: "src",    // I changed the Source Directory from root to src,
  cleanUrls: true   // Hosting on GitHub pages which automatically supports generating "clean" URLs
})

// Link to deploy website later: https://vitepress.dev/guide/deploy