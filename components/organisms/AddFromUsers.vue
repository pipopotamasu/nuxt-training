<template>
  <div class="add-from-users">
    <search-box></search-box>
    <room-users :roomUsers="roomUsers"></room-users>
  </div>
</template>

<script>
import SearchBox from '~/components/molecules/SearchBox.vue'
import RoomUsers from '~/components/molecules/RoomUsers.vue'

export default {
  data () {
    return {
      roomUsers: [
        {
          id: 5,
          icon_path: "../icons/wakabayashi.jpg",
          last_name: "山田",
          first_name: "太郎",
          sex: 1
        },
        {
          id: 6,
          icon_path: "../icons/wakabayashi.jpg",
          last_name: "山田",
          first_name: "太郎",
          sex: 1
        },
      ]
    }
  },
  components: {
    SearchBox,
    RoomUsers
  }
}
</script>

<style lang="scss" scoped>
.add-from-users {
  background-color: gray;
  padding: 1em 1em 0 1em;
}
</style>