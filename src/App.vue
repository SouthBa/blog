<template>
  <div id="app">
    <HdView></HdView>
    <router-view></router-view>
    <FtView></FtView>

  </div>
</template>

<script>
import HdView from './components/HdView.vue'

import FtView from './components/FtView.vue'
export default {
  components: {
    HdView,
    FtView
  }
}
</script>

<style>
*{padding:0;margin: 0;box-sizing: border-box;}
a{text-decoration: none;}
#app{width:1000px;margin: 0 auto;box-shadow: 0 0 20px rgba(65, 184, 131, 0.5);border: 1PX solid #41B883;}
</style>
