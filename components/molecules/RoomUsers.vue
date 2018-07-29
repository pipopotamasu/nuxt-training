<template>
  <div class="users">
    <div class="user" v-for="user in roomUsers" :key="user.id">
      <check-box class="checkbox"></check-box>
      <user-icon :icon_path="user.icon_path" class="user-element"></user-icon>
      <user-name :last_name="user.last_name" :first_name="user.first_name" class="user-element"></user-name>
    </div>
  </div>
</template>

<script>
import UserIcon from "~/components/atoms/users/UserIcon.vue"
import UserName from "~/components/atoms/users/UserName.vue"
import CheckBox from "~/components/atoms/form/CheckBox.vue"

export default {
  props: {
    roomUsers: {
      type: Array,
      required: true
    }
  },
  components: {
    UserIcon,
    UserName,
    CheckBox
  }
}
</script>

<style lang="scss" scoped>
.users {
  clear: left;
  padding-top: 0.5em;

  .user {
    border-bottom: solid 1px gray;
    padding-top: 0.5em;
    padding-bottom: 0.5em;
    margin: 0 -1em;
    background-color: white;

    .user-element {
      padding: 0 0.5em;
    }

    .checkbox {
      margin-left: 1em;
    }
  }
}
</style>