<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-link to='/home'>首页</router-link>
    <router-link to='/test'>test 页面</router-link>
    <router-link to='/list/index'>列表页面</router-link>
    <router-link to='/list/app/list5'>详情页面5</router-link>
    <!-- <keep-alive exclude='Test'>
      <router-view></router-view>
    </keep-alive> -->
    <keep-alive>
      <router-view v-if="$route.meta.KeepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.KeepAlive"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
   created(){
    console.log('layout---created');
    console.log(this.$route,this.$route.meta,this.$route.meta.KeepAlive);
  },
  mounted(){
    console.log('layout-----mounted');
  },
  activated() {
    console.log('layout---activated');
  },
  deactivated(){
    console.log('layout-----deactivated');
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
