<template>
    <div class="container px-6 md:px-0 mx-auto mb-12">
        <div class="w-full" data-aos="fade-left">
            <swiper ref="swiper" :autoplay="true" :loop="loop" :navigation="true"
                    :slides-per-view="1"
                    @autoplayTimeLeft="onAutoplayTimeLeft"
                    @slideChange="onSlideChange"
                    @swiper="onSwiper"
                    :allow-touch-move="false"
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
        <div class="flex flex-col text-5xl mt-4">
            <span class="font-bold text-[#F7AF03]" data-aos="fade-right">{{ show ? 'DELMEK' : 'KESMEK' }}</span>
            <span data-aos="fade-right" data-aos-delay="200">ARTIK DAHA KOLAY</span>
        </div>
        <div class="font-thin mt-4" data-aos="fade-right" data-aos-delay="300">
            Yeni toz emişli <span class="text-[#F7AF03] font-bold text-xl">{{ show ? 'HZK8200' : 'Y328' }}</span> ile İş yükünüzü azaltın, tozlardan kurtulun.
        </div>
        <div class="mt-12" data-aos="fade-up">
            <router-link class="bg-[#F7AF03] w-full rounded flex p-4 justify-center items-center" to="/">
                <span class="text-white font-medium mr-2">Bu ürünü inceleyin</span>
                <img alt="3d-view-icon" src="@/assets/3d-view-icon.svg">
            </router-link>
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
            console.log(swiper);
        };
        const onSlideChange = () => {
            console.log('slide change');
        };

        return {
            onSwiper,
            onSlideChange,
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
            show: true
        }
    },
    components: {
        Swiper,
        SwiperSlide
    },
    mounted() {
        this.$nextTick(() => {
            setInterval(() => {
                this.show = !this.show;
            }, 3300);
        });
    }
}
</script>

<style scoped>

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
