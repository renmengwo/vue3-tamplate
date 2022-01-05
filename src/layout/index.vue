<template>
  <div>
    <el-container>
      <el-header style="height: 50px">Header</el-header>
      <el-container>
        <el-aside width="200px">
          Aside
        </el-aside>
        <el-main>
          <AppMain></AppMain>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { AppMain } from './components';

export default {
  name: 'Index',
  components: { AppMain }
};
</script>

<style scoped>
</style>
