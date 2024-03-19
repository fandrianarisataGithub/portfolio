<template>
    <section id="services" class="services">
      <div class="container">

        <TitleSection 
          title = "Services"
          :paragraph = "paragraph"
        />
        
        <div class="row">
          <div class="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
            <div class="icon"><i class="bi bi-bar-chart"></i></div>
            <h4 class="title"><a href="#">Data Science Consultancy</a></h4>
            <p class="description">
              Data visualization, predictive analysis from a given dataset, data classification (automated), AI design for natural languages ​​(NLP)
            </p>
          </div>
          <div class="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
            <div class="icon"><i class="bi bi-chat-dots"></i></div>
            <h4 class="title"><a href="#">Consultation and Advisory</a></h4>
            <p class="description">
              Offering advice and recommendations on best practices, technological choices, and process optimization to achieve client goals.
            </p>
          </div>
          <div class="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="100">
            <div class="icon"><i class="bi bi-pencil-square"></i></div>
            <h4 class="title"><a href="">Website Design</a></h4>
            <p class="description">
				Creating websites by designing mockups, choosing colors, fonts, and images to craft an attractive and user-friendly interface.
			</p>
          </div>
          <div class="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="200">
            <div class="icon"><i class="bi bi-layers"></i></div>
            <h4 class="title"><a href="">Full-Stack Development</a></h4>
            <p class="description">
				Providing services in both front-end and back-end development to create comprehensive web applications.
			</p>
          </div>
          <div class="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="300">
            <div class="icon"><i class="bi bi-puzzle"></i></div>
            <h4 class="title"><a href="">System Integration</a></h4>
            <p class="description">
				Integrating different technologies, services, or systems to ensure seamless and efficient communication between them.
			</p>
          </div>
          <div class="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="400">
            <div class="icon"><i class="bi bi-globe"></i></div>
            <h4 class="title"><a href="">Web Application Development</a></h4>
            <p class="description">
				Creating custom web applications to meet specific client needs, whether for e-commerce, content management, scheduling, etc.
			</p>
          </div>
          <div class="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="500">
            <div class="icon"><i class="bi bi-speedometer"></i></div>
            <h4 class="title"><a href="">Performance Optimization</a></h4>
            <p class="description">
				mproving website performance by optimizing code, images, caching resources, etc.
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
				Explore a spectrum of tailored solutions in our Services section, where we are committed to meeting your digital requirements with precision and innovation. Our team of skilled web developers specializes in website design, front-end and back-end development, system integration, and more. Whether you're aiming to enhance your online presence, optimize performance, or fortify web security, our comprehensive suite of services is designed to exceed expectations. Join us on a journey through the dynamic realm of web technologies, where we deliver customized solutions crafted to elevate your digital landscape.
			`
		}
	}
}
</script>