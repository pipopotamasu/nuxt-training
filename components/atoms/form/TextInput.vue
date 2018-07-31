<template>
  <input
    class="text-input"
    type="text"
    :placeholder="placeholder"
    v-model="input"
    @keyup="onKeyup(input)"/>
</template>

<script>
export default {
  data () {
    return {
      input: ''
    }
  },
  props: {
    placeholder: {
      type: String,
      required: false
    },
    onKeyup: {
      type: Function,
      required: false
    }
  }
}
</script>

<style lang="scss" scoped>
.text-input {
  width: 85%;
}
</style>