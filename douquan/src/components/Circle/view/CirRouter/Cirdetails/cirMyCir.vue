<template>
	<div class="cirMyCir">
		<div class="head">
			<router-link :to="{path:'/t_expert/expert'}"><img class="fh" src="../../../image/fh.png" alt="图片加载失败"></router-link>
			<router-view></router-view>
			<span>我的逗圈</span>
			<router-link :to="{path:'/expert/mycir/white'}"><p class="white">写话题</p></router-link>
			<router-view></router-view>
			<img class="dd" @touchstart="isShow" src="../../../image/dd.png" alt="图片加载失败">
			<div class="diandian" v-if="show">
				<p >逗圈分享</p>
				<router-link :to="{path:'/t_advice'}"><p class="border">退出逗圈</p></router-link>
				<router-view></router-view>
				<p @touchstart="quit" >举报</p>
			</div>
		</div>
		<div class="bg">
			<p class="bgTitle">好莱坞老电影</p>
    			<p class="author">创建人：薄荷绿洲</p>
    			<span class="time">创建时间：2010-7-20</span>
    			<p class="text">介绍和交流 1930-1970 年代好莱坞黄金时代的经典电影，以及同时期其他国家和地区的经典电影。</p>
			<img class="picture" src="../../../image/icon-toux.png" alt="图片加载失败">
		</div>
		<div class="con">
			<div class="title">
    				<img src="../../../image/小竖条.png" alt="图片加载失败">
    				<span class="maybe">话题（591）</span>
    				<div class="more">
    					<span>更多</span>
    					<img src="../../../image/jt.png" alt="图片加载失败">
    				</div>
    			</div>
    			<div class="huati">
    				<div class="left">
    					<p class="saySomething">一人说一部你最爱的电影</p>
    					<img src="../../../image/icon-4.png" alt="图片加载失败">
					<p class="leftAuthor">幕府散人</p>
					<p class="leftPing">评论 67</p>
					<p class="leftTime">5小时前</p>

    				</div>
    				<div class="right"></div>
    				<div class="clear"></div>
    				
    			</div>

    			<div class="huati">
    				<div class="left">
    					<p class="saySomething">多少人还记的这一句经典的台词&nbsp;&nbsp;&nbsp;&nbsp;
    					torrow is another day</p>
    					<img src="../../../image/icon-3.png" alt="图片加载失败">
					<p class="leftAuthor">伦伦散散</p>
					<p class="leftPing">评论 107</p>
					<p class="leftTime">2017-4-25</p>
    				</div>
    				<div class="right">
    					<img src="../../../image/piao.png" alt="图片加载失败">
    				</div>
    				<div class="clear"></div>	
    			</div>

    			<div class="huati">
    				<div class="left">
    					<p class="saySomething">美式英雄保罗纽曼</p>
    					<img src="../../../image/icon-2.png" alt="图片加载失败">
					<p class="leftAuthor">云路</p>
					<p class="leftPing">评论 23</p>
					<p class="leftTime">2017-2-4</p>

    				</div>
    				<div class="right"></div>
    				<div class="clear"></div>
    				
    			</div>

    			<div class="huati">
    				<div class="left">
    					<p class="saySomething">我拍摄的好莱坞 40年代复古摄影作品</p>
    					<img src="../../../image/icon-1.png" alt="图片加载失败">
					<p class="leftAuthor">复古摄影师小哲</p>
					<p class="leftPing">评论 24</p>
					<p class="leftTime">2017-4-2</p>
    				</div>
    				<div class="right">
    					<img src="../../../image/meimv.png" alt="图片加载失败">
    				</div>
    				<div class="clear"></div>	
    			</div>

    			<div class="huati">
    				<div class="left">
    					<p class="saySomething">一条狗的使命</p>
    					<img src="../../../image/icon-2.png" alt="图片加载失败">
					<p class="leftAuthor">云路</p>
					<p class="leftPing">评论 23</p>
					<p class="leftTime">2017-2-4</p>

    				</div>
    				<div class="right"></div>
    				<div class="clear"></div>
    				
    			</div>
    		</div>
		
	</div>
</template>
<script type="text/javascript">
import $ from 'jquery';

export default {
  name:"CirMyCir",
  data(){
    return{
    	show:false
    }
  },
  methods:{
  	isShow:function(event){
  		this.show=!this.show;
  	},
  	quit:function(event){
  		this.show=!this.show;

  	}
  }
}
</script>
<style scope lang=less>
.cirMyCir .head{
	height:90/75rem;
	line-height: 86/75rem;
	border-bottom:2/75rem solid #B7B7B7;
	background-color: white;
	position:relative;
}
.cirMyCir .head .fh{
	width: 18/75rem;
	height: 30/75rem;
	margin-left: 20/75rem;
	margin-right: 236/75rem;
}
.cirMyCir .head .dd{
	width: 50/75rem;
	margin-left: 46/75rem;
}
.cirMyCir .head span{
	font-size: 32/75rem;
}
.cirMyCir .head .white{
	display:inline-block;
	width: 105/75rem;
	height: 38/75rem;
	line-height: 40/75rem;
	text-align: center;
	font-size: 22/75rem;
	border:1/75rem solid black; 
	border-radius: 8/75rem;
	margin-left: 80/75rem;
}
.cirMyCir .head .diandian{
	background:url('../../../image/ht1.png') no-repeat;
	background-size:274/75rem 257/75rem;
	position:absolute;
	right:20/75rem;
	top:85/75rem;
	border-radius: 10/75rem;
	z-index: 2;
	width: 240/75rem;
	height: 174/75rem;	
	text-align: center;
	padding:20/75rem 15/75rem 0 15/75rem;
}
.cirMyCir .head .diandian p{
	font-size: 24/75rem;
	color:#b5b5b5;
	height:58/75rem;
	line-height: 58/75rem;	
}
.cirMyCir .head .border{
	border-top:1/75rem solid #b5b5b5;
	border-bottom:1/75rem solid #b5b5b5;
}
.cirMyCir .bg{
	height:230/75rem;
	padding:20/75rem;
	background:url('../../../image/bg.png');
	position: relative;
}
.cirMyCir .bg img{
	width: 160/75rem;
	height: 160/75rem;
}
.cirMyCir .bg .bgTitle{
	font-size: 30/75rem;
	margin:20/75rem 0 45/75rem 0;
	font-weight: 700;
}
.cirMyCir .bg .author{
	display: inline-block;
	width: 260/75rem;
	font-size: 18/75rem;
}
.cirMyCir .bg .time{
	width: 260/75rem;
	font-size: 18/75rem;
}
.cirMyCir .bg .text{
	margin-top: 26/75rem;
	height: 50/75rem;
	width: 530/75rem;
	font-size: 12/75rem;
	line-height: 1.5em;
}
.cirMyCir .bg .picture{
	position:absolute;
	right: 20/75rem;
	top:58/75rem;
}
.cirMyCir .con .title{
	height:68/75rem;
	line-height: 68/75rem;
	font-size: 18/75rem;
}
.cirMyCir .con .title img{
	width: 10/75rem;
             height: 35/75rem;
	margin:16/75rem 6/75rem 0 20/75rem;
	vertical-align: top;
}
.cirMyCir .con .title .maybe{
	display:inline-block;
	width: 200/75rem;
}
.cirMyCir .con .title .more{
	display:inline-block;
	margin-left:400/75rem; 
}
.cirMyCir .con .title .more img{
	width:18/75rem;
             height:30/75rem;
	margin:18/75rem 0 0 10/75rem;
	vertical-align: top;
}
.cirMyCir .con .huati{
	background-color: white;
	padding: 20/75rem;
	margin-bottom: 10/75rem;
}
.cirMyCir .con .huati .saySomething{
	font-size: 28/75rem;
	margin-bottom: 70/75rem;
	line-height: 1.6em;
}
.cirMyCir .con .huati .left{
	width: 490/75rem;
	float:left;
}
.cirMyCir .con .huati .left img{
	width: 30/75rem;
	height: 30/75rem;
}
.cirMyCir .con .huati .right{
	width: 160/75rem;
	float: right;
}
.cirMyCir .con .huati .right img{
	width: 160/75rem;
	height: 160/75rem;
}
.cirMyCir .con .huati .clear{
	clear:both;
}
.cirMyCir .con .huati .left img{
	vertical-align: top;
}
.cirMyCir .con .huati .left .leftAuthor{
	display: inline-block;
	vertical-align: top;
	padding-top: 6/75rem;
	width: 168/75rem;
	font-size: 16/75rem;
	color:#757575;
}
.cirMyCir .con .huati .left .leftPing,.cirMyCir .con .huati .left .leftTime{
	display: inline-block;
	vertical-align: top;
	padding-top: 6/75rem;
	width: 120/75rem;
	font-size: 16/75rem;
	color:#757575;
}
</style>