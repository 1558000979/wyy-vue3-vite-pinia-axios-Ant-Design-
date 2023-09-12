<script setup>
const props = defineProps({
  widths: {
    type: Number,
    default: 12
  },
  title: {
    type: String
  },
  color: {
    type: String,
    default: '#000000'
  }
})
</script>

<template>
  <div :style="{width:widths+'vw',color:color}" class="name_container">
    <div>{{ title }}</div>
  </div>
</template>

<style lang="less" scoped>
.name_container {
  font-size: 14px;
  overflow: hidden;
  margin-top: 1vh;
}
</style>
