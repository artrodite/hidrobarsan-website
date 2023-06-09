<template>
  <div class="container mx-auto px-6 md:px-0">
    <div class="md:h-screen">
      <div class="mb-8">
        <div class="text-5xl md:text-6xl mb-4" data-aos="fade-right">{{ productDetails.name }}</div>
        <div class="hidden lg:block">
          <h4>
            <router-link v-for="(link, index) in routerLinks" :key="index" :to="link.url"
                         class="mr-1 link-hover-animation">{{ link.name }}
            </router-link>
            {{ productDetails.name }}
          </h4>
        </div>
        <div class="mb-8">
          <router-link
              class="contact-us-btn bg-[#F7AF03] w-full mt-8 md:w-fit flex px-8 py-2 justify-center items-center transition-all border border-[#F7AF03]"
              data-aos="fade-up"
              to="/iletisim">
                        <span class="text-white text-sm md:text-md font-medium">{{
                            $t('products.productDetailsPage.contactUs')
                          }}</span>
          </router-link>
        </div>
      </div>
      <div>
        <div v-if="product.modelVideoUrl" class="relative h-[20rem] md:h-[40rem]" data-aos="fade-up">
          <video ref="video" :src="product.modelVideoUrl" autoplay class="w-full h-full" loop muted
                 playsinline
                 type="video/mp4"/>
        </div>
        <div class="text-center mt-4">
          <i v-for="(_, index) in 7" :key="index" :style="{animationDelay: index * 100 + 'ms'}"
             class="see-details fa fa-chevron-down mx-1"/>
        </div>
      </div>
    </div>
    <div v-if="productDetails.lastTechnology" class="text-center my-32 md:my-96">
      <div class="lg:text-8xl text-5xl font-semibold mb-8" data-aos="fade-up">
        {{ productDetails.lastTechnology.title }}
      </div>
      <div class="lg:text-8xl text-4xl font-semibold" data-aos="fade-up" data-aos-delay="50">
        {{ productDetails.lastTechnology.text }}
      </div>
    </div>
    <div v-if="productDetails.videoUrl" class="h-64 lg:h-[40rem] lg:w-3/4 mx-auto mb-40" data-aos="fade-up">
      <iframe
          :src="productDetails.videoUrl"
          height="100%"
          title="Product Video"
          width="100%"
      />
    </div>
    <div class="grid grid-cols-1 justify-between md:gap-16">

      <div v-if="productDetails.specialFeature" class="text-center mt-64 mb-24">
        <div class="text-7xl font-semibold text-[#F7AF03] mb-4" data-aos="fade-up">
          {{ productDetails.specialFeature.title }}
        </div>
        <div class="text-2xl font-thin mb-8" data-aos="fade-up">
          {{ productDetails.specialFeature.description }}
        </div>
        <ul>
          <li v-for="(text, i) in productDetails.specialFeature.featureList" :key="i" class="text-xl mb-2"
              data-aos="fade-up" :data-aos-delay="i * 50">
            {{ text }}
          </li>
        </ul>
      </div>

      <!--Swiper-->
      <div class="md:h-screen mb-12 w-full lg:w-3/4 mx-auto">
        <!--Swiper-->
        <swiper :loop="false" :modules="modules" :navigation="true" :pagination="true" :rewind="rewind"
                :slides-per-view="1" class="my-slider">
          <swiper-slide v-for="(imageUrl, index) in productDetails.images" :key="index" class="relative p-2 md:p-16">
            <img :src="imageUrl.url" alt="imageUrl">
            <div v-if="imageUrl.desc" class="font-semibold text-center lg:text-4xl">
              {{ imageUrl.desc }}
            </div>
            <div v-if="imageUrl.desc2" class="text-center mt-2 text-[#5C5C5C]">
              {{ imageUrl.desc2 }}
            </div>
          </swiper-slide>
        </swiper>
      </div>

      <div v-if="productDetails.feature" class=" my-32 md:my-96 text-center lg:text-8xl text-5xl" data-aos="fade-up">
        {{ productDetails.feature.text }}
      </div>

      <div class="lg:w-[900px] mx-auto">
        <div class="mb-12 font-semibold text-2xl md:text-4xl" data-aos="fade-up">
          {{ $t('products.productDetailsPage.technicalSpecifications') }}
        </div>
        <div v-for="(specification, index) in productDetails.specifications" :key="index"
             :data-aos-delay="index * 100" class="flex items-center mb-4" data-aos="fade-right">
          <img :src="specification.icon" alt="" class="mr-4"/>
          <div class="w-2/3 font-medium text-lg md:text-2xl">
            {{ specification.title }}
          </div>
          <div class=" w-1/3 font-light md:text-2xl">
            {{ specification.desc }}
          </div>
        </div>

        <div class="mt-12 lg:mt-24 mb-12 font-semibold text-2xl md:text-4xl" data-aos="fade-right">
          {{ $t('products.productDetailsPage.sizes') }}
        </div>
        <div v-for="(size, index) in productDetails.sizes" :key="index" :data-aos-delay="index * 100"
             class="flex items-center mb-4" data-aos="fade-right">
          <img :src="size.icon" alt="" class="mr-4"/>
          <div class="w-2/3 font-medium text-lg md:text-2xl">
            {{ size.title }}
          </div>
          <div class="w-1/3 font-light md:text-2xl">
            {{ size.desc }}
          </div>
        </div>

        <div v-if="productDetails.equipments" class="mt-12 lg:mt-24">
          <div class="mb-12 font-semibold text-2xl md:text-4xl" data-aos="fade-right">
            {{ $t('products.productDetailsPage.equipments') }}
          </div>

          <div v-for="(equipment, index) in productDetails.equipments" :key="index"
               :data-aos-delay="index * 100"
               class="flex items-center mb-4" data-aos="fade-right">
            <img src="/icons/star.svg" alt="" class="mr-4"/>
            <div class="w-2/3 font-medium text-lg md:text-2xl">
              {{ equipment.title }}
            </div>
            <div class="w-1/3 font-light md:text-2xl">
              {{ equipment.desc }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-24 md:gap-16 py-36 md:px-0">
      <AccessoryCard v-for="(accessory, index) in productDetails.accessories" :key="index" :accessory="accessory"
                     data-aos="zoom-in"/>
    </div>
    <products-slider class="hidden lg:block"/>
  </div>
</template>

<script>
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
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      product: {},
      productDetails: {},
      deliciler: this.$tm('products.deliciler'),
      telliKesiciler: this.$tm('products.telliKesiciler'),
      zincirliKesiciler: this.$tm('products.zincirliKesiciler'),
      rewind: true,
      routerLinks: [],
    }
  },
  watch: {
    $i18n: {
      handler: function () {
        this.deliciler = this.$tm('products.deliciler');
        this.telliKesiciler = this.$tm('products.telliKesiciler');
        this.zincirliKesiciler = this.$tm('products.zincirliKesiciler');
        this.checkProductType()
      },
      deep: true
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
        this.product = this.deliciler.find(delici => delici.url.toLowerCase() === this.$route.params.url);
        this.routerLinks = [
          {
            name: `${this.$t('products.urls.products')} >`,
            url: '/urunlerimiz'
          },
          {
            name: `${this.$t('products.urls.drill')} >`,
            url: '/urunlerimiz/deliciler'
          }
        ]
      }
      if (productType === 'telli-kesici-detay') {
        this.product = this.telliKesiciler.find(kesici => kesici.url.toLowerCase() === this.$route.params.url);
        this.routerLinks = [
          {
            name: `${this.$t('products.urls.products')} >`,
            url: '/urunlerimiz'
          },
          {
            name: `${this.$t('products.urls.wireCutter')} >`,
            url: '/urunlerimiz/kesiciler/telli'
          }
        ]
      }
      if (productType === 'zincirli-kesici-detay') {
        this.product = this.zincirliKesiciler.find(kesici => kesici.url.toLowerCase() === this.$route.params.url);
        this.routerLinks =
            [
              {
                name: `${this.$t('products.urls.products')} >`,
                url: '/urunlerimiz'
              },
              {
                name: `${this.$t('products.urls.chainsawCutter')} >`,
                url: '/urunlerimiz/kesiciler/zincirli'
              }
            ]
      }
      this.productDetails = this.product.details
    },
  }
}
</script>

<style lang="scss" scoped>

.my-slider {
  --add-bottom: 5rem;
  padding-bottom: var(--add-bottom);
}

.my-slider [class^="swiper-button-"] {
  top: calc(50% - var(--add-bottom) / 2);
}

.contact-us-btn:hover {
  span {
    color: #ffffff;
  }
}

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
    font-size: 3rem;
    font-weight: 900;
    color: #000000;
    @media (max-width: 768px) {
      display: none;
    }
  }

  :global(.swiper-button-next::after) {
    font-size: 3rem;
    font-weight: 900;
    color: #000000;
    @media (max-width: 768px) {
      display: none;
    }
  }

  :global(.swiper-pagination-bullet) {
    border-radius: 0;
    width: 1rem;
    height: 1rem;
    opacity: 1 !important;
    @media (max-width: 768px) {
      width: 1rem !important;
      height: 1rem !important;
    }
  }

  :global(.swiper-pagination-bullet-active) {
    background-color: #F7AF03;
    @media (max-width: 768px) {
      width: 1rem !important;
      height: 1rem !important;
    }

  }
}

@media (max-width: 768px) {
  .swiper-wrapper {
    :global(.swiper-pagination-bullet) {
      width: .5rem;
      height: .5rem;
    }
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
