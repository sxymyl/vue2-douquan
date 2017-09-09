<template>
  <div class="detailsContainer">
	<div class="detailsImg">
		<router-link :to="{path:'/amuse/movie/movieDelivery',query:{movieType:bookMess.type}}"><img src="../../../../static/img/white_left.png"></router-link>
		<span>电影</span>
		<p><img :src="bookMess.data"></p>
	</div>

	<div class="detailsMess">
		<p>{{bookMess.title}}</p>
		<p>类型：角色扮演</p>
		<p class="num">
		 <span><img src="../../../../static/img/good.png">{{bookMess.good}}</span>
		 <span><img src="../../../../static/img/low.png">{{bookMess.low}}</span>
		</p>
		<div class="smallIntro">
			<p>简介</p>
			<p class="smallFont" >{{flag?substrFont:bookMess.summary}}</p>
			<img src="../../../../static/img/buttom.png" class="select" @click="toSelect">
		</div>
        <div class="smallImg">
        	<img src="../../../../static/img/lol1.png">
        	<img src="../../../../static/img/lol2.png">
        	<img src="../../../../static/img/lol3.png">
        	<img src="../../../../static/img/lol4.png">
        </div>
	</div>
  </div>	
</template>
<script type="text/javascript">
import getUrl from '../../../utils/getUrl.js';
	export default{
		name:'details',
		data(){
			return{
				flag:true,
				bookMess:'',
				shopping:true
			}
		},
		computed:{
			  substrFont(){
			  	   	if(this.bookMess.summary.length>40){
			  	   	  return this.bookMess.summary.substr(0,60)+'...'
			  	   }
			  }
		},
		methods:{
			 toSelect(){
			 	this.flag=!this.flag;
			 }
		},
		created(){
			this.$axios.get(getUrl.getMovie()).then(res=>{
				   var newBooks=res.data;
				   for(var j in newBooks){
				   for(var i in newBooks[j]){
				   	    if(newBooks[j][i]['name']==this.$route.query.movieMess){
				   	    	this.bookMess=newBooks[j][i];
				   	    }

				   }
				   }
                     if(this.bookMess['type']=='magain'){
                        	 this.shopping=false;
                        }
			})
		}



	}
</script>
<style lang="less" scoped>
      .detailsContainer{height:1600/75rem;
        position: relative;
      }
	  .detailsImg{
        a{position:absolute;z-index:600;left:10/75rem;top:20/75rem;}
	  	img{width:30/75rem;height:50/75rem;position:absolute;left:10/75rem;}
	  	background:#3D3D3D;color:white;height:633/75rem;
	  	span{display:inline-block;width: 88/75rem;
	  	height: 88/75rem;position:absolute;left:340/75rem;top:30/75rem;z-index: 600;
	  	}
	  	p{
	  		img{width: 748/75rem;height: 633/75rem;position:absolute;top:0;left:0;z-index: 500;}
	  	}
	  }
	  .detailsMess{
	  	width:9rem;margin:0 auto;overflow:hidden;
	  	.num{float:right;}
	  	p:nth-child(2){font-size:25/75rem;}
	  	 p{margin-top:20/75rem;
           span:last-child{margin-left:20/75rem;}
           span{
           	 img{margin-right:10/75rem;width:50/75rem;height:50/75rem;vertical-align: middle;}
           }
	  	 }
	  	 p:first-child{margin-top:43/75rem;}
	  	 .smallFont{font-size:25/75rem;line-height:40/75rem;
	  	   }
	  	 .blueFont{color:#5483C2;float:right;
	  	 	        img{margin-left:20/75rem;margin-bottom: 8/75rem;vertical-align: middle;}
	  	          }
	  	  .smallIntro{
	  	  	margin-top:20/75rem;
	  	  	.select{margin:0/75rem 0 0 650/75rem;float:right;width:26/75rem;}
	  	  }  
	  	  .smallImg{
	  	  	margin-top:38/75rem;
	  	  	img{width:160/75rem;height:242/75rem;}
	  	  }      
	  	          
	  }
</style>