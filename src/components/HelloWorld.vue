<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'

defineProps<{ msg: string }>()

const count = ref(0)

const vm: any = window
const downloadExcel = () => {
  axios({
    method: 'get',
    url: '/api/web-demo01',
    responseType: 'blob'
  }).then((response)=> {
    const contentType = response.headers['content-type'];
    if (contentType == "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8") {
      let blob = new Blob([response.data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      let url = window.URL.createObjectURL(blob);
      const link = document.createElement('a'); // 创建a标签
      link.href = url;
      // link.download = 'test.xlsx';
      link.click();
      URL.revokeObjectURL(url); // 释放内存
      return
    }
  })
}
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>
  <button @click="downloadExcel">downloadExcel</button>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Learn more about IDE Support for Vue in the
    <a
      href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support"
      target="_blank"
      >Vue Docs Scaling up Guide</a
    >.
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
