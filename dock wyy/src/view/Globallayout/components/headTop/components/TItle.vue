<script setup>

</script>

<template>
  <div class="headTop_titlecard">
    <img src="src/assets/headTop/wyyIcon.png">
    <span>网易云音乐</span>
  </div>
</template>

<style scoped lang="less">
.headTop_titlecard{
  display: flex;
  align-items: center;
  font-family: IconName;
  img{
    width: 40px;
    height: 40px;
  }
}
@media (max-width:723px ) {
  .headTop_titlecard{
    font-size: 12px;
    img{
      width: 15px;
      height: 15px;
    }
  }
}
</style>