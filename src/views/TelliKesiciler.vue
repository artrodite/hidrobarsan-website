<template>
  <div class="container mx-auto px-6 md:px-0">
    <div>
      <div class="text-5xl font-medium md:text-7xl">{{ $t('products.urls.wireCutter') }}</div>
      <h4>
        <router-link to="/urunlerimiz">{{ $t('products.urls.products') }}</router-link>
        > {{ $t('products.urls.wireCutter') }}
      </h4>
    </div>
    <div class="py-12 md:py-24 grid grid-cols-1 md:grid-cols-3 items-stretch justify-items-center gap-16">
      <Card v-for="(kesici, index) in telliKesiciler" :key="index" :index="index" :product="kesici"/>
    </div>
  </div>
</template>

<script>
// import telliKesiciler from "@/datas/telliKesiciler.json";
import Card from "@/components/Card.vue";

export default {
  name: "KesicilerView",
  components: {Card},
  data() {
    return {
      telliKesiciler: []
    }
  },
  mounted() {
    this.telliKesiciler = this.$tm('products.telliKesiciler');
  },
  watch: {
    $i18n: {
      handler() {
        this.telliKesiciler = this.$tm('products.telliKesiciler');
      },
      deep: true
    }
  }
}
</script>

<style scoped>
</style>
