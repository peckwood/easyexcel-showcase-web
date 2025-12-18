<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'

defineProps<{ msg: string }>()

const downloadExcel = () => {
  axios({
    method: 'get',
    url: '/api/web-demo02',
    responseType: 'blob'
  }).then((response)=> {
    const contentType = response.headers['content-type'];
    if (contentType == "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8") {
      let blob = new Blob([response.data], {type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'});
      let url = window.URL.createObjectURL(blob);
      const link = document.createElement('a'); // 创建a标签
      link.href = url;
      // link.download = 'test.xlsx';
      link.click();
      URL.revokeObjectURL(url); // 释放内存
      return
    } else if (contentType.includes('application/json')) {
      response.data.text().then((result: string) => {
        const responseData = JSON.parse(result);
        if (responseData.success) {
          alert('success')
        } else {
          alert(responseData.msg);
        }
      })
      // 下载excel
    }
  })
}
</script>

<template>
  <h3>web demo 02</h3>
  <button @click="downloadExcel">downloadExcel</button>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
