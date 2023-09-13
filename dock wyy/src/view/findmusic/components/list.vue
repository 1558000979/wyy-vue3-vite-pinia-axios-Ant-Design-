<script setup>
import { onMounted, ref } from 'vue'

const props = defineProps({
  PlayList: {
    type: Array
  }
})

import BottomName from "/src/view/findmusic/components/Name.vue";

const listAttr = ref()


const scrollContainerRef = ref()

const containerItem = ref({})

const currentOffsetLeft = ref(0)


// const getElement = (value) => {
//   listAttr[value.getAttribute('name')] = [value][0].clientWidth
//   console.log(listAttr,'getElement');
//   return 
// }

const getElement = (value) => {
  containerItem[value.getAttribute("name")] = value.clientWidth

}

const handleLeft = () => {
  console.log('handleLeft')
  scrollContainerRef.value.scrollTo({
    left: (containerItem['0'] * 2) + currentOffsetLeft.value,
    behavior: "smooth",
  })
  currentOffsetLeft.value = currentOffsetLeft.value + (containerItem['0'] * 2)
}

</script>

<template>
  <button @click="handleLeft">→</button>
  <!-- 滚动容器 -->
  <div class="scrollContainer" ref="scrollContainerRef">
    <div v-for="(item, index) in PlayList" :key="item.id" :ref="getElement" :name="String(index)" class="song_container">
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
      <BottomName :title="item.name" :widths="12" />
    </div>
  </div>
</template>

<style lang="less" scoped>
.scrollContainer {
  display: flex;
  overflow-x: auto;
}

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
