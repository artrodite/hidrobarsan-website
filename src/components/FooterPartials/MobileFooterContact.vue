<template>
    <div class="px-6 mb-24">
        <div class="mb-4 font-thin lg:hidden" data-aos="fade-up">
            İletişim
        </div>
        <Map/>
        <a class="text-[#F7AF03] transition-all hover:text-white hover:bg-[#F7AF03] flex items-center justify-center gap-4 border border-[#F7AF03] font-thin mb-4 p-2"
           data-aos="fade-up"
           data-aos-delay="100" href="https://goo.gl/maps/McGBpHfmCPdotHvs6" target="_blank">
            <i class="fa fa-location-dot"/> Adres
        </a>
        <div class="grid grid-cols-2 gap-4 mb-16">
            <a v-for="(info, index) in infos" :key="index"
               :data-aos="(index % 2) ? 'fade-left' : 'fade-right'"
               :data-aos-delay="index * 100"
               :href="info.action"
               class="border py-2 px-4 border-[#F7AF03] justify-center text-[#F7AF03] transition-all hover:text-white hover:bg-[#F7AF03]">
                <div class="w-2/3 mx-auto">
                    <div class="whitespace-nowrap md:text-center items-center  font-thin">
                        <i :class="info.img" class="mr-3 fa"/> {{ info.text }}
                    </div>
                </div>
            </a>
        </div>
        <div class="flex justify-between items-center mb-16">
            <a v-for="(social, index) in socials" :key="index"
               :class="index === 0 ? 'text-left' : ((index === 1) ? 'text-center' : 'text-right')"
               :data-aos-delay="index * 100"
               :href="social.action"
               class="text-sm w-1/3 "
               data-aos="fade-up"
               target="_blank">
                <span class="link-hover-animation">
                    <i :class="social.img" class="mr-2 fa text-2xl md:text-base"/>
                    <span class="hidden md:inline-flex">{{ social.text }}</span>
                </span>
            </a>
        </div>
    </div>
</template>

<script>
import Map from "@/components/FooterPartials/Map.vue";

export default {
    name: "MobileFooterContact",
    components: {Map},
    data() {
        return {
            infos: [
                {
                    img: 'fa-envelope',
                    text: 'E-posta',
                    action: 'mailto:info@hidrobarsan.com'
                },
                {
                    img: 'fa-mobile-screen-button',
                    text: 'Fabrika',
                    action: 'tel:5336823946'
                },
                {
                    img: 'fa-headset',
                    text: 'Servis',
                    action: 'tel:5321314345'
                },
                {
                    img: 'fa-truck-moving',
                    text: 'İhracat',
                    action: 'tel:5336823947'
                },
                {
                    img: 'fa-phone',
                    text: 'Ofis',
                    action: 'tel:2582687890'
                },
                {
                    img: 'fa-fax',
                    text: 'Fax',
                    action: 'tel:2582687891'
                }
            ],
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
                    img: 'fa-youtube',
                    text: 'Youtube',
                    action: 'https://www.youtube.com/@Hidrobarsanmakinalari'
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
