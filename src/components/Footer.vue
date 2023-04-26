<template>
    <footer class="bg-[#F7F7F7] w-full mt-12">
        <div class="container mx-auto">
            <div class="hidden md:grid py-12 px-6 md:pt-24 md:pl-48  justify-items-between text-sm grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                <ul>
                    <li class="font-semibold"> Site</li>
                    <li>
                        <router-link
                                to="/">Anasayfa
                        </router-link>
                    </li>
                    <li>
                        <router-link
                                to="/hakkimizda">Hakkımızda
                        </router-link>
                    </li>
                    <li>
                        <router-link
                                to="/urunlerimiz">Ürünlerimiz
                        </router-link>
                    </li>
                    <li>
                        <router-link
                                to="/iletisim">İletişim
                        </router-link>
                    </li>
                </ul>
                <!---->
                <ul>
                    <li class="font-semibold"> Sosyal Medya</li>
                    <li><a href="https://www.instagram.com/hidrobarsanmakina/" target="_blank">Instagram </a></li>
                    <li><a href="https://www.facebook.com/people/Hidrobarsan-Mermer-Makinalar%C4%B1/100063876920005/"
                           target="_blank">Facebook </a></li>
                    <li><a href="https://www.linkedin.com/company/hidrobarsan-mermer-makinalar%C4%B1" target="_blank">LinkedIn </a>
                    </li>
                </ul>
                <!---->
                <ul>
                    <li class="font-semibold">Adres</li>
                    <li>Hacıeyüplü Mahallesi,</li>
                    <li>3182 Sokak, No.: 7/A</li>
                    <li>Merkezefendi - DENIZLI</li>
                    <li>TÜRKIYE</li>
                </ul>
                <!---->
                <ul>
                    <li class="font-semibold">Mail</li>
                    <li><a href="mailto:info@hidrobarsan.com.tr" target="_blank">info@hidrobarsan.com.tr</a></li>
                </ul>
                <!---->
                <ul>
                    <li class="font-semibold"> İletişim</li>
                    <li class="flex justify-between">
                        <span class="me-6"> GSM </span>
                        <span> +90 533 682 39 46 </span>
                    </li>
                    <li class="flex justify-between">
                        <span class="me-6"> Sabit </span>
                        <span> +90 258 268 78 90 </span>
                    </li>
                    <li class="flex justify-between">
                        <span class="me-6"> Servis </span>
                        <span> +90 532 131 43 45 </span>
                    </li>
                    <li class="flex justify-between">
                        <span class="me-6"> İhracat </span>
                        <span> +90 533 682 39 47 </span>
                    </li>
                    <li class="flex justify-between">
                        <span class="me-6"> Fax </span>
                        <span> +90 (258) 268 78 91 </span>
                    </li>
                </ul>


            </div>
            <mobile-footer-contact class="block md:hidden"/>
            <div data-aos="flip-up" data-aos-duration="1500">
                <div class="px-6 flex items-center">
                    <div class="w-20 me-16">
                        <img alt="logo" src="@/assets/logo.png">
                    </div>
                    <div class="w-full border-t border-black"></div>
                </div>
                <div class="px-6 py-12 flex items-center justify-between">
                    <div class="text-xs order-2 md:order-1">© 2023 Hidrobarsan - Tüm hakları saklıdır.</div>
                    <a class="order-1 md:order-2" href="https://artrodite.com" target="_blank">
                        <img alt="artrodite" src="@/assets/artrodite-logo.svg">
                    </a>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
import MobileFooterContact from "@/components/FooterPartials/MobileFooterContact.vue";

export default {
    name: "Footer",
    components: {MobileFooterContact}
}
</script>

<style scoped>

li {
    margin-bottom: 12px;
}

</style>
