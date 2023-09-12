<script setup>
import Title from "/src/view/findmusic/components/Title.vue";
import {getAlonesend} from '/src/request/api/findmusic/index.js'
import BottomName from '/src/view/findmusic/components/Name.vue'
import {onMounted, ref} from "vue";

const PlayList = ref([])
onMounted(() => {
  getAlonesend().then(res => {
    PlayList.value = res.data.result
  })
})
</script>

<template>
  <Title title="独家放送"/>
  <div class="send_container">
    <div v-for="item in PlayList" :key="item.id" class="alone_item_container">
      <div :style="{ backgroundImage: 'url(' + item.picUrl + ')' }" class="alone_item">
        <img alt="" src="/src/assets/findmusic/playicon.png">
      </div>
      <BottomName :title="item.name" :widths="25"/>
    </div>
  </div>
</template>

<style lang="less" scoped>
.send_container {
  margin-top: 1vh;
  display: flex;
  justify-content: space-between;

  .alone_item_container {

    display: flex;
    flex-direction: column;

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

}
</style>
