<template>
    <div class="card_list_container">
        <div class="list">
            <img src="/src/assets/headTop/VIP.png" alt="">
            <span>我的会员</span>
        </div>
        <div class="list">
            <img src="/src/assets/headTop/Lv.png" alt="">
            <span>等级</span>
        </div>
        <div class="list">
            <img src="/src/assets/headTop/personnews.png" alt="">
            <span>个人信息设置</span>
        </div>
        <div class="list">
            <img src="/src/assets/headTop/quitlogin.png" alt="">
            <span>退出登录</span>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
.card_list_container {
    display: flex;
    flex-direction: column;
    margin-top: .5vh;

    .list {
        display: flex;
        align-items: center;
        padding: 2vh 2vw;
        border-bottom: 1px solid #ebebeb;

        img {
            width: 20px;
            height: 20px;
        }

        span {
            font-size: 14px;
            font-weight: 900;
            margin-left: .5vw;
        }
    }

    .list:hover {
        background-color: #ebebeb;
    }
}

.card_list_container .list:last-child {
    border-bottom: none;
}
</style>