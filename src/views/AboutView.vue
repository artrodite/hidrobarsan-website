<template>
  <div class="container px-6 md:px-64 mx-auto">

    <!-- Hero -->
    <div data-aos="fade-up" class="h-screen flex flex-col items-center md:pt-32">
      <div class="mx-auto mb-16 text-5xl font-medium">
        {{ $t('about.hero.hello') }}<span class="text-[#F7AF03]">,</span> {{ $t('about.hero.weAre') }}<span
          class="text-[#F7AF03]">.</span> {{ $t('about.hero.rest') }}<span class="text-[#F7AF03]">.</span>
      </div>
      <div class="w-full flex mb-16 gap-6 text-xl">
        <div>
          {{ $t('about.hero.desc1') }}
        </div>

        <div>
          {{ $t('about.hero.desc2') }}
        </div>
      </div>
    </div>

    <!-- Map Section -->
    <div data-aos="fade-up" class="mb-64">
      <div class="border-2 border-[#F7AF03] w-full py-12 px-24 mx-auto mb-16">
        <img src="/images/about/about-map.png" alt="" class="max-w-full">
      </div>
      <div>
        <div class="text-3xl font-medium mb-8 w-2/3">
          {{ $t('about.mapSection.title') }}
        </div>
        <div class="text-xl mb-8">
          <p class="mb-4"> {{ $t('about.mapSection.desc1') }} </p>
          <p> {{ $t('about.mapSection.desc2') }} </p>
        </div>
      </div>
    </div>

    <!-- Historical process -->
    <div data-aos="fade-up" class="mb-64">
      <div class="text-3xl font-medium mb-8">
        {{ $t('about.historicalProcess.title') }}
      </div>
      <div class="flex flex-col w-[400px]">
        <div>
          <p>
            {{ $t('about.historicalProcess.2000.text') }}
          </p>
        </div>
        <div class="text-3xl font-medium my-4">
          {{ $t('about.historicalProcess.2000.year') }}
        </div>
      </div>

      <img src="@/assets/yellow-arrow.png" alt="" class="h-[400px]">

      <div class="flex flex-col w-[400px] mb-8">
        <div class="text-3xl font-medium my-4">
          {{ $t('about.historicalProcess.2003.year') }}
        </div>
        <div>
          <p class="mb-4">
            {{ $t('about.historicalProcess.2003.text') }}
          </p>
          <p>
            {{ $t('about.historicalProcess.2003.text2') }}
          </p>
        </div>

      </div>

      <img src="@/assets/yellow-arrow.png" alt="" class="h-[400px]">

      <div class="flex flex-col">
        <div class="text-3xl font-medium my-4">
          {{ $t('about.historicalProcess.today.title') }}
        </div>

        <div class="flex gap-8">
          <div>
            <img src="/images/about/about-location-image.png" alt="">
          </div>
          <div class="flex flex-col gap-4">
            <p class="text-xl font-medium">{{ $t('about.historicalProcess.today.subtitle') }}</p>
            <p>{{ $t('about.historicalProcess.today.text') }}</p>
            <p class="text-[#4E4E4E]">{{ $t('about.historicalProcess.today.text2') }}</p>
          </div>
        </div>
      </div>

    </div>

    <!-- Production Area -->
    <div data-aos="fade-up"
         class="border-2 rounded-2xl border-dotted border-[#F7AF03] w-full py-64 px-24 mx-auto my-16 text-center text-4xl font-medium">
      {{ $t('about.productionArea.text') }}
    </div>

    <!-- Our Mission -->
    <div data-aos="fade-up" class="mb-32">
      <div class="w-1/2 mb-16">
        <p class="text-2xl font-medium mb-4"> {{ $t('about.ourMission.title') }}</p>
        <p>{{ $t('about.ourMission.text') }}</p>
      </div>

      <div class="flex flex-col gap-6">
        <div class="flex">
          <img src="@/assets/handshake.png" alt="" class="mr-4 w-8">
          <span>{{ $t('about.ourMission.sales') }}</span>
        </div>
        <div class="pl-2">
          <img src="@/assets/black-arrow.png" alt="" class="h-[200px]">
        </div>

        <div class="flex">
          <img src="@/assets/engineering.png" alt="" class="mr-4 w-8">
          <span>{{ $t('about.ourMission.setup') }}</span>
        </div>
        <div class="pl-2">
          <img src="@/assets/black-arrow.png" alt="" class="h-[200px]">
        </div>

        <div class="flex">
          <img src="@/assets/school.png" alt="" class="mr-4 w-8">
          <span>{{ $t('about.ourMission.education') }}</span>
        </div>
        <div class="pl-2">
          <img src="@/assets/black-arrow.png" alt="" class="h-[200px]">
        </div>

        <div class="flex">
          <img src="@/assets/construction.png" alt="" class="mr-4 w-8">
          <span>{{ $t('about.ourMission.technicalService') }}</span>
        </div>
      </div>
    </div>

    <!-- Service Area-->
    <div data-aos="fade-up" class="w-1/2 mb-64">
      <div class="flex flex-col gap-8">
        <p class="text-2xl font-medium">{{ $t('about.serviceArea.title') }}</p>
        <p class="text-xl">{{ $t('about.serviceArea.description') }}.</p>
        <p class="text-sm font-light">{{ $t('about.serviceArea.text') }}</p>
      </div>
    </div>

    <!-- 300 km-->
    <div data-aos="fade-up" class="mb-64" v-if="$i18n.locale === 'tr'">
      <div class="flex items-center justify-around text-2xl mb-16">
        Denizli
        <div>
          <img src="@/assets/300-km.png" alt="" class="w-2/3 mx-auto">
        </div>
        Siz
      </div>

      <div class="text-3xl w-2/3 mx-auto">
        Denizli Merkez olmak üzere <span class="text-[#F7AF03]">300 km’ye 24 saat,</span> 300 km’yi aşan mesafelerde ise
        48 saat içinde size servis imkânı sunuyoruz.
      </div>
    </div>

    <!-- Testimonial-->
    <div data-aos="fade-up" class="w-1/2 mb-64 text-lg">
      {{ $t('about.testimonial.description') }}
    </div>

    <div data-aos="fade-up" class="mb-64">
      <div class="text-lg mb-8">
        <span class="text-[#F7AF03]">"</span>
        {{ $t('about.testimonial.quote') }}
        <span class="text-[#F7AF03]">"</span>
      </div>
      <div class="flex flex-col">
        <span class="text-lg">{{ $t('about.testimonial.author') }}</span>
      </div>
    </div>

    <!-- Contact Us-->
    <div data-aos="fade-up" class="w-1/2 mx-auto flex flex-col items-center justify-center gap-4">
      <div class="text-2xl text-center">
        {{ $t('about.contactUs.text') }}
      </div>
      <router-link
          class="contact-us-btn mt-8 md:w-2/3 border border-[#F7AF03] bg-[#F7AF03] hover:bg-transparent flex px-4 py-2 justify-center items-center transition-all"
          to="/iletisim">
        <span class="contact-us-btn-text text-white font-medium mr-2">{{ $t('about.contactUs.buttonText') }}</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutView",
}
</script>

<style scoped>
.contact-us-btn:hover {
  .contact-us-btn-text {
    color: #F7AF03;
  }
}
</style>
