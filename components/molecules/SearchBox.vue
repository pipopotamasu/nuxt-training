<template>
  <div class="search-box">
    <search-icon></search-icon>
    <text-input
      v-model="input"
      :placeholder="'名前で検索'"
      :onKeyup="search"></text-input>
  </div>
</template>

<script>
import SearchIcon from '~/components/atoms/search/SearchIcon.vue'
import TextInput from '~/components/atoms/form/TextInput.vue'

export default {
  data () {
    return {
      input: ''
    }
  },
  props: {
    search: {
      type: Function,
      required: true
    }
  },
  components: {
    SearchIcon,
    TextInput
  }
}
</script>

<style lang="scss" scoped>
.search-box {
  background-color: white;
}
</style>