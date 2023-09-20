<script setup>
import list from '/src/components/PlaySongList.vue'
import {column} from "/src/view/container/components/PlaySong/components/config.js";
import {usePlay} from "/src/stores/play.js";
import {ref, watch, defineEmits} from "vue";

const emit = defineEmits(['pause'])
const store = usePlay()
const tabledata = ref(store.playAll)
// 监听store的变化
watch(store, (newVal) => {
  tabledata.value = newVal.playAll
})


function deleteall() {
  store.$reset()
  emit('pause')
}
</script>

<template>
  <div class="playlist_container">
    <div class="Top_container">
      <h2>播放列表</h2>
      <div>
        <span>总{{ tabledata.length }}首</span>
        <span @click="deleteall">清空列表</span>
      </div>
    </div>
    <div class="bottom_comtainer">
      <list :column="column" :marginBottomNum="0" :tabledata="tabledata"/>
    </div>

  </div>
</template>

<style lang="less" scoped>
.playlist_container {
  width: 40vw;
  height: 60vh;
  background-color: #ffffff;
  //阴影
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  z-index: 99;
  position: absolute;
  bottom: 6vh;
  right: 0;

  .Top_container {
    padding: 20px;

    div:nth-child(2) {
      font-size: 13px;
      font-weight: bold;
      margin-bottom: 10px;
      color: #888888;
      display: flex;
      justify-content: space-between;
      align-items: center;

      span:nth-child(2) {
        cursor: pointer;
        color: #1890ff;
      }
    }
  }

  .bottom_comtainer {
    height: 80%;
    width: 100%;
    overflow: auto;
  }

  //  修改滚动条颜色
  .bottom_comtainer::-webkit-scrollbar {
    width: 2px;
  }

  .bottom_comtainer::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #e0e0e0;
  }

  .bottom_comtainer::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: #ffffff;
  }
}
</style>
