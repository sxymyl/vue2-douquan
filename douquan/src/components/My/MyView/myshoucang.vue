<template>
    <div class="quan">
        <div class="shang">
            <router-link :to="{path:'/my'}"><img src="/static/img/back.png"></router-link>
            <span>我的消息</span>
        </div>
        <div class="biao">
            <p>"超级渗坑"周边村民:8米深井,打上来的水都是红色的</p>
        </div>
        <div class="tu">
            <img src="/static/img/tu1.png">
            <img src="/static/img/tu2.png">
            <img src="/static/img/tu3.png">
            <p class="tongyi">网络第一红人&nbsp;&nbsp;&nbsp;6684评论&nbsp;&nbsp;24分钟前</p>
        </div>
        <div class="fubiao">
            <p>贵州选举产生出席的十九大代表,习近平全票当选</p>
            <p>男神王小二&nbsp;&nbsp;&nbsp;6684评论&nbsp;&nbsp;2天前</p>
        </div>
        <div class="sanji" v-for="j in indexx">
            <p>{{j.title}}</p>
            <img :src="j.url">
            <p>
                <span>{{j.titl}}</span>
                <span>{{j.ping}}</span>
                <span>{{j.times}}</span>
            </p>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    name: 'myshoucang',
    data() {
        return {
            indexx:{}
        }
    },
    created(){
        this.$axios.get('/indexx').then(res=>{
             console.log(res.data);
             this.indexx = res.data.indexx;
	 		})
    }
}
</script>
<style lang="less" scoped>
.shang,
.biao,
.tu {
    background: white;
}

.shang {
    padding: 20/75rem 0 0 20/75rem;
    height: 100/75rem;
    background: white;
}
.shang img{
    width: 20/75rem;
}

.shang span {
    margin-left: 260/75rem;
}

.biao {
    font-size: 32/75rem;
}

.tu img {
    margin-top: 20/75rem;
    width: 720/3/75rem;
}

.tongyi {
    font-size: 28/75rem;
    margin: 15/75rem 0 0 20/75rem;
    color: #c0c0c0;
}

.fubiao {
    font-size: 32/75rem;
    margin: 20/75rem 0 0 20/75rem;
}

.fubiao p:last-child {
    font-size: 28/75rem;
    color: #c0c0c0;
    margin: 20/75rem 90/75rem 0 0;
}

.sanji p {
    margin: 40/75rem 0 0 20/75rem;
    width: 470/75rem;
}

.sanji img {
    margin: -80/75rem 0 0 500/75rem;
    width: 280/75rem;
}

.sanji p:last-child span {
    font-size: 35/75rem;
    color: #c0c0c0;
    margin: -20/75rem 20/75rem 0 0;
}
</style>

