<template>
  <div class="zheng">
    <div class="xitong" v-for="i in index">
      <div class="fen">
        <p>{{i.title}}</p>
        <span>{{i.time}}</span>
        <p class="xiao">{{i.name}}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "tongzhi",
  data() {
    return {
      index: [
        {
          title: '系统消息',
          name: '你充值的逗币已经到帐',
          time: '3-24'
        },
        {
          title: '系统消息',
          name: '@小魔女关 注了你',
          time: '3-24'
        },
        {
          title: '系统消息',
          name: '您有一张优惠卷',
          time: '3-12'
        },
      ]
    }
  }
}
</script>
<style lang="less" scoped>
.zheng {
  background: #f0f0f0;
}

.xitong {
  border-top: 1px solid #666;
  height: 108/75rem;
  padding: 40/75rem 0 0 20/75rem;
  background: white;
}
.xitong:first-child{margin-top:40/75rem;}
.xitong .xiao {
  font-size: 30/75rem;
  margin-top: 15/75rem;
  color: #b8b8b8;
}

.xitong span {
  float: right;
  margin: -20/75rem 20/75rem 0 0;
  color: #b8b8b8;
  font-size: 35/75rem;
}
</style>

