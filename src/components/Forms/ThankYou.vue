<template>
  <div class="container mx-auto px-6 md:px-96 h-screen flex flex-col items-center justify-center">
    <div class="text-4xl mb-8 font-medium text-center">
      {{ $t('thankYou.title') }}
    </div>
    <div class="text-2xl mb-8 font-medium text-center">
      {{ $t('thankYou.description') }}
    </div>
    <div class="p-4 mb-8 font-medium text-center">
      <router-link to="/">
        <button class="bg-[#F7AF03] text-white px-4 py-2 rounded-md">
          {{ $t('thankYou.goToHome') }}
        </button>
      </router-link>
    </div>
  </div>
</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "ThankYou"
})
</script>

<style scoped>

</style>
