<template>
    <nav class="bg-[#F7F7F7] mb-4 w-full font-normal sticky top-0 z-50">
        <div class="max-w-screen container flex flex-wrap md:flex-nowrap items-center justify-between mx-auto py-4 md:py-8 px-6 md:px-0">
            <router-link class="flex items-center" to="/">
                <img alt="hidrobarsan" class="w-40" src="../assets/logo.png"/>
            </router-link>
            <div class="flex items-center md:order-2">
                <!-- Dropdown -->
                <div class="hidden md:flex items-center gap-8">
                    <div @click="$i18n.locale = 'tr'" class="cursor-pointer w-12 h-12 rounded">
                        <img src="../assets/tr-flag.svg" alt="tr-flag" class="h-full">
                    </div>
                    <div @click="$i18n.locale = 'en'" class="cursor-pointer w-10 h-10 rounded">
                        <img src="@/assets/en-flag.svg" alt="tr-flag" class="h-full">
                    </div>
                </div>
                <!--                                <div id="language-dropdown-menu"-->
                <!--                                     class="my-4 text-base list-none bg-white divide-y divide-gray-100 shadow">-->
                <!--                                    <ul class="py-2 " role="none">-->
                <!--                                        <li>-->
                <!--                                            <a class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" href="#"-->
                <!--                                               role="menuitem">-->
                <!--                                                <div class="inline-flex items-center">-->
                <!--                                                    <svg id="flag-icon-css-de" aria-hidden="true"-->
                <!--                                                         class="h-3.5 w-3.5 rounded-full mr-2" viewBox="0 0 512 512"-->
                <!--                                                         xmlns="http://www.w3.org/2000/svg">-->
                <!--                                                        <path d="M0 341.3h512V512H0z" fill="#ffce00"/>-->
                <!--                                                        <path d="M0 0h512v170.7H0z"/>-->
                <!--                                                        <path d="M0 170.7h512v170.6H0z" fill="#d00"/>-->
                <!--                                                    </svg>-->
                <!--                                                    Türkçe-->
                <!--                                                </div>-->
                <!--                                            </a>-->
                <!--                                        </li>-->
                <!--                                        <li>-->
                <!--                                            <a class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" href="#"-->
                <!--                                               role="menuitem">-->
                <!--                                                <div class="inline-flex items-center">-->
                <!--                                                    <svg id="flag-icon-css-us" aria-hidden="true"-->
                <!--                                                         class="h-3.5 w-3.5 rounded-full mr-2" viewBox="0 0 512 512"-->
                <!--                                                         xmlns="http://www.w3.org/2000/svg">-->
                <!--                                                        <g fill-rule="evenodd">-->
                <!--                                                            <g stroke-width="1pt">-->
                <!--                                                                <path d="M0 0h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z"-->
                <!--                                                                      fill="#bd3d44"-->
                <!--                                                                      transform="scale(3.9385)"/>-->
                <!--                                                                <path d="M0 10h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z"-->
                <!--                                                                      fill="#fff"-->
                <!--                                                                      transform="scale(3.9385)"/>-->
                <!--                                                            </g>-->
                <!--                                                            <path d="M0 0h98.8v70H0z" fill="#192f5d" transform="scale(3.9385)"/>-->
                <!--                                                            <path d="M8.2 3l1 2.8H12L9.7 7.5l.9 2.7-2.4-1.7L6 10.2l.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7L74 8.5l-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 7.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 24.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 21.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 38.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 35.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 52.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 49.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 66.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 63.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9z"-->
                <!--                                                                  fill="#fff"-->
                <!--                                                                  transform="scale(3.9385)"/>-->
                <!--                                                        </g>-->
                <!--                                                    </svg>-->
                <!--                                                    English (US)-->
                <!--                                                </div>-->
                <!--                                            </a>-->
                <!--                                        </li>-->
                <!--                                    </ul>-->
                <!--                                </div>-->
                <button aria-controls="mobile-menu-language-select" aria-expanded="false"
                        class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200"
                        data-collapse-toggle="mobile-menu-language-select" type="button" @click="toggleDropdown">
                    <span class="sr-only">Open main menu</span>
                    <i :class="isDropdownOpen ? 'fa-xmark' : 'fa-grip-lines '"
                       class="fa text-4xl text-black transition-all"/>
                </button>
            </div>
            <div id="mobile-menu-language-select"
                 class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
                <ul class="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
                    <li>
                        <router-link aria-current="page"
                                     class="block py-2 pl-3 pr-4 rounded link-hover-animation md:bg-transparent md:p-0 w-fit"
                                     to="/"> {{ $t('navbar.home') }}
                        </router-link>
                    </li>
                    <li>
                        <router-link
                                class="block py-2 pl-3 pr-4 rounded link-hover-animation md:hover:bg-transparent  md:p-0 w-fit"
                                to="/hakkimizda"> {{ $t('navbar.about') }}
                        </router-link>
                    </li>
                    <li>
                        <router-link
                                class="block py-2 pl-3 pr-4 rounded link-hover-animation md:hover:bg-transparent  md:p-0 w-fit"
                                to="/urunlerimiz"> {{ $t('navbar.products') }}
                        </router-link>
                    </li>
                    <li>
                        <router-link
                                class="block py-2 pl-3 pr-4 rounded link-hover-animation md:hover:bg-transparent  md:p-0 w-fit"
                                to="/iletisim"> {{ $t('navbar.contact') }}
                        </router-link>
                    </li>
                    <li>
                        <div class="md:hidden flex items-center justify-center gap-4">
                            <div @click="$i18n.locale = 'tr'" class="cursor-pointer w-8 h-8 rounded">
                                <img src="../assets/tr-flag.svg" alt="tr-flag" class="h-full">
                            </div>
                            <div @click="$i18n.locale = 'en'" class="cursor-pointer w-7 h-7 rounded">
                                <img src="@/assets/en-flag.svg" alt="tr-flag" class="h-full">
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: "Navbar",
    data() {
        return {
            isDropdownOpen: false
        }
    },
    methods: {
        toggleDropdown() {
            this.isDropdownOpen = !this.isDropdownOpen
        }
    }
}
</script>

<style scoped>

</style>
