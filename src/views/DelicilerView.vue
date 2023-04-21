<template>
    <div class="container mx-auto">
        <div>
            <h1 class="text-6xl">Deliciler</h1>
            <h4>Ürünlerimiz > Deliciler</h4>
        </div>
        <div class="py-24 grid grid-cols-3 items-stretch justify-items-center gap-16">
            <Card v-for="(delici, index) in deliciler" :key="index" :index="index" :product="delici"/>
        </div>
    </div>
</template>

<script>
import deliciler from "@/datas/deliciler.json";
import Card from "@/components/Card.vue";

export default {
    name: "KesicilerView",
    components: {Card},
    data() {
        return {
            deliciler: []
        }
    },
    mounted() {
        this.deliciler = deliciler.deliciler;
    },
}
</script>

<style scoped>

</style>
