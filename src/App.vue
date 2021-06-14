<template>
  <header>
    <div>Check.split</div>
  </header>
  <main>
    <router-view />
  </main>
  <footer>
    <a href="#/people"> <i class="material-icons">people</i>Люди</a>
    <a href="#/receipt"> <i class="material-icons">article</i>Чеки</a>
    <a href="#/result"
      ><i class="material-icons">account_balance_wallet</i>Итог</a
    >
  </footer>
</template>

<script>
// export default {
//   data(): {
//     return{
//     showModal: false
//   }
// }
</script>

<style>
* {
  font-family: "Roboto";
  -webkit-tap-highlight-color: transparent !important;
  user-select: none;
  box-sizing: border-box;
}
body {
  margin: 0;
}
#app {
  display: grid;
  grid-template: 56px calc(100% - 104px) 48px/100%;
  background: #dde4ec;
  height: 100vh;
  overflow: hidden;
}

header {
  background: black;
  color: white;
  font-size: 1.5rem;
  align-items: center;
  display: flex;
  padding: 10px;
}

footer {
  background: black;
  display: flex;
  justify-content: space-around;
}

footer a {
  color: white;
  display: grid;
  align-content: center;
  justify-items: center;
  text-decoration: blink;
  font-size: 0.7rem;
  width: 100%;
}
</style>
