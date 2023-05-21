<template>
    <router-link :class="fromSlider ? 'disabled' : ''"
                 :to="fromSlider ? '' : getRouterLink(product)"
                 class="flex flex-col justify-between product-card bg-white py-4 px-8 max-w-lg flex-grow">
        <img :src="product.imgUrl" alt="product-img" class="-translate-y-1/3 mx-auto transition-all">
        <div class="flex justify-between">
            <div class="-mt-2 md:-mt-12 flex flex-col justify-between">
                <span class="text-4xl font-medium">{{ product.name }}</span>
                <div v-if="product.type" class="font-medium text-xl">{{ product.type }}</div>
            </div>

            <div class="flex items-end">
                <span :style="{animationDelay: 0.3 * index + 's'}" class="text-7xl icon transition-all"> > </span>
            </div>
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
        },
        fromSlider: {
            type: Boolean,
            default: false
        }
    },
}
</script>

<style scoped>
.icon {
    animation: swing 2s ease-in-out infinite;
}

.disabled {
    pointer-events: none;
}
</style>
