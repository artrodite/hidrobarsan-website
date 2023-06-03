<template>
  <div>
    <input v-if="!isDropdown" class="border-2 border-[#F3F3F3] w-full px-4 py-2 outline-[#F7AF03]"
           :placeholder="placeholder" :type="type" :pattern="setPattern(type)"
           @input="$emit('update:model', $event.target.value)"/>

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
  },
  mounted() {
    console.log('CustomInput mounted')
  },
  methods: {
    setPattern(type) {
      if (type === 'email') return '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'
      if (type === 'tel') return '^[0-9]{10}$'
      if (type === 'number') return '^[0-9]*$'
      return ''
    }
  }
})
</script>


<style lang="scss" scoped>

</style>
