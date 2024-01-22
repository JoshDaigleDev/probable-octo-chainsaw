import './assets/main.css'
import 'primevue/resources/themes/bootstrap4-light-blue/theme.css'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'
import ToastService from 'primevue/toastservice';
import { createApp } from 'vue'
import { createPinia } from 'pinia'

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(PrimeVue);
app.use(ToastService);

app.mount('#app');
