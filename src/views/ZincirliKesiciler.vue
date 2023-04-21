<template>
    <div>
        <div class="px-24">
            <h1 class="text-7xl">Zincirli Kesiciler</h1>
            <h4>Ürünlerimiz > Kesiciler > Zincirli Kesiciler</h4>
        </div>
        <div class="px-24 py-24 grid items-stretch grid-cols-3 justify-items-center gap-16">
            <Card v-for="(kesici, index) in zincirliKesiciler" :key="index" :index="index" :product="kesici"/>
        </div>
    </div>
</template>

<script>
import zincirliKesiciler from "@/datas/zincirliKesiciler.json";
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
        this.zincirliKesiciler = zincirliKesiciler.zincirliKesiciler;
    },
}
</script>

<style scoped>
</style>
