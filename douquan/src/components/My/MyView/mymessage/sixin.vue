<template>
    <div class="all">
        <div class="cont">
            <div class="photos" v-for="message in messages">
                <img :src="message.url">
                <div class="fun">
                    <p>{{message.name}}</p>
                    <p>{{message.title}}</p>
                </div>
                <div class="hellos">
                    <p>{{message.times}}</p>
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
                    name: '水果味的少女',
                    title: '春风十里,不如直播一场,我在一直播等你',
                    url: '/static/img/fruit.png',
                    times: '3-24'
                },
                {
                    name: '温万妮',
                    title: '关注我就是你的人了哦...',
                    url: '/static/img/you.png',
                    times: '3-24'
                },
                {
                    name: '毒砒霜少女',
                    title: '加我微信号121212',
                    url: '/static/img/dew1.png',
                    times: '3-12'
                },
                {
                    name: '溪尾',
                    title: '若你喜欢怪人 其实我很美',
                    url: '/static/img/xi.png',
                    times: '2-24'
                },
                {
                    name: '告白',
                    title: '45152123',
                    url: '../static/img/laisn.png',
                    times: '2-14'
                },
                {
                    name: '内涵姐',
                    title: '谢谢你的关注',
                    url: '/static/img/solo.png',
                    times: '1-24'
                },
                {
                    name: '为清华',
                    title: '你知道我在等你吗',
                    url: '/static/img/qing.png',
                    times: '1-23'
                },
                {
                    name: '女流氓',
                    title: '我是逗币大咖秀',
                    url: '/static/img/mao.png',
                    times: '1-23'
                },
                {
                    name: '王尼玛',
                    title: '多多转发',
                    url: '/static/img/wang.png',
                    times: '1-23'
                },
            ]
        }
    }
}
</script>
<style lang="less" scoped>
.cont {
    padding-top: 90/75rem;
    background: white;
}

.photos {
    // background: url('../../img/fruit.png') no-repeat 20/75rem center;
    border: 1px dashed #666;
    border-left: none;
    height: 150/75rem;
}

.photos img {
    margin: 30/75rem 0 0 30/75rem;
    width: 90/75rem;
}
.hellos p{
    margin-top: 60/75rem;
}

.photos .fun {
    margin: -100/75rem 0 0 142/75rem;
}

.fun p:nth-child(3),
.fun p:nth-child(2) {
    margin-top: 10/75rem;
    font-size: 25/75rem;
    color: #666;
}

.hellos {
    float: right;
    margin: -100/75rem 40/75rem 0 0;
    font-size: 22/75rem;
}
</style>

