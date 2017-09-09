<template>
    <div class="all">
        <div class="tishi">
            <p>您对什么感兴趣?</p>
            <p>选择想要看到的内容吧</p>
        </div>
        <div v-for="x in ind">
            <div class="xuanze">
                <p class="hua"></p>
                <p>{{x.name}}</p>
            </div>
            <div class="xiangmu">
                <span>{{x.title}}</span>
                <span>{{x.boo}}</span>
                <span>{{x.mus}}</span>
            </div>
        </div>
        <div class="cun">
            <router-link :to="{path:'/my/MyView/shezhi/myshezhi'}">选好了,&nbsp;&nbsp;&nbsp;保存</router-link>
        </div>
    </div>
</template>
<script>
export default {
    name: 'order',
    data() {
        return {
            ind: [
                {
                    name: '书影音',
                    title: '影视',
                    boo: '读书',
                    mus: '音乐'
                },
                {
                    name: '会生活',
                    title: '旅行',
                    boo: '健身',
                    mus: '时尚'
                },
                {
                    name: '看世界',
                    title: '人文',
                    boo: '科技',
                    mus: '摄影'
                },
                {
                    name: '在成长',
                    title: '故事',
                    boo: '情感',
                    mus: '成长'
                },
                {
                    name: '有意思',
                    title: '找乐',
                    boo: '宠物',
                    mus: '美女'
                },

            ]
        }
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

.tishi {
    background: white;
    text-align: center;
    height: 214/75rem;
}

.tishi p {
    color: #90aed7;
    line-height: 214/75rem;
    font-size: 45/75rem;
}

.tishi p:last-child {
    font-size: 30/75rem;
    margin-top: -160/75rem;
    color: #e7e7e7;
}

.xuanze {
    padding: 20/75rem 0 25/75rem 40/75rem;
    background: white;
    border-top: 1px solid #b8b8b8;
    color: #00a4e9;
}

.hua {
    width: 50/75rem;
    height: 50/75rem;
    background: #00a4e9;
}

.xuanze p:last-child {
    margin: 15/75rem 0 0 -25/75rem;
    display: inline-block;
}

.xiangmu {
    margin: -90/75rem 0 0 300/75rem;
    float: left;
}

.xiangmu span {
    border: 1px solid #00a4e9;
    border-radius: 20/75rem;
    padding: 5/75rem 15/75rem;
    color: #00a4e9;
}

.xiangmu span:nth-child(2),
.xiangmu span:nth-child(3) {
    color: white;
    background: #00a4e9;
}
.cun{
    background: white;
    padding: 180/75rem 0 54/75rem 0;
    text-align: center;
    font-size: 30/75rem;
    color: #00a4e9;
}
</style>

