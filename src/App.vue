<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <main-tab-bar/>
    <router-view/>
  </div>
</template>

<script>
import MainTabBar from './components/content/mainTabBar/MainTabBar.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
    MainTabBar
  }
}
</script>

<style>
@import "./assets/css/base.css";
</style>
