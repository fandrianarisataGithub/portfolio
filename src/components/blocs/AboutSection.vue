<template>
    <section id="about" class="about">
      <div class="container">
		<TitleSection 
			title = "About"
			:paragraph = "paragraph"
		/>
        <div class="row">
          <div class="col-lg-4" data-aos="fade-right">
            <img src="/img/fenitra-pdp-square.png" class="img-fluid" alt="">
          </div>
          <div class="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
            <h3>SYMFONY &amp; VUE.JS DEVELOPER.</h3>
            <p class="fst-italic">
				Before sharing my basic information, let me express my commitment to providing top-notch services and supporting your vision with my expertise. Feel free to reach out to discuss any projects or collaboration opportunities.
            </p>
            <div class="row">
              <div class="col-lg-6">
                <ul>
                  <li><i class="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>26 August 1993</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+261 34 84 765 91</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>City:</strong> <span>Antananarivo - Madagascar</span></li>
                </ul>
              </div>
              <div class="col-lg-6">
                <ul>
                  <li><i class="bi bi-chevron-right"></i> <strong>Age:</strong> <span>31</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Master</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Email:</strong> <span>fandrianarisata2@gmail.com</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                </ul>
              </div>
            </div>
            <p>
				I look forward to the prospect of collaborating with you to bring your digital ambitions to fruition.
            </p>
          </div>
        </div>

      </div>
    </section>
</template>
<script>
import TitleSection from '@/components/elements/TitleSection.vue';

export default{
		components : {
			TitleSection
		},
		data(){
			return {
				paragraph : `
				As a passionate web developer with five years of dedicated experience, I excel in crafting elegant front-end interfaces using HTML, CSS, and JavaScript, with a penchant for frameworks like Bootstrap, SCSS (CSS preprocessor), and Vue.js. 
				In the realm of back-end development, I consistently harness the power of Symfony to bring robust functionality to life. 
				Whether working remotely or on-site, whether part-time or full-time, I approach my work with curiosity, thoroughness, and punctuality. Keen on continuous growth, I am always eager to deepen my expertise in PHP and JS. Open to all service inquiries within these domains, I invite you to reach out for any project needs.
				<br />Here are all the details about me:
				`
			}
		}
    }
</script>