<template>
  <input class="text-input" type="text" :placeholder="placeholder"/>
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
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