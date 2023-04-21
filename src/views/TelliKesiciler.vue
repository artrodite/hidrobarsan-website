<template>
    <div>
        <div class="px-24">
            <h1 class="text-7xl">Telli Kesiciler</h1>
            <h4>Ürünlerimiz > Kesiciler > Telli Kesiciler</h4>
        </div>
        <div class="px-24 py-24 grid items-stretch grid-cols-3 justify-items-center gap-16">
            <Card v-for="(kesici, index) in telliKesiciler" :key="index" :index="index" :product="kesici"/>
        </div>
    </div>
</template>

<script>
import telliKesiciler from "@/datas/telliKesiciler.json";
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
        this.telliKesiciler = telliKesiciler.telliKesiciler;
    },
}
</script>

<style scoped>
</style>
