

<template>
<div class="title">热搜榜</div>
  <div class="list_container">
    <div class="hot_list" v-for="(item,index) in hotList" :key="index">
      <div  :class="index+1>3?'rank_second':'rank'">{{index+1}}</div>
      <div class="content">
        <div class="content_top">
          <div>{{item.searchWord}}</div>
          <div v-show="item.iconUrl !==null">Hot</div>
          <div>{{ item.score }}</div>
        </div>
        <div class="content_bottom">{{ item.content }}</div>
      </div>
    </div>
  </div>
</template>
<script setup>
import {gethotlist}from '/src/request/api/headtop/index.js'
import {onMounted, ref} from "vue";
const hotList = ref()
onMounted(() => {
  hotlist();
});
function hotlist(){
  gethotlist().then(res=>{
    hotList.value = res.data.data
  })
}
</script>
<style scoped lang="less">
.title{
  font-size: 14px;
  color: #999;
  font-weight: 600;
  margin-top: 20px;
  margin: 20px 1vw 0 1vw;
}
.list_container{
  display: flex;
  flex-direction: column;
  .hot_list{
    display: flex;
    align-items: center;
    margin-top: 20px;
    cursor: pointer;
    .rank{
     color: red;
      margin-right: 30px;
      font-size: 18px;
      margin:0 1vw;
    }
    .rank_second{
      margin-right: 30px;
      font-size: 18px;
      font-weight: 600;
      color: #999999;
      margin:0 1vw;
    }
    .content{
      display: flex;
      flex-direction: column;
      .content_top{
        display: flex;
        margin-bottom: 15px;
        div:nth-child(1){
          color: #333;
          font-weight: 600;
          margin-right: 10px;
        }
        div:nth-child(2){
          color: red;
          font-weight: 600;
          margin-right: 10px;
          font-style: italic;
        }
        div:nth-child(3){
          color: #999;
          font-weight: 600;
        }
      }
      .content_bottom{
        font-size: 14px;
        color: #999;
        font-weight: 600;
      }
    }
  }
}
.hot_list:hover{
  background-color: #f2f2f2;
}
@media (max-width:723px ){
  .list_container .hot_list .content {
    margin-left: 30px;
  }
}
</style>