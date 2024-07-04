import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


// 引入 Bootstrap 5 的 JS 檔
import 'bootstrap'

// 引入全站的樣式 Scss 檔
import './assets/scss/style.scss';

createApp(App).use(router).mount('#app')
