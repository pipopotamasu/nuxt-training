<template>
  <span>{{last_name + ' ' + first_name}} </span>
</template>

<script>
export default {
  props: {
    last_name: {
      type: String,
      require: true
    },
    first_name: {
      type: String,
      require: true
    }
  }
}
</script>