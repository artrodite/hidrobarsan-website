<template>
    <div class="container mx-auto px-6 md:px-0">
        <div>
            <h1 class="text-4xl md:text-7xl">Ürünlerimiz</h1>
        </div>
        <div class="py-12 md:py-24 grid grid-cols-1 md:grid-cols-2 items-stretch justify-items-center gap-16">
            <Card v-for="(category, index) in categories" :key="index" :index="index" :product="category"/>
        </div>
    </div>
</template>

<script>
import categories from "../datas/categories.json";
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
        this.categories = categories.categories;
    },
}
</script>

<style lang="scss" scoped>
</style>
