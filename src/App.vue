<template>
    <div id="app">
        <Navbar/>
        <div class="min-h-screen">
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
    </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import '@/css/_user.scss';
import {initFlowbite} from 'flowbite'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
    components: {Footer, Navbar},
    watch: {
        $route() {
            window.scrollTo(0, 0, {
                behavior: 'smooth'
            })
        }
    },
    mounted() {
        initFlowbite();
        AOS.init({
            duration: 1000,
            once: false,
            dataAosOut: 'fade-out',
            easing: 'ease-in-out',
        })
    }
}


</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
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
    transform: translateY(-33.3%) scale(1.1);
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
