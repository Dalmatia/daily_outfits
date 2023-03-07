import './bootstrap';
import { createApp } from 'vue';
import App from '../js/App.vue';
import '../css/app.css';
import router from './router';
import store from './store';

import PrimeVue from 'primevue/config';
import Calendar from 'primevue/calendar';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import 'primevue/resources/themes/tailwind-light/theme.css';

import ja from './src/i18n/locale/ja';

createApp(App)
    .use(router)
    .use(store)
    .use(PrimeVue, { locale: ja })
    .component('Calendar', Calendar)
    .mount('#app');
