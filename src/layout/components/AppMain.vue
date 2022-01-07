<template>
  <section class="app-main">
    <router-view :key="key" v-slot="{ Component }">
      <transition name="fade-transform" mode="out-in">
        <component :is="Component" :key="key"></component>
      </transition>
    </router-view>
  </section>
</template>

<script>
import {ref} from 'vue'
import {useRoute} from 'vue-router'
export default {
  name: 'AppMain',
  setup() {
    const key = ref('');
    const {path} = useRoute();
    key.value = path;
    return {key}
  }
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
