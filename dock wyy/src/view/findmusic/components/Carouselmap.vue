<template>
  <div class="swiper_container">

    <a-carousel class="swiper" easing autoplay="true" :after-change="onChange">
      <template #prevArrow>
        <div class="custom-slick-arrow" style="left: 10px; z-index: 9999;">
          <left-circle-outlined />
        </div>
      </template>
      <template #nextArrow>
        <div class="custom-slick-arrow" style="right: 10px;z-index: 9999;" >
          <right-circle-outlined />
        </div>
      </template>
      <div v-for="(item,index) in banner" :key="index">
        <img class="image_style" :src="item.url" alt="">
      </div>
    </a-carousel>
  </div>

</template>

<script setup>
import {onMounted,ref} from 'vue'
import {getbanner} from "/src/request/api/findmusic/index.js";
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons-vue';
const onChange = (current) => {

  };
const banner = ref([])
  onMounted(() => {
      const val = {
        type: 2
      };

      getbanner(val).then(res => {
        banner.value = res.data.banners.map((item) => ({
          url: item.pic,
          id: item.targetId
        }));

      });
    })

</script>
<style scoped lang="less">
/* For demo */
:deep(.slick-slide) {
  text-align: center;
  height: 280px;
  //line-height: 160px;
  width: 500px;
  border-radius: 20px;
  //background: #364d79;
  overflow: hidden;
  .image_style{
    width: 100%;
    height: 280px;
    border-radius: 20px;
  }
}
.swiper_container{
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 5vh;
  .swiper{
    width: 50vw;
    border-radius: 20px;
  }
}

:deep(.slick-arrow.custom-slick-arrow) {
  width: 25px;
  height: 25px;
  font-size: 25px;
  color: #fff;
  background-color: rgba(31, 45, 61, 0.11);
  transition: ease all 0.3s;
  opacity: 1;
  z-index: 1;
}
:deep(.slick-arrow.custom-slick-arrow:before) {
  display: none;
}
:deep(.slick-arrow.custom-slick-arrow:hover) {
  color: #fff;
  opacity: 0.5;
}

:deep(.slick-slide h3) {
  color: #fff;
}

</style>
