<script setup>
import {onMounted, ref} from 'vue'

const props = defineProps({
  PlayList: {
    type: Array
  }
})

import BottomName from "/src/view/findmusic/components/Name.vue";

const listAttr = ref()



 
    // const getElement = (value) => {
    //   listAttr[value.getAttribute('name')] = [value][0].clientWidth
    //   console.log(listAttr,'getElement');
    //   return 
    // }
  

    function scrollChange(event){
      const container = event.target;     // 获取滚动容器元素
      console.log(container.scrollHeight,'container.scrollHeight');
      const isScrolledToBottom = container.scrollHeight - container.scrollTop === container.clientHeight;
}

</script>

<template>
  <div v-for="(item, index) in PlayList"  @mousewheel="scrollChange" :key="item.id" :ref="getElement" :name="String(index)" class="song_container">
    <div :style="{ backgroundImage: 'url(' + item.picUrl + ')' }" class="song_item">
      <div class="count">
        <img alt="" src="/src/assets/findmusic/count.png">
        <span>{{
            item.playCount > 100000000 ? (Math.floor(item.playCount / 100000000) + '亿') : (item.playCount > 10000 ?
                (Math.floor(item.playCount / 10000) + '万') : item.playCount)
          }}</span>
      </div>
      <img alt="" src="/src/assets/findmusic/play.png">
    </div>
    <BottomName :title="item.name" :widths="12"/>
  </div>
</template>

<style lang="less" scoped>
.song_container {
  margin: 2vh 0 1vh 0;

  .song_item {
    display: flex;
    cursor: pointer;
    width: 12vw;
    height: 21vh;
    border-radius: 10px;
    position: relative;
    margin-bottom: 1vh;
    background-position: center center;
    margin-right: 1vw;

    .count {
      display: flex;
      position: absolute;
      top: 5px;
      right: 10px;
      align-items: center;

      img {
        width: 15px;
        height: 15px;
        margin-right: 10px;
      }

      span {
        color: #FFFFFF;
      }
    }

    img:nth-child(2) {
      display: none;
    }
  }

  .name_container {
    font-size: 14px;
    width: 12vw;
    overflow: hidden;

  }

}

.song_container:hover {
  img:nth-child(2) {
    display: flex;
    width: 35px;
    height: 35px;
    position: absolute;
    bottom: 10px;
    right: 10px;
  }
}
</style>
