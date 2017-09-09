<template>
     <div>
		 <div class="newBook">
	 	<div class="shuDi">
	 	<span>网络热游</span>
        <router-link :to="{path:'/amuse/game/gameDelivery',query:{gameType:'hotGame'}}">更多 <img src="../../../../static/img/right.png" ></router-link>
	 	</div>
            <router-link v-for="(hotGame,index) in hotGames" :key="index" :to="{path:'/amuse/game/gameDelivery/gameDetails',query:{gameMess:hotGame.name}}" tag="div" class="message" >
	 		    <div class="messLeft">
	 			<img :src="hotGame.data">
	 			</div>
                <div class="messRight">
	 			<p>{{hotGame.title}}</p>
	 			<p>评论数:{{hotGame.num}}</p>
	 			</div>
	 		</router-link>

       <router-view></router-view>
	 </div>

	  <div class="newBook">
	 	<div class="shuDi">
	 	<span>热门单机</span>
        <router-link :to="{path:'/amuse/game/gameDelivery',query:{gameType:'standAlone'}}">更多 <img src="../../../../static/img/right.png" > </router-link>
	 	</div>
            <router-link v-for="(standAlone,index) in standAlones" :key="index" :to="{path:'/amuse/game/gameDelivery/gameDetails',query:{gameMess:standAlone.name}}" tag="div" class="message" >
	 		    <div class="messLeft">
	 			<img :src="standAlone.data">
	 			</div>
                <div class="messRight">
	 			<p>{{standAlone.title}}</p>
	 			<p>评论数:{{standAlone.num}}</p>
	 			</div>
	 		</router-link>

	 </div>

	 </div>
</template>
<script type="text/javascript">
     import getUrl from '../../../utils/getUrl.js';
	 export default{
	 	name:'Vidio',
	 	data(){
	 		return{
	 			hotGames:[],
	 			standAlones:[],
	 		}
	 	},
	 	methods:{

	 	},
	 	created(){
	 		this.$axios.get(getUrl.getGame()).then(res=>{
	 			  this.hotGames=res.data.hotGame.splice(0,2);	
	 			  this.standAlones=res.data.standAlone.splice(0,2);		
	 		})
	 	}
	 }
</script>
<style lang="less" scoped>
	.newBook{background:white;margin-top:24/75rem;overflow:hidden;
       a{float:right;margin-right:26/75rem;}
       .messRight,.messLeft{
       	 font-size:25/75rem;
       	 p{margin-top:15/75rem;}
       	 p:last-child{margin-top:20/75rem;}
         img{width:304/75rem;height:182/75rem;}
       }
       .messLeft{margin-right:18/75rem;
       }
       .message{margin:30/75rem 0 41/75rem 35/75rem;overflow:hidden;float:left;width:335/75rem;}
       .shuDi{margin:45/75rem 23/75rem;
       	img{width:26/75rem;height:26/75rem;vertical-align: middle;margin-left:8/75rem;}
           a{color:#5483c2;}
         }
      }
</style>