<template>
    <section id="portfolio" class="portfolio section-bg">
      <div class="container">
        <TitleSection 
          title = "Portfolio"
          :paragraph = "paragraph"
        />
        <div class="row" data-aos="fade-up">
          <div class="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li data-filter="*" class="filter-active">All</li>
              <li data-filter=".filter-app">Webapp</li>
              <li data-filter=".filter-card">Card</li>
              <li data-filter=".filter-web">Website</li>
            </ul>
          </div>
        </div>
        <div class="row portfolio-container" data-aos="fade-up" data-aos-delay="100">

			<div 
				v-for="(port, i) in listPor" :key="i"
				class="col-lg-4 col-md-6 portfolio-item" :class="'filter-' + port.category">
				<div class="portfolio-wrap">
					<img src="/img/portfolio/baobab-tree.png" class="img-fluid" alt="Sata Fenitriniaina portfolio">
					<div class="portfolio-links">
						<a :href="'/img/portfolio/' + port.image"
						data-gallery="portfolioGallery" class="portfolio-lightbox" title="Card 3">
						<span>More details</span>
						</a>
					</div>
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
			paragraph : `Welcome to my portfolio, where innovation meets execution. In this section, I'm thrilled to showcase a collection of websites and applications that reflect my passion for cutting-edge design and functionality. Each project represents a unique journey, blending creativity with technical expertise. From user-friendly interfaces to robust backend systems, these endeavors demonstrate my commitment to delivering impactful solutions. Explore the diverse range of projects below to get a glimpse of how I bring ideas to life through the seamless integration of design and technology.`
			,
			listPor : [
				{
					image : 'baobab-tree.png',
					category : 'web'
				},
				{
					image : 'dashboardenac.png',
					category : 'app'
				},
				{
					image : 'royalbeach.png',
					category : 'web'
				},
				{
					image : 'royal-andilana.png',
					category : 'web'
				},
				{
					image : 'ctrlweb.png',
					category : 'web'
				},
			
				{
					image : 'dashboardsounds.png',
					category : 'app'
				},

			]

		}
	}
}
</script>