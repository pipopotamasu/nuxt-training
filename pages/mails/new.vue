<template>
  <article class="container mail-new">
    {{hoge}}
    <target-user></target-user>
    <mail-topics></mail-topics>
    <reply-deadline></reply-deadline>
    <from-users></from-users>
    <mail-button></mail-button>
  </article>
</template>

<script>
import { mapMutations } from 'vuex'
import TargetUser from '~/components/mails/TargetUser.vue'
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
    hoge () { return this.$store.state.mails.hoge }
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  text-align: center;
  flex-wrap: wrap;
}
</style>
