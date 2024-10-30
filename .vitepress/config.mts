import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "twed.org",
  description: "Twisted Edwards supports education and scientific research in the fields of cryptography, distributed systems, and information technology security.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', items: [
	{ text: 'Impressum', link: '/about/impressum.html' },
	{ text: 'Privacy Policy', link: '/about/privacy-policy.html'},
      //{ text: 'People', link: '/people.html' }
	]}
    ],

    sidebar: [
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/twistededwards' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/company/twisted-edwards' }
    ],

    footer: {
      message: '<a href="/policy/privacy-policy.html">Privacy Policy</a><br />Website released under the <a href="https://github.com/twistededwards/website/blob/master/COPYING">GPLv3 License</a>. Solution by <a href="https://www.digilol.net">Digilol</a>.',
      copyright: 'Copyright © 2024 Twisted Edwards z.s.'
    }
  }
})
