<template>
  <div class="container mx-auto px-6 mb-16 lg:mb-60 lg:mt-48">
    <div class="mb-4 font-thin" data-aos="fade-up">
      {{ $t('home.announcements.title') }}
    </div>
    <div class="gap-12 md:px-96 flex justify-center">
      <div class="flex flex-col max-w-lg shadow" v-for="(card, index) in $tm('home.announcements.cards')" :key="index">

        <div class="mx-auto" data-aos="fade-up" data-aos-delay="100">
          <img alt="announcement-img" src="/images/announcement.png">
        </div>
        <div class="text-justify mx-auto bg-white p-8">
          <div class="font-medium mb-4" data-aos="fade-up" data-aos-delay="200">
            {{ card.cardTitle }}
          </div>
          <div class="font-thin" data-aos="fade-up" data-aos-delay="300">
            {{ card.cardDescription }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomepageAnnouncement"
}
</script>

<style scoped>
</style>
