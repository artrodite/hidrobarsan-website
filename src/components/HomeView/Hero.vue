<template>
    <div class="container px-6 pt-20 md:px-0 mx-auto relative">
        <div class="w-full absolute top-0" data-aos="fade-left">
            <img alt="hero image" class="mx-auto" src="/images/hero-img.png">
        </div>
        <div class="flex flex-col text-5xl whitespace-nowrap">
            <span class="font-bold" data-aos="fade-right">YENİ</span>
            <span class="font-bold text-[#FBB901]" data-aos="fade-right" data-aos-delay="100">TOZ EMİŞLİ</span>
            <span data-aos="fade-right" data-aos-delay="200">HZK-8200</span>
        </div>
        <div class="font-thin whitespace-nowrap mt-4" data-aos="fade-right" data-aos-delay="300">
            İş yükünüzü azaltın, tozlardan kurtulun.
        </div>
        <div class="mt-12" data-aos="fade-up">
            <router-link class="bg-[#F7BE38] w-full rounded flex p-4 justify-center items-center" to="/">
                <span class="text-white font-medium mr-2">Bu ürünü inceleyin</span>
                <img alt="3d-view-icon" src="@/assets/3d-view-icon.svg">
            </router-link>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style scoped>

</style>
