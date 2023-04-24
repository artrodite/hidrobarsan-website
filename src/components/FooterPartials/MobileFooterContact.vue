<template>
    <div class="px-6">
        <div class="mb-4 font-thin">
            İletişim
        </div>
        <Map/>
        <div class="flex flex-col items-center justify-center gap-4 mb-8">
            <div class="flex">
                <img alt="map-icon" class="mr-4" src="@/assets/map-icon.svg"> Adres
            </div>
            <span class="text-lg text-center font-thin">
                Hacıeyüplü Mahallesi, 3182 Sokak, No.: 7/A Merkezefendi - DENIZLI TÜRKIYE
            </span>
        </div>
        <div class="grid grid-cols-2 gap-4 mb-16">
            <div v-for="(info, index) in infos" :key="index"
                 class="border-2 py-2 px-4 border-[#FBB901] justify-center">
                <a href="tel:5460742383">
                    <div class="w-2/3 mx-auto">
                        <div class="inline-flex whitespace-nowrap items-center">

                            <img :src="'/images/footer-info/' + info.img + '.svg' " alt="" class="mr-2">
                            {{ info.text }}
                        </div>
                    </div>
                </a>
            </div>
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
                    img: 'email',
                    text: 'E-posta'
                },
                {
                    img: 'phone',
                    text: 'Fabrika'
                },
                {
                    img: 'support',
                    text: 'Servis'
                },
                {
                    img: 'truck',
                    text: 'İhracat'
                },
                {
                    img: 'call',
                    text: 'Ofis'
                },
                {
                    img: 'fax',
                    text: 'Fax'
                }
            ]
        }
    }
}
</script>

<style scoped>

</style>
