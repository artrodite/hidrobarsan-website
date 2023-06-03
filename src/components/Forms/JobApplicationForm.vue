<template>
  <div v-if="!isSubmitted" class="container mx-auto px-6 md:px-96">
    <h1 class="text-4xl mb-12">
      {{ $t('jobApplicationForm.title') }}
    </h1>

    <div id="main">
      <div v-for="(placeholder, index) in sections.main?.placeholders" :key="index" class="mb-4">
        <custom-input :placeholder="placeholder"/>
      </div>
    </div>

    <div id="addresses">
      <h2 class="text-2xl my-12"> {{ sections.addresses?.title }} </h2>
      <div class="md:flex justify-between items-center gap-4 mb-12 md:mb-0">
        <div v-for="(placeholder, index) in sections.addresses?.placeholders?.home" :key="index" class="mb-4 md:w-1/3">
          <custom-input :placeholder="placeholder"/>
        </div>
      </div>

      <div class="md:flex justify-between items-center gap-4">
        <div v-for="(placeholder, index) in sections.addresses?.placeholders?.work" :key="index" class="mb-4 md:w-1/3">
          <custom-input :placeholder="placeholder"/>
        </div>
      </div>
    </div>

    <div id="personalInfo">
      <h2 class="text-2xl my-12"> {{ sections.personalInfo?.title }} </h2>
      <div v-for="(placeholder, index) in sections.personalInfo?.placeholders" :key="index" class="mb-4">
        <custom-input :placeholder="typeof placeholder === 'string' ? placeholder : placeholder.title"
                      :is-dropdown="typeof placeholder !== 'string'"
                      :options="typeof placeholder !== 'string' ? placeholder.options : null"
        />
      </div>
    </div>

    <div id="familyInfo">
      <div class="grid md:grid-cols-3 gap-4">
        <div v-for="(placeholder, index) in sections.familyInfo?.placeholders" :key="index">
          <custom-input :placeholder="placeholder"/>
        </div>
      </div>
    </div>

    <div id="privatePersonalInfo">
      <h2 class="text-2xl mt-12 mb-6"> {{ sections.privatePersonalInfo?.title }} </h2>
      <div class="font-thin mb-6"> {{ sections.privatePersonalInfo?.description }}</div>
      <div v-for="(placeholder, index) in sections.privatePersonalInfo?.placeholders" :key="index" class="mb-4">
        <custom-input :placeholder="placeholder"/>
      </div>
    </div>

    <div id="education">
      <h2 class="text-2xl mt-12 mb-6"> {{ sections.education?.title }} </h2>
      <div class="font-thin mb-6"> {{ sections.education?.description }}</div>
      <div v-for="(educationLevels, index) in sections.education?.placeholders" :key="index" class="mb-12 md:mb-4">
        <div class="md:flex items-center gap-4">
          <div v-for="(placeholder, index) in educationLevels" :key="index" class="mb-4 md:mb-0">
            <custom-input :placeholder="placeholder"/>
          </div>
        </div>
      </div>
    </div>

    <div id="experiences">
      <h2 class="text-2xl mt-12 mb-6"> {{ sections.experiences?.title }} </h2>
      <div class="font-thin mb-6"> {{ sections.experiences?.description }}</div>
      <div v-for="i in experiencesCount" :key="i" class="mb-12">
        <div class="grid md:grid-cols-2 gap-4">
          <div v-for="(placeholder, index) in sections.experiences?.placeholders" :key="index">
            <custom-input :placeholder="placeholder"/>
          </div>
        </div>
      </div>

      <div class="flex justify-end items-center">
        <button @click="addExperiences"
                class="p-2 border border-[#F7AF03] cursor-pointer text-[#F7AF03] transition-all hover:text-white hover:bg-[#F7AF03]">
          {{ sections.experiences?.addExperience }}
        </button>
      </div>

    </div>

    <div id="language">
      <h2 class="text-2xl mt-12 mb-6"> {{ sections.language?.title }} </h2>
      <div class="font-thin mb-6"> {{ sections.language?.description }}</div>
      <div v-for="i in languageCount" :key="i" class="mb-12">
        <div class="grid md:grid-cols-4 gap-4">
          <div v-for="(placeholder, index) in sections.language?.placeholders" :key="index">
            <custom-input :placeholder="typeof placeholder === 'string' ? placeholder : placeholder.title"
                          :is-dropdown="typeof placeholder !== 'string'"
                          :options="typeof placeholder !== 'string' ? placeholder.options : null"/>
          </div>
        </div>
      </div>
      <div class="flex justify-end items-center">
        <button @click="addLanguage"
                class="p-2 border border-[#F7AF03] cursor-pointer text-[#F7AF03] transition-all hover:text-white hover:bg-[#F7AF03]">
          {{ sections.language?.addLanguage }}
        </button>
      </div>

    </div>

    <div id="computer">
      <h2 class="text-2xl mt-12 mb-6"> {{ sections.computer?.title }} </h2>
      <div class="font-thin mb-6"> {{ sections.computer?.description }}</div>

      <div v-for="(categories, index) in sections.computer?.placeholders" :key="index" class="mb-8">
        <div v-for="i in computerSkillCount" :key="i">
          <div class="grid grid-cols-3 gap-4">
            <div v-for="(placeholder, index) in (categories)" :key="index"
                 :class="typeof placeholder == 'string' ? 'col-span-2' : ''" class="mb-4">
              <custom-input :placeholder="typeof placeholder === 'string' ? placeholder : placeholder.title"
                            :is-dropdown="typeof placeholder !== 'string'"
                            :options="typeof placeholder !== 'string' ? placeholder.options : null"
              />
            </div>
          </div>

        </div>


      </div>
    </div>

    <div id="courses">
      <h2 class="text-2xl mt-12 mb-6"> {{ sections.courses?.title }} </h2>
      <div v-for="i in courseCount" :key="i">
        <div class="grid grid-cols-3 gap-4">
          <div v-for="(placeholder, index, i) in sections.courses?.placeholders" :key="index" class="mb-4"
               :class="(i % 2 === 0) ? 'col-span-2' : ''">
            <custom-input :placeholder="placeholder"/>
          </div>
        </div>
      </div>
      <div class="flex justify-end items-center">
        <button @click="addCourse"
                class="p-2 border border-[#F7AF03] cursor-pointer text-[#F7AF03] transition-all hover:text-white hover:bg-[#F7AF03]">
          {{ sections.courses?.addCourse }}
        </button>
      </div>
    </div>

    <div id="references">
      <h2 class="text-2xl mt-12 mb-6"> {{ sections.references?.title }} </h2>
      <div class="font-thin mb-6"> {{ sections.references?.description }}</div>
      <div v-for="i in referencesCount" :key="i">
        <div class="grid md:grid-cols-3 md:gap-4 mb-12 md:mb-0">
          <div v-for="(placeholder, index) in sections.references?.placeholders" :key="index" class="mb-4">
            <custom-input :placeholder="placeholder"/>
          </div>
        </div>
      </div>
      <div class="flex justify-end items-center mb-8">
        <button @click="addReference"
                class="p-2 border border-[#F7AF03] cursor-pointer text-[#F7AF03] transition-all hover:text-white hover:bg-[#F7AF03]">
          {{ sections.references?.addReference }}
        </button>
      </div>

      <custom-confirmation :text="sections.references?.confirm?.text" id="references_confirm"/>
    </div>

    <div id="generalInfo">
      <h2 class="text-2xl mt-12 mb-6"> {{ sections.generalInfo?.title }} </h2>
      <div class="font-thin mb-6"> {{ sections.generalInfo?.description }}</div>
      <div v-for="i in positionPreferencesCount" :key="i" class="mb-4">
        <div class="grid grid-cols-2 gap-4">
          <div v-for="(positionPlaceholder, index) in sections.generalInfo?.positionPreferencePlaceholders"
               :key="index">
            <custom-input :placeholder="positionPlaceholder"/>
          </div>
        </div>
      </div>

      <div v-for="(placeholder, index) in sections.generalInfo?.placeholders" :key="index" class="mb-4">
        <custom-input :placeholder="placeholder"/>
      </div>

      <div class="mt-8">
        <div v-for="(confirmText, index) in sections.generalInfo?.confirm" :key="index" class="mb-8">
          <custom-confirmation :text="confirmText" :id="'generalInfo' + index"/>
        </div>
      </div>
    </div>

    <div id="personalDataProtection">
      <div class="mb-6 text-base"> {{ sections.personalDataProtection?.text }}</div>

      <div class="mt-4">
        <div v-for="(confirmText, index) in sections.personalDataProtection?.confirm" :key="index"
             class="mb-8 flex items-baseline">
          <custom-confirmation :text="confirmText" :id="'personalDataProtection_' + index"/>
          <a href="https://www.icisleri.gov.tr/kisisel-verilerin-korunmasi-kanunu-aydinlatma-metni" target="_blank">
            <i class="ml-2 fa fa-arrow-right text-xs"
               style="transform: rotate(-45deg)"/>
          </a>
        </div>
      </div>
    </div>


    <submit-button-group @submit=" submitForm"/>
    <Whatsapp/>
  </div>
  <div v-else>
    <thank-you/>
  </div>
</template>

<script>
import {defineComponent} from 'vue'
import Whatsapp from "@/components/Whatsapp.vue";
import CustomInput from "@/components/Forms/FormsPartials/CustomInput.vue";
import SubmitButtonGroup from "@/components/Forms/FormsPartials/SubmitButtonGroup.vue";
import CustomConfirmation from "@/components/Forms/FormsPartials/CustomConfirmation.vue";
import ThankYou from "@/components/Forms/ThankYou.vue";

export default defineComponent({
  name: "JobApplicationForm",
  components: {ThankYou, CustomConfirmation, SubmitButtonGroup, CustomInput, Whatsapp},
  data() {
    return {
      sections: {},
      experiencesCount: 2,
      languageCount: 2,
      computerSkillCount: 5,
      courseCount: 3,
      referencesCount: 3,
      positionPreferencesCount: 3,
      isSubmitted: false
    }
  },
  methods: {
    submitForm() {
      console.log('submitForm')
      window.scrollTo(0, 0)
      this.isSubmitted = true
    },
    addExperiences() {
      this.experiencesCount++
    },
    addLanguage() {
      this.languageCount++
    },
    addComputerSkill() {
      this.computerSkillCount++
    },
    addCourse() {
      this.courseCount++
    },
    addReference() {
      this.referencesCount++
    }
  },
  mounted() {
    this.sections = this.$tm('jobApplicationForm.sections');
    console.log(this.sections)
  },
  watch: {
    $i18n: {
      handler() {
        this.sections = this.$tm('jobApplicationForm.sections');
      },
      deep: true
    }
  }
})

</script>

<style scoped>

</style>
