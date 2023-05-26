<template>
    <div class="container mx-auto px-6 md:px-0">
        <div>
            <div class="text-5xl font-medium md:text-7xl">{{ $t('products.urls.chainsawCutter') }}</div>
            <h4>
                <router-link to="/urunlerimiz">{{ $t('products.urls.products') }}</router-link>
                > {{ $t('products.urls.chainsawCutter') }}
            </h4>
        </div>
        <div class="py-12 md:py-24 grid grid-cols-1 md:grid-cols-3 items-stretch justify-items-center gap-16">
            <Card v-for="(kesici, index) in zincirliKesiciler" :key="index" :index="index" :product="kesici"/>
        </div>
    </div>
</template>

<script>
import Card from "@/components/Card.vue";

export default {
    name: "KesicilerView",
    components: {Card},
    data() {
        return {
            zincirliKesiciler: []
        }
    },
    mounted() {
        this.zincirliKesiciler = this.$tm('products.zincirliKesiciler')
    },
}
</script>

<style scoped>
</style>
