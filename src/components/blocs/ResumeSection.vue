<template>
    <section id="resume" class="resume">
      <div class="container">

        <TitleSection 
          title = "Resume"
          :paragraph = "paragraph"
        />

        <div class="row">
          <div class="col-lg-6" data-aos="fade-up">
            <h3 class="resume-title">Sumary</h3>
            <div class="resume-item pb-0">
              <h4>Feni (<span style="color: #149ddd">Feni</span>triniaina)</h4>
              <p><em>Passionate self-taught web developer with 4+ years of experience, possessing strong expertise in front-end and back-end technologies, dedicated to crafting engaging digital experiences and staying ahead of industry trends.</em></p>
              <ul>
                <li>Lot ATO-078 BIS Ambohitrimanjaka</li>
                <li><a href="tel:+261325109013">+261 32 51 090 13</a></li>
                <li><a href="mailto:fandrianarisata2@gmail.com">fandrianarisata2@gmail.com</a></li>
              </ul>
            </div>

            <h3 class="resume-title">Education</h3>
            <div class="resume-item">
              <h4>Master’s degree in Applied Mathematics, with a focus on numerical computation.</h4>
              <h5>2012 - 2019</h5>
              <p><em>University of Antananarivo, Madagascar</em></p>
            </div>
            <div class="resume-item">
              <h4>Professional training in data science and preparation for the eskills academy certificate</h4>
              <h5>August, 2023</h5>
              <p><em>INSI University</em></p>
            </div>
            <div class="resume-item">
              <h4>Master’s degree in Data Science Training</h4>
              <h5>Fev, 2024</h5>
              <p><em>INSI University</em></p>
            </div>
          </div>
          <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 class="resume-title">Professional Experience</h3>
            <div class="resume-item">
              <h4>Data science project</h4>
              <h5>August 2023</h5>
              <p>
                <em>INSI UNIVERSITY</em> (<a href="https://www.insi.mg/">Website</a>)
              </p>
              <ul>
                <li>Malaria detection by using Deep learning</li>
              </ul>
            </div>
            <div class="resume-item">
              <h4>4+ PHP-JS Developer (Symfony/vue.js)</h4>
              <h5>2019 - Present</h5>
              <p>
                <em>ENAC GROUP</em> (<a href="https://www.enac.mg/">Website</a>)
              </p>
              <ul>
                <li>Fullstack full-time office work web developer (2019 - 2023)</li>
				        <li>Freelance web developer since 2023</li>
              </ul>
			        <p>
                <em>CTRLWEB</em> (<a href="https://ctrlweb.ca">Website</a>)
              </p>
              <ul>
                <li>Vue.js and Nuxt.js developper (2021 - 2023)</li>
              </ul>
            </div>
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
			paragraph : `As a dedicated and skilled professional, my journey in web development has been marked by a commitment to excellence and a passion for creating captivating and user-centric digital experiences. My educational background in mathematics, with a focus on numerical computation, laid the groundwork for my analytical and problem-solving skills, which I have seamlessly transferred to the field of computer science. As an autodidact in the realm of computer science, I have proactively pursued knowledge and hands-on experience in web development, mastering languages such as HTML, CSS, JavaScript, and PHP. My specialization in UI/UX design and a keen eye for detail further complement my practical expertise, enabling me to craft dynamic and responsive websites and web applications. I am constantly seeking ongoing learning opportunities to stay ahead of the curve with the latest technologies and trends, ensuring that my work consistently meets and exceeds the expectations of clients and end users alike. My unique blend of mathematical acumen, autodidactic initiative, practical experience, and specialized skills converge to provide a comprehensive and proficient foundation for delivering exceptional web development solutions.`
		}
	}
}
</script>