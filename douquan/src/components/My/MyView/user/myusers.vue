<template>
    <div class="quan">
        <div class="money">
            <router-link :to="{path:'/my/MyView/shezhi/myshezhi'}"><img src="/static/img/back.png"></router-link>
            <span>账号安全</span>
        </div>
        <div class="userss" v-for="x in inde">
            <p>{{x.name}}</p>
            <p>{{x.title}}</p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'user',
    data() {
        return {
            inde: [
                {
                    name: '逗趣账号'
                },
                {
                    name: '邮箱',
                    title: '绑定邮箱'
                },
                {
                    name: '手机',
                    title: '13699140229'
                },
                {
                    name: '账号密码',
                    title: '修改密码'
                },
                {
                    name: '社交账号'
                },
                {
                    name: '新浪微博',
                    title: '尚未绑定'
                },
                {
                    name: 'QQ',
                    title: '尚未绑定'
                },
                {
                    name: '微信',
                    title: '尚未绑定'
                }
            ]
        }
    }
}
</script>

<style lang="less" scoped>
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

.userss {
    background: white;
    height: 70/75rem;
    padding: 30/75rem 0 30/75rem 20/75rem;
}

.userss:nth-child(2),
.userss:nth-child(6) {
    border-top: 1px solid #666;
}

.userss p:last-child {
    margin-top: 10/75rem;
    font-size: 30/75rem;
}
</style>

