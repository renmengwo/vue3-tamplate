import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import ElementPlus from 'element-plus';
import './styles/element-variables.scss';
import 'element-theme-chalk/lib/index.css';
import './styles/index.scss';
createApp(App)
  .use(router)
  .use(ElementPlus)
  .mount('#app');
