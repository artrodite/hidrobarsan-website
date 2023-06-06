<template>
  <div v-if="!isSubmitted" class="container mx-auto px-6 md:px-96">
    <h1 class="text-4xl mb-12">
      {{ $t('jobApplicationForm.title') }}
    </h1>

    <div id="main">
      <div v-for="(placeholder, index) in sections.main?.placeholders" :key="index" class="mb-4">
        <custom-input :placeholder="placeholder" @update:model="model[index] = $event"/>
      </div>
    </div>

    <div id="addresses">
      <h2 class="text-2xl my-12"> {{ sections.addresses?.title }} </h2>
      <div class="md:flex justify-between items-center gap-4 mb-12 md:mb-0">
        <div v-for="(placeholder, index) in sections.addresses?.placeholders?.home" :key="index" class="mb-4 md:w-1/3">
          <custom-input :placeholder="placeholder"
                        @update:model="(value) => setFields('addresses','home', index, value)"/>
        </div>
      </div>

      <div class="md:flex justify-between items-center gap-4">
        <div v-for="(placeholder, index) in sections.addresses?.placeholders?.work" :key="index" class="mb-4 md:w-1/3">
          <custom-input :placeholder="placeholder"
                        @update:model="(value) => setFields('addresses', 'work', index, value)"/>
        </div>
      </div>
    </div>

    <div id="personalInfo">
      <h2 class="text-2xl my-12"> {{ sections.personalInfo?.title }} </h2>
      <div v-for="(placeholder, index) in sections.personalInfo?.placeholders" :key="index" class="mb-4">
        <custom-input :placeholder="typeof placeholder === 'string' ? placeholder : placeholder.title"
                      :is-dropdown="typeof placeholder !== 'string'"
                      :options="typeof placeholder !== 'string' ? placeholder.options : null"
                      @update:model="model[index] = $event"
        />
      </div>
    </div>

    <div id="familyInfo">
      <div class="grid md:grid-cols-3 gap-4">
        <div v-for="(placeholder, index) in sections.familyInfo?.placeholders" :key="index">
          <custom-input :placeholder="placeholder" @update:model="model[index] = $event"/>
        </div>
      </div>
    </div>

    <div id="privatePersonalInfo">
      <h2 class="text-2xl mt-12 mb-6"> {{ sections.privatePersonalInfo?.title }} </h2>
      <div class="font-thin mb-6"> {{ sections.privatePersonalInfo?.description }}</div>
      <div v-for="(placeholder, index) in sections.privatePersonalInfo?.placeholders" :key="index" class="mb-4">
        <custom-input :placeholder="placeholder" @update:model="model[index] = $event"/>
      </div>
    </div>

    <div id="education">
      <h2 class="text-2xl mt-12 mb-6"> {{ sections.education?.title }} </h2>
      <div class="font-thin mb-6"> {{ sections.education?.description }}</div>
      <div v-for="(educationLevels, educationType) in sections.education?.placeholders" :key="educationType"
           class="mb-12 md:mb-4">
        <div class="md:flex items-center gap-4">
          <div v-for="(placeholder, index) in educationLevels" :key="index" class="mb-4 md:mb-0">
            <custom-input :placeholder="placeholder"
                          @update:model="setFields('education', educationType, index, $event)"/>
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
            <custom-input :placeholder="placeholder"
                          @update:model="setFields('experiences', '', index+i, $event)"/>
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
                          :options="typeof placeholder !== 'string' ? placeholder.options : null"
                          @update:model="setFields('languages', '', index+i, $event)"/>
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

      <div v-for="(categories, categoriesType) in sections.computer?.placeholders" :key="categoriesType" class="mb-8">
        <div v-for="i in computerSkillCount" :key="i">
          <div class="grid grid-cols-3 gap-4">
            <div v-for="(placeholder, index) in (categories)" :key="index"
                 :class="typeof placeholder == 'string' ? 'col-span-2' : ''" class="mb-4">
              <custom-input :placeholder="typeof placeholder === 'string' ? placeholder : placeholder.title"
                            :is-dropdown="typeof placeholder !== 'string'"
                            :options="typeof placeholder !== 'string' ? placeholder.options : null"
                            @update:model="setFields('computer', '', categoriesType+index+i, $event)"
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
          <div v-for="(placeholder, index, placeholderIndex) in sections.courses?.placeholders" :key="index"
               class="mb-4"
               :class="(placeholderIndex % 2 === 0) ? 'col-span-2' : ''">
            <custom-input :placeholder="placeholder"
                          @update:model="setFields('courses', '', index+i, $event)"/>
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
            <custom-input :placeholder="placeholder" @update:model="setFields('references', '', index+i, $event)"/>
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
            <custom-input :placeholder="positionPlaceholder"
                          @update:model="setFields('positionPreferences', '', index+i, $event)"/>
          </div>
        </div>
      </div>

      <div v-for="(placeholder, index) in sections.generalInfo?.placeholders" :key="index" class="mb-4">
        <custom-input :placeholder="placeholder" @update:model="model[index] = $event"/>
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


    <submit-button-group @submit=" submitForm" :is-loading="isLoading"/>
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
import * as emailjs from "@emailjs/browser";

export default defineComponent({
  name: "JobApplicationForm",
  components: {ThankYou, CustomConfirmation, SubmitButtonGroup, CustomInput, Whatsapp},
  data() {
    return {
      sections: {},
      experiencesCount: 3,
      languageCount: 2,
      computerSkillCount: 5,
      courseCount: 3,
      referencesCount: 3,
      positionPreferencesCount: 3,
      isSubmitted: false,
      isLoading: false,
      model: {
        "name": "",
        "phone": "",
        "email": "",
        "addresses": {
          "home": {
            "address": "",
            "town": "",
            "city": "",
          },
          "work": {
            "address": "",
            "town": "",
            "city": "",
          },
        },
        "birthDate": "",
        "birthPlace": "",
        "city": "",
        "id": "",
        "bloodType": "",
        "maritalStatus": "",
        "militaryStatus": "",
        "cigarette": "",

        "fatherName": "",
        "fatherJob": "",
        "fatherJobPlace": "",
        "motherName": "",
        "motherJob": "",
        "motherJobPlace": "",
        "spouseName": "",
        "spouseJob": "",
        "spouseJobPlace": "",
        "children": "",
        "childrenNames": "",
        "childrenAges": "",

        "health": "",
        "disability": "",
        "conviction": "",
        "education": {
          "primary": {
            "schoolName": "",
          },
          "highSchool": {
            "schoolName": "",
            "schoolDepartment": "",
            "schoolStartDate": "",
            "schoolEndDate": "",
            "grade": ""
          },
          "collage": {
            "schoolName": "",
            "schoolDepartment": "",
            "schoolStartDate": "",
            "schoolEndDate": "",
            "grade": ""
          },
          "bachelor": {
            "schoolName": "",
            "schoolDepartment": "",
            "schoolStartDate": "",
            "schoolEndDate": "",
            "grade": ""
          },
          "master": {
            "schoolName": "",
            "schoolDepartment": "",
            "schoolStartDate": "",
            "schoolEndDate": "",
            "grade": ""
          },
          "doctorate": {
            "schoolName": "",
            "schoolDepartment": "",
            "schoolStartDate": "",
            "schoolEndDate": "",
            "grade": ""
          }
        },
        "experiences": {
          "companyName1": "",
          "companyCity1": "",
          "companySector1": "",
          "companyPosition1": "",
          "companyStartDate1": "",
          "companyEndDate1": "",
          "companySalary1": "",
          "companyReason1": "",

          "companyName2": "",
          "companyCity2": "",
          "companySector2": "",
          "companyPosition2": "",
          "companyStartDate2": "",
          "companyEndDate2": "",
          "companySalary2": "",
          "companyReason2": "",

          "companyName3": "",
          "companyCity3": "",
          "companySector3": "",
          "companyPosition3": "",
          "companyStartDate3": "",
          "companyEndDate3": "",
          "companySalary3": "",
          "companyReason3": ""
        },
        "languages": {
          "languageName1": "",
          "reading1": "",
          "writing1": "",
          "speaking1": "",

          "languageName2": "",
          "reading2": "",
          "writing2": "",
          "speaking2": "",
        },
        "computer": {
          "programtitle1": "",
          "programlevel1": "",

          "programtitle2": "",
          "programlevel2": "",

          "programtitle3": "",
          "programlevel3": "",

          "tooltitle1": "",
          "toollevel1": "",

          "tooltitle2": "",
          "toollevel2": "",

          "tooltitle3": "",
          "toollevel3": "",
        },
        "courses": {
          "courseName1": "",
          "courseDate1": "",

          "courseName2": "",
          "courseDate2": "",

          "courseName3": "",
          "courseDate3": "",
        },
        "references": {
          "referenceName1": "",
          "referencePhone1": "",
          "referenceEmail1": "",

          "referenceName2": "",
          "referencePhone2": "",
          "referenceEmail2": "",

          "referenceName3": "",
          "referencePhone3": "",
          "referenceEmail3": "",

          "referenceName4": "",
          "referencePhone4": "",
          "referenceEmail4": "",
        },
        "positionPreferences": {
          "position1": "",
          "reason1": "",

          "position2": "",
          "reason2": "",

          "position3": "",
          "reason3": "",
        },
        "salaryExpectation": "",
        "startWorkingDate": "",
        "travelAvailability": "",
        "careerGoal": "",
        "culturalActivities": "",
        "organizations": "",
      }
    }
  },
  methods: {
    async submitForm() {
      console.log(this.model);
      console.log('submitForm')
      this.isLoading = true;
      // return;
      // eslint-disable-next-line no-unreachable
      await emailjs.send(process.env.VUE_APP_EMAIL_SERVICE, process.env.VUE_APP_INTERNSHIP_EMAIL_TEMPLATE, {
        name: this.model.name,
        phone: this.model.phone,
        email: this.model.email,
        reply_to: this.model.email,

        homeAddress: this.model.addresses.home.address,
        homeTown: this.model.addresses.home.town,
        homeCity: this.model.addresses.home.city,
        workAddress: this.model.addresses.work.address,
        workTown: this.model.addresses.work.town,
        workCity: this.model.addresses.work.city,

        birthDate: this.model.birthDate,
        birthPlace: this.model.birthPlace,
        city: this.model.city,
        id: this.model.id,

        bloodType: this.model.bloodType,
        maritalStatus: this.model.maritalStatus,
        militaryStatus: this.model.militaryStatus,
        cigarette: this.model.cigarette,

        fatherName: this.model.fatherName,
        fatherJob: this.model.fatherJob,
        fatherJobPlace: this.model.fatherJobPlace,
        motherName: this.model.motherName,
        motherJob: this.model.motherJob,
        motherJobPlace: this.model.motherJobPlace,
        spouseName: this.model.spouseName,
        spouseJob: this.model.spouseJob,
        spouseJobPlace: this.model.spouseJobPlace,
        children: this.model.children,
        childrenNames: this.model.childrenNames,
        childrenAges: this.model.childrenAges,

        health: this.model.health,
        disability: this.model.disability,
        conviction: this.model.conviction,

        schoolName1: this.model.education.primary.schoolName,

        schoolName2: this.model.education.highSchool.schoolName,
        schoolDepartment2: this.model.education.highSchool.schoolDepartment,
        schoolStartDate2: this.model.education.highSchool.schoolStartDate,
        schoolEndDate2: this.model.education.highSchool.schoolEndDate,
        grade2: this.model.education.highSchool.grade,

        schoolName3: this.model.education.collage.schoolName,
        schoolDepartment3: this.model.education.collage.schoolDepartment,
        schoolStartDate3: this.model.education.collage.schoolStartDate,
        schoolEndDate3: this.model.education.collage.schoolEndDate,
        grade3: this.model.education.collage.grade,


        schoolName4: this.model.education.bachelor.schoolName,
        schoolDepartment4: this.model.education.bachelor.schoolDepartment,
        schoolStartDate4: this.model.education.bachelor.schoolStartDate,
        schoolEndDate4: this.model.education.bachelor.schoolEndDate,
        grade4: this.model.education.bachelor.grade,

        schoolName5: this.model.education.master.schoolName,
        schoolDepartment5: this.model.education.master.schoolDepartment,
        schoolStartDate5: this.model.education.master.schoolStartDate,
        schoolEndDate5: this.model.education.master.schoolEndDate,
        grade5: this.model.education.master.grade,

        schoolName6: this.model.education.doctorate.schoolName,
        schoolDepartment6: this.model.education.doctorate.schoolDepartment,
        schoolStartDate6: this.model.education.doctorate.schoolStartDate,
        schoolEndDate6: this.model.education.doctorate.schoolEndDate,
        grade6: this.model.education.doctorate.grade,

        companyName1: this.model.experiences.companyName1,
        companyCity1: this.model.experiences.companyCity1,
        companySector1: this.model.experiences.companySector1,
        companyPosition1: this.model.experiences.companyPosition1,
        companyStartDate1: this.model.experiences.companyStartDate1,
        companyEndDate1: this.model.experiences.companyEndDate1,
        companySalary1: this.model.experiences.companySalary1,
        companyReason1: this.model.experiences.companyReason1,

        companyName2: this.model.experiences.companyName2,
        companyCity2: this.model.experiences.companyCity2,
        companySector2: this.model.experiences.companySector2,
        companyPosition2: this.model.experiences.companyPosition2,
        companyStartDate2: this.model.experiences.companyStartDate2,
        companyEndDate2: this.model.experiences.companyEndDate2,
        companySalary2: this.model.experiences.companySalary2,
        companyReason2: this.model.experiences.companyReason2,

        companyName3: this.model.experiences.companyName3,
        companyCity3: this.model.experiences.companyCity3,
        companySector3: this.model.experiences.companySector3,
        companyPosition3: this.model.experiences.companyPosition3,
        companyStartDate3: this.model.experiences.companyStartDate3,
        companyEndDate3: this.model.experiences.companyEndDate3,
        companySalary3: this.model.experiences.companySalary3,
        companyReason3: this.model.experiences.companyReason3,

        languageName1: this.model.languages.languageName1,
        reading1: this.model.languages.reading1,
        writing1: this.model.languages.writing1,
        speaking1: this.model.languages.speaking1,

        languageName2: this.model.languages.languageName2,
        reading2: this.model.languages.reading2,
        writing2: this.model.languages.writing2,
        speaking2: this.model.languages.speaking2,

        program1: this.model.computer.programtitle1,
        programLevel1: this.model.computer.programlevel1,

        program2: this.model.computer.programtitle2,
        programLevel2: this.model.computer.programlevel2,

        program3: this.model.computer.programtitle3,
        programLevel3: this.model.computer.programlevel3,

        tool1: this.model.computer.tooltitle1,
        toolLevel1: this.model.computer.toollevel1,

        tool2: this.model.computer.tooltitle2,
        toolLevel2: this.model.computer.toollevel2,

        tool3: this.model.computer.tooltitle3,
        toolLevel3: this.model.computer.toollevel3,

        courseName1: this.model.courses.courseName1,
        courseDate1: this.model.courses.courseDate1,

        courseName2: this.model.courses.courseName2,
        courseDate2: this.model.courses.courseDate2,

        courseName3: this.model.courses.courseName3,
        courseDate3: this.model.courses.courseDate3,

        referenceName1: this.model.references.referenceName1,
        referencePhone1: this.model.references.referencePhone1,
        referenceEmail1: this.model.references.referenceEmail1,

        referenceName2: this.model.references.referenceName2,
        referencePhone2: this.model.references.referencePhone2,
        referenceEmail2: this.model.references.referenceEmail2,

        referenceName3: this.model.references.referenceName3,
        referencePhone3: this.model.references.referencePhone3,
        referenceEmail3: this.model.references.referenceEmail3,

        referenceName4: this.model.references.referenceName4,
        referencePhone4: this.model.references.referencePhone4,
        referenceEmail4: this.model.references.referenceEmail4,

        position1: this.model.positionPreferences.position1,
        reason1: this.model.positionPreferences.reason1,

        position2: this.model.positionPreferences.position2,
        reason2: this.model.positionPreferences.reason2,

        position3: this.model.positionPreferences.position3,
        reason3: this.model.positionPreferences.reason3,

        salaryExpectation: this.model.salaryExpectation,
        startWorkingDate: this.model.startWorkingDate,
        travelAvailability: this.model.travelAvailability,
        careerGoal: this.model.careerGoal,
        culturalActivities: this.model.culturalActivities,
        organizations: this.model.organizations,
      }).then(() => {
        window.scrollTo(0, 0)
        this.isSubmitted = true
      }).catch(() => {
        this.isSubmitted = false
        alert('Something went wrong, please try again later');
      }).finally(
          () => this.isLoading = false
      )
    },
    setFields(mainKey, outerKey, innerKey, value) {
      if (outerKey === '') {
        this.model[mainKey][innerKey] = value
        return
      }
      this.model[mainKey][outerKey][innerKey] = value
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
    console.log(this.model)
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
