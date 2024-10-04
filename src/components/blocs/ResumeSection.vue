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
                <li><a href="tel:+261325109013">+261 32 51 090 13 (whatsapp)</a></li>
                <li><a href="tel:+261348476591">+261 34 84 765 91</a></li>
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
              <h4>Master’s degree in Data Science and Machine learning engineer</h4>
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
                <li>Malaria detection : Using computer vision (DEEP LEARNING CNN ResNet)</li>
                <li>Loan default prediction: Using machine learning (XGBoost, Random Forest, Logistic Regression)</li>
              </ul>
              <h5>Since March 2024</h5>
              <p>
                <em>PERSONAL PROJECT & RESEARCH</em>
              </p>
              <ul>
                <li>KABARYBOT: Development of a chatbot highlighting Malagasy oratory rituals during 'kabary' and 'famangiana' using NLP techniques with Spacy and NLTK. (Project ongoing)</li>
              </ul>
              <h5>Since September 2024</h5>
              <p>
                <em>ClearMindAnalytics</em>
              </p>
              <ul>
                <li>
                  Speech-to-Text: Developing a personal project for transcribing spoken meetings into text using advanced speech recognition techniques. (Project ongoing)
                </li>
                <li>
                  Post Call Reporting: Creating a system for generating concise reports from transcribed call conversations, utilizing NLP techniques to extract key information and insights. (Project ongoing)
                </li>
              </ul>
            </div>
            <div class="resume-item">
              <h4>4+ PHP-JS Developer (Symfony/vue.js)</h4>
              <h5>2019 - Present</h5>
              <p>
                <em>KAZIDOMI</em> (<a href="https://kazidomi.com">Website</a>)
              </p>
              <ul>
                <li>Fullstack web developer (May 2024 to Sept 2024)</li>
              </ul>
              <p>
                <em>CTRLWEB</em> (<a href="https://ctrlweb.ca">Website</a>)
              </p>
              <ul>
                <li>Vue.js and Nuxt.js developper (2021 - 2023)</li>
              </ul>
              <p>
                <em>ENAC GROUP</em> (<a href="https://www.enac.mg/">Website</a>)
              </p>
              <ul>
                <li>Fullstack full-time office work web developer (2019 - 2023)</li>
				        <li>Freelance web developer since 2023</li>
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
			paragraph : `
        I am a dedicated web developer and machine learning engineer with a strong foundation in 
        mathematics and data science. With expertise in Vue.js, React, PHP Symfony, and Django, 
        I build user-centric, responsive web applications. I also specialize in predictive analytics 
        and machine learning using Python, Power BI, and SQL. A self-taught developer, I’m committed to 
        continuous learning and staying up-to-date with the latest technologies to consistently deliver 
        high-quality, 
        data-driven solutions.
      `
		}
	}
}
</script>