<template>
<div>
	<div class="deliveryHead">
	<router-link :to="{path:'/amuse/vidio'}"><img src="../../../../static/img/left.png"></router-link>
	<span>{{flag?'影院热映':'影院热映'}}</span>
	</div>

	<div class="deliveryContainer">
		<router-link tag="div" v-for="(hotGame,index) in hotGames" :to="{path:'/amuse/movie/movieDelivery/movieDetails',query:{movieMess:hotGame.name}}"  :key="index" >
			<img :src="hotGame.data">
            <p class="deliveryTitle">{{hotGame.title}}</p>
            <p>评论数：{{hotGame.num}}</p>
		</router-link>
	</div>
</div>	
</template>
<script type="text/javascript">
     import getUrl from '../../../utils/getUrl.js';
	 export default{
	 	 name:'movieDelivery',
	 	 data(){
	 	 	return {
	 	 		hotGames:'',
	 	 		flag:true
	 	 	}
	 	 },
	 	 methods:{

	 	 },
	 	 created(){
	 	 	 if(this.$route.query.musicType=='japanMusic'){
	 	 	 	  this.flag=false;
	 	 	 }
             this.$axios.get(getUrl.getMovie()).then(res=>{
             	  for(var i in res.data){
             	  	   if(i==this.$route.query.movieType){
             	  	   	     this.hotGames=res.data[i]
             	  	   }
             	  }
             })
	 	 }
	 }
</script>
<style lang="less" scoped>
	 .deliveryHead{background: white;font-weight:800;text-align: center;padding-top: 9/75rem;height:87/75rem;line-height:87/75rem; overflow:hidden;
        img{float:left;margin:21/75rem;width:30/75rem;height:50/75rem;}
        span{margin-right:60/75rem;}
	   }
	   .deliveryContainer{width:700/75rem;margin:0 auto;}
	   .deliveryContainer div{display: inline-block;font-size: 30/75rem;margin: 20/75rem 0 20/75rem 0;width:232/75rem;
         img{width:188/75rem;height:240/75rem;}
	   	.deliveryTitle{font-size:25/75rem;font-weight:500;}
         p{margin-top:20/75rem;}
	   	}
	
</style>