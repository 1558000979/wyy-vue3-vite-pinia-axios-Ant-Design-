<template>
    <div class="container">
        <div class="color_list" @click="onclickItem(item.color)" v-for="(item, index) in color_list" :key="index"
            :style="{ backgroundColor: item.color, borderColor: item.color === '#ffffff' ? '#999' : item.color }">
            <div class="sure" v-if="activeTab === item.color">
                <img src="/src/assets/headTop/sureselect.png" alt="">
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive, ref, onMounted } from 'vue';
import { useGlobalbackground } from "/src/stores/Globalbackground.js";
const color_list = reactive([
    {
        color: '#ffffff'
    },
    {
        color: '#ff5c8a'
    },
    {
        color: '#ff7a9e'
    },
    {
        color: '#717ff9'
    },
    {
        color: '#4791eb'
    },
    {
        color: '#39afea'
    },
    {
        color: '#2bb669'
    },
    {
        color: '#6acc19'
    },
    {
        color: '#e2ab12'
    },
    {
        color: '#ff8f57'
    },
    {
        color: '#fd726d'
    },
    {
        color: '#fd544e'
    },
])
const activeTab = ref(null)
const useColor = useGlobalbackground()
function onclickItem(event) {
    useColor.globalbackground = event
    activeTab.value = event
}
onMounted(() => {
    activeTab.value = useColor.globalbackground
})
</script>

<style lang="less" scoped>
.container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 10px;

    .color_list {
        display: flex;
        width: 50px;
        height: 50px;
        border-radius: 10px;
        border-width: 1px;
        border-style: solid;
        margin-bottom: 10px;
        position: relative;
        cursor: pointer;

        .sure {
            width: 30px;
            height: 30px;
            position: absolute;
            top: 54%;
            right: -6px;
            border: 4px solid #fff;
            border-radius: 20px;
            background-color: #fff;

            img {
                width: 20px;
                height: 20px;
            }
        }
    }
}
</style>