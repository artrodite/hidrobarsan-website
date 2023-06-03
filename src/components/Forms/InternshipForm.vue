<template>
  <div class="container mx-auto px-6 md:px-96">
    <h1 class="text-4xl mb-12">
      {{ $t('internshipForm.title') }}
    </h1>
    <div v-for="(placeholder, index) in placeholders" :key="index" class="mb-4">
      <custom-input :placeholder="typeof placeholder === 'string' ? placeholder : placeholder.title"
                    :is-dropdown="typeof placeholder !== 'string'"
                    :options="typeof placeholder !== 'string' ? placeholder.options : null"
                    :type="getInputType(index)"
      />
    </div>
    <textarea class="w-full h-40 max-h-72 border-2 border-[#F3F3F3] border-none bg-[#FFFFFF] p-4 mb-4"
              :placeholder="$t('internshipForm.message')"/>

    <submit-button-group @submit="submitForm"/>
    <Whatsapp/>
  </div>
</template>

<script>
import {defineComponent} from 'vue'
import CustomInput from "@/components/Forms/FormsPartials/CustomInput.vue";
import SubmitButtonGroup from "@/components/Forms/FormsPartials/SubmitButtonGroup.vue";
import Whatsapp from "@/components/Whatsapp.vue";

export default defineComponent({
  name: "InternshipForm",
  data() {
    return {
      placeholders: []
    }
  },
  components: {Whatsapp, SubmitButtonGroup, CustomInput},
  mounted() {
    this.placeholders = this.$tm('internshipForm.placeholders');
  },
  methods: {
    getInputType(key) {
      console.log(key)
      if (key === 'email') return 'email'
      if (key === 'phone') return 'tel'
      if (key === ('duration')) return 'number'
      if (key === ('gpa')) return 'number'
      return 'text'
    },
    submitForm() {
      console.log('submitForm')
    }
  },
  watch: {
    $i18n: {
      handler() {
        this.placeholders = this.$tm('internshipForm.placeholders');
      },
      deep: true
    }
  }

})
</script>

<style scoped>

</style>
