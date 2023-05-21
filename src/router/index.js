import HomeView from '../views/HomeView.vue'
import ProductsView from "@/views/ProductsView.vue";
import DelicilerView from "@/views/DelicilerView.vue";
import TelliKesiciler from "@/views/TelliKesiciler.vue";
import ZincirliKesiciler from "@/views/ZincirliKesiciler.vue";
import ProductDetailsView from "@/views/ProductDetailsView.vue";
import {createRouter, createWebHistory} from 'vue-router'
import AboutView from "@/views/AboutView.vue";
import ContactView from "@/views/ContactView.vue";
// import app from "@/App.vue";

// app.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        meta: {title: 'Anasayfa'},
        component: HomeView
    },
    {
        path: '/hakkimizda',
        name: 'about',
        meta: {title: 'Hakkımızda'},
        component: AboutView
    },
    {
        path: '/iletisim',
        name: 'contact',
        meta: {title: 'İletişim'},
        component: ContactView
    },
    {
        path: '/urunlerimiz',
        name: 'products',
        meta: {title: 'Ürünlerimiz'},
        component: ProductsView
    },
    {
        path: '/urunlerimiz/deliciler',
        name: 'deliciler',
        meta: {title: 'Deliciler'},
        component: DelicilerView
    },
    {
        path: '/urunlerimiz/kesiciler/zincirli',
        name: 'zincirli-kesiciler',
        meta: {title: 'Zincirli Kesiciler'},
        component: ZincirliKesiciler
    },
    {
        path: '/urunlerimiz/kesiciler/telli',
        name: 'telli-kesiciler',
        meta: {title: 'Telli Kesiciler'},
        component: TelliKesiciler
    },
    {
        path: '/urunlerimiz/kesiciler/zincirli/:url',
        name: 'zincirli-kesici-detay',
        component: ProductDetailsView
    },
    {
        path: '/urunlerimiz/kesiciler/telli/:url',
        name: 'telli-kesici-detay',
        component: ProductDetailsView
    },
    {
        path: '/urunlerimiz/deliciler/:url',
        name: 'delici-detay',
        component: ProductDetailsView
    }
]

export default createRouter({
        history: createWebHistory(),
        routes
    }
)
