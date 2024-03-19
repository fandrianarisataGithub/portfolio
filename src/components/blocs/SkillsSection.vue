<template>
    <section id="skills" class="skills section-bg">
      <div class="container">

		<TitleSection 
          title = "Skills"
          :paragraph = "paragraph"
        />
		
        <div class="row skills-content">
			<div 	
				v-for="(skill, index) in skills"
				:key="index" class="col-lg-6" data-aos="fade-up">
				<div class="progress">
				<span class="skill">{{ skill.name }} <i class="val">{{ skill.note }}%</i></span>
					<div class="progress-bar-wrap">
						<div ref="skillNote" class="progress-bar" role="progressbar" :aria-valuenow="skill.note" aria-valuemin="0" aria-valuemax="100"></div>
					</div>
					<Trigger @triggerIntesected="loadProgressValue"/>
				</div>
			</div>
        </div>
      </div>
    </section>
</template>
<script>
import TitleSection from '@/components/elements/TitleSection.vue';

import Trigger from '../elements/TriggerIntersection.vue';

export default{
	data(){
		return{
			skills : [
				{
					name : 'HTML / CSS (SCSS)',
					note : 99
				},
				{
					name : 'Javascript',
					note : 90
				},
				{
					name : 'Vue.js / Nuxt.js',
					note : 90
				},
				{
					name : 'PHP / Symfony',
					note : 90
				},
				{
					name : 'Python',
					note : 80
				},
				{
					name : 'R',
					note : 75
				},
				{
					name : 'GIT',
					note : 95
				},
				{
					name : 'Docker',
					note : 90
				},
				{
					name : 'Agile Scrum',
					note : 80
				},
				{
					name : 'OS Windows / OS Linux',
					note : 90
				},
			],
			paragraph : `I possess a robust skill set in web development, showcasing proficiency in HTML, CSS, JavaScript, and PHP. My expertise in HTML allows me to create well-structured and semantic web pages, ensuring an optimal user experience. Additionally, my mastery of CSS enables me to design visually appealing and responsive interfaces, ensuring a seamless presentation across various devices. I am adept at harnessing the power of JavaScript to implement dynamic and interactive features, enhancing the functionality of websites. Moreover, my proficiency in PHP extends my capabilities, allowing me to develop efficient and scalable server-side solutions. With a keen attention to detail and a passion for clean, efficient code, I am well-equipped to contribute effectively to any web development project.`
		}
	},
	components : {
		Trigger,
		TitleSection
	},
	methods : {
		loadProgressValue(){
			this.$refs.skillNote.forEach( element => {
				//console.log(element)
				element.style.width = element.getAttribute('aria-valuenow') + '%'
			})
		}
	}
}
</script>