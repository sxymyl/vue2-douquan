<template>
  <div class="Adtopic">
  	<div class="theme">
  		<router-link :to="{path:'/t_advice'}">
  		<img src="../../../img/hjt.png" alt="" class="hjt">
  		</router-link>
  		<span>推荐话题</span>
  		<img src="../../../img/dd.png" alt="" class="dd" @touchstart="aaa" >
  		<div v-if="show" class="share">
  			<p class="bor" @touchstart="share1" >分享</p>

  			<p class="bor">收藏</p>
  			<p class="bor" @touchstart="report1" >不符合圈子</p>
  			<p  @touchstart="report1">举报</p>
  		</div>
  	</div>
	<div v-if="share"class="succeed">
		分享成功
	</div>
	<div v-if="report" class="succeed">
		举报成功
	</div>
  	<div class="handTour">
  		<img src="../../../img/tj2.png" alt="	">
  		<span>阴阳师手游部落</span>
  		<img src="../../../img/jt.png" alt="" class="jt">
  	</div>
	<div class="review">
		<h2>没有想到你是这样的小鹿男！！！</h2>
		<img src="../../../img/tj5.png" alt="">
		<div>
			<p>在树林中等你的酒香</p>
			<p>2016-11-11</p>
		</div>
	</div>

	<div class="bigImg">
		<h2>小鹿男强势来袭，爽到你不敢想象～</h2>
		<img src="../../../img/tj1.png" alt="">
	</div>

  	<div class="topics">
		<img src="../../../img/jst.png" alt="" class="st">
    	<span class="Adtopic">评论（124567）</span>
    </div>
    
    <div class="discuss" v-for="data in getAdtopic">
    	<h2>{{data.title}}<span>{{data.time}}</span></h2>
    	<img :src="data.img" alt="">
    	<span>{{data.oo}}</span>
    </div>

    <div class="input">
    	<input type="text" placeholder="发表评论">
    	<button>发表</button>
    </div>
  </div>
</template>

<script>
 import getAdtopic from '../../../../../utils/getUrl.js';
export default {
  name:"topic",
  data(){
    return{
    	show:false,
    	share:false,
    	report:false,
    	getAdtopic:null
    }
  },
  methods:{
  	aaa:function(event){
  		this.show=!this.show

  	},
  	share1:function(event){
  		this.share=true;
  		this.show=false;
  		var that = this;
  		setTimeout(function(){
  			that.share=false;
  		},500);
  	},
  	report1:function(event){
  		this.report=true;
  		this.show=false;
  		var that = this;
  		setTimeout(function(){
  			that.report=false;
  		},500);
  	}

  },
  created(){
  	  	this.$axios.get(getAdtopic.getAdtopic()).then(res=>{
  		this.getAdtopic=res.data.comment;
  	})
  }

}
</script>

<style scope lang=less>
 	.Adtopic .theme{
 		width: 100%;
 		height: 89/75rem;
 		background: white;
 		line-height:89/75rem;
 		border-bottom: 1px solid #aaa;
 	}
 	.Adtopic .theme .hjt{
 		margin-left: 20/75rem;
 		vertical-align: middle;
 		width: 21/75rem;
 	}
 	.Adtopic .theme .dd{
 		margin-left: 195/75rem;
 		width: 63/75rem;
 	}
 	.Adtopic .theme span{
 		margin-left: 195/75rem;
 		font-size: 54/75rem;
 		font-weight: 700;
 		width: 21/75rem;

 	}
 	.Adtopic .review{
 		height: 158/75rem;
 		margin-top: 10/75rem;
 		background: white;
 	}
 	.Adtopic .review div{
 		display: inline-block;

 	}
 	.Adtopic .review div p{
 		font-size: 22/75rem;
 	}
 	.Adtopic .review img{
 		margin-left: 45/75rem;
 		width: 55/75rem;
 		height: 52/75rem;

 	}
 	.Adtopic .review h2,{
 		font-size: 34/75rem;
 		margin-left: 20/75rem;
 		font-weight: 700;
 		margin-bottom: 22/75rem;
 		padding-top: 22/75rem;
 	}
 	.Adtopic .bigImg{
 		height: 520/75rem;
 		background: white;
 		margin-top: 10/75rem;
 	}
 	.Adtopic .bigImg h2,.Adtopic .discuss h2{
 		font-size: 34/75rem;
 		margin-left: 20/75rem;
 		font-weight: 700;
 		padding-top: 22/75rem;
 	}
 	.Adtopic .bigImg img{
 		margin-left: 187/75rem;
 		width: 390/75rem;
 		height: 402/75rem;
 		margin-top:30/75rem;
 	}
 	.Adtopic .handTour{
 		width: 100%;
 		height: 63/75rem;
 		background: white;
 		line-height:63/75rem;
 		padding-bottom: 7/75rem;
 	}
 	.Adtopic .handTour img,.Adtopic .discuss img{
 		vertical-align: middle;
 		margin-left: 20/75rem;
 		width: 55/75rem;
 	}
 	.Adtopic .handTour span{
 		font-size: 20/75rem;
 		margin-left: 20/75rem;
 	}
 	.Adtopic .handTour .jt{
 		margin-left: 400/75rem;
 		width: 20/75rem;
 		height: 25/75rem;
 	}

 	.Adtopic .topics{
		height: 69/75rem;
		line-height: 69/75rem;
		font-size: 20/75rem;
	}
	.Adtopic .topics .st{
		vertical-align: middle;
		margin:0 20/75rem;
		width: 10/75rem;
	}
	.Adtopic .discuss{
		height: 135/75rem;
		background: white;
		margin-bottom: 10/75rem;
	}
	.Adtopic .last{
		margin-bottom: 0rem;
	}
	.Adtopic .discuss span{
		font-size: 20/75rem;
	}
	.Adtopic .discuss p{
		margin-left: 20/75rem;
		line-height: 50/75rem;
	}
	.Adtopic .discuss p span{
		margin-right: 43/75rem;
	}
	.Adtopic .discuss h2 span{
		margin-left: 20/75rem;
	}
	.Adtopic .discuss h2{
		line-height: 50/75rem;
	}
	.input{
		margin-bottom: 100/75rem;
		text-align: center;
		background: white;
		border-top: 1px solid #aaa;
		height: 155/75rem; 
	}
	.input input{
		width: 712/75rem;
		height: 71/75rem;
		border-radius: 5/75rem;
		font-size: 29/75rem;
		border: 1px solid #aaa;
		margin-top: 15/75rem;
	}
	 .input button{
	    width: 100/75rem;
	    margin-top: 10/75rem;
	  }
	.share{
		width: 277/75rem;
		height: 242/75rem;
		border: 1px solid #a1a1a1;
		border-radius: 10/75rem;
		position: absolute;
		left: 454/75rem;
		top:107/75rem;
		text-align: center;
		background: white;
		z-index: 20;
	}
	.share p{
		font-size: 24/75rem;
		line-height: 60/75rem;
	}
	.share .bor{
		border-bottom:1px solid #a1a1a1;
		text-align: center;
	}
	.succeed{
		position: absolute;
		background: #F0F0F0;
		width: 315/75rem;
		height: 60/75rem;
		border-radius: 25/75rem;
		text-align: center;
		line-height: 60/75rem;
		left: 215/75rem;
		top: 160/75rem;
		color: #D4D4D4;
	}
</style>
