import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
//import './assets/vendor/aos/aos.css';
import './assets/vendor/bootstrap-icons/bootstrap-icons.css';
import './assets/vendor/boxicons/css/boxicons.min.css';
import './assets/vendor/glightbox/css/glightbox.min.css';
import './assets/vendor/swiper/swiper-bundle.min.css';
import './assets/vendor/purecounter/purecounter_vanilla.js';
//import './assets/vendor/aos/aos.js';
import './assets/vendor/bootstrap/js/bootstrap.bundle.min.js';
import './assets/vendor/glightbox/js/glightbox.min.js';
import './assets/vendor/isotope-layout/isotope.pkgd.min.js';
import './assets/vendor/swiper/swiper-bundle.min.js';
import './assets/vendor/typed.js/typed.umd.js';
import './assets/vendor/waypoints/noframework.waypoints.js';
import './assets/vendor/php-email-form/validate.js';
import 'require-polyfills';
import './assets/js/main';
import './assets/scss/main.scss';

import { createApp } from 'vue';

import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
