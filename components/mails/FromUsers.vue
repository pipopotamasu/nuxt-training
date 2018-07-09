<template>
  <div class="from-users">
    <div class="header">
      <div class="from">
        <span class="from-text">From</span>
        <span>(3/5)</span>
      </div>
      <div class="add-member">
        <span class="add-member-icon">+</span>
        <span class="add-member-text">メンバー追加</span>
      </div>
    </div>
    <div class="users">
      <div class="user current-user">
        <span class="user-icon">村上大和のアイコン</span>
        <span class="user-fullname">村上大和</span>
      </div>
      <div class="user">
        <span class="user-icon">山田太郎のアイコン</span>
        <span class="user-fullname">山田太郎</span>
        <span class="user-delete">×</span>
      </div>
      <div class="user">
        <span class="user-icon">山田太郎のアイコン</span>
        <span class="user-fullname">山田太郎</span>
        <span class="user-delete">×</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.from-users {
  width: 100%;
  text-align: left;
  padding: 0.5em 1em;
  background-color: rgb(208, 255, 0);

  .header {
    .from {
      float: left;
    }

    .add-member {
      float: right;
    }
  }

  .users {
    clear: left;
    padding-top: 0.5em;

    .user {
      border-bottom: solid 1px gray;
      padding-top: 0.5em;

      span {
        padding: 0 0.25em;
      }

      .user-delete {
        padding-left: 6em;
      }
    }
  }
}
</style>