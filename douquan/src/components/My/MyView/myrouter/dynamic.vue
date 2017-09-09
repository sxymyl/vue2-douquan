<template>
    <div class="all">
        <div class="cont">
            <div class="photos" v-for="message in messages">
                <img :src="message.url">
                <div class="fun">
                    <p>{{message.name}}</p>
                    <p>{{message.title}}</p>
                    <p>{{message.guanzhu}}</p>
                </div>
                <div class="hellos">
                    <img src="/static/img/dynamic.png">
                    <p>加关注</p>
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
                    guanzhu: '@茄子味的小男神 等27人关注了她',
                    url: '/static/img/fruit.png'
                },
                {
                    name: '小野妹子',
                    title: '有个不懂得说话的男朋友是什么滋味...',
                    guanzhu: '@内涵姐 等78人关注了她',
                    url: '/static/img/ono.png'
                },
                {
                    name: '亦绿亦清新',
                    title: '在今日勇士队举办的一个活动中,勇...',
                    guanzhu: '@玫瑰花的葬礼 等54人关注了她',
                    url: '/static/img/dew.png'
                },
                {
                    name: '黄丽雅',
                    title: '张继科一切顺利 张继科要健康 张...',
                    guanzhu: '@百合花野有春天 等454人关注了她',
                    url: '/static/img/yellow.png'
                },
                {
                    name: '锅盖头司令',
                    title: '来不及看清你的面容,却模糊了你的容颜',
                    guanzhu: '@云淡风轻 等27人关注了她',
                    url: '../static/img/pot.png'
                },
                {
                    name: '水果味的少女',
                    title: '春风十里,不如直播一场,我在一直播等你',
                    guanzhu: '@茄子味的小男神 等27人关注了她',
                    url: '/static/img/ono.png'
                },
                {
                    name: '水果味的少女',
                    title: '春风十里,不如直播一场,我在一直播等你',
                    guanzhu: '@茄子味的小男神 等27人关注了她',
                    url: '/static/img/ono.png'
                }
            ]
        }
    }
}
</script>
<style lang="less" scoped>
.cont {
    padding-top: 90/75rem;
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

.hellos img {
    margin: 5/75rem 0 0 20/75rem;
    width: 50/75rem;
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

