<template>
  <article class="container mail-new">
    <target-user></target-user>
    <mail-topics></mail-topics>
  </article>
</template>

<script>
import TargetUser from '~/components/mails/TargetUser.vue'
import MailTopics from '~/components/mails/MailTopics.vue'

export default {
  components: {
    TargetUser,
    MailTopics
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
