<template>
    <section id="skills" class="skills section-bg">
      <div class="container">

		<TitleSection 
          title = "Skills"
          paragraph = "Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas."
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
					name : 'HTML',
					note : 90
				},
				{
					name : 'CSS/SCSS',
					note : 80
				}
			]
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