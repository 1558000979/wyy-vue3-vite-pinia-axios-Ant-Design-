<template>
    <div class="content_container">
        <div class="color_list" @click="onclickItem(item.color)" v-for="item in colorlist" :key="item.id"
            :style="{ backgroundColor: item.color }">
            <img class="Image" src="/src/assets/headTop/wyyIcon.png" alt="">
            <div class="bottom_name">{{ item.name }}</div>
            <div class="sure" v-if="activeTab === item.color">
                <img src="/src/assets/headTop/sureselect.png" alt="">
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, onMounted, watch } from "vue";
import { useGlobalbackground } from "/src/stores/Globalbackground.js";
const useColor = useGlobalbackground()
const activeTab = ref(null)
// 监听pinia全局存储颜色   在恢复默认颜色时 取消选择状态
watch(useColor, (newVal) => {
    if (newVal.globalbackground === '') {
        activeTab.value = null
    }
})
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
function onclickItem(event) {
    useColor.globalbackground = event
    activeTab.value = event
}
onMounted(() => {
    activeTab.value = useColor.globalbackground
})
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

        .Image {
            width: 50px;
            height: 50px;
            position: absolute;
            top: 25%;
            left: 20%;
        }

        .sure {
            width: 30px;
            height: 30px;
            position: absolute;
            top: 72%;
            right: -5px;
            border: 4px solid #fff;
            border-radius: 20px;
            background-color: #fff;

            img {
                width: 20px;
                height: 20px;
            }
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
            color: #ebebee;
        }
    }
}
</style>