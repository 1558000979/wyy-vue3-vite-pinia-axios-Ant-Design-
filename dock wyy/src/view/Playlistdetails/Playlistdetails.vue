<script setup>
import Topdetails from '/src/components/TopContainer.vue'
import List from '/src/components/PlaySongList.vue'
import Taps from '/src/components/Taps.vue'
import {onMounted, ref} from "vue";
import {useRoute} from "vue-router";

const route = useRoute()
const column = ref([
  {
    prop: 'index',
    label: '序号',
    width: '5vw'
  },
  {
    prop: 'name',
    label: '音乐标题',
    width: '20vw'
  },
  {
    prop: 'singer',
    label: '歌手',
    width: '20vw'
  },
  {
    prop: 'album',
    label: '专辑',
    width: '35vw'
  },
  {
    prop: 'time',
    label: '时长',
    width: '10vw'
  }
])
const Tap = ref([
  {
    name: '歌曲列表',
    value: 1,
    num: ''
  },
  {
    name: '评论',
    value: 2,
    num: 2880
  },
  {
    name: '收藏者',
    value: 3,
    num: ''
  }
])
const tabledata = ref([])

onMounted(() => {
  console.log(route.params, 'route.params')
})

function onMenu(val) {
  console.log(val, 'val')
}
</script>

<template>
  <Topdetails/>
  <Taps :Taps="Tap" @click="onMenu"/>
  <List :column="column" :tabledata="tabledata"/>
</template>

<style lang="less" scoped>

</style>
