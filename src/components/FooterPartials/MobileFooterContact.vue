<template>
    <div class="px-6">
        <div class="mb-4 font-thin" data-aos="fade-up">
            İletişim
        </div>
        <Map />
        <div class="flex flex-col items-center justify-center gap-4 my-8">
            <div class="flex" data-aos="fade-up">
                <img alt="map-icon" class="mr-4" src="@/assets/map-icon.svg"> Adres
            </div>
            <span class="text-lg text-center font-thin" data-aos="fade-up" data-aos-delay="100">
                Hacıeyüplü Mahallesi, 3182 Sokak, No.: 7/A Merkezefendi - DENIZLI TÜRKIYE
            </span>
        </div>
        <div class="grid grid-cols-2 gap-4 mb-8">
            <a v-for="(info, index) in infos" :key="index"
               :data-aos="(index % 2) ? 'fade-left' : 'fade-right'"
               :data-aos-delay="index * 100"
               :href="info.action"
               class="border py-2 px-4 border-[#FBB901] justify-center">
                <div class="w-2/3 mx-auto">
                    <div class="whitespace-nowrap items-center text-[#FBB901] font-thin">
                        <i :class="info.img" class="mr-3 fa"/> {{ info.text }}
                    </div>
                </div>
            </a>
        </div>
        <div class="flex justify-between items-center mb-16">
            <a v-for="(social, index) in socials" :key="index"
               :class="index === 0 ? 'text-left' : ((index === 1) ? 'text-center' : 'text-right')" :data-aos-delay="index * 100"
               :href="social.action"
               class="text-sm w-1/3"
               data-aos="fade-up"
               target="_blank">
                <i :class="social.img" class="mr-2 fa"/> {{ social.text }}
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
