<template>
    <section id="portfolio-detail" class="portfolio-detail section-bg">
      <div class="container">
        <TitleSection 
          title = "Portfolio"
          :paragraph = "paragraph"
        />
        <div class="row portfolio-detail-container">
            <p>
                Lorem ipsum dolor sit amet.
            </p>
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
			mode : null,
			paragraph : `Welcome to my portfolio, where innovation meets execution. In this section, I'm thrilled to showcase a collection of websites and applications that reflect my passion for cutting-edge design and functionality. Each project represents a unique journey, blending creativity with technical expertise. From user-friendly interfaces to robust backend systems, these endeavors demonstrate my commitment to delivering impactful solutions. Explore the diverse range of projects below to get a glimpse of how I bring ideas to life through the seamless integration of design and technology.`
			,
			listPor : [
				{
					id : 1,
					image : 'baobab-tree.png',
					category : 'web',
					description : ``
				},
				{
					id : 2,
					image : 'dashboardenac.png',
					category : 'app'
				},
				{
					id : 3,
					image : 'royalbeach.png',
					category : 'web'
				},
				{
					id : 4,
					image : 'royal-andilana.png',
					category : 'web'
				},
				{
					id : 5,
					image : 'ctrlweb.png',
					category : 'web'
				},
			
				{
					id : 6,
					image : 'dashboardsounds.png',
					category : 'app'
				},

			]

		}
	},
	mounted(){
		this.mode = __APP_ENV__;
		//console.log(this.mode)
	}
}
</script>