<script setup>
import {ref} from "vue";

const show = ref(false)
// const hotCard = defineProps({
//   show:{
//     type:Boolean,
//     default:true,
//     required:true
//   }
// })
function open(){
  show.value = true
}
function closed(){
  show.value = false
}
</script>

<template>
<div v-if="show" class="hotlist_container"></div>
</template>

<style scoped lang="less">
.hotlist_container{
  position: absolute;
  top: 133%;
  left: -62%;
  width: 21vw;
  height: 61vh;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}
</style>