<template>
<div class="douContainer">
     <div class="box">
     <div class="header">
	 <span>论逗</span>
	 <img src="../../../../static/img/sou.png">
	 <div class="douNav">
	 	<ul>
	 		<li v-on:touchstart="toVidio"><router-link :to="{path:'/amuse/vidio'}" >影视</router-link></li>
	 		<li v-on:touchstart="toVidio"><router-link :to="{path:'/amuse/book'}" >书籍</router-link></li>
	 		<li v-on:touchstart="toVidio"><router-link :to="{path:'/amuse/game'}" >游戏</router-link></li>
	 		<li v-on:touchstart="toVidio"><router-link :to="{path:'/amuse/music'}">音乐</router-link></li>
	 	</ul>
	 	
	 </div>
    </div>
    </div>
    <router-view></router-view>
	
</div>
</template>
<script type="text/javascript">
     import $ from 'jquery';
	 export default{
	 	 name:'AamuseIndex',
	 	 data(){
	 	 	return {}
	 	 },
	 	 methods:{
	 	 	toVidio(event){
	 	 		$(event.target).parent().attr('class','hoverBlue').siblings().removeClass('hoverBlue');
	 	 	
	 	 	}
	 	 }
	 }
</script>
<style scoped lang="less">
      .douContainer{background:#F0F0F0;font-size:35/75rem;
      	 .box{background:white;}
      	 .header{overflow: hidden;text-align: center;font-weight: bold;padding-top:30/75rem;
      	 	width:616/75rem;margin:0 auto;
      	 	span{margin-left:75/75rem;}
      	 	img{float:right;margin-right:50/75rem;width:41/75rem;height:41/75rem;}
      	 	.douNav{margin:35/75rem  0 auto;}
      	 	.douNav ul li{display:inline-block;width:146/75rem;text-align:center;height:60/75rem;line-height:75/75rem;padding-bottom:10/75rem;}
      	 	.hoverBlue{color:#5483C2;border-bottom:10/75rem solid #5483C2;}  
      	 }
      }
</style>