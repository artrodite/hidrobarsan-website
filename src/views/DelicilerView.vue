<template>
    <div class="container mx-auto px-6 md:px-0">
        <div>
            <div class="text-5xl font-medium md:text-7xl">{{ $t('products.urls.drills') }}</div>
            <h4>
                <router-link to="/urunlerimiz">{{ $t('products.urls.products') }}</router-link>
                > {{ $t('products.urls.drills') }}
            </h4>
        </div>
        <div class="py-12 md:py-24 grid grid-cols-1 md:grid-cols-3 items-stretch justify-items-center gap-16">
            <Card v-for="(delici, index) in deliciler" :key="index" :index="index" :product="delici"/>
        </div>
    </div>
</template>

<script>
// import deliciler from "@/datas/deliciler.json";
import Card from "@/components/Card.vue";

export default {
    name: "DelicilerView",
    components: {Card},
    data() {
        return {
            deliciler: []
        }
    },
    mounted() {
        this.deliciler = this.$tm('products.deliciler');
    },
}
</script>

<style scoped>

</style>
