<script setup>
</script>

<template>
  <div>
    <div class="headTitle">
      <div style="float: left; margin-left: 40px">
        <span style="font-size: 21px; font-weight: bold">最近播放</span>
        &nbsp;&nbsp;&nbsp;<span
          style="color: rgb(183, 171, 163); font-size: 15px"
      >共100首</span
      >
      </div>
      <div style="float: right; margin-right: 30px">
        <span class="clearList">清空列表</span>
      </div>
    </div>
  </div>
</template>


// 这里去除了lang="less",因为css比较常用,没咋用过less
<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}

.headTitle {
  width: 100%;
  height: 85px;
  margin-top: 25px;
}

.clearList {
  font-size: 18px;
  color: rgb(80, 168, 216);
}

.clearList:hover {
  color: rgb(11, 88, 176);
}
</style>
