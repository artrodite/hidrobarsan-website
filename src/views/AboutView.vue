<template>
    <div>


        <div class="container px-6 md:px-64 mx-auto h-screen flex flex-col items-center justify-center">
            <div class="mx-auto mb-16 md:mb-64">
                <img alt="hello" class="hidden md:block" src="/images/about.svg">
                <img alt="hello" class="block md:hidden" src="/images/about-mobile.png">
            </div>
            <div class="w-full hidden md:flex justify-between items-center mb-16">
                <a v-for="(social, index) in socials" :key="index"
                   :class="index === 0 ? 'text-left' : ((index === 1) ? 'text-center' : 'text-right')"
                   :data-aos-delay="index * 100"
                   :href="social.action"
                   class="text-sm w-1/3"
                   data-aos="fade-up"
                   target="_blank">
                    <i :class="social.img" class="mr-2 fa"/> {{ social.text }} <i class="ml-2 fa fa-arrow-right"
                                                                                  style="transform: rotate(-45deg)"/>
                </a>
            </div>
        </div>
        <development/>
    </div>
</template>

<script>
import Development from "@/components/Development.vue";

export default {
    name: "AboutView",
    components: {Development},
    data() {
        return {
            socials: [
                {
                    img: 'fa-instagram',
                    text: 'Instagram',
                    action: 'https://www.instagram.com/hidrobarsanmakina/'
                },
                {
                    img: 'fa-facebook',
                    text: 'Facebook',
                    action: 'https://www.facebook.com/people/Hidrobarsan-Mermer-Makinalar%C4%B1/100063876920005/'
                },
                {
                    img: 'fa-linkedin',
                    text: 'Linkedin',
                    action: 'https://www.linkedin.com/company/hidrobarsan-mermer-makinalar%C4%B1'
                }
            ]
        }
    }
}
</script>

<style scoped>

</style>
