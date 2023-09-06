<template>
    <div class="home_container">
      <Leftmenu/>
      <div class="right_content">
        <router-view></router-view>
      </div>
    </div>
</template>

<script setup>
import Leftmenu from '/src/view/container/components/leftmenu/leftmenu.vue'
</script>

<style lang="less" scoped>
.home_container{
  display: flex;
  height: 90vh;
  //box-shadow: 10px 0 18px #999999;
  .right_content{
    background-color: #FFFFFF;
    width: 85vw;
    padding: 30px;
    overflow-y: scroll;
  }
}
</style>
