<template>
  <div>
    <div v-if="required" class="text-red-700 -mb-2">*</div>
    <input v-if="!isDropdown" class="border-2 border-[#F3F3F3] w-full px-4 py-2 outline-[#F7AF03]"
           :placeholder="placeholder" :type="type"
           @input="$emit('update:model', $event.target.value)" :required="required"/>

    <select v-else class="border-2 border-[#F3F3F3] w-full px-4 py-2 outline-[#F7AF03]"
            @input="$emit('update:model', $event.target.value)">
      <option value="" disabled selected hidden>{{ placeholder }}</option>
      <option v-for="(option, index) in options" :key="index" :value="option.value">{{ option }}</option>
    </select>
  </div>
</template>

<script>
import {defineComponent} from 'vue'
import {data} from "autoprefixer";

export default defineComponent({
  name: "CustomInput",
  computed: {
    data() {
      return data
    }
  },
  props: {
    placeholder: {
      type: String,
      default: 'Placeholder'
    },
    isDropdown: {
      type: Boolean,
      default: false
    },
    options: {
      type: Array,
      default: () => []
    },
    type: {
      type: String,
      default: 'text'
    },
    required: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
  },
  methods: {
    // setPattern(type) {
    //   console.log('type', type)
    //   if (type === 'email') return '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'
    //   if (type === 'tel') return '^[0-9]{10}$'
    //   if (type === 'number') return '^[0-9]*$'
    //   return '[A-Za-z]'
    // }
  }
})
</script>


<style lang="scss" scoped>

</style>
