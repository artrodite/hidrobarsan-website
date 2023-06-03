<template>
  <div class="flex flex-col md:flex-row md:gap-8 md:items-center mt-8">
    <div class="flex items-center justify-center md:w-1/3">
      <label
          class="flex items-center justify-center w-full border border-[#F7AF03] cursor-pointer text-[#F7AF03] transition-all hover:text-white hover:bg-[#F7AF03]"
          for="dropzone-file">
                        <span class="items-center justify-center p-2">
                            <i class="fa fa-paperclip mr-2"/> {{ $t('contact.addResume') }}
                        </span>
        <input id="dropzone-file" class="hidden" type="file"/>
      </label>
    </div>
    <div class="mt-8 md:mt-0 w-full">
      <button class="send-button bg-[#F7AF03] text-white border border-[#F7AF03] p-2 w-full"
              @click="submit">
        {{ $t('contact.submit') }} <img alt="send-icon"
                                        class="send-icon hidden ml-2 align-center h-4 md:inline-flex transition-all"
                                        src="@/assets/send-icon.svg">
      </button>
    </div>
  </div>
</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "SubmitButtonGroup",
  methods: {
    submit() {
      this.$emit('submit')
    }
  }
})
</script>

<style lang="scss" scoped>


i:not(.fa-chevron-down, .fa-paperclip) {
  color: #A4A4A4;
  font-size: 1.2rem;
}

.send-button:hover {
  .send-icon {
    transform: translateX(10px);
  }
}
</style>
