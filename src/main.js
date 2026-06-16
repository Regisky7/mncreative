import { createApp } from 'vue';
import{createPinia} from'pinia';
import 'C:/Users/USER/mncreative/src/main.css';
import router from 'C:/Users/USER/mncreative/src/routes.js';
import App from './App.vue';

const pinia = createPinia();
const app = createApp(App);
app.use(pinia);
app.use(router);
app.mount('#app');