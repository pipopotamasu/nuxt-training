<template>
  <div class="target-user">
    {{ user.first_name }}
    <span>To</span>
    <span class="user-icon">村上大和のアイコン</span>
    <span class="user-fullname">村上大和</span>
    <span class="user-sex-icon">男のアイコン</span>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      require: true
    }
  }
}
</script>

<style lang="scss">
.target-user {
  width: 100%;
  text-align: left;
  padding: 0.5em 1em;
  background-color: blue;

  span {
    padding: 0 0.25em;
  }
}
</style>