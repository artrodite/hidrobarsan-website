<template>
    <div v-if="false" class="container mx-auto px-6 mt-64">
        <div class="mb-16 text-2xl">
            {{ $t('products.urls.products') }}
        </div>
        <div>
            <swiper ref="swiper" :autoplay="true" :loop="loop" :slides-per-view="4.5" :space-between="30"
                    class="swiper">
                <swiper-slide v-for="(product, index) in products" :key="index">
                    <card :index="index" :product="product" :from-slider="true" class="h-64"/>
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>

<script>
import {Swiper, SwiperSlide} from 'swiper/vue';
import SwiperCore, {Autoplay} from "swiper"

import 'swiper/css';
import Card from "@/components/Card.vue";

SwiperCore.use([Autoplay])


export default {
    name: "ProductsSlider",
    setup() {
        return {};
    },
    data() {
        return {
            products: [],
            autoplay: {
                disableOnInteraction: false,
                pauseOnMouseEnter: true
            },
            loop: true,
        }
    },
    components: {
        Card,
        Swiper,
        SwiperSlide
    },
    async mounted() {
        this.products = [...this.$tm('products.telliKesiciler'), ...this.$tm('products.zincirliKesiciler'), ...this.$tm('products.deliciler')];
        // console.log(this.products);
    }
}
</script>

<style lang="scss" scoped>
.swiper {
  overflow: visible;
}

</style>
