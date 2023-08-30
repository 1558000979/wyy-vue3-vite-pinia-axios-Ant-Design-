<script setup>
import {gethotlist}from '/src/request/api/headtop/index.js'
import Hotlcard from "/src/view/Globallayout/components/headTop/components/hotlcard.vue";
import { ref, computed, onMounted, onUnmounted } from 'vue';
let currentIndex = ref(0); // 当前索引
let intervalId; // 用于存储 setInterval 的 ID
const hotname = ref('初始值');
 function hotlist(){
   gethotlist().then(res=>{
    hotname.value = res.data.data.map(item=>item.searchWord)
   })
}

function startInterval() {
  intervalId = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % hotname.value.length;
  }, 5000); // 每5秒执行一次
}
const currentHotName = computed(() => {
  return hotname.value[currentIndex.value];
});

// 在组件挂载时开始循环切换值
onMounted(() => {
  hotlist();
  startInterval();
});

// 在组件卸载时清除循环
onUnmounted(() => {
  clearInterval(intervalId);
});
function onclickhotlist(){
  this.$refs.Rollcall.open()
}
</script>

<template>
<div class="search_container">
  <img src="src/assets/headTop/search.png">
  <input @click="onclickhotlist"  type="text" :placeholder=currentHotName  maxlength="18">
  <Hotlcard ref="Rollcall"/>
</div>
</template>

<style scoped lang="less">
.search_container{
  display: flex;
  align-items: center;
  font-size: 12px;
  background-color: #ebebeb;
  width: 10vw;
  height: 4vh;
  border-radius: 20px;
  padding: 0 20px;
  margin-left: 3vw;
  position: relative;
  img {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }
  input{
    /* 重置所有边框、内边距和外边距 */
    border: none;
    padding: 0;
    margin: 0;

    /* 重置背景色、文本颜色和字体样式 */
    background-color: transparent;
    color: inherit;
    font: inherit;
  }
  input:focus {
    outline: none; /* 取消点击时的外边框效果 */
  }
}
@media (max-width:723px ) {
  .search_container{
    width: 45vw;
    margin-left:18vw;
  }
}
</style>