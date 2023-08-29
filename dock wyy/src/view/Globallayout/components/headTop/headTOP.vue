<script setup>
import Icon from "/src/view/Globallayout/components/headTop/components/TItle.vue";
import BackorGo from "/src/view/Globallayout/components/headTop/components/BackorGo.vue";
import { ref } from 'vue'


</script>

<template>
<div class="headTop_container">
  <Icon/>
  <BackorGo/>
</div>
</template>

<style scoped lang="less">
.headTop_container{
  display: flex;
  align-items: center;
  padding: 3vh 2vw;
  background-color: #f5f5f5;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}
</style>
