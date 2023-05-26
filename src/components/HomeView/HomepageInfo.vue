<template>
    <div class="container mx-auto px-6 pb-12 mb-24">
        <div class="mb-4 font-thin" data-aos="fade-up">
            {{ $t(`home.about.title`) }}
        </div>
        <div class="grid grid-cols-2 md:grid-cols-3 mx-auto gap-8 md:gap-16 md:w-2/3 mb-8">
            <div v-for="(info, index) in infos" :key="index"
                 :data-aos-delay="index  * 100"
                 class="py-4 px-2 flex flex-col items-center justify-between bg-white shadow-md"
                 data-aos="zoom-in">
                <div class="flex items-center justify-center mb-2">
                    <img :src="'/images/landing-info/' + info.img + '.svg'" alt="" class="w-8">
                </div>
                <div class="text-center text-sm font-thin">
                    {{ $t(`home.about.cards.${index}`) }}
                </div>
            </div>
        </div>
        <router-link
                class="see-more-btn bg-[#F7AF03] w-full mx-auto md:mt-16 md:w-fit md:bg-transparent hover:bg-[#F7AF03] flex px-8 py-2 justify-center items-center transition-all border border-[#F7AF03]"
                data-aos="fade-up"
                to="/hakkimizda">
            <span class="text-white md:text-[#F7AF03] text-sm md:text-md font-medium"> {{ $t(`home.about.seeMore`) }} <i
                    class="ml-2 fa fa-chevron-right text-xs"/> </span>
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
                },
                {
                    img: 'field',
                },
                {
                    img: 'handshake',
                },
                {
                    img: 'flag',
                },
                {
                    img: 'experience',
                },
                {
                    img: 'happy',
                }
            ]
        }
    },
}
</script>

<style lang="scss" scoped>

.see-more-btn:hover {
  span {
    color: #fff;
  }
}
</style>
