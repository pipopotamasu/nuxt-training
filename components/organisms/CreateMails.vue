<template>
  <article class="container mail-new">
    <target-user :user="targetUser"></target-user>
    <mail-topics></mail-topics>
    <reply-deadline></reply-deadline>
    <from-users></from-users>
    <mail-button></mail-button>
  </article>
</template>

<script>
import { mapState } from 'vuex'
import TargetUser from '~/components/molecules/TargetUser.vue'
import MailTopics from '~/components/mails/MailTopics.vue'
import ReplyDeadline from '~/components/mails/ReplyDeadline.vue'
import FromUsers from '~/components/mails/FromUsers.vue'
import MailButton from '~/components/mails/MailButton.vue'

export default {
  components: {
    TargetUser,
    MailTopics,
    ReplyDeadline,
    FromUsers,
    MailButton
  },
  computed: {
    targetUser () { return this.$store.state.mails.targetUser }
  },
  created () {
    // NOTE: 本来ならこの画面に遷移する前にターゲットとなるユーザを設定すべき
    this.$store.dispatch('mails/setTargetUser', {
      icon_path: "../icons/wakabayashi.jpg",
      last_name: "村上",
      first_name: "大和",
      sex: 1
    })
  }
}
</script>

<style scoped>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  text-align: center;
  flex-wrap: wrap;
}
</style>
