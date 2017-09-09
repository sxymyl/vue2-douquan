<template>
    <div class="alls">
        <div class="cont">
            <p class="moons">04月</p>
            <div class="imgs">
                <img src="/static/img/tel.png">
                <img src="/static/img/glasses.png">
                <img src="/static/img/lang.png">
            </div>
        </div>
        <p class="moons">03月</p>
        <div class="imgs">
            <img src="/static/img/xiao.png">
            <img src="/static/img/chi.png">
            <img src="/static/img/ok.png">
        </div>
        <div class="imgs">
            <img src="/static/img/music1.png">
            <img src="/static/img/music2.png">
            <img src="/static/img/music3.png">
        </div>
    </div>
</template>
<script>
export default {
    name: 'photo',
    data() {
        return {}
    }
}
</script>
<style lang="less" scoped>
.cont {
    padding-top: 90/75rem;
}

.moons {
    color: #b6b6b6;
    padding: 0 0 0 20/75rem;
    font-size: 35/75rem;
    background: #ededed;
}
.imgs{
    background: #ededed;
}

.imgs img {
    width: 725/3/75rem;
}
</style>

