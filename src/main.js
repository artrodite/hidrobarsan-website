import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import Tres from '@tresjs/core'


export const app = createApp(App)
app.use(router)
app.use(Tres)
app.mount('#app')


// new Vue({
//   router,
//   render: h => h(App)
// }).$mount('#app')
