<template>
    <div class= "CirIndex">
        <div class="cirHeader">
          <h4>逗圈</h4>
          <div class="search">
             <img  class="fd" src="../image/fd.png" alt="加载失败">
             <img class="jing" src="../image/jing.png" alt="加载失败">
          </div>
        </div>
    	<ul>
    		<li><router-link :to="{path:'/cir/recom'}">推荐</router-link></li>
      		<li><router-link :to="{path:'/cir/class'}">分类</router-link></li>
   		<li><router-link :to="{path:'/cir/join'}">加入</router-link></li>
     		<li><router-link :to="{path:'/cir/create'}">创建</router-link></li>
    	</ul>
    	<router-view></router-view>
    </div>
</template>
<script type="text/javascript">
export default {
  name:"CirIndex",
  data(){
    return{
    }
  },
}
</script>
<style scope lang=less>
.router-link-active{
  color:#5483C2;
}
.CirIndex .cirHeader{
  width: 10rem;
  height:86/75rem;
  background-color:white;
  border-bottom:1/75rem solid #999;
}
.CirIndex .cirHeader h4{
 display:inline-block;
  vertical-align: top;
  width: 4.3rem;
  height: 85/75rem; 
  line-height: 85/75rem; 
  font-size: 32/75rem;
  padding-left: 346/75rem;
  font-weight: 700;
}
.CirIndex .search{
  vertical-align: top;
  width:64/75rem;
  height: 85/75rem; 
   display:inline-block;
   position:relative;
}
.CirIndex .search .fd{
    width: 28/75rem;
    height: 28/75rem;
    position:absolute; 
    left:0;
    top:25/75rem;
}
.CirIndex .search .jing{
    width: 15/75rem;
    height: 20/75rem;
    position:absolute; 
    left:20/75rem;
    top:45/75rem;
}
.CirIndex ul{
  height:80/75rem;
  line-height:80/75rem;
  background-color: white;
}
.CirIndex ul li{
    display: inline-block;
    margin:0 58/75rem;
    font-size: 30/75rem;
    font-weight: 700;
}

</style>