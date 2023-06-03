<template>
  <div class="flex items-start mb-4">
    <input :id="id" type="checkbox" value=""
           class="w-4 h-4 text-[#F7AF03] bg-transparent border-black focus:ring-0">
    <label :for="id" class="ml-2 text-sm"> {{ text }} </label>
  </div>
</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "CustomConfirmation",
  props: {
    id: {
      type: String,
      required: true
    },
    text: {
      type: String,
      default: ''
    }
  }
})
</script>

<style scoped>

</style>
