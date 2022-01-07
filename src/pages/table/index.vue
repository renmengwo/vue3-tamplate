<template>
  <div>
    这是table
    {{count}}
    {{list}}
    {{obj}}
    <el-button type="primary" @click="toIindex">toIindex</el-button>
    <el-button type="primary" @click="toAdd">toAdd</el-button>
    <el-button type="primary" @click="setList">setList</el-button>
  </div>
</template>

<script>
import {useRouter, useRoute} from 'vue-router'
import {ref, reactive, watch} from 'vue'
export default {
  name: 'Index',
  setup(){
    const count = ref(0);
    const list = ref([]);
    const obj = reactive({
      a: 1,
      b: 2
    })
    const {push} = useRouter();
    const {query} = useRoute();
    const toIindex = () =>{
      push({path: '/index'})
    }
    const toAdd = () =>{
      count.value ++;
      list.value.push(1);
    }
    const setList = () =>{
      // list.value[2] = 0;
      obj.a = 3
    }
    watch(() => obj.a,(newvalue, oldvalue) =>{
      console.log(newvalue, oldvalue);
    })
    return {
      toIindex,
      toAdd,
      setList,
      list,
      obj,
      count
    }
  },
};
</script>

<style scoped>

</style>
