<template>
    <div class="container md:h-[calc(100vh-8rem)] px-6 md:px-0 mb-16 md:mb-0 mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-6">
        <div class="w-full" data-aos="fade-left">
            <swiper ref="swiper" :allow-touch-move="false" :autoplay="true" :loop="loop"
                    :slides-per-view="1"
                    @autoplayTimeLeft="onAutoplayTimeLeft"
                    @swiper="onSwiper"
            >
                <swiper-slide>
                    <img alt="hero image" class="mx-auto" src="/images/hero-1.png">
                </swiper-slide>
                <swiper-slide>
                    <img alt="hero image" class="mx-auto" src="/images/hero-2.png">
                </swiper-slide>
                <template #container-end>
                    <div class="autoplay-progress">
                        <svg ref="progressCircle" viewBox="0 0 48 48">
                            <circle cx="24" cy="24" r="20"></circle>
                        </svg>
                        <span ref="progressContent"></span>
                    </div>
                </template>
            </swiper>
        </div>
        <div class="flex flex-col lg:pl-16">
            <div class="flex flex-col text-5xl md:text-8xl mt-4">
                <span class="mb-2" data-aos="fade-right">TOZ EMME</span>
                <span class="text-[#F7AF03] font-bold" data-aos="fade-right" data-aos-delay="200">SİSTEMİ</span>
            </div>
            <div class="font-thin mt-4 texl-xl lg:text-3xl" data-aos="fade-right" data-aos-delay="300">
                Mermer tozunu ortadan kaldıran son teknoloji emiş sistemi.
            </div>
            <div class="flex flex-col md:flex-row gap-4">
                <router-link
                        class="see-product-btn mt-8 md:w-2/3 border border-[#F7AF03] bg-[#F7AF03] hover:bg-transparent flex px-4 py-2 justify-center items-center transition-all"
                        to="/urunlerimiz">
                    <span class="see-product-btn-text text-white font-medium mr-2">Ürünlere Göz At</span>
                </router-link>
                <router-link
                        class="contact-us-btn md:mt-8  md:w-2/3 border border-[#F7AF03] bg-transparent hover:bg-[#F7AF03] flex px-4 py-2 justify-center items-center transition-all"
                        to="/iletisim">
                    <span class="contact-us-btn-text text-[#F7AF03] font-medium mr-2">Bize Ulaş</span>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import SwiperCore, {Autoplay} from "swiper"
import {Swiper, SwiperSlide} from 'swiper/vue';
import 'swiper/css';
import {ref} from "vue";

SwiperCore.use([Autoplay])

export default {
    setup() {
        const progressCircle = ref(null);
        const progressContent = ref(null);
        const onAutoplayTimeLeft = (s, time, progress) => {
            progressCircle.value.style.setProperty('--progress', 1 - progress);
            progressContent.value.textContent = `${Math.ceil(time / 1000)}s`;
        };

        const onSwiper = (swiper) => {
            // console.log(swiper);
        };
        return {
            onSwiper,
            onAutoplayTimeLeft,
            progressCircle,
            progressContent
        };
    },
    data() {
        return {
            autoplay: {
                delay: 100,
                disableOnInteraction: false
            },
            loop: true,
        }
    },
    components: {
        Swiper,
        SwiperSlide
    }
}
</script>

<style scoped>

.see-product-btn:hover {
    .see-product-btn-text {
        color: #F7AF03;
    }
}

.contact-us-btn:hover {
    .contact-us-btn-text {
        color: white;
    }
}

.autoplay-progress {
    position: absolute;
    left: 16px;
    top: 0;
    z-index: 10;
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    color: #F7AF03;
}

.autoplay-progress svg {
    --progress: 0;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 10;
    width: 100%;
    height: 100%;
    stroke-width: 2px;
    stroke: #F7AF03;
    fill: none;
    stroke-dashoffset: calc(125.6 * (1 - var(--progress)));
    stroke-dasharray: 125.6;
    transform: rotate(-90deg);
}


</style>
