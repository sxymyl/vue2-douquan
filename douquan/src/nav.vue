<template>
    <router-view></router-view>
    <ul class="nav">
      <li ><router-link :to="{path:'/'}">
           <img src="./components/Circle/image/zhuye.png" alt=""><br>
            <span >首页</span> 
      </router-link>
      </li >
      <li ><router-link :to="{path:'/cir'}">
          <img src="./components/Circle/image/quan.png" alt=""><br>
          <span> 逗圈</span>
        </router-link>
      </li>
      <li ><router-link :to="{path:'/amuse'}">
            <img src="./components/Circle/image/sytj7.png" alt=""><br>
            <span>论逗</span>
      </router-link></li>
      <li ><router-link :to="{path:'/my'}">
            <img src="./components/Circle/image/sytj9.png" alt=""><br>
            <span>我的</span>
      </router-link></li>
    </ul>
</template>

<script>

export default {
  name: 'nav',
  data(){
    return {}
  },
}

</script>

<style scope lang=less>
.router-link-active{
  color:#5483C2;
}	
</style>