<template>
    <footer class="bg-[#F7F7F7] container px-6 md:px-0 mx-auto mt-12">
        <div>
            <h1 class="font-bold text-4xl mb-24">İletişim Bilgilerimiz</h1>
            <ul>
                <li class="flex mb-12">
                    <div class="w-24 md:w-48 font-semibold">
                        Ofis
                    </div>
                    <div>
                        <a href="tel:902582687890" class="link-hover-animation">
                            +90 258 268 78 90
                        </a>
                        -
                        <a href="tel:902583717890" class="link-hover-animation">
                            258 371 78 90
                        </a>
                    </div>
                </li>
                <li class="flex mb-24">
                    <div class="w-24 md:w-48 font-semibold">
                        Fax
                    </div>
                    <div>
                        <a href="tel:902582687891" class="link-hover-animation">
                            +90 258 268 78 91
                        </a>
                    </div>
                </li>
                <li class="flex mb-12">
                    <div class="w-24 md:w-48 font-semibold">
                        Servis
                    </div>
                    <div>
                        <a href="tel:905321314345" class="link-hover-animation">
                            +90 532 131 43 45
                        </a>
                    </div>
                </li>
                <li class="flex mb-12">
                    <div class="w-24 md:w-48 font-semibold">
                        İhracat
                    </div>
                    <div>
                        <a href="tel:905336823947" class="link-hover-animation">
                            +90 533 682 39 47
                        </a>
                    </div>
                </li>
                <li class="flex mb-24">
                    <div class="w-24 md:w-48 font-semibold">
                        Fabrika
                    </div>
                    <div>
                        <a href="tel:905336823946" class="link-hover-animation">
                            +90 533 682 39 46
                        </a>
                    </div>
                </li>
                <li class="flex mb-24">
                    <div class="w-24 md:w-48 font-semibold">
                        E-posta
                    </div>
                    <a href="mailto:info@hidrobarsan.com" target="_blank" class="link-hover-animation">
                        info@hidrobarsan.com  <i class="ml-2 fa fa-arrow-right" style="transform: rotate(-45deg)"/>
                    </a>
                </li>
                <li class="flex flex-col md:flex-row mb-12">
                    <div class="w-32 md:w-48 mb-4 md:mb-0 font-semibold">
                        Sosyal Medya
                    </div>
                    <div class="grid grid-cols-2 gap-4 md:flex md:gap-32">
                        <a href="https://www.instagram.com/hidrobarsanmakina/" target="_blank"
                           class="link-hover-animation">
                            Instagram <i class="ml-2 fa fa-arrow-right" style="transform: rotate(-45deg)"/>
                        </a>
                        <a href="https://www.facebook.com/people/Hidrobarsan-Mermer-Makinalar%C4%B1/100063876920005/"
                           target="_blank" class="link-hover-animation">
                            Facebook <i class="ml-2 fa fa-arrow-right" style="transform: rotate(-45deg)"/>
                        </a>
                        <a href="https://www.linkedin.com/company/hidrobarsan-mermer-makinalar%C4%B1" target="_blank"
                           class="link-hover-animation">
                            LinkedIn <i class="ml-2 fa fa-arrow-right" style="transform: rotate(-45deg)"/>
                        </a>
                        <a href="https://www.youtube.com/@Hidrobarsanmakinalari" target="_blank"
                           class="link-hover-animation">
                            Youtube <i class="ml-2 fa fa-arrow-right" style="transform: rotate(-45deg)"/>
                        </a>
                    </div>
                </li>
            </ul>
        </div>
        <div class="py-24">
            <h1 class="font-bold text-4xl mb-24">Adres</h1>
            <ul>
                <li class="flex flex-col md:flex-row mb-12">
                    <div class="w-24 md:w-48 mb-4 md:md-0 font-semibold">
                        Fabrika
                    </div>
                    <div>
                        Hacıeyüplü Mahallesi, 3182 Sokak, No. : 7/A Merkezefendi - DENIZLI TÜRKIYE
                    </div>
                </li>
            </ul>
        </div>
        <div class="divider w-full h-0.5 bg-black"></div>
        <div class="py-24">
            <ul>
                <li class="flex flex-col md:flex-row">
                    <div class="w-24 mb-4 md:mb-0 md:w-48 font-semibold">
                        Site
                    </div>
                    <div class="grid grid-cols-2 gap-4 md:flex md:gap-32">
                        <router-link to="/" class="link-hover-animation">
                            Anasayfa
                        </router-link>
                        <router-link to="/urunlerimiz" class="link-hover-animation">
                            Ürünlerimiz
                        </router-link>
                        <router-link to="/hakkimizda" class="link-hover-animation">
                            Hakkımızda
                        </router-link>
                        <router-link to="/iletisim" class="link-hover-animation">
                            İletişim
                        </router-link>
                    </div>
                </li>
            </ul>
        </div>
        <div class="divider w-full h-0.5 bg-black"></div>
        <div class="grid grid-cols-2 py-24 md:flex items-center justify-between">
            <router-link to="/">
                <img src="@/assets/logo.png" alt="logo" class="w-40">
            </router-link>
            <a href="https://artrodite.com" target="_blank"
               class="order-3 col-span-2 md:order-2 flex justify-center mt-12 md:mt-0 md:block">
                <img src="@/assets/artrodite-logo.svg" alt="artrodite" class="">
            </a>
            <div class="text-sm text-right md:text-center">
                © 2023 Hidrobarsan <br class="md:hidden"> Tüm Hakları Saklıdır
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: "Footer",
    components: {}
}
</script>

<style scoped>

/*li {*/
/*    margin-bottom: 30px;*/
/*}*/

</style>
