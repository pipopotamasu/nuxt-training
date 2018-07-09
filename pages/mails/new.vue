<template>
  <article class="container mail-new">
    <target-user></target-user>
    <mail-topics></mail-topics>
    <reply-deadline></reply-deadline>
    <from-users></from-users>
  </article>
</template>

<script>
import TargetUser from '~/components/mails/TargetUser.vue'
import MailTopics from '~/components/mails/MailTopics.vue'
import ReplyDeadline from '~/components/mails/ReplyDeadline.vue'
import FromUsers from '~/components/mails/FromUsers.vue'



export default {
  components: {
    TargetUser,
    MailTopics,
    ReplyDeadline,
    FromUsers
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
