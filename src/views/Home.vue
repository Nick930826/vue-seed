
<script setup>
import { getCurrentInstance } from 'vue'
import Page from '@/components/Page.jsx'
const proxy = getCurrentInstance().proxy
console.log('proxy', proxy.$http.get)
console.log('proxy', proxy.$http.post)
</script>

<template>
  <Page title='首页'>
    <el-main class="content">
      <div>我是Home我是Home我是Home我是Home我是Home我是Home我是Home我是Home我是Home我是Home我是Home我是Home我是Home</div>
    </el-main> 
    <el-footer class="footer">
      操作底部
    </el-footer>
  </Page>
</template>

<style lang="scss" scoped>
.content {
  flex: 1;
  padding: 10px;
}
.footer {
  border-top: 1px solid #e9e9e9;
  display: flex;
  align-items: center;
  padding: 10px;
}
</style>