
<script setup>
import { getCurrentInstance } from 'vue'
import { storeToRefs } from 'pinia'
import { mainStore } from '@/store'
import Page from '@/components/Page.jsx'

const store = mainStore()
const { a } = storeToRefs(store)
const proxy = getCurrentInstance().proxy
console.log('proxy', proxy.$get)
console.log('proxy', proxy.$post)

const update1 = () => {
  store.a = '修改方法1'
}
const update21 = () => {
  store.$patch({
    a: '修改方法2'
  })
}
const update22 = () => {
  store.$patch((state)=>{
    state.a = store.b
  })
}
const update3 = () => {
  store.actionChange()
}
</script>

<template>
  <Page title='首页' showBack>
    <el-main class="content">
      <div>
        <el-button>{{store.a}}</el-button>
        <el-button type="primary">{{a}}</el-button>
        <el-button type="success" @click="update1">修改方法1</el-button>
        <el-button type="info" @click="update21">修改方法2-1</el-button>
        <el-button type="warning" @click="update22">修改方法2-2</el-button>
        <el-button type="danger" @click="update3">修改方法3</el-button>
      </div>
    </el-main> 
    <el-footer class="footer">
      操作底部
    </el-footer>
  </Page>
</template>

<style lang="scss" scoped>
.content {
  flex: 1;
  padding: 0 16px;
}
.footer {
  border-top: 1px solid #e9e9e9;
  display: flex;
  align-items: center;
  padding: 0 16px;
}
</style>