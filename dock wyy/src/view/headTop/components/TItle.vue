<script setup>
import { useGlobalbackground } from "/src/stores/Globalbackground.js";
const useColor = useGlobalbackground()
</script>

<template>
  <div class="headTop_titlecard">
    <img src="../../../assets/headTop/wyyIcon.png">
    <span :style="{ color: useColor.globalbackground === '#ffffff' ? '#3d3d3d' : '#ffffff' }">网易云音乐</span>
  </div>
</template>

<style scoped lang="less">
.headTop_titlecard {
  display: flex;
  align-items: center;
  font-family: IconName;
  color: #fff;
  width: 132px;

  img {
    width: 40px;
    height: 40px;
  }

  span {
    font-weight: 900;
    font-size: 18px;
  }
}

@media (max-width:723px) {
  .headTop_titlecard {
    font-size: 12px;

    img {
      width: 15px;
      height: 15px;
    }
  }
}
</style>