<script setup>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
</script>

<template>
  <el-menu
    default-active="2"
    class="left-menu"
    router
    background-color="#16b1b1"
    text-color="#ffffff"
    active-text-color="#ffffff"
  >
    <el-sub-menu index="1">
      <template #title>
        <el-icon><location /></el-icon>
        <span>导航一</span>
      </template>
      <el-menu-item index="/index">子导航1</el-menu-item>
      <el-sub-menu index="2">
        <template #title>子导航4</template>
        <el-menu-item index="/login">孙导航1</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-menu-item index="/home">
      <el-icon><icon-menu /></el-icon>
      <span>导航二</span>
    </el-menu-item>
    <el-menu-item index="/about">
      <el-icon><setting /></el-icon>
      <span>导航四</span>
    </el-menu-item>
  </el-menu>
</template>

<style lang="scss" scoped>
.left-menu {
  height: 100%;
  border: none;
  ::v-deep(.el-menu) {
    .is-active {
      background-color: rgb(18, 142, 142);
    }
  }

  ::v-deep(.el-menu-item) {
    &.is-active {
      background-color: rgb(18, 142, 142);
    }
  }
  
}
</style>