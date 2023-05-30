<template>
    <div id="app">
        <Navbar/>
        <div>
            <!--            <transition mode="out-in" name="fade">-->
            <!--                <router-view/>-->
            <!--            </transition>-->
            <router-view v-slot="{ Component }">
                <transition mode="out-in" name="fade">
                    <component :is="Component"/>
                </transition>
            </router-view>

        </div>
        <Footer/>
        <div class="scroll-to-top-button bg-black text-white text-center flex items-center justify-center cursor-pointer fixed bottom-12 right-6 transition-all hover:bg-[#F7AF03]"
             style="width: 36px; height: 36px;"
             @click="scrollToTop">
            <i class="fa-solid fa-chevron-up fs-6"/>
        </div>
    </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import '@/css/_user.scss';
import {initFlowbite} from 'flowbite'
import AOS from 'aos'
import 'aos/dist/aos.css'
import * as emailjs from "@emailjs/browser";
import Whatsapp from "@/components/Whatsapp.vue";

export default {
    components: {Whatsapp, Footer, Navbar},
    watch: {
        $route() {
            document.title = 'Hidrobarsan | ' + this.$route.meta.title;
            this.scrollToTop();
        }
    },
    mounted() {
        initFlowbite();
        AOS.init({
            duration: 500,
            once: true,
            easing: 'ease-in-out',
        })
        emailjs.init(process.env.VUE_APP_EMAIL_PUBLIC_KEY);
    },
    setup() {
        const scrollToTop = () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        }
        return {scrollToTop}
    },
}


</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  max-width: 100vw;
  overflow-x: hidden;
}

body > div {
  overflow-x: hidden;
}

#app {
  font-family: 'Poppins', sans-serif;
  background-color: #F7F7F7;
}

.product-card:hover {
  img {
    transform: translateY(-33.3%) scale(1.15);
  }
}

@keyframes swing {
  0% {
    transform: translateX(0);
  }

  50% {
    transform: translateX(10px);
  }

  100% {
    transform: translateX(0);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}
</style>
