<template>
  <flat-pickr v-model="date" @on-change="setDate"></flat-pickr>
</template>

<script>
import flatPickr from 'vue-flatpickr-component';
// FIXME: なぜかcssが適用されない...
import "flatpickr/dist/flatpickr.css";


export default {
  data () {
    return {
      date: new Date()
    }
  },
  components: {
    flatPickr
  },
  props: {
    setDate: {
      type: Function,
      required: true
    }
  }
}
</script>