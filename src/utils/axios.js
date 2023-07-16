import axios from 'axios';
import { ElMessage } from 'element-plus'
import qs from 'qs'
import router from '@/router'
import config from '@/config'
const mode = import.meta.env.MODE // development | bata | production

const browerQuery = qs.parse(window.location.search) // 浏览器查询参数，JSON格式

let instance = axios.create({
  headers: {
    token: sessionStorage.getItem('token') || ''
  },
  // 开发环境下，使用 /api 作为代理路径，在vue.config.js文件下配置请求跳转的路径
  baseURL: mode === 'development' ? '/api' : config[mode].baseUrl,
  // timeout: 1000 * 30,
  // 允许跨域带token
  xhrFields: {
    withCredentials: false
  },
  crossDomain: true,
  emulateJSON: true
})
instance.interceptors.response.use(res => {
  if (typeof res.data !== 'object') {
    ElMessage.error('服务端异常！')
    return Promise.reject(res)
  }
  if (res.data.code != 200) {
    if (res.data.message && window.location.hash != '#/login') ElMessage.error(res.data.message)
    if (res.data.code == 304) {
      router.push({ path: '/login' })
    }
    // 最后通过Promise.reject抛出，前端可以通过链式调用catch捕获到错误
    return Promise.reject(res.data)
  }
  // 其他情况一律返回data数据
  return res.data
})
export default instance
export function post(url, query, noSign) {
  instance.defaults.headers['Content-Type'] = 'application/json'
  Object.keys(query).forEach(key => {
    const value = query[key]
    if(value === null || value === undefined || value == '') {
      delete query[key]
    }
  })
  return instance({
    url: url,
    method: 'post',
    data: query,
  })
}

export function get(url, query) {
  instance.defaults.headers['Content-Type'] = 'application/json'
  Object.keys(query).forEach(key => {
    const value = query[key]
    if(value === null || value === undefined || value == '') {
      delete query[key]
    }
  })
  const params = qs.stringify(query)
  let _url = url
  if (query) {
    _url = url + `?${params}`
  }
  return instance({
    url: _url,
    method: 'get'
  })
}
// 上传文件
export function uploadPost(url, query) {
  instance.defaults.headers['Content-Type'] = 'multipart/form-data'
  return instance({
    url: url,
    method: 'post',
    data: query,
  })
}
// 下载流文件
export function downloadFile(url, query) {
  instance.defaults.headers['Content-Type'] = 'application/json'
  instance.defaults.responseType = 'blob'
  const params = qs.stringify(query)
  let _url = url
  if (query) {
    _url = url + `?${params}`
  }
  
  return instance({
    url: _url,
    method: 'get'
  })
}