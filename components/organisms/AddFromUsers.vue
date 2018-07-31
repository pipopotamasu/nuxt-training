<template>
  <div class="add-from-users">
    <search-box :search="filterUsers"></search-box>
    <room-users
      :roomUsers="users"
      :fromUserIds="this.$store.getters['mail/fromUserIds']"
      :setFromUsers="user => $store.dispatch('mail/setFromUser', user)"
      :deleteFromUsers="user => $store.dispatch('mail/deleteFromUser', user)">
      </room-users>
    <button><nuxt-link to="/mails/new">戻る</nuxt-link></button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import SearchBox from '~/components/molecules/SearchBox.vue'
import RoomUsers from '~/components/molecules/RoomUsers.vue'

export default {
  data () {
    return {
      users: []
    }
  },
  components: {
    SearchBox,
    RoomUsers
  },
  computed: {
    allUsers () { return this.$store.state.room.users },
  },
  created () {
    this.users = this.allUsers
  },
  methods: {
    filterUsers (word) {
      this.users = this.$store.getters['room/filterUsers'](word)
    }
  }
}
</script>

<style lang="scss" scoped>
.add-from-users {
  background-color: gray;
  padding: 1em 1em 0 1em;
}
</style>