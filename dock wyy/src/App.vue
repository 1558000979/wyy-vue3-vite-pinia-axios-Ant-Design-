<template>
  <Loadding v-show="loadding"/>
  <router-view v-show="!loadding"/>
</template>
<script setup>
import {onMounted, ref} from 'vue';

const loadding = ref(false)
import Loadding from "/src/components/Loadding.vue";

onMounted(() => {
  // 写一个计时器为3s的定时器
  loadding.value = true
  const timer = setTimeout(() => {
    loadding.value = false
  }, 500)

});


</script>
<style lang="less">
@import "assets/font/font.css";
</style>
