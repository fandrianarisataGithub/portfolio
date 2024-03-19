<template>
  <router-view />
</template>
<script>
import {
  RouterLink,
  RouterView,
} from 'vue-router';

import HomeViewVue from '@/views/HomeView.vue';
import PorfolioDetail from '@/views/PorfolioDetail.vue';

export default {
	components : {
		PorfolioDetail,
		HomeViewVue
	}
}
</script>