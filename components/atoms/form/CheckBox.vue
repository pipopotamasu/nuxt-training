<template>
  <input class="text-input" type="checkbox" @change="onChange" :checked="checked"/>
</template>

<script>
export default {
  props: {
    onChange: {
      type: Function,
      required: false
    },
    checked: {
      type: Boolean,
      required: false
    }
  }
}
</script>