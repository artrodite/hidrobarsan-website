<template>
    <div class="home">
        <Hero/>
        <HomepageVideo/>
        <HomepageAnnouncement/>
        <HomepageInfo/>
        <div class="container mx-auto px-6 md:px-96">

            <mobile-footer-contact class="hidden md:block"/>
        </div>
        <products-slider class="hidden lg:block"/>
    </div>
</template>

<script>
import Hero from "@/components/HomeView/Hero.vue";
import HomepageVideo from "@/components/HomeView/HomepageVideo.vue";
import HomepageAnnouncement from "@/components/HomeView/HomepageAnnouncement.vue";
import HomepageInfo from "@/components/HomeView/HomepageInfo.vue";
import MobileFooterContact from "@/components/FooterPartials/MobileFooterContact.vue";
import ProductsSlider from "@/components/ProductsSlider.vue";

export default {
    name: 'HomeView',
    components: {ProductsSlider, MobileFooterContact, HomepageInfo, HomepageAnnouncement, HomepageVideo, Hero}
}
</script>
