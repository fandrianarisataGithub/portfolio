<template>
    <div>
		<i class="bi mobile-nav-toggle d-xl-none"
		:class="isMenuOpen ? 'bi-x' : 'bi-list'"
		@click="isMenuOpen = !isMenuOpen"
		></i>
		<Header 
			:active-navbar="isMenuOpen" 
			:fromPortfolio="true" 
			@hide-navbar=" 
			isMenuOpen = false"
		/>
		<main id="main">
			<!-- ======= Breadcrumbs ======= -->
			<section id="breadcrumbs" class="breadcrumbs">
				<div class="container">

					<div class="d-flex justify-content-between align-items-center">
						<h2>Portfoio Details</h2>
						<ol>
							<li><a href="index.html">Home</a></li>
							<li>Portfoio Details</li>
						</ol>
					</div>
				</div>
			</section><!-- End Breadcrumbs -->
			<PortfolioDetailSection />
		</main>
    <Footer />
    <a href="#" class="back-to-top d-flex align-items-center justify-content-center">
		<i class="bi bi-arrow-up-short"></i>
	</a>
	</div>
</template>
<script>
import PortfolioDetailSection
  from '@/components/blocs/PortfolioDetailSection.vue';
import Footer from '@/components/layouts/FooterLayout.vue';
import Header from '@/components/layouts/HeaderLayout.vue';

export default{
    components : {
		PortfolioDetailSection,
		Header,
		Footer
	},
	data(){
		return {
			isMenuOpen : false,
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
		if(!parseInt(this.$route.params.id)){
			alert('zao kosa aloha tsy tokony hisy page e')
		}
		
	}
}
</script>