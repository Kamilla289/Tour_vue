import { createApp } from 'vue'
import './assets/scss/style.scss';
import './assets/scss/bootstrap.min.css';
import App from './App.vue'

import router from './router'; // Импортируем роутер
import store from './store';

const app = createApp(App);

app.use(router); // Подключаем роутер
app.use(store);
app.mount('#app'); // Монтируем приложение