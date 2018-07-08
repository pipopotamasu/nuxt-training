<template>
  <div class="mail-topics">
    <div class="items">
      <span>Q.質問項目</span>
      <ol>
        <li>質問1</li>
        <li>質問2</li>
        <li>質問3</li>
      </ol>
    </div>
    <div class="choices">
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
.mail-topics {
  background-color: green;
  width: 100%;
  padding: 0.5em 1em;
}

.items {
  text-align: left;
}

/* リストの横並び */
.choices {
  ul {
    font-size: 0;
  }
  li {
    background-color: #00ff00;
    display: inline-block;
    font-size: 12px;
    width: 25%;
  }
}
</style>