<template>
    <div class="slide-box">
        <div class="banner-box"></div>
        <button class="slide-left-btn material-icons">arrow_back_ios</button>
        <button class="slide-right-btn material-icons">arrow_forward_ios</button>
        <div class="pagination-box"></div>
    </div>
</template>

<script setup>
import Slide from "./config";
import { onMounted } from "vue";
onMounted(() => {
    new Slide().init();
})
</script>

<style lang="less" scoped>
@import "/src/view/findmusic/components/config/index.css";
</style>