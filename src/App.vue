<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App'

};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.hello{
  &>div.tets {
    width:100px;
    height:100px;
    background:#ff0000;
  }
}
</style>
