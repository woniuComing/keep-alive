<template>
  <div class="clean">
    <h1>{{ msg }}</h1>
    <button @click='jump'>跳转home index子页面</button>
    <p>index子页面的input</p>
    <input type="text">
  </div>
</template>

<script>
export default {
  name: 'clean',
  data () {
    return {
      msg: 'home son clean tab'
    }
  },
  created(){
    console.log('home-son-clean--created');
  },
  mounted(){
    console.log('home-son-clean----mounted');
  },
  activated() {
    console.log('home-son-clean--activated');
  },
  deactivated(){
    console.log('home-son-clean----deactivated');
  },
  methods:{
    jump(){
      this.$router.push('/home/index');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
