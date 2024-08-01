import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/css/main.css'
import store from './store'
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

const app = createApp(App);
app.use(router);
app.use(store);
app.mount('#app');

createApp(App).use(store).use(store).use(router).mount('#app').app

const options = createApp;
(Toast, options);
