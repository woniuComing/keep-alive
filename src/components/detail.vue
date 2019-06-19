<template>
  <div class="detail">
    <h1>{{ msg }}</h1>
    <h2>{{$route.params.name}}</h2>
  </div>
</template>

<script>
export default {
  name: 'detail',
  data () {
    return {
      msg: 'this is detail page',
    }
  },
  created(){
    console.log('created---detail')
  },
  mounted(){
    console.log('mounted---detail')
  },
  activated(){
    console.log('activated---detail')
  },
  deactivated(){
    console.log('deactivated---detail')
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
