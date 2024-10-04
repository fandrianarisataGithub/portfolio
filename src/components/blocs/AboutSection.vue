<template>
    <section id="about" class="about">
      <div class="container">
		<TitleSection 
			title = "About me"
			:paragraph = "paragraph"
		/>
        <div class="row">
          <div class="col-lg-4" data-aos="fade-right">
            <img src="/img/fenitra-pdp-square.png" class="img-fluid" alt="">
          </div>
          <div class="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
            <h3>DATA SCIENTIST &amp; WEB DEVELOPER.</h3>
            <p class="fst-italic">
				Before sharing my basic information, let me express my commitment to providing top-notch services and supporting your vision with my expertise. Feel free to reach out to discuss any projects or collaboration opportunities.
            </p>
            <div class="row">
              <div class="col-lg-6">
                <ul>
                  <li><i class="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+261 34 84 765 91</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Whatsapp:</strong> <span>+261 32 51 090 13</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>City:</strong> <span>Antananarivo - Madagascar</span></li>
                </ul>
              </div>
              <div class="col-lg-6">
                <ul>
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
				As a web developer and machine learning engineer with five years of experience, 
        I specialize in front-end development with Vue.js and React, 
        and back-end with PHP Symfony and Django. 
        I have strong skills in data science, focusing on data visualization, 
        predictive analytics, and machine learning using Python, Power BI, and SQL, with occasional use of R. 
        I'm also experienced with cloud environments like AWS. 
        Currently pursuing a Master’s in Machine Learning Engineering and Data Science, 
        I'm eager to take on new challenges in both web development and data science, delivering work with precision and punctuality.
				<br />Here are all the details about me:
				`
			}
		}
    }
</script>