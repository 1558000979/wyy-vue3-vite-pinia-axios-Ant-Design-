
<template>
  <router-view />
</template>
<script setup>
import { onMounted, onBeforeUnmount } from 'vue';

onMounted(() => {
  window.addEventListener('popstate', handlePopState);
});

onBeforeUnmount(() => {
  window.removeEventListener('popstate', handlePopState);
});

function handlePopState(event) {
  // 在这里执行前进或后退操作的逻辑
  console.log('页面前进或返回', event);
}
</script>
<style lang="less">
@import "assets/font/font.css";
</style>
