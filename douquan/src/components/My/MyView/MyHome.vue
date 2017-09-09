<template>
    <div class="all">
        <div class="tags">
            <p>
                <router-link :to="{path:'/my'}"><img src="/static/img/back.png" class="back"></router-link>
            </p>
            <img src="/static/img/my.png" class="yellow">
            <div class="names">卑鄙的我</div>
            <p class="views">
                <span>关注&nbsp;12</span>
                <span>粉丝&nbsp;25</span>
            </p>
            <div class="edit">&nbsp;&nbsp;&nbsp;我的资料</div>
        </div>
        <ul>
            <li @click="hits">
                <router-link :to="{path:'/my/myhome/dynamic'}">动态</router-link>
            </li>
            <li @click="hits">
                <router-link :to="{path:'/my/myhome/photo'}">相册</router-link>
            </li>
            <li @click="hits">
                <router-link :to="{path:'/my/myhome/looks'}">关注</router-link>
            </li>
            <li @click="hits">
                <router-link :to="{path:'/my/myhome/fans'}">粉丝</router-link>
            </li>
        </ul>
        <router-view></router-view>
    </div>
</template>
<script>
import $ from 'jquery';
export default {
    name: 'myhome',
    data() {
        return {}
    },
    methods: {
        hits: function (e) {
            $(e.target).parent().attr('class', "bules").siblings().removeClass('bules');
            // e.target.parentNode.style.cssText = 'color:#5483c2; border-bottom:2px solid #5483c2; ';
        }
    }
}
</script>
<style lang = "less" scoped>
.all {
    background: white;
    height: 1293/75rem;
}

.tags {
    height: 500/75rem;
    background: url('/static/img/myhome.png');
}

.tags .yellow {
    margin-left: 280/75rem;
    width: 200/75rem;
}

.back {
    margin: 30/75rem 0 0 15/75rem;
    width: 20/75rem;
}

.names {
    margin-top: 10/75rem;
    text-align: center;
}

.tags .views {
    text-align: center;
    margin-top: 20/75rem;
}

.tags .views span:last-child {
    margin-left: 140/75rem;
}

.edit {
    text-align: center;
    margin: 20/75rem 0 0 250/75rem;
    border: 3px solid white;
    width: 250/75rem;
    height: 50/75rem;
    line-height: 50/75rem;
    background: url('/static/img/pen.png') no-repeat 20/75rem 10/75rem #cccac8;
    border-radius: 50px;
    background-size: 30/75rem; 
}

ul {
    background: white;
}

ul li {
    float: left;
    margin-top: 20/75rem;
    width: 750/4/75rem;
    text-align: center;
}

.bules {
    color: #5483c2;
    border-bottom: 2px solid #5483c2;
}
</style>

