<template>
    <div class="container mx-auto px-6 mt-64">
        <div class="mb-16 text-2xl">
            Ürünlerimiz
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
import telliKesiciler from "@/datas/telliKesiciler.json";
import zincirliKesiciler from "@/datas/zincirliKesiciler.json";
import deliciler from "@/datas/deliciler.json";
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
        this.products = [...telliKesiciler.telliKesiciler];
        this.products = [...this.products, ...zincirliKesiciler.zincirliKesiciler];
        this.products = [...this.products, ...deliciler.deliciler];
        // console.log(this.products);
    }
}
</script>

<style lang="scss" scoped>
.swiper {
  overflow: visible;
}

</style>
