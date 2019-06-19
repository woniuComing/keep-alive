<template>
  <div class="test">
    <h1>{{ msg }}</h1>
    <input type="text">
  </div>
</template>

<script>
export default {
  name: 'Test',
  data () {
    return {
      msg: 'this is test page'
    }
  },
  created(){
    console.log('created---test')
  },
  mounted(){
    console.log('mounted---test')
  },
  activated(){
    console.log('activated---test')
  },
  deactivated(){
    console.log('deactivated---test')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
