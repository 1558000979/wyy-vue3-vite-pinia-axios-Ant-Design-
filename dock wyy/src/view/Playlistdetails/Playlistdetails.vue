<script setup>
import Topdetails from '/src/components/PlayListDetails.vue'
import List from '/src/components/PlaySongList.vue'
import {ref} from "vue";

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
const tabledata = ref([])
</script>

<template>
  <Topdetails/>
  <List :column="column" :tabledata="tabledata"/>
</template>

<style lang="less" scoped>

</style>
