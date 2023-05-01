<template>
    <div class="container mx-auto px-6 md:px-0">
        <div class="mb-8">
            <div class="text-5xl md:text-6xl mb-4" data-aos="fade-right">{{ productDetails.name }}</div>
            <div class="hidden lg:block">
                <h4>
                    <router-link v-for="(link, index) in routerLinks" :key="index" :to="link.url">{{ link.name }}
                    </router-link>
                </h4>
            </div>
        </div>
        <div>
            <div v-if="!product.modelUrl" class="relative h-[20rem] md:h-[40rem]" data-aos="fade-up">

                <Suspense>
                    <MachineModel :key="product.modelUrl" :model-url="product.modelUrl"/>
                </Suspense>

                <div class="my-4">
                    <img alt="3d" class="view-icon " data-aos="fade-left" src="@/assets/3d-view-icon-colored.svg">
                </div>
            </div>
            <div class="text-center my-8">
                <router-link class="md:w-64 text-[#F7AF03] px-4 py-2 md:py-4 text-lg " to="/iletisim">İletişime Geç
                </router-link>
            </div>
            <div class="text-center mb-12">
                <i v-for="(_, index) in 7" :key="index" :style="{animationDelay: index * 100 + 'ms'}"
                   class="see-details fa fa-chevron-down mx-1"/>
            </div>

            <!--            <machine-model :product-name="product.name"/>-->
            <!--            <span class="absolute top-3/4 left-1/2 -translate-y-1/2 -translate-x-1/2">Detayları gör <i-->
            <!--                    class="fa fa-chevron-down"/> </span>-->
        </div>
        <div v-if="!!productDetails.videoUrl" class="h-64 lg:h-[40rem] lg:w-3/4 mx-auto mb-40" data-aos="fade-up">
            <iframe
                    :src="productDetails.videoUrl"
                    height="100%"
                    title="Product Videp"
                    width="100%"
            />
        </div>
        <div class="grid grid-cols-1 justify-between md:gap-16">
            <div class="mb-12 w-3/4 mx-auto">

                <!--Swiper-->
                <swiper :loop="false" :modules="modules" :navigation="true" :pagination="true" :rewind="rewind"
                        :slides-per-view="1">
                    <swiper-slide v-for="(imageUrl, index) in productDetails.images" :key="index" class="relative">
                        <img :src="imageUrl.url" alt="imageUrl">
                        <div v-if="imageUrl.desc"
                             class="font-semibold text-5xl absolute bottom-20 left-1/2 -translate-x-1/2">
                            {{ imageUrl.desc }}
                        </div>
                    </swiper-slide>
                </swiper>
            </div>
            <div class="lg:w-[400px] mx-auto">
                <div class="mb-4 font-bold text-xl" data-aos="fade-up">
                    Teknik özellikler
                </div>
                <div v-for="(specification, index) in productDetails.specifications" :key="index"
                     :data-aos-delay="index * 100" class="flex items-center mb-4" data-aos="fade-right">
                    <i class="fa fa-circle text-[#F7AF03] align-baseline mr-4" style="font-size: 0.5rem"/>
                    <div class="w-2/3 font-medium">
                        {{ specification.title }}
                    </div>
                    <div class=" w-1/3 font-light">
                        {{ specification.desc }}
                    </div>
                </div>

                <div class="mt-6 lg:mt-40 mb-4 font-bold text-xl" data-aos="fade-right">
                    Ebatlar
                </div>
                <div v-for="(size, index) in productDetails.sizes" :key="index" :data-aos-delay="index * 100"
                     class="flex items-center mb-4" data-aos="fade-right">
                    <i class="fa fa-circle text-[#F7AF03] align-baseline mr-4" style="font-size: 0.5rem"/>
                    <div class="w-2/3 font-medium">
                        {{ size.title }}
                    </div>
                    <div class="w-1/3 font-light">
                        {{ size.desc }}
                    </div>
                </div>

                <div v-if="productDetails.equipments" class="mt-6 lg:mt-40">
                    <div class="mb-4 font-bold text-xl" data-aos="fade-right">
                        Aksesuarlar
                    </div>

                    <div v-for="(equipment, index) in productDetails.equipments" :key="index"
                         :data-aos-delay="index * 100"
                         class="flex items-center mb-4" data-aos="fade-right">
                        <i class="fa fa-circle text-[#F7AF03] align-baseline mr-4" style="font-size: 0.5rem"/>
                        <div class="w-2/3 font-medium">
                            {{ equipment.title }}
                        </div>
                        <div class="w-1/3 font-light">
                            {{ equipment.desc }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-24 md:gap-16 py-36  md:px-0">
            <AccessoryCard v-for="(accessory, index) in productDetails.accessories" :key="index" :accessory="accessory"
                           data-aos="zoom-in"/>
        </div>
        <products-slider class="hidden lg:block"/>
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
import {Pagination, Navigation} from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import ProductsSlider from "@/components/ProductsSlider.vue";

export default {
    name: "ProductDetails",
    setup() {
        return {
            modules: [Pagination, Navigation],
        }
    },
    components: {
        ProductsSlider,
        AccessoryCard,
        MachineModel,
        Swiper,
        SwiperSlide,
    },
    data() {
        return {
            product: {},
            productDetails: {},
            rewind: true,
            routerLinks: [],
        }
    },
    async mounted() {
        await this.checkProductType()
        document.title = this.productDetails.name ? ('Hidrobarsan | ' + this.productDetails.name) : ('Hidrobarsan | Ürün Detay')
    },
    methods: {
        checkProductType() {
            const productType = this.$route.name;
            if (productType === 'delici-detay') {
                this.product = deliciler.deliciler.find(delici => delici.url.toLowerCase() === this.$route.params.url);
                this.routerLinks = [
                    {
                        name: 'Ürünlerimiz > ',
                        url: '/urunlerimiz'
                    },
                    {
                        name: 'Deliciler',
                        url: '/urunlerimiz/deliciler'
                    }
                ]
            }
            if (productType === 'telli-kesici-detay') {
                this.product = telliKesiciler.telliKesiciler.find(kesici => kesici.url.toLowerCase() === this.$route.params.url);
                this.routerLinks = [
                    {
                        name: 'Ürünlerimiz > ',
                        url: '/urunlerimiz'
                    },
                    {
                        name: 'Kesiciler > ',
                        url: '/urunlerimiz/kesiciler'
                    },
                    {
                        name: 'Telli Kesiciler',
                        url: '/urunlerimiz/kesiciler/telli-kesiciler'
                    }
                ]
            }
            if (productType === 'zincirli-kesici-detay') {
                this.product = zincirliKesiciler.zincirliKesiciler.find(kesici => kesici.url.toLowerCase() === this.$route.params.url);
                this.routerLinks =
                    [
                        {
                            name: 'Ürünlerimiz > ',
                            url: '/urunlerimiz'
                        },
                        {
                            name: 'Kesiciler > ',
                            url: '/urunlerimiz/kesiciler'
                        },
                        {
                            name: 'Zincirli Kesiciler',
                            url: '/urunlerimiz/kesiciler/zincirli-kesiciler'
                        }
                    ]
            }
            this.productDetails = this.product.details
        },
    }
}
</script>
<style lang="scss" scoped>

.see-details {
  animation: bounce 2s infinite
}

@keyframes bounce {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(10px);
    animation-timing-function: ease-in;
  }
  100% {
    transform: none;
    animation-timing-function: ease-out;
  }
}

i.swipeLeft {
  animation: swipeL 2s infinite;
}

i.swipeRight {
  animation: swipeR 2s infinite;
}

.swiper-wrapper {
  :global(.swiper-button-prev::after) {
    font-size: 2rem;
    color: #000000;
  }

  :global(.swiper-button-next::after) {
    font-size: 2rem;
    color: #000000;
  }

  :global(.swiper-pagination-bullet) {
    border-radius: 0;
    width: 1rem;
    height: 1rem;
    background-color: #F7AF03;
  }
}

@keyframes swipeL {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}

@keyframes swipeR {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
