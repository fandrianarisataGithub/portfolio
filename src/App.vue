<template>
  <div>
    <i class="bi bi-list mobile-nav-toggle d-xl-none"
      @click="isMenuOpen = !isMenuOpen"
    ></i>
    <Header />
    <HeroSection />
    <main id="main">
      <AboutSection />
      <!--FactsSection /-->
      <ResumeSection />
      <SkillsSection />
      <PortfolioSection />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
    <Footer />
    <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>
  </div>
</template>
<script>
import AboutSection from './components/blocs/AboutSection.vue';
import ContactSection from './components/blocs/ContactSection.vue';
import FactsSection from './components/blocs/FactsSection.vue';
import HeroSection from './components/blocs/HeroSection.vue';
import PortfolioSection from './components/blocs/PortfolioSection.vue';
import ResumeSection from './components/blocs/ResumeSection.vue';
import ServicesSection from './components/blocs/ServicesSection.vue';
import SkillsAnimate from './components/blocs/SkillsAnimate.vue';
import SkillsSection from './components/blocs/SkillsSection.vue';
import TestimonialsSection from './components/blocs/TestimonialsSection.vue';
import Footer from './components/layouts/FooterLayout.vue';
import Header from './components/layouts/HeaderLayout.vue';

export default {
  data(){
    return {
      isMenuOpen : false
    }
  },
  components : {
    Header,
    HeroSection,
    AboutSection,
    FactsSection, 
    SkillsSection,
    SkillsAnimate,
    ResumeSection, 
    PortfolioSection,
    ServicesSection,
    TestimonialsSection,
    ContactSection,
    Footer
  },
  methods : {

  }
}
</script>