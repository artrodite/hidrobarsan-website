import {createApp} from 'vue'
import {createI18n} from 'vue-i18n'
import App from './App.vue'
import router from './router'
import VueGtag from "vue-gtag";
import './index.css'
import Tres from '@tresjs/core'
import languages from "@/locale/languages";

const messages = languages;

const i18n = createI18n({
    locale: 'tr',
    fallbackLocale: 'tr',
    messages,
})


export const app = createApp(App)
app.use(i18n);
app.use(VueGtag, {
    config: {id: "G-HBM2FR1N6Y"}
});
app.use(router);
app.use(Tres);
app.mount('#app')


// new Vue({
//   router,
//   render: h => h(App)
// }).$mount('#app')
