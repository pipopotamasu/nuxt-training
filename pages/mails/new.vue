<template>
  <section class="container anonymous-mail-new">
    <target-user></target-user>
  </section>
</template>

<script>
import TargetUser from '~/components/mails/TargetUser.vue'

export default {
  components: {
    TargetUser
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  text-align: center;
}
</style>
