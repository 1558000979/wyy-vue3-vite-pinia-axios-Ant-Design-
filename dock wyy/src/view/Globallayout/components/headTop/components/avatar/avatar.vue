<template>
    <div class="avatar_container">
        <div class="img_card">
            <img src="/src/assets/headTop/touxiang.png" alt="">
        </div>
        <div>Dream</div>
        <Lv :gradeshow="userLv" />
        <img @click="contrimOpen" class="down" src="/src/assets/headTop/down.png" alt="">
        <DownCard v-if="show" />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Lv from '/src/view/Globallayout/components/headTop/components/avatar/Lv.vue'
import DownCard from '/src/view/Globallayout/components/headTop/components/avatar/drowcard/downcard.vue'
const userLv = ref(1)
const show = ref(false)
function contrimOpen() {
    show.value = !show.value
}
</script>

<style lang="less" scoped>
.avatar_container {
    display: flex;
    align-items: center;
    margin-left: 40vw;
    position: relative;

    .img_card {
        width: 40px;
        height: 40px;
        border-radius: 20px;
        border: 1px solid #333;

        img {
            width: 100%;
            height: 100%;
            border-radius: 20px;
        }
    }

    div:nth-child(2) {
        font-size: 14px;
        color: #333;
        font-weight: 600;
        margin-left: 10px;
    }

    .down {
        width: 20px;
        height: 20px;
        margin-left: 5px;
        cursor: pointer;
    }
}
</style>