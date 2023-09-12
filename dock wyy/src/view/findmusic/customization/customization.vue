<script setup>
import {onMounted, onUpdated, ref} from "vue";
import {getPlayList} from "/src/request/api/findmusic/index.js";
import Title from "/src/view/findmusic/components/Title.vue";
import Bottname from '/src/view/findmusic/components/Name.vue'
// import {LeftCircleOutlined, RightCircleOutlined} from '@ant-design/icons-vue';
import List from '/src/view/findmusic/components/list.vue'
const limit = ref(24)
const PlayList = ref()

onMounted(()=>{
  getPlayListsong()
})
function getPlayListsong() {
  limit.value++
  let val = {
    limit: limit.value
  }

  getPlayList(val).then(res => {
    PlayList.value = res?.data.result
  })
}
function scrollChange(e){
  console.log(e,'e');
}
</script>

<template>
  <Title :show="false" title="Dream的雷达歌单"/>
  <Bottname :widths="14" color="#999999" title="根据你的红心收藏为你推荐更多宝藏歌曲"/>
  <div class="swiper">

    <List   @mousewheel="scrollChange" :PlayList="PlayList"/>
  </div>

</template>

<style lang="less" scoped>
.swiper {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>
