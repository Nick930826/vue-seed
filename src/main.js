import { createApp } from 'vue'
import { ElButton, ElInput, ElDatePicker, ElContainer, ElAside, ElHeader, ElMain, ElFooter, ElMenu, ElMenuItem, ElSubMenu, ElIcon, ElMenuItemGroup } from 'element-plus'
import './style.css'
import App from './App.vue'
import router from '@/router'


const app = createApp(App)
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
app.mount('#app')
