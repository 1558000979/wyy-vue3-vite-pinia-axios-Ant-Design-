<script setup>
const props = defineProps({
  title:{
    type:String,
    required:true
  },
  show:{
    type:Boolean,
    default:true
  }
})
</script>

<template>
  <div class="Title">
    <div>{{ title }}</div>
    <img v-if="show" src="/src/assets/findmusic/right.png">
  </div>
</template>

<style scoped lang="less">
.Title{
  display: flex;
  align-items: center;
  margin-top: 3vh;
  cursor: pointer;
  div:nth-child(1){
    font-size: 18px;
    font-weight: 900;
  }
  div:nth-child(1):hover{
    font-size: 20px;
    font-weight: 900;
  }
  img{
    width: 20px;
    height: 20px;
  }
}
</style>
