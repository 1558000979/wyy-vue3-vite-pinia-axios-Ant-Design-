<script setup>

</script>

<template>
<div class="Go_back">
  <img src="../../../assets/headTop/back.png">
  <img src="../../../assets/headTop/go.png">
</div>
</template>

<style scoped lang="less">
.Go_back{
  display: flex;
  width: 62px;
  justify-content: space-between;
  margin-left: 100px;
  img{
    width: 25px;
    height: 25px;
  }
}
@media (max-width:723px ) {
.Go_back{
  display: none;
}
}
</style>