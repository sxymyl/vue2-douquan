<template>
    <div class="quan">
        <div class="shang">
            <router-link :to="{path:'/my'}"><img src="/static/img/back.png"></router-link>
            <span>我的消息</span>
        </div>
        <ul>
            <li @click="msgss">
                <router-link :to="{path:'/my/MyView/msg/pinglun'}">评论</router-link>
            </li>
            <li @click="msgss">
                <router-link :to="{path:'/my/MyView/msg/sixin'}">私信</router-link>
            </li>
            <li @click="msgss">
                <router-link :to="{path:'/my/MyView/msg/tongzhi'}">通知</router-link>
            </li>
        </ul>
        <router-view></router-view>
    </div>
</template>
<script>
import $ from 'jquery';
export default {
    name: 'msg',
    data() {
        return {}
    },
    methods: {
        msgss: function (e) {
            $(e.target).parent().attr('class', "bules").siblings().removeClass('bules');
        }
    }
}
</script>
<style lang="less" scoped>
.shang {
    padding: 20/75rem 0 0 20/75rem;
    height: 100/75rem;
    background: white;
}

.shang span {
    margin-left: 260/75rem;
}
.shang img{
    width: 20/75rem;
}

ul li {
    float: left;
    width: 750/3/75rem;
    text-align: center;
    background: white;
}

.bules {
    color: #5483c2;
    border-bottom: 2px solid #5483c2;
}
</style>

