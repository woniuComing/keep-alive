<template>
  <div class="list">
    <h1>{{ msg }}</h1>
      <ul>
        <li v-for='item in arr'>
          <a :href="'#/list/app/'+item.name">{{item.name}}</a>
        </li>
        </ul> 
        <router-view></router-view> 
  </div>
</template>

<script>
export default {
  name: 'list',
  data () {
    return {
      msg: 'this is list page',
      arr:[
        {
          name:'list1',
        },
        {
          name:'list2',
        },
        {
          name:'list3',
        }
      ]
    }
  },
  created(){
    console.log('created---list')
  },
  mounted(){
    console.log('mounted---list')
  },
  activated(){
    console.log('activated---list')
  },
  deactivated(){
    console.log('deactivated---list')
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
