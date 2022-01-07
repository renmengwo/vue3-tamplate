<template>
  <div>
    <el-container>
      <el-header class="header-box">Header</el-header>
      <el-container>
        <el-aside width="200px">
          <Sidebar></Sidebar>
        </el-aside>
        <el-main>
          <AppMain></AppMain>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { AppMain, Sidebar } from './components';

export default {
  name: 'Index',
  components: { AppMain, Sidebar }
};
</script>

<style scoped lang="scss">
.header-box{
  height:50px;
  background:#20a0ff;
}
</style>
