import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import VueGtag from "vue-gtag";
import './index.css'
import Tres from '@tresjs/core'


export const app = createApp(App)
app.use(VueGtag, {
    config: { id: "G-HBM2FR1N6Y" }
})
app.use(router)
app.use(Tres)
app.mount('#app')


// new Vue({
//   router,
//   render: h => h(App)
// }).$mount('#app')
