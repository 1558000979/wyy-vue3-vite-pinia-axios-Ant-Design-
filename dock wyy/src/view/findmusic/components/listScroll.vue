<script setup>
import { onMounted, ref, onUnmounted } from 'vue'

import { throttle } from "underscore";

const props = defineProps({
  PlayList: {
    type: Array
  }
})

import BottomName from "/src/view/findmusic/components/Name.vue";

const listAttr = ref()

// 用文本记录状态，判断是在顶部还是底部，初始值给了个顶部 , bottom是底部
const status = ref('top')


const scrollContainerRef = ref()

const containerItem = ref([])

const currentOffsetLeft = ref(0)


// // 把滚动容器里的所有element都放到一个数组里面，（其实只要一个拿一次宽度就够了）
// //  { index:序号 ， el: HTML元素 }
// const getElement = (value) => {
//   containerItem.value.push({
//     index: value.getAttribute('name'),
//     el: value
//   })
// }

// const handleLeft = () => {
//   // 拿一个song_item的宽度，乘以二每次位移两个的宽度
//   const offsetLeft = containerItem.value[0].el.clientWidth
//   scrollContainerRef.value.scrollTo({
//     // 向左位移两个宽度
//     left: scrollContainerRef.value.scrollLeft - (offsetLeft * 2),
//     // 顺滑模式
//     behavior: "smooth",
//   })

//   // 每次滚动记录一下当前位置，下次在这个位置的基础上继续向左滚动
//   currentOffsetLeft.value = currentOffsetLeft.value - (offsetLeft * 2)

// }

// const handleRight = () => {
//   // 拿一个song_item的宽度，乘以二每次位移两个的宽度
//   const offsetLeft = containerItem.value[0].el.clientWidth
//   scrollContainerRef.value.scrollTo({
//     // 向右位移两个宽度
//     left: (offsetLeft * 2) + currentOffsetLeft.value,
//     // 顺滑模式
//     behavior: "smooth",
//   })

//   // 每次滚动记录一下当前位置，下次在这个位置的基础上继续向右滚动
//   currentOffsetLeft.value = currentOffsetLeft.value + (offsetLeft * 2)
// }


// const useScroll = (event) => {
//   // scrollLeft滚动容器向左滚动了的距离
//   const scrollLeft = Math.ceil(event.target.scrollLeft)
//   // 整个滚动容器可滚动的宽度
//   const scrollWidth = Math.ceil(event.target.scrollWidth)
//   // 可视窗口的大小
//   const clientWidth = Math.ceil(event.target.clientWidth)

//   // 当滚动了的距离+可视的距离==滚动容器的距离 时，说明到底了，由于使用了进一法，可能有误差(误差1左右)，所以用大于等于
//   if (scrollLeft + clientWidth >= scrollWidth) {
//     status.value = 'bottom'
//   }
//   else if (scrollLeft == 0) {
//     status.value = 'top'
//   } else {
//     status.value = 'pending'
//   }
// }



// onMounted(() => {
//   // 方便加节流，逻辑抽到useScroll了
//   scrollContainerRef.value.addEventListener('scroll', throttle((event) => useScroll(event), 200))
// })

// // 页面销毁的时候取消监听scroll
// onUnmounted(() => {
//   scrollContainerRef.value.removeEventListener("scroll")
// })



</script>

<template>
  <div class="button-group">
    <button @click="handleLeft" :disabled="status == 'top'">⬅</button>
    <button @click="handleRight" :disabled='status == "bottom"'>→</button>
  </div>
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

  .button-group {
    display: flex;
  }
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
