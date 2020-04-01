<template>
  <div id="app">
    <app-header v-bind:title="msg"></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header.vue'
// import Login from './components/Login.vue'
// import Signup from './components/Signup.vue'

export default {
  name: 'App',
  components: {
    'app-header':Header
    // 'login':Login
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
