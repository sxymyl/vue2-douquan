<template>
    <div class="all">
        <div class="money">
            <router-link :to="{path:'/my'}"><img src="/static/img/back.png"></router-link>
            <span>我的订单</span>
        </div>
        <p class="order">全部订单</p>
        <div class="list clearfix">
            <div>
                <img src="/static/img/girl.png" />
                <div class="listone clearfix">
                    <p>美女与野兽</p>
                    <p class="win">观影时间:5月3日(周三)
                    </p>
                    <p class="win">观影地点:北京传奇</p>
                </div>
                <span class="num">x2</span>
            </div>

        </div>

        <div class="list clearfix">
            <div>
                <img src="/static/img/money.png" />
                <div class="listone clearfix">
                    <p>财经天下</p>
                    <p class="win">订阅:2017年1月
                    </p>
                    <p class="win">截止:2018年1月</p>
                </div>
                <span class="num">全年</span>
            </div>

        </div>
    </div>
</template>
<script>
export default {
    name: 'order',
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

.list {
    height: 182/75rem;
    background: white;
    padding-left: 30/75rem;
    font-size: 32/75rem;
    position: relative;
    border-bottom: 1px solid #c8c8c8;
}

.list .win {
    color: #c8c8c8;
}

.list p {
    padding: 5/75rem 193/75rem;
}

.num {
    position: absolute;
    top: 70/75rem;
    right: 20/75rem;
    color: #c8c8c8;
}

.clearfix:after {
    height: 0;
    content: " ";
    display: block;
    overflow: hidden;
    clear: both;
}

.order {
    margin: 15/75rem 30/75rem;
    font-size: 22/75rem;
    color: #b9b9b9;
}

.list img {
    width: 134/75rem;
    height: 134/75rem;
    margin-top: 23/75rem;
}

.listone {
    position: absolute;
    top: 32/75rem;
}
</style>

