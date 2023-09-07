<script setup>
const props = defineProps({
  widths:{
    type:Number,
    default:12
  },
  title:{
    type:String
  }
})
</script>

<template>
  <div class="name_container" :style="{width:widths+'vw'}">
    <div >{{title}}</div>
  </div>
</template>

<style scoped lang="less">
.name_container{
  font-size: 14px;
  overflow: hidden;
  margin-top: 1vh;
}
</style>
