<template>
  <img class="user-icon" :src="icon_path" />
</template>

<script>
export default {
  props: {
    icon_path: {
      type: String,
      require: true
    }
  }
}
</script>

<style lang="scss" scoped>
.user-icon {
  border-radius: 50%;
  width: 3em;
  margin-bottom: -0.5em;
}
</style>