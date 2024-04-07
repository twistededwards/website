---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
hero:
  text: "Twisted Edwards"
  tagline: "We support education and scientific research in the fields of cryptography, distributed systems, and information technology security."
  actions:
    - theme: brand
      text: Contact us
      link: "mailto:orga@twed.org"
markdownStyles: false
---

<div class="bg-graph" />

<style scoped>
.bg-graph {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url("/te.svg");
  background-position: center;
  background-size: cover;
}

.dark .bg-graph {
  background-image: url("/te-dark.svg");
}
</style>
