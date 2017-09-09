<template>
  <div class="detailsContainer">
	<div class="detailsImg">
		<router-link :to="{path:'/amuse/music/musicDelivery',query:{musicType:bookMess.type}}"><img src="../../../../static/img/white_left.png"></router-link>
		<span>音乐</span>
		<p><img :src="bookMess.data"></p>
	</div>
    <div class="box">
	<div class="detailsMess">
		<p>{{bookMess.title}}<span>试听</span></p>
		<p>演唱：{{bookMess.autor}}</p>
		<p class="num">
		 <span><img src="../../../../static/img/good.png">{{bookMess.good}}</span>
		 <span><img src="../../../../static/img/low.png">{{bookMess.low}}</span>
		</p>
		<div class="smallIntro">
			<p>简介</p>
			<p class="smallFont" >{{flag?substrFont:bookMess.summary}}</p>
			<img src="../../../../static/img/buttom.png" class="select" @click="toSelect">
		</div>
	</div>
	</div>
	    <div class="comment">
	         <div class="commentMess">
             <P>评论：({{bookMess.num}})</P>
             <div v-for="comments in bookMess.comment">
             <p class="smallBox">{{comments.cont}}<span><img src="../../../../static/img/good.png">{{bookMess.good}}</span></p>
             <p class="tou">
             <img src="../../../../static/img/tou.png" >
             <span>{{comments.userName}}</span>
             <span>{{comments.time}}</span>
             </p>
             </div>
             </div>
        </div>
  </div>	
</template>
<script type="text/javascript">
import getUrl from '../../../utils/getUrl.js';
	export default{
		name:'musicDetails',
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
			this.$axios.get(getUrl.getMusic()).then(res=>{
				   var newBooks=res.data;
				   for(var j in newBooks){
				   for(var i in newBooks[j]){
				   	    if(newBooks[j][i]['name']==this.$route.query.musicMess){
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
        background:#F0F0F0;
        .box{background:#FFFFFF;}
        .comment{margin-top:20/75rem;background:white;
                .commentMess{
                	width:9rem;margin:0 auto;overflow:hidden;
                	.tou{
                		color:#CFCFCF;
                		img{width:42/75rem;height:42/75rem;}
                		span{margin-right:150/75rem;display:inline-block;}
                	}
                	p{font-size:32/75rem;margin-top:30/75rem;}
                	.smallBox{
                		margin-top:50/75rem;
                		span{float:right;}
                		img{width:35/75rem;height:35/75rem;margin-right:15/75rem;}
                	}
                }
          } 
      }
	  .detailsImg{
	  	img{width:30/75rem;height:50/75rem;}
	  	background:#3D3D3D;color:white;height:633/75rem;
	  	span{margin-left:250/75rem;display:inline-block;width: 88/75rem;
	  	height: 88/75rem;
	  	}
	  	img{margin:30/75rem 0 0 30/75rem;}
	  	p{margin:0 auto;width: 365/75rem;height: 503/75rem;
	  		img{width: 305/75rem;height: 443/75rem;}
	  	}
	  }
	  .detailsMess{
	  	width:9rem;margin:0 auto;overflow:hidden;
	  	.num{float:right;}
	  	 p{margin-top:20/75rem;
           span:last-child{margin-left:20/75rem;}
           span{
           	 img{margin-right:10/75rem;width:50/75rem;height:50/75rem;vertical-align: middle;}
           }
	  	 }
	  	 p:first-child{margin-top:43/75rem;overflow:hidden;
           span{float:right;font-size:30/75rem;}
	  	 }
	  	 p:nth-child(2){font-size:25/75rem;}
	  	 .smallFont{font-size:25/75rem;line-height:40/75rem;}
	  	 .blueFont{color:#5483C2;float:right;
	  	 	        img{margin-left:20/75rem;margin-bottom: 8/75rem;vertical-align: middle;width:26/75rem;height:26/75rem;}
	  	          }
	  	  .smallIntro{
	  	  	.select{margin:-20/75rem 0 0 650/75rem;float:right;width:26/75rem;}
	  	  }        
	  	        
	  }
</style>