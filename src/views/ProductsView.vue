<template>
  <div class="container mx-auto px-6 md:px-0">
    <div>
      <div class="text-5xl font-medium md:text-7xl">{{ $t('products.urls.products') }}</div>
    </div>
    <div class="py-12 md:py-24 grid grid-cols-1 md:grid-cols-3 items-stretch gap-16">
      <Card v-for="(category, index) in categories" :key="index" :index="index" :product="category"/>
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";

export default {
  name: "ProductsView",
  components: {Card},
  data() {
    return {
      categories: []
    }
  },
  mounted() {
    this.categories = this.$tm('products.categories');
  },
  watch: {
    $i18n: {
      handler() {
        this.categories = this.$tm('products.categories');
      },
      deep: true
    }

  }
}
</script>

<style lang="scss" scoped>
</style>
