<template>
  <div class="search-box">
    <search-icon></search-icon>
    <text-input :placeholder="'名前で検索'"></text-input>
  </div>
</template>

<script>
import SearchIcon from '~/components/atoms/search/SearchIcon.vue'
import TextInput from '~/components/atoms/form/TextInput.vue'

export default {
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