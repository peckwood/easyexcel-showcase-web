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
  </div> <
  <button @click="downloadExcel">downloadExcel</button>

</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
