<template>
  <div v-if="!isSubmitted" class="container mx-auto px-6 md:px-96">
    <h1 class="text-4xl mb-12">
      {{ $t('internshipForm.title') }}
    </h1>

    <div v-for="(placeholder, index) in placeholders" :key="index" class="mb-4">
      <custom-input :placeholder="typeof placeholder === 'string' ? placeholder : placeholder.title"
                    :is-dropdown="typeof placeholder !== 'string'"
                    :options="typeof placeholder !== 'string' ? placeholder.options : null"
                    :type="getInputType(index)"
                    @update:model="model[index] = $event"
      />
    </div>
    <textarea class="w-full h-40 max-h-72 border-2 border-[#F3F3F3] border-none bg-[#FFFFFF] p-4 mb-4"
              :placeholder="$t('internshipForm.message')" @input="model.message = $event.target.value"/>


    <div v-if="showError" class="text-red-500 text-end text-sm mt-2">
      {{ $t('internshipForm.error') }}
    </div>

    <submit-button-group @submit="submitForm"/>

    <Whatsapp/>
  </div>
  <div v-else>
    <thank-you/>
  </div>
</template>

<script>
import {defineComponent} from 'vue'
import CustomInput from "@/components/Forms/FormsPartials/CustomInput.vue";
import SubmitButtonGroup from "@/components/Forms/FormsPartials/SubmitButtonGroup.vue";
import Whatsapp from "@/components/Whatsapp.vue";
import * as emailjs from "@emailjs/browser";
import ThankYou from "@/components/Forms/ThankYou.vue";

export default defineComponent({
  name: "InternshipForm",
  data() {
    return {
      placeholders: [],
      model: {
        department: "",
        duration: 0,
        email: "",
        gpa: 0,
        internshipType: "",
        message: "",
        name: "",
        period: "",
        phone: "",
        school: "",
        subject: ""
      },
      isSubmitted: false,
      showError: false
    }
  },
  components: {ThankYou, Whatsapp, SubmitButtonGroup, CustomInput},
  mounted() {
    this.placeholders = this.$tm('internshipForm.placeholders');
  },
  methods: {
    checkModelValues() {
      for (const key in this.model) {
        if (this.model[key] === '' || this.model[key] === 0) return false
      }
      return true
    },
    getInputType(key) {
      console.log(key)
      if (key === 'email') return 'email'
      if (key === 'phone') return 'tel'
      if (key === ('duration')) return 'number'
      if (key === ('gpa')) return 'number'
      return 'text'
    },
    async submitForm() {
      if (!this.checkModelValues()) {
        this.showError = true
        return
      }
      await emailjs.send(process.env.VUE_APP_EMAIL_SERVICE, process.env.VUE_APP_INTERNSHIP_EMAIL_TEMPLATE, {
        department: this.model.department,
        duration: this.model.duration,
        email: this.model.email,
        gpa: this.model.gpa,
        internshipType: this.model.internshipType,
        message: this.model.message,
        name: this.model.name,
        period: this.model.period,
        phone: this.model.phone,
        school: this.model.school,
        subject: this.model.subject
      }).then(() => {
        window.scrollTo(0, 0)
        this.isSubmitted = true
      }).catch(() => {
        this.isSubmitted = false
        alert('Something went wrong, please try again later');
      })
      console.log('submitForm')
    },
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
