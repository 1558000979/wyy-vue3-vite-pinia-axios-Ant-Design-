<script setup>
import Title from "/src/view/findmusic/components/Title.vue";
import {getmvList} from '/src/request/api/findmusic/index.js'
import BottomName from '/src/view/findmusic/components/Name.vue'
import {onMounted, ref} from "vue";

const PlayList = ref([])
onMounted(() => {
  getmvList().then(res => {
    PlayList.value = res.data.result
  })
})
</script>

<template>
  <Title title="推荐MV"/>
  <div class="send_container">
    <div v-for="item in PlayList" :key="item.id" class="alone_item_container">
      <div class="Tips">{{ item.copywriter }}</div>
      <div :style="{ backgroundImage: 'url(' + item.picUrl + ')' }" class="alone_item">
        <img alt="" src="/src/assets/findmusic/playicon.png">
      </div>
      <BottomName :title="item.name" :widths="25"/>
      <BottomName :title="item.artistName" :widths="25"/>
    </div>
  </div>
</template>

<style lang="less" scoped>
.send_container {
  margin-top: 1vh;
  display: flex;
  // justify-content: space-between;
  .alone_item_container {
    margin-right: 2vw;
    display: flex;
    flex-direction: column;
    position: relative;

    .Tips {
      display: none;
    }

    .alone_item {
      cursor: pointer;
      width: 25vw;
      height: 20vh;
      background-color: #ebebeb;
      border-radius: 20px;
      position: relative;
      background-position: center center;
      background-size: 100% 100%;

      img {
        width: 37px;
        height: 37px;
        position: absolute;
        top: 8px;
        left: 8px;
      }
    }
  }

  .alone_item_container:hover {
    .Tips {
      background-color: rgba(23, 43, 52, 0.5);
      opacity: 1;
      height: 30px;
      width: 100%;
      position: absolute;
      display: flex;
      align-items: center;
      top: 0;
      color: #FFFFFF;
      font-size: 12px;
      justify-content: center;
      border-top-left-radius: 20px;
      border-top-right-radius: 20px;
      z-index: 1;
    }
  }
}
</style>
