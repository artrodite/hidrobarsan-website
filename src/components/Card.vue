<template>
    <router-link :to="getRouterLink(product)"
                 class="flex flex-col justify-between product-card bg-white py-4 px-8 max-w-lg flex-grow">
        <img :src="product.imgUrl" alt="product-img" class="-translate-y-1/3 mx-auto transition-all">

        <div class="-mt-2 md:-mt-12 flex justify-between items-center">
            <span class="text-3xl font-medium">{{ product.name }}</span>
            <!--            <div class="flex items-end">-->
            <!--                <div>{{ product.desc }}</div>-->
            <span :style="{animationDelay: 0.3 * index + 's'}" class="text-7xl icon transition-all"> > </span>
            <!--            </div>-->
        </div>
    </router-link>

</template>

<script>
export default {
    methods: {
        getRouterLink(product) {
            return this.$route.path + '/' + product.url;
        }
    },
    props: {
        product: {
            type: Object,
            required: true
        },
        index: {
            type: Number,
            required: true
        }
    },
}
</script>

<style scoped>
.icon {
    animation: swing 2s ease-in-out infinite;
}
</style>
