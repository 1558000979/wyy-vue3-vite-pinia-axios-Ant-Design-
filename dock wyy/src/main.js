import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Antd from 'ant-design-vue';
import router from "./router/index.js";
import pinia from "./modules/pinia/store.js";
import piniaPersist from 'pinia-plugin-persist'
import 'ant-design-vue/dist/reset.css';
const app = createApp(App)
app.use(router)
app.use(pinia)
app.use(Antd)
pinia.use(piniaPersist)
app.mount('#app')
