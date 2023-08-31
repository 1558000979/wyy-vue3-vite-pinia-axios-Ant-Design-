<template>
    <div class="Taps_container">
        <div @click="onclickItem(item.value)" :class="['Taps_item', { 'active': activeTab === item.value }]"
            v-for="item in Taps" :key="item.value">{{ item.label }}
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, defineEmits } from "vue";
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
function onclickItem(event) {
    activeTab.value = event;
    emits('select', activeTab.value)
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
    }

    .active {
        border-bottom: 2px solid red;
    }
}
</style>