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
              <li data-filter=".filter-website">Website</li>
            </ul>
          </div>
        </div>
        <div class="row portfolio-container" data-aos="fade-up" data-aos-delay="100">
			<div 
				v-for="(port, i) in listPor" :key="i"
				class="col-lg-4 col-md-6 portfolio-item" :class="'filter-' + port.category">
				<div class="portfolio-wrap">
					<img 
						:src="mode == 'dev' ? '/img/portfolio/' + port.image : '/portfolio/img/portfolio/' + port.image" 
						class="img-fluid" alt="Sata Fenitriniaina portfolio"
					/>
					<div class="portfolio-links">
						<a target="_blank" :href="port.site"
							data-gallery="portfolioGallery" class="portfolio-lightbox" :title="port.category">
						<span>View {{ port.category }}</span>
						</a>
						<a href="#" title="More Details"><i class="bx bx-link"></i></a>
					</div>
				</div>
				<!--div class="port-detail">
					<h4 class="title">Titre</h4>
					<div class="detail">
						<div class="h4">Technologies : </div>
						<ul>
							<li>
								<div class="h4">Frontend : </div>
								<ul>
									<li>JQuery/ Bootstrap</li>
									<li>Vue.js / SASS(SCSS)</li>
									<li>CMS Wordpress</li>
								</ul>
							</li>
							<li>
								<div class="h4">Backend : </div>
								<ul>
									<li>PHP / wordpress</li>
									<li>Mysql</li>
								</ul>
							</li>
						</ul>
					</div>
				</div-->
			</div>

        </div>

      </div>
    </section>
</template>
<script>
import { RouterLink } from 'vue-router';

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
					image : 'ctrlweb.png',
					category : 'website',
					description : '',
					site : 'https://ctrlweb.ca/'

				},
				{
					id : 2,
					image : 'baobab-tree.png',
					category : 'website',
					description : ``,
					site : 'https://baobab-tree-hotel.mg/'
				},
				{
					id : 3,
					image : 'dashboardenac.png',
					category : 'app',
					description : '',
					site : 'https://dashboardenac.com'
				},
				{
					id : 4,
					image : 'royalbeach.png',
					category : 'website',
					description : '',
					site : 'https://royalbeach.mg/'
				},
				{
					id : 5,
					image : 'royal-andilana.png',
					category : 'website',
					description : '',
					site : 'https://www.royalandilana.com/'
				},
				{
					id : 6,
					image : 'dashboardsounds.png',
					category : 'app',
					description : '',
					site : 'https://dashboardsounds.com/login'
				},
				{
					id : 7,
					image : 'tw.png',
					category : 'website',
					description : '',
					site : 'https://www.tropicalwood.mg/'
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