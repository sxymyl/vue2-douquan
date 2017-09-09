<template>
    <div class="all">
        <div class="my">我的</div>
        <div class="myindex clearfix">
            <img src="/static/img/my.png" class="via">
            <div class="monicker">
                <p>卑鄙的我</p>
                <span class="concern">关注&nbsp;&nbsp;12</span>
                <span class="noodles">粉丝&nbsp;&nbsp;12</span>
                <router-link tag='p' class="person" :to="{path:'/my/myhome'}">个人主页</router-link>
            </div>
        </div>
        <router-link tag = "p" class="msg" :to="{path:'/my/MyView/msg'}">消息提醒</router-link>
        <router-link tag = "p" class="msg" :to="{path:'/my/MyView/myshoucang'}">我的收藏</router-link>

        <router-link tag = "p" class="msg" :to="{path:'/my/MyView/mymoneys'}">我的逗币</router-link>
        <router-link tag = "p" class="msg" :to="{path:'/my/MyView/msg'}">设置</router-link> 

        <router-link tag = "p" class="msg" :to="{path:'/my/MyView/money/mymoney'}">我的逗币</router-link>
        <router-link tag = "p" class="msg" :to="{path:'/my/MyView/mydingdan/mydingdan'}">我的订单</router-link>
        <router-link tag = "p" class="msg" :to="{path:'/my/MyView/shezhi/myshezhi'}">设置</router-link>
    </div>
</template>
<script>
export default {
    name: "index",
    data() {
        return {}
    }
}
</script>
<style lang="less">
.all {
    background: #f0f0f0;
}

.my {
    height: 90/75rem;
    text-align: center;
    line-height: 90/75rem;
}

.myindex {
    height: 268/75rem;
    background: orange;
    position: relative;
}
.myindex img{
    width: 200/75rem;
}

.myindex .via {
    position: absolute;
    top: 34/75rem;
    left: 20/75rem;
}

.monicker p{
    position: absolute;
    left: 250/75rem;
    top: 83/75rem;
    height: 37/75rem;
}
.concern, .noodles, .person{
    position: absolute;
    top: 160/75rem;
    font-size: 30/75rem;
}
.concern{
    left: 260/75rem;
}
.noodles{
    left: 400/75rem;
}
.myindex .person{
    position: absolute;
    top: 122/75rem;
    left: 570/75rem;
    width: 150/75rem;
    background: url('/static/img/myindex.png') no-repeat center right;
}
.clearfix:after{
		height:0;
		content:" ";
		display:block;
		overflow:hidden;
		clear:both;
	}
.clearfix{
	zoom:1;			/*IE低版本浏览器不支持after伪类所以要加这一句*/
}
.msg{
    height: 100/75rem;
    background: white;
    margin-top: 25/75rem;
    padding-left: 20/75rem;
    line-height: 100/75rem;
    font-family: '微软雅黑';
}
</style>

