<script setup>
import { ref } from 'vue'
import HeadTOP from "/src/view/headTop/headTOP.vue";
import container from "/src/view/container/container.vue";
</script>

<template>
  <div class="container">
    <HeadTOP />
    <container />
  </div>
</template>

<style scoped>
.container {
  width: 100vw;
  height: 100vh;
  background-image: url("src/assets/home/667873.png");
}
</style>
