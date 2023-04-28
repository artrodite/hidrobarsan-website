<template>
    <div class="container px-6 md:px-0 mx-auto md:mt-12 mb-12 grid grid-cols-1 md:grid-cols-2 gap-16">
        <div class="w-full" data-aos="fade-left">
            <swiper ref="swiper" :allow-touch-move="false" :autoplay="true" :loop="loop"
                    :navigation="true"
                    :slides-per-view="1"
                    @autoplayTimeLeft="onAutoplayTimeLeft"
                    @swiper="onSwiper"
            >
                <!--                @slideChange="onSlideChange"-->
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
        <div class="flex flex-col justify-center">
            <div class="flex flex-col text-5xl md:text-7xl mt-4">
                <span class="font-bold text-[#F7AF03] mb-2" data-aos="fade-right">TOZ EMME</span>
                <span data-aos="fade-right" data-aos-delay="200">SİSTEMİ</span>
            </div>
            <div class="font-thin mt-8" data-aos="fade-right" data-aos-delay="300">
                Mermer tozunu ortadan kaldıran son teknoloji emiş sistemi.
            </div>
            <router-link
                    class="see-product-btn mt-12 w-full md:w-1/3 border border-[#F7AF03] bg-transparent flex p-4 justify-center items-center transition-all"
                    to="/urunlerimiz">
                <span class="see-product-btn-text text-[#F7AF03] font-medium mr-2">Bu ürünü incele</span>
                <img alt="3d-view-icon" class="view3d-icon hidden"
                     src="@/assets/3d-view-icon.svg">
                <img alt="3d-view-icon-colored" class="view3d-icon-colored block"
                     src="@/assets/3d-view-icon-colored.svg">
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
        // const onSlideChange = () => {
        //     console.log('slide change');
        // };

        return {
            onSwiper,
            // onSlideChange,
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

@media (min-width: 768px ) {
    .see-product-btn {
        &:hover {
            background-color: #F7AF03;

            .see-product-btn-text {
                color: #fff;
            }

            .view3d-icon {
                display: block;
            }

            .view3d-icon-colored {
                display: none;
            }
        }
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
