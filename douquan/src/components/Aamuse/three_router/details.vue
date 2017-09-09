<template>
  <div class="detailsContainer">
	<div class="detailsImg">
		<router-link :to="{path:'/amuse/book/delivery',query:{bookType:bookMess.type}}"><img src="../../../../static/img/white_left.png"></router-link>
		<span>图书</span>
		<p><img :src="bookMess.data"></p>
	</div>

	<div class="detailsMess">
		<p><span>{{bookMess.title}}</span>
		 <span><img src="../../../../static/img/good.png">{{bookMess.good}}</span>
		 <span><img src="../../../../static/img/low.png">{{bookMess.low}}</span>
		</p>
		<p class="smallFont">作者：{{bookMess.autor}}</p>
		<p class="smallFont">出版时间：{{bookMess.time}}</p>
		<p class="blueFont">{{shopping?'电子书/纸质版购买':'购买'}}<img src="../../../../static/img/right.png" ></p>
		<div class="smallIntro">
			<p>简介</p>
			<p class="smallFont" >{{flag?substrFont:bookMess.summary}}</p>
			<img src="../../../../static/img/buttom.png" class="select" @click="toSelect">
		</div>

		<div class="smallIntro">
			<p>简介</p>
			<p class="smallFont" >{{bookMess.summary}}</p>
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
			this.$axios.get(getUrl.getUrl()).then(res=>{
				   var newBooks=res.data;
				   for(var j in newBooks){
				   for(var i in newBooks[j]){
				   	    if(newBooks[j][i]['name']==this.$route.query.bookMess){
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
	  	 p{margin-top:20/75rem;
           span:first-child{width:350/75rem;display:inline-block;}
           span:last-child{margin-left:20/75rem;}
           span{
           	 img{margin-right:10/75rem;width:50/75rem;height:50/75rem;vertical-align: middle;}
           }
	  	 }
	  	 p:first-child{margin-top:43/75rem;}
	  	 .smallFont{font-size:25/75rem;line-height:40/75rem;}
	  	 .blueFont{color:#5483C2;float:right;
	  	 	        img{margin-left:20/75rem;margin-bottom: 8/75rem;vertical-align: middle;width:26/75rem;height:26/75rem;}
	  	          }
	  	  .smallIntro{
	  	  	.select{margin:0/75rem 0 0 650/75rem;float:right;width:26/75rem;}
	  	  }        
	  	          
	  }
</style>