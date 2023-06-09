<template>
  <nav class="bg-[#F7F7F7] mb-4 w-full font-normal sticky top-0 z-50" data-aos="fade-down">
    <div
        class="max-w-screen container flex flex-wrap md:flex-nowrap items-center justify-between mx-auto py-4 md:py-8 px-6 md:px-0">
      <router-link class="flex items-center" to="/">
        <img alt="hidrobarsan" class="w-40" src="../assets/logo.png"/>
      </router-link>
      <div class="flex items-center md:order-2">
        <!-- Dropdown -->
        <div class="hidden md:flex">

          <a class="flex items-center gap-2 mr-8 py-2 pl-3 pr-4 rounded cursor-pointer link-hover-animation md:hover:bg-transparent  md:p-0 w-fit"
             :download="$t('navbar.catalogName')" :href="$t('navbar.catalogLink')">
            {{ $t('navbar.catalog') }}
            <i class="fa-regular fa-circle-down text-xs text-[#6B7280]"/>
          </a>

          <button id="languageDropdown" data-dropdown-toggle="language-dropdown"
                  class="block py-2 pl-3 pr-4 rounded md:hover:bg-transparent md:p-0 w-fit">
            {{ $t('navbar.language') }} <i class="ml-2 fa fa-chevron-down text-[#6B7280] text-xs"/>
          </button>
          <!-- Dropdown menu -->
          <div id="language-dropdown"
               class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
            <ul class="py-2 text-sm text-gray-700 cursor-pointer" aria-labelledby="languageDropdown">
              <li @click="setLanguage('tr')">
                <div class="flex items-center px-4 py-2 hover:bg-gray-100">
                  <img src="@/assets/tr_flag.png" alt="turkey-flag" class="w-6 mr-2"/>
                  Türkçe
                </div>
              </li>
              <li @click="setLanguage('en')">
                <div class="flex items-center px-4 py-2 hover:bg-gray-100">
                  <img src="@/assets/en_flag.png" alt="turkey-flag" class="w-6 mr-2"/>
                  English
                </div>
              </li>
            </ul>
          </div>
        </div>
        <!--aria-controls="mobile-menu-language-select" aria-expanded="false"-->
        <!--        data-collapse-toggle="mobile-menu-language-select"-->
        <button
            id="mobile-menu-button"
            class="items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden"
            type="button" @click="toggleDropdown">
          <span class="sr-only">Open main menu</span>
          <i :class="isDropdownOpen ? 'fa-xmark' : 'fa-grip-lines '"
             class="fa text-4xl text-black"/>
        </button>
      </div>

      <div id="mobile-menu-language-select"
           :class="(!isDropdownOpen && isMobile)? 'h-0 opacity-0' : 'h-screen opacity-100 duration-300'"
           class="blur-effect transition-all ease-in md:flex md:h-auto absolute left-0 top-16 md:static items-center justify-between overscroll-auto w-full md:w-auto md:order-1">
        <ul class="flex flex-col py-16 gap-6 px-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 text-xl md:text-base">
          <li>
            <router-link aria-current="page"
                         class=" block py-2 pl-3 pr-4 rounded link-hover-animation md:bg-transparent md:p-0 w-fit"
                         to="/"> {{ $t('navbar.home') }}
            </router-link>
          </li>
          <li>
            <router-link
                class=" block py-2 pl-3 pr-4 rounded link-hover-animation md:hover:bg-transparent  md:p-0 w-fit"
                to="/hakkimizda"> {{ $t('navbar.about') }}
            </router-link>
          </li>
          <li>
            <router-link
                class=" block py-2 pl-3 pr-4 rounded link-hover-animation md:hover:bg-transparent  md:p-0 w-fit"
                to="/urunlerimiz"> {{ $t('navbar.products') }}
            </router-link>
          </li>
          <li>
            <button id="contactDropdown" data-dropdown-toggle="dropdown"
                    class=" block py-2 pl-3 pr-4 rounded md:hover:bg-transparent md:p-0 w-fit">
              {{ $t('navbar.contact') }} <i class="ml-2 fa fa-chevron-down text-[#6B7280] text-xs"/>
            </button>
            <!-- Dropdown menu -->
            <div id="dropdown"
                 class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
              <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="contactDropdown">
                <li>
                  <router-link to="/iletisim"
                               class="block px-4 py-2 hover:bg-gray-100"
                  >
                    {{ $t('navbar.message') }}
                  </router-link>
                </li>
                <!--                <li>-->
                <!--                  <router-link to="/iletisim/staj"-->
                <!--                               class="block px-4 py-2 hover:bg-gray-100">-->
                <!--                    {{ $t('navbar.internship') }}-->
                <!--                  </router-link>-->
                <!--                </li>-->
                <li>
                  <router-link to="/iletisim/is-basvurusu"
                               class="block px-4 py-2 hover:bg-gray-100">
                    {{ $t('navbar.job') }}
                  </router-link>
                </li>
              </ul>
            </div>
          </li>
          <li class="mt-20 md:hidden">
            <div>
              <a class="flex items-center gap-2 py-2 pl-3 pr-4 rounded cursor-pointer link-hover-animation md:hover:bg-transparent mb-6 md:mb-0 md:p-0 w-fit"
                 download="file" :href="$t('navbar.catalogLink')">
                {{ $t('navbar.catalog') }}
                <i class="fa-regular fa-circle-down text-xs text-[#6B7280]"/>
              </a>
              <button id="languageDropdownMobile" data-dropdown-toggle="language-dropdown-mobile"
                      class="block  py-2 pl-3 pr-4 rounded md:hover:bg-transparent md:p-0 w-fit">
                {{ $t('navbar.language') }} <i class="ml-2 fa fa-chevron-down text-[#6B7280] text-xs"/>
              </button>
              <!-- Dropdown menu -->
              <div id="language-dropdown-mobile"
                   class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
                <ul class="py-2 text-sm text-gray-700" aria-labelledby="languageDropdownMobile">
                  <li class="cursor-pointer" @click="setLanguage('tr')">
                    <div class="flex items-center px-4 py-2 hover:bg-gray-100">
                      <img src="@/assets/tr_flag.png" alt="turkey-flag" class="w-6 mr-2"/>
                      Türkçe
                    </div>
                  </li>
                  <li class="cursor-pointer" @click="setLanguage('en')">
                    <div class="flex items-center px-4 py-2 hover:bg-gray-100">
                      <img src="@/assets/en_flag.png" alt="turkey-flag" class="w-6 mr-2"/>
                      English
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>

    </div>
  </nav>
</template>

<script>
import {Dropdown} from "flowbite";

export default {
  name: "Navbar",
  data() {
    return {
      isDropdownOpen: false,
      contactDropdown: null,
      languageDropdown: null,
      mobileMenuButton: null,
      isMobile: null
    }
  },
  mounted() {
    this.isMobile = window.innerWidth < 768
    window.addEventListener('resize', () => {
      this.isMobile = window.innerWidth < 768
    })

    this.mobileMenuButton = document.querySelector('#mobile-menu-button')

    this.contactDropdown = new Dropdown(
        document.querySelector('#dropdown'),
        document.querySelector('[data-dropdown-toggle="dropdown"]')
    )
    this.languageDropdown = new Dropdown(
        document.querySelector('#language-dropdown'),
        document.querySelector('[ data-dropdown-toggle="language-dropdown"]')
    )
    this.languageDropdownMobile = new Dropdown(
        document.querySelector('#language-dropdown-mobile'),
        document.querySelector('[ data-dropdown-toggle="language-dropdown-mobile"]')
    )
  },
  beforeUnmount() {
    window.removeEventListener('resize', () => {
      this.isMobile = window.innerWidth < 768
    })
  },
  watch: {
    $route(to, from) {
      this.contactDropdown.hide()
      if (!from.name) return;
      if (!this.isDropdownOpen) return;
      this.mobileMenuButton.click() // Close mobile menu
    },
    isDropdownOpen() {
      if (this.isDropdownOpen) {
        document.body.style.overflow = "hidden"
      } else {
        document.body.style.overflow = "auto"
      }
    },
    $i18n: {
      handler() {
        this.languageDropdown.hide()
        this.languageDropdownMobile.hide()
      },
      deep: true
    }
  },
  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen
    },
    setLanguage(language) {
      this.$i18n.locale = language
    }
  }
}
</script>

<style scoped>

.blur-effect {

  -webkit-backdrop-filter: blur(24px);
  backdrop-filter: blur(24px);
}

</style>
