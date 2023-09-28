<script setup>
import Topdetails from '/src/components/TopContainer.vue'
import List from '/src/components/PlaySongList.vue'
import Taps from '/src/components/Taps.vue'
import comment from '/src/components/comment.vue'
import {onMounted, ref} from "vue";
import {useRoute} from "vue-router";
import {getListDetails, getListDetailsdynamic} from '/src/request/api/findmusic/index.js'

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
const onenuClick = ref(1)
onMounted(() => {
  // 获取歌单详情
  getListDetails({id: route.query.id}).then(res => {
    tabledata.value = res?.data?.playlist?.tracks
  })
  // 获取评论数
  getListDetailsdynamic({id: route.query.id}).then(res => {
    const tap = Tap.value
    tap[1].num = res?.data?.commentCount
  })
})

function onMenu(val) {
  onenuClick.value = val
}
</script>

<template>
  <Topdetails/>
  <Taps :Taps="Tap" @click="onMenu"/>
  <List v-show="onenuClick===1" :column="column" :tabledata="tabledata"/>
  <comment v-show="onenuClick===2"/>
</template>

<style lang="less" scoped>

</style>
