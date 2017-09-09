<template>
    <div class="all">
        <div class="money">
            <router-link :to="{path:'/my'}"><img src="/static/img/back.png"></router-link>
            <span>设置</span>
        </div>
        <div class="dianji">
            <router-link tag="p" class="msg" :to="{path:'/my/MyView/inter/myinter'}">兴趣标签</router-link>
            <router-link tag="p" class="msg" :to="{path:'/my/MyView/user/myusers'}">账号安全</router-link>
            <router-link tag="p" class="msg" :to="{path:'/my/MyView/blocks/myblock'}">黑名单</router-link>
            <p>清除缓存</p>
            <p>退出登录</p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'myshezhi',
    data() {
        return {}
    }
}
</script>

<style lang="less"scoped>
.money {
    height: 90/75rem;
    line-height: 90/75rem;
    font-size: 33/75rem;
    font-weight: 700;
    background: white;
    padding-left: 20/75rem;
}

.money span {
    margin-left: 260/75rem;
    font-size: 40/75rem;
}

.money img {
    width: 20/75rem;
}

.clearfix:after {
    height: 0;
    content: " ";
    display: block;
    overflow: hidden;
    clear: both;
}

.clearfix {
    zoom: 1;
    /*IE低版本浏览器不支持after伪类所以要加这一句*/
}

.dianji p {
    background: white;
    padding: 20/75rem 0 0 20/75rem;
    margin-top: 30/75rem;
    height: 80/75rem;
    line-height: 60/75rem;
}

.dianji p:last-child {
    text-align: center;
}
</style>

