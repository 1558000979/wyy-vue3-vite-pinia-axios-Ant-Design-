<script setup>
import {useRouter} from "vue-router";

const router = useRouter()

function Back() {
  router.go(-1)
}

function go() {
  router.go(1)
}
</script>

<template>
  <div class="Go_back">
    <img src="../../../assets/headTop/back.png" @click="Back">
    <img src="../../../assets/headTop/go.png" @click="go">
  </div>
</template>

<style lang="less" scoped>
.Go_back {
  display: flex;
  width: 62px;
  justify-content: space-between;
  margin-left: 100px;

  img {
    width: 25px;
    height: 25px;
    cursor: pointer;
  }
}

@media (max-width: 723px ) {
  .Go_back {
    display: none;
  }
}
</style>
