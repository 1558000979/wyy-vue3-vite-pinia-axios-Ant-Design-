<script setup>
import {defineProps} from "vue";
import {useRouter} from "vue-router";

const router = useRouter()
const props = defineProps({
  PlayList: {
    type: Array
  }
})

import BottomName from "/src/view/findmusic/components/Name.vue";

function skip(val) {
  router.push({
    name: 'PlayDetail',
    params: {
      ...val
    }
  })
}

</script>

<template>

  <div v-for="(item, index) in PlayList" :key="item.id"
       class="song_container" @click="skip(item)">
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
