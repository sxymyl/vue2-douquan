<template>
     <div>
		 <div class="newBook">
	 	<div class="shuDi">
	 	<span>影院热映</span>
        <router-link :to="{path:'/amuse/movie/movieDelivery',query:{movieType:'received'}}">更多 <img src="../../../../static/img/right.png" ></router-link>
	 	</div>
            <router-link v-for="(hotMovie,index) in hotMovies" :key="index" :to="{path:'/amuse/movie/movieDelivery/movieDetails',query:{movieMess:hotMovie.name}}" tag="div" class="message" >
	 		    <div class="messLeft">
	 			<img :src="hotMovie.data">
	 			</div>
                <div class="messRight">
	 			<p>{{hotMovie.title}}</p>
	 			<p>评论数:{{hotMovie.num}}</p>
	 			</div>
	 		</router-link>

       <router-view></router-view>
	 </div>

	  <div class="newBook">
	 	<div class="shuDi">
	 	<span>即将上映</span>
        <router-link :to="{path:'/amuse/game/gameDelivery',query:{movieType:'received'}}">更多 <img src="../../../../static/img/right.png" > </router-link>
	 	</div>
            <router-link v-for="(soonMovie,index) in soonMovies" :key="index" :to="{path:'/amuse/movie/movieDelivery/movieDetails',query:{movieMess:soonMovie.name}}" tag="div" class="message" >
	 		    <div class="messLeft">
	 			<img :src="soonMovie.data">
	 			</div>
                <div class="messRight">
	 			<p>{{soonMovie.title}}</p>
	 			<p>评论数:{{soonMovie.num}}</p>
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
	 			hotMovies:[],
	 			soonMovies:[]
	 		}
	 	},
	 	methods:{

	 	},
	 	created(){
	 		this.$axios.get(getUrl.getMovie()).then(res=>{
	 			  this.hotMovies=res.data.received.splice(0,2);		
	 			  this.soonMovies=res.data.received.splice(1,3);		
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