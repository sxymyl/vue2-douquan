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
    name: 'fans',
    data() {
        return {
            messages: [
                {
                    name: '帅帅的国王',
                    title: '总有一首歌,一个人,让你时而仰天沉默, ...',
                    guanzhu: '@番茄酱 等65人关注了她',
                    url: '/static/img/king.png'
                },
                {
                    name: '王小二',
                    title: '懂得珍惜,才配拥有,遇上就已经是荣幸,...',
                    guanzhu: '@非洲人 等78人关注了她',
                    url: '/static/img/too.png'
                },
                {
                    name: '默默滴考拉',
                    title: '你喜欢的人,应该是你的动力,而不是你的...',
                    guanzhu: '@逗逼的小羊羊 等75人关注了她',
                    url: '/static/img/koa.png'
                },
                {
                    name: '古月堂',
                    title: '有些人认为,人应该充满境界高尚的思想...',
                    guanzhu: '@百合花野有春天 等454人关注了她',
                    url: '/static/img/moon.png'
                },
                {
                    name: '李玲玲',
                    title: '这种农民在中国有九亿,多一个,...',
                    guanzhu: '@云淡风轻 等27人关注了她',
                    url: '../static/img/zero.png'
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

