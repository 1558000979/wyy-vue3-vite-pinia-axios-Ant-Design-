<script setup>
import {gethotlist}from '/src/request/api/headtop/index.js'

import { onMounted,ref  } from 'vue';
const hotname = ref('初始值');
onMounted(() => {
})
 function onclickhotlist(){
   gethotlist().then(res=>{
    this.hotname = res.data.data.map(item=>item.searchWord)
     console.log( this.hotname,' this.hotname')
     console.log(res.data,'res')
   })
}
</script>

<template>
<div class="search_container">
  <img src="src/assets/headTop/search.png">
  <input @click="onclickhotlist"  type="text" placeholder="请输入"  maxlength="18">
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
</style>