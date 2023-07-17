<script setup>
import { ElConfigProvider } from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import Header from '@/components/Header.vue'
import LeftMenu from '@/components/LeftMenu.vue'
</script>

<template>
  <el-config-provider :locale="zhCn">
    <div class="custom-layout">
      <el-container class="wrap-container">
        <el-aside class="custom-aside">
          <LeftMenu />
        </el-aside>
        <el-container class="inside-container">
          <el-header class="custom-header">
            <Header />
          </el-header>
          <el-main class="custom-main">
            <router-view />
          </el-main>
        </el-container>
      </el-container>
    </div>
  </el-config-provider>
</template>

<style lang="scss">
  .custom-layout {
    height: 100%;
    .wrap-container {
      height: 100%;
      .custom-aside {
        width: 200px;
      }
      .inside-container {
        .custom-header {
          display: flex;
          align-items: center;
          padding: 0 16px;
          border-bottom: 1px solid #e9e9e9;
        }
        .custom-main {
        }
      }
    }
  }
</style>
