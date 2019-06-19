<template>
  <div class="list">
    <!-- <keep-alive exclude="bbb"> -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive> 
    <!-- <router-view v-if="!$route.meta.KeepAlive"></router-view> -->
  </div>
</template>

<script>
  
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
