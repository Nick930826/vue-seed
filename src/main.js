import { createApp } from 'vue'
import { ElButton, ElInput, ElDatePicker, ElContainer, ElAside, ElHeader, ElMain, ElFooter, ElMenu, ElMenuItem, ElSubMenu, ElIcon, ElMenuItemGroup } from 'element-plus'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from '@/router'
import requset from '@/utils/axios'

import './style.css'

const pinia = createPinia()
const app = createApp(App)
// 定义全局变量
app.config.globalProperties.$get = requset.get
app.config.globalProperties.$post = requset.post
app.config.globalProperties.$uploadPost = requset.uploadPost
app.config.globalProperties.$downloadFile = requset.downloadFile

app
  .use(ElButton)
  .use(ElInput)
  .use(ElDatePicker)
  .use(ElContainer)
  .use(ElAside)
  .use(ElHeader)
  .use(ElMain)
  .use(ElFooter)
  .use(ElMenu)
  .use(ElMenuItem)
  .use(ElSubMenu)
  .use(ElIcon)
  .use(ElMenuItemGroup)

app.use(router)
app.use(pinia)
app.mount('#app')
