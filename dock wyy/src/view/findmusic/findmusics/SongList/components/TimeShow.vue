<script setup>
import {useGlobalbackground} from '/src/stores/Globalbackground.js'
import {onMounted, ref} from "vue";

const day = ref(0)
const UseColor = useGlobalbackground()
onMounted(() => {
  console.log(UseColor.globalbackground)
//   获取当天日期
  let date = new Date()
  day.value = date.getDate()
})
</script>

<template>
  <div :style="{borderColor:UseColor.globalbackground==='#2b2b2b'?'red':UseColor.globalbackground}" class="time">
    <div :style="{borderColor:UseColor.globalbackground==='#2b2b2b'?'red':UseColor.globalbackground}"
         class="heng"></div>
    <div :style="{color:UseColor.globalbackground==='#2b2b2b'?'red':UseColor.globalbackground}" class="font">{{
        day
      }}
    </div>
  </div>
</template>

<style lang="less" scoped>
.Top_container {
  padding: 20px 15px;

  .top {
    display: flex;

    .time {
      width: 100px;
      height: 100px;
      border-width: 5px;
      border-radius: 20px;
      border-style: solid;
      border-color: #dcdcdc;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .heng {
        width: 80px;
        border-width: 2px;
        border-style: solid;
        border-radius: 10px;
      }

      .font {
        font-size: 45px;
        font-weight: 1000;
        padding-top: 10px;
      }
    }
  }
}
</style>
