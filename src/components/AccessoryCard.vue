<template>
    <div class="bg-white p-12 relative text-center flex flex-col justify-between transition-all shadow-sm hover:scale-105">
        <div class="text-3xl whitespace-nowrap absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
            {{ accessory.title }}
        </div>
        <div class="p-6 md:p-12 flex items-center justify-center">
            <img :alt="accessory.title + ' image'" :src="accessory.imageUrl">
        </div>
        <div class="text-lg">
            {{ accessory.desc }}
        </div>
    </div>
</template>

<script>
export default {
    name: "AccessoryCard",
    props: {
        accessory: {
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped>

</style>
