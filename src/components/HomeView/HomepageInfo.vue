<template>
    <div class="container mx-auto px-6 pb-12 mb-16">
        <div class="mb-4 font-thin" data-aos="fade-up">
            Hakkımızda
        </div>
        <div class="grid grid-cols-2 md:grid-cols-3 mx-auto gap-4 md:gap-16 md:w-2/3 mb-4">
            <div v-for="(info, index) in infos" :key="index"
                 :data-aos-delay="index  * 100"
                 class="py-4 px-2 flex flex-col items-center justify-between bg-white rounded-lg shadow-md"
                 data-aos="zoom-in">
                <div class="flex items-center justify-center mb-2">
                    <img :src="'/images/landing-info/' + info.img + '.svg'" alt="" class="w-8">
                </div>
                <div class="text-center text-sm font-thin">
                    {{ info.text }}
                </div>
            </div>
        </div>
        <router-link
                class="bg-[#F7AF03] w-full mx-auto md:mt-16 md:w-fit  md:bg-transparent rounded-lg flex p-4 justify-center items-center transition-all border border-transparent md:hover:border-[#F7AF03]"
                data-aos="fade-up"
                to="/hakkimizda">
            <span class="text-white md:text-[#F7AF03] text-sm md:text-md font-medium">Daha Fazlasını Görmek için Tıklayınız</span>
        </router-link>
    </div>
</template>

<script>
export default {
    name: "HomepageInfo",
    data() {
        return {
            infos: [
                {
                    img: 'service',
                    text: '24 Saat içinde Destek'
                },
                {
                    img: 'field',
                    text: '16.000 m² ile lider Üretim Alanı'
                },
                {
                    img: 'handshake',
                    text: 'Her Aşamada Sizinleyiz'
                },
                {
                    img: 'flag',
                    text: 'Yerli ve milli, yüksek katma değer üretim'
                },
                {
                    img: 'experience',
                    text: '22 Yıllık Tecrübe'
                },
                {
                    img: 'happy',
                    text: 'Müşteri Memnuniyeti'
                }
            ]
        }
    },
}
</script>

<style lang="scss" scoped>
</style>
