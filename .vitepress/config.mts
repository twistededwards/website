import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "twed.org",
  description: "Twisted Edwards supports education and scientific research in the fields of cryptography, distributed systems, and information technology security.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about.html' },
      //{ text: 'People', link: '/people.html' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples.html' },
          { text: 'Runtime API Examples', link: '/api-examples.html' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/twistededwards' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/company/twisted-edwards' }
    ],

    footer: {
      message: 'Website released under the <a href="https://github.com/twistededwards/website/blob/master/COPYING">GPLv3 License</a>. Solution by <a href="https://www.digilol.net">Digilol</a>.',
      copyright: 'Copyright © 2024 Twisted Edwards z.s.'
    }
  }
})
