<script setup>
import Title from "/src/view/findmusic/components/Title.vue";
import {getAlonesend} from '/src/request/api/findmusic/index.js'
import BottomName from '/src/components/Name.vue'
import {onMounted, reactive,ref} from "vue";
const PlayList = ref([])
onMounted(()=>{
  getAlonesend().then(res=>{
    PlayList.value = res.data.result
  })
})
</script>

<template>
<Title title="独家放送"/>
  <div class="send_container">
<!--     :style="{ backgroundImage: 'url(' + item.picUrl + ')' }"-->
    <div class="alone_item_container"  v-for="item in PlayList" :key="item.id">
      <div class="alone_item"  :style="{ backgroundImage: 'url(' + item.picUrl + ')' }" >
        <img src="src/assets/findmusic/playicon.png" alt="">
      </div>
      <BottomName :widths="25" :title="item.name"/>
    </div>
  </div>
</template>

<style scoped lang="less">
.send_container{
  margin-top: 1vh;
  display: flex;
  justify-content: space-between;
  .alone_item_container{
    display: flex;
    flex-direction: column;
    .alone_item{
      width: 25vw;
      height: 20vh;
      background-color: #ebebeb;
      border-radius: 20px;
      position: relative;
      background-position: center center;
      background-size: 100% 100%;
      img{
        width: 37px;
        height: 37px;
        position: absolute;
        top: 8px;
        left: 8px;
      }
    }
  }

}
</style>
