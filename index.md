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

features:
  - title: Educational Event Production
    icon: 🎉
    details: We handle everything from planning to execution, creating impactful events for learning and collaboration.
    link: '#'
  - title: Workshops & Training
    icon: 🎓
    details: From beginner workshops to advanced training, we host sessions that empower individuals and organizations in IT security and privacy.
    link: '#'
  - title: Research Support & Collaboration
    icon: 🔬
    details: Partnering with researchers, we provide resources and collaboration opportunities in cryptography and distributed systems.
    link: '#'

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
  z-index: -1;
}

.dark .bg-graph {
  background-image: url("/te-dark.svg");
}
</style>
