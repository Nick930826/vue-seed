import { defineStore } from 'pinia'

export const mainStore = defineStore('main', {
  state: () => {
    return {
      a: '我是一个全局状态按钮',
      b: '我是b'
    }
  },
  getters: {},
  actions: {
    actionChange() {
          this.a = '通过action修改'
      },
  },
})