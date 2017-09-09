<template>
    <div class="all">
        <div class="money">
            <router-link :to="{path:'/my/MyView/shezhi/myshezhi'}"><img src="/static/img/back.png"></router-link>
            <span>黑名单</span>
        </div>
        <div class="cont">
            <div class="photos" v-for="message in messages">
                <img :src="message.url">
                <div class="fun">
                    <p>{{message.name}}</p>
                </div>
                <div class="hellos">
                    <p>{{message.ties}}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'dynamic',
    data() {
        return {
            messages: [
                {
                    name: '小丸子',
                    url: '/static/img/fruit.png',
                    ties: '解除'
                },
                {
                    name: '狗剩',
                    url: '/static/img/you.png',
                    ties: '解除'
                },
                {
                    name: '污污妹',
                    url: '/static/img/dew1.png',
                    ties: '解除'
                }
            ]
        }
    }
}
</script>
<style lang="less" scoped>
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

.photos {
    border: 1px dashed #666;
    border-left: none;
    height: 120/75rem;
    background: white;
}

.photos img {
    margin: 17/75rem 0 0 30/75rem;
    width: 95/75rem;
}

.photos .fun {
    margin: -100/75rem 0 0 142/75rem;
}

.fun {
    padding-top: 10/75rem;
}
.fun p{
    margin: 10/75rem 0 0 10/75rem;
}

.hellos {
    float: right;
    margin: -100/75rem 40/75rem 0 0;
    font-size: 22/75rem;
}

.hellos p {
    margin-top: 60/75rem;
    font-size: 30/75rem;
    border: 1px solid black;
    padding: 5/75rem 20/75rem;
}
</style>

