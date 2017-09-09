<template>
  <div class="topic">
     <div class="header">
     	<input type="text">
     	<div class="search">
             <img  class="fd" src="../img/ss6.png" alt="加载失败">
             <img class="jing" src="../img/ss5png.png" alt="加载失败">
          </div>
     </div>
     <div class="topic_nav">
     	<ul class="navs" >
     		<li>
     		<router-link :to="{path:'/t_advice'}">推荐</router-link>
     		</li>
     		<li>
     		<router-link :to="{path:'/t_expert'}">圈子达人</router-link>
     		</li>
     		<li>
     		<router-link :to="{path:'/t_sift'}">论逗精选</router-link>
     		</li>
     		<li>
     		<router-link :to="{path:'/t_slot'}">今日槽点</router-link>
     		</li>
     	</ul>
     </div>
     <router-view></router-view>
  </div>
</template>

<script  type="text/javascript">
export default {
  name:"topic",
  data(){
    return{

    }
  },
  methods:{
  	glue:function(event){
  	    $(event.target).attr('class','hoverBlue').siblings().removeClass('hoverBlue');
  	}
  }


}
</script>
<style scope lang=less>
    .router-link-active{
      color:#5483C2;
    }
	.topic{
		width: 100%;
		background: #5483C2;
		height: 90/75rem;
		line-height: 90/75rem;
		font-size: 28/75rem;

	}
	.topic input{
		width: 650/75rem;
		height: 60/75rem;
		margin-left:50/75rem;
		border-radius: 10/75rem;
		font-size: 20/75rem;

	}
	.topic_nav{
		width: 100%;
		background: white;
		text-align: center;


	}
	.topic_nav .navs{
		margin-left: 52/75rem;
	    height: 100/75rem;
	}
	.topic_nav .navs li{
		display: inline-block;
		margin-right: 60/75rem;
		font-weight: 700;
		font-size: 28/75rem;
	}
	.topic_nav .navs li a{
		padding-bottom: 30/75rem;
	}
	.topic_nav .navs .hoverBlue{
		color:#5483C2;border-bottom:10/75rem solid #5483C2;
	}
	.header{
		position:relative;
	}
	.header .search{
		position: absolute;
		width:64/75rem;
 		height: 85/75rem; 
		left:638/75rem;
		top:5/75rem;
	}
	.header .search img{
		width: 29/75rem;
	}
	.header .search .jing{
	    position:absolute; 
	    left:22/75rem;
	    top:48/75rem;
	    width: 16/75rem;
	    height: 20/75rem;
	}

</style>
