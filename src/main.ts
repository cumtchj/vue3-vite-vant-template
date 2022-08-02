import { createApp } from 'vue';
import {createPinia} from 'pinia'
import App from './App.vue';
import { Button } from 'vant';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';

import './styles/index.scss';

const app = createApp(App);

app.use(createPinia())

dayjs.locale('zh-ch');
app.config.globalProperties.$dayjs = dayjs;

app.use(Button);

app.mount('#app');
