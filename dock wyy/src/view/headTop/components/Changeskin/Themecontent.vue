<template>
    <div class="content_container">
        <div class="color_list" v-for="item in colorlist" :key="item.id" :style="{ backgroundColor: item.color }">
            <img src="/src/assets/headTop/wyyIcon.png" alt="">
            <div class="bottom_name">{{ item.name }}</div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive } from "vue";
const colorlist = reactive([
    {
        color: '#34373f',
        id: 1,
        name: '酷炫黑'
    },
    {
        color: '#ec4141',
        id: 2,
        name: '官方红'
    },
    {
        color: '#ef9abd',
        id: 3,
        name: '可爱粉'
    },
    {
        color: '#79d1fe',
        id: 4,
        name: '天际蓝'
    },
    {
        color: '#46ac6a',
        id: 5,
        name: '清新绿'
    },
    {
        color: '#f1c98b',
        id: 6,
        name: '土豪金'
    },
])
</script>

<style lang="less" scoped>
.content_container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0 10px;

    .color_list {
        width: 90px;
        height: 90px;
        border-radius: 10px;
        margin-top: 10px;
        display: flex;
        position: relative;
        cursor: pointer;
        flex-direction: column;

        img {
            width: 50px;
            height: 50px;
            position: absolute;
            top: 25%;
            left: 20%;
        }

        .bottom_name {
            font-size: 12px;
            font-weight: 900;
            background-color: rgba(230, 230, 230, .4);
            width: 100%;
            height: 20px;
            display: flex;
            align-items: center;
            padding-left: 5px;
            position: absolute;
            top: 0%;

        }
    }
}
</style>