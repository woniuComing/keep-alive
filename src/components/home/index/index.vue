<template>
  <div class="homeindex">
    <h1>{{ msg }}</h1>
    <button @click='jump'>跳转clean子页面</button>
    <input type="text">
    <p>当前值是：{{num}}</p>
  </div>
</template>

<script>
export default {
  name: 'homeIndex',
  data () {
    return {
      msg: 'home son index tab',
      num:0,
    }
  },
  created(){
    setTimeout(() => {
      this.num+=2;
    }, 1000);
    console.log('home-son-index----created');
  },
  mounted(){
    console.log('home-son-index----mounted');
  },
  activated() {
    console.log('home-son-index----activated');
  },
  deactivated(){
    console.log('home-son-index----deactivated');
  },
  methods:{
    jump(){
      this.$router.push('/home/clean')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
