<template>
    <div class="home">
        <Hero/>
        <HomepageVideo/>
        <HomepageAnnouncement/>
        <HomepageInfo/>
    </div>
</template>

<script>
import Hero from "@/components/HomeView/Hero.vue";
import HomepageVideo from "@/components/HomeView/HomepageVideo.vue";
import HomepageAnnouncement from "@/components/HomeView/HomepageAnnouncement.vue";
import HomepageInfo from "@/components/HomeView/HomepageInfo.vue";

export default {
    name: 'HomeView',
    components: {HomepageInfo, HomepageAnnouncement, HomepageVideo, Hero}
}
</script>
