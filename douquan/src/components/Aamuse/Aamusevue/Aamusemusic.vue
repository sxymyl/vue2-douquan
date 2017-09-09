<template>
     <div>
		 <div class="newBook">
	 	<div class="shuDi">
	 	<span>华语新歌</span>
        <router-link :to="{path:'/amuse/music/musicDelivery',query:{musicType:'chinaMusic'}}">更多 <img src="../../../../static/img/right.png" ></router-link>
	 	</div>
            <router-link v-for="(chinaMusic,index) in chinaMusics" :key="index" :to="{path:'/amuse/music/musicDelivery/musicDetails',query:{musicMess:chinaMusic.name}}" tag="div" class="message" >
	 		    <div class="messLeft">
	 			<img :src="chinaMusic.data">
	 			</div>
                <div class="messRight">
	 			<p>{{chinaMusic.title}}</p>
	 			<p>{{chinaMusic.autor}}</p>
	 			<p>评论数:{{chinaMusic.num}}</p>
	 			</div>
	 		</router-link>

	 </div>

	  <div class="newBook">
	 	<div class="shuDi">
	 	<span>日韩新歌</span>
        <router-link :to="{path:'/amuse/music/musicDelivery',query:{musicType:'japanMusic'}}">更多 <img src="../../../../static/img/right.png" > </router-link>
	 	</div>
            <router-link v-for="(japanMusic,index) in japanMusics" :key="index" :to="{path:'/amuse/music/musicDelivery/musicDetails',query:{musicMess:japanMusic.name}}" tag="div" class="message" >
	 		    <div class="messLeft">
	 			<img :src="japanMusic.data">
	 			</div>
                <div class="messRight">
	 			<p>{{japanMusic.title}}</p>
	 			<p>{{japanMusic.autor}}</p>
	 			<p>评论数:{{japanMusic.num}}</p>
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
	 			chinaMusics:[],
	 			japanMusics:[],
	 		}
	 	},
	 	methods:{

	 	},
	 	created(){
	 		this.$axios.get(getUrl.getMusic()).then(res=>{
	 			  this.chinaMusics=res.data.chinaMusic.splice(0,3);	
	 			  this.japanMusics=res.data.japanMusic.splice(0,3);		
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
         img{width:186/75rem;height:192/75rem;}
       }
       .messLeft{margin-right:18/75rem;
       }
       .message{margin:30/75rem 0 41/75rem 49/75rem;overflow:hidden;float:left;width:186/75rem;}
       .shuDi{margin:45/75rem 23/75rem;
       	img{width:26/75rem;height:26/75rem;vertical-align: middle;margin-left:8/75rem;}
           a{color:#5483c2;}
         }
      }
</style>