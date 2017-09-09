    <template>
    <div class="all">
        <div class="money">
            <router-link :to="{path:'/my'}"><img src="/static/img/back.png"></router-link>
            <span>我的逗币</span>
        </div>
        <div class="sum clearfix">
            <p>326.00</p>
            <span class="pay">充值</span>
        </div>

        <div class="list clearfix">
            <div>
                <p>电影票</p>
                <p class="win">交易成功
                    <span>-80</span>
                </p>
                <p class="win">交易时间</p>
            </div>
        </div>

        <div class="list clearfix">
            <div>
                <p>财经天下 杂志</p>
                <p class="win">交易成功
                    <span>-128</span>
                </p>
                <p class="win">交易时间</p>
            </div>
        </div>

    </div>
</template>
<script>
export default {
    name: 'MyIndex',
    data() {
        return {}
    }
}
</script>
<style lang="less" scoped>
.all {
    background: #f0f0f0;
}

.money {
    height: 90/75rem; // text-align: center;
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

.sum {
    height: 286/75rem;
    background: #c8c8c8;
    font-size: 32/75rem;
    font-weight: 700;
    text-align: center;
    position: relative;
}

.sum p {
    padding-top: 130/75rem;
}

.pay {
    top: 40/75rem;
    position: absolute;
    right: 20/75rem;
    right: 20/75rem;
}

.list {
    height: 210/75rem;
    background: white;
    margin-top: 47/75rem;
    padding: 40/75rem;
    font-size: 32/75rem;
}

.list .win {
    color: #c8c8c8;
}

.list p {
    padding: 16/75rem;
}

.win span {
    float: right;
    margin-right: -30/75rem;
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
</style>