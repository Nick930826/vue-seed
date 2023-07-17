import path from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ElementPlus from 'unplugin-element-plus/vite'
import Inspect from 'vite-plugin-inspect'
import vueJsx from "@vitejs/plugin-vue-jsx"
import config from './src/config'

// https://vitejs.dev/config/
export default ({ mode }) => defineConfig({
  server: {
    proxy: {
      '/api': {
        target: config[mode].baseUrl,
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      }
    }
  },
  publicPath: mode === 'production' ? '' : '',
  resolve: {
    alias: {
      '@': `${path.resolve(__dirname, 'src')}`,
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles/element/index.scss" as *;`,
      },
    },
  },
  plugins: [
    vue(),
    vueJsx(),
    ElementPlus({
      useSource: true,
    }),
    Inspect()
  ]
})
