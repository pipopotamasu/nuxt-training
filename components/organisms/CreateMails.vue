<template>
  <article class="container mail-new">
    <target-user
      :user="targetUser"
    ></target-user>
    <mail-topics
      :topics="topics"
      :toggle="i => $store.dispatch('mails/toggleActivation', i)"
    ></mail-topics>
    <reply-deadline
      :setDate="date => $store.dispatch('mails/setReplyDeadlineDate', date[0])"
    ></reply-deadline>
    <from-users
      :currentUser="currentUser"
      :fromUsers="fromUsers"
      :deleteFromUser="user => $store.dispatch('mails/deleteFromUser', user)"
    ></from-users>
    <mail-button></mail-button>
  </article>
</template>

<script>
import { mapState } from 'vuex'
import TargetUser from '~/components/molecules/TargetUser.vue'
import MailTopics from '~/components/molecules/MailTopics.vue'
import ReplyDeadline from '~/components/molecules/ReplyDeadline.vue'
import FromUsers from '~/components/molecules/FromUsers.vue'
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
    targetUser () { return this.$store.state.mails.targetUser },
    topics () { return this.$store.state.mails.topics },
    currentUser () { return this.$store.state.user.currentUser },
    fromUsers () { return this.$store.state.mails.fromUsers },
  },
  created () {
    // NOTE: 本来ならこの画面に遷移する前にターゲットとなるユーザを設定すべき
    this.$store.dispatch('mails/setTargetUser', {
      id: 4,
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
