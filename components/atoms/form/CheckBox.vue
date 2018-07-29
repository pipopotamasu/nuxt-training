<template>
  <input class="text-input" type="checkbox" @change="onChange"/>
</template>

<script>
export default {
  props: {
    onChange: {
      type: Function,
      required: false
    }
  }
}
</script>