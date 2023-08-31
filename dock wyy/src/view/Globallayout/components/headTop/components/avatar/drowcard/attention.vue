<template>
    <div class="down_top">
        <div class="down_item">
            <span>10</span>
            <span>动态</span>
        </div>
        <div class="down_item">
            <span>10</span>
            <span>关注</span>
        </div>
        <div class="down_item">
            <span>9999</span>
            <span>粉丝</span>
        </div>
    </div>
    <div class="Sign_in">
        <span @click="onClicksign" v-if="!isSign" class="sign">签到</span>
        <span v-else class="already_sign">已签到</span>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const isSign = ref(false)
function onClicksign() {
    isSign.value = true
}
</script>

<style lang="less" scoped>
.down_top {
    display: flex;
    justify-content: space-between;
    padding: 3vh 2.5vw;

    .down_item {
        display: flex;
        flex-direction: column;
        align-items: center;
        cursor: pointer;

        span:nth-child(1) {
            font-size: 16px;
            font-weight: 900;
            color: #000;
            margin-bottom: 2px;

        }

        span:nth-child(2) {
            font-size: 14px;
            font-weight: 400;
            color: #666;
        }
    }
}

.Sign_in {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    .sign {
        border: 1px solid #000;
        padding: 8px 28px;
        border-radius: 20px;
        font-weight: 600;
        color: #000;
    }

    .already_sign {
        border: 1px solid #ebebeb;
        padding: 8px 28px;
        border-radius: 20px;
        font-weight: 600;
        color: #999;
    }
}
</style>