<template>
  <div id="app">
    <dv-full-screen-container>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <router-view />
    </dv-full-screen-container>
  </div>
</template>

<style lang="scss">
#dv-full-screen-container {
  box-sizing: border-box;
  padding: 105px 30px 0;
  background-color: #cccccc;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
