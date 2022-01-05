<template>
  <section class="app-main">
    <router-view :key="key" v-slot="{ Component }">
      <transition name="fade-transform" mode="out-in">
        <component :is="Component"></component>
      </transition>
    </router-view>
  </section>
</template>

<script>
export default {
  name: 'AppMain'
};
</script>

<style scoped>
.app-main {
  /*50 = navbar  */
  min-height: calc(100vh - 90px);
  width: 100%;
  position: relative;
  overflow: hidden;
}
.fixed-header+.app-main {
  padding-top: 50px;
}
</style>
