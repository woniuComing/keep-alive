<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!-- <router-view></router-view> -->
    <keep-alive>
        <router-view v-if="$route.meta.KeepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.KeepAlive"></router-view>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created(){
    console.log('home---created');
  },
  mounted(){
    console.log('home-----mounted');
  },
  activated() {
    console.log('home---activated');
  },
  deactivated(){
    console.log('home-----deactivated');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
