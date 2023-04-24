<template>
    <div class="container mx-auto px-6 md:px-0">
        <div>
            <div class="text-5xl font-medium md:text-7xl">Kesiciler</div>
            <h4>Ürünlerimiz > Kesiciler</h4>
        </div>
        <div class="py-12 md:py-24 grid items-stretch grid-cols-1 md:grid-cols-2 justify-items-center gap-16">
            <Card v-for="(kesici, index) in kesiciler" :key="index" :class="(index % 2) ? 'justify-self-start' : 'justify-self-end'" :index="index"
                  :product="kesici"/>
        </div>
    </div>
</template>

<script>
import kesiciler from "@/datas/kesiciler.json";
import Card from "@/components/Card.vue";

export default {
    name: "KesicilerView",
    components: {Card},
    data() {
        return {
            kesiciler: []
        }
    },
    mounted() {
        this.kesiciler = kesiciler.kesiciler;
    }
}
</script>

<style scoped>

</style>
