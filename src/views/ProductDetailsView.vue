<template>
    <div class="container mx-auto px-6 md:px-0">
        <div class="flex flex-col">
            <h1 class="text-6xl mb-4">{{ productDetails.name }}</h1>
            <span class="mb-8">{{ product.type ?? 'Tipi' }}</span>
            <div>
                <button class="bg-[#FBB901] text-white px-4 py-2 text-sm">İletişime Geç</button>
            </div>
        </div>
        <div class="relative" style="height: 40rem">
            <Suspense>
                <MachineModel :product-name="product.name"/>
            </Suspense>
            <!--            <machine-model :product-name="product.name"/>-->
            <span class="absolute top-3/4 left-1/2 -translate-y-1/2 -translate-x-1/2">Detayları gör <i
                    class="fa fa-chevron-down"/> </span>
        </div>
        <div v-if="!!productDetails.videoUrl" class="h-64 lg:h-96 lg:w-1/2 mx-auto mb-40">
            <iframe
                    :src="productDetails.videoUrl"
                    height="100%"
                    title="Product Videp"
                    width="100%"
            />
        </div>
        <div class="grid grid-cols-1 xl:grid-cols-3 justify-between md:gap-16">
            <div class="xl:col-span-2 mb-12 lg:mb-0">
                <!--Swiper-->
                <swiper :navigation="true" :slides-per-view="1">
                    <swiper-slide v-for="(imageUrl, index) in productDetails.images" :key="index">
                        <img :src="imageUrl" alt="imageUrl">
                    </swiper-slide>
                </swiper>
            </div>
            <div class="xl:col-span-1">
                <div class="mb-4 font-bold">
                    Teknik özellikler
                </div>
                <div v-for="(specification, index) in productDetails.specifications" :key="index"
                     class="flex items-center mb-4">
                    <i class="fa fa-circle text-[#FBB901] align-baseline mr-4" style="font-size: 0.5rem"/>
                    <div class="w-1/2">
                        {{ specification.title }}
                    </div>
                    <div class=" w-1/2">
                        {{ specification.desc }}
                    </div>
                </div>

                <div class="mt-6 mb-4 font-bold">
                    Ebatlar
                </div>

                <div v-for="(size, index) in productDetails.sizes" :key="index" class="flex items-center mb-4">
                    <i class="fa fa-circle text-[#FBB901] align-baseline mr-4" style="font-size: 0.5rem"/>
                    <div class="w-1/2">
                        {{ size.title }}
                    </div>
                    <div class="w-1/2">
                        {{ size.desc }}
                    </div>
                </div>

            </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-16 py-36  md:px-0">
            <AccessoryCard v-for="(accessory, index) in productDetails.accessories" :key="index"
                           :accessory="accessory"/>
        </div>
    </div>
</template>

<script>
/* eslint-disable no-unused-vars */
import telliKesiciler from "@/datas/telliKesiciler.json";
import zincirliKesiciler from "@/datas/zincirliKesiciler.json";
import deliciler from "@/datas/deliciler.json";
import MachineModel from "@/components/MachineModel.vue";
import AccessoryCard from "@/components/AccessoryCard.vue";
import {Swiper, SwiperSlide} from 'swiper/vue';
import 'swiper/css';

export default {
    name: "ProductDetails",
    components: {
        AccessoryCard,
        MachineModel,
        Swiper,
        SwiperSlide
    },
    data() {
        return {
            product: {},
            productDetails: {},
        }
    },
    async mounted() {
        await this.checkProductType()

    },
    methods: {
        checkProductType() {
            const productType = this.$route.name;
            if (productType === 'delici-detay') {
                this.product = deliciler.deliciler.find(delici => delici.name.toLowerCase() === this.$route.params.name);
            }
            if (productType === 'telli-kesici-detay') {
                this.product = telliKesiciler.telliKesiciler.find(kesici => kesici.name.toLowerCase() === this.$route.params.name);
            }
            if (productType === 'zincirli-kesici-detay') {
                this.product = zincirliKesiciler.zincirliKesiciler.find(kesici => kesici.name.toLowerCase() === this.$route.params.name);
            }
            this.productDetails = this.product.details
        },
    }
}
</script>
<style lang="scss" scoped>
</style>
