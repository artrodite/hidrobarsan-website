<template>
    <div class="home">
        <Hero/>
        <HomepageVideo/>
        <HomepageAnnouncement/>
        <HomepageInfo/>
        <!--        <mobile-footer-contact class="hidden md:block"/>-->
        <products-slider class="hidden lg:block"/>
    </div>
</template>

<script>
import Hero from "@/components/HomeView/Hero.vue";
import HomepageVideo from "@/components/HomeView/HomepageVideo.vue";
import HomepageAnnouncement from "@/components/HomeView/HomepageAnnouncement.vue";
import HomepageInfo from "@/components/HomeView/HomepageInfo.vue";
import ProductsSlider from "@/components/ProductsSlider.vue";

export default {
    name: 'HomeView',
    components: {ProductsSlider, HomepageInfo, HomepageAnnouncement, HomepageVideo, Hero}
}
</script>
