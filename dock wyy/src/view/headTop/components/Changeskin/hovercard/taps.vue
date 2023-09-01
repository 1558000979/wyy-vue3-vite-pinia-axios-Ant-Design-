<template>
    <div class="Taps_container">
        <div @click="onclickItem(item.value)" :class="['Taps_item', { 'active': activeTab === item.value }]"
            v-for="item in Taps" :key="item.value">{{ item.label }}
        </div>
        <div @click="defaultclothens" class="defaults">恢复默认</div>
    </div>
</template>

<script setup>
import { ref, reactive, defineEmits } from "vue";
import { useGlobalbackground } from "/src/stores/Globalbackground.js";
const Taps = reactive([
    {
        value: 1,
        label: '主题'
    },
    {
        value: 2,
        label: '纯色'
    }
])
const activeTab = ref(1)
const emits = defineEmits(["select"]);
const useColor = useGlobalbackground()
function onclickItem(event) {
    activeTab.value = event;
    emits('select', activeTab.value)
}
function defaultclothens() {
    useColor.$reset()
}
</script>

<style lang="less" scoped>
.Taps_container {
    display: flex;
    padding: 20px;

    .Taps_item {
        padding-bottom: 3px;
        font-weight: 600;
        margin-right: 2vw;
        cursor: pointer;
    }

    .defaults {
        font-weight: 900;
        font-size: 14px;
        cursor: pointer;
    }

    .active {
        border-bottom: 2px solid red;
    }
}
</style>