<template>
    <div class= "cirRecomment">
    	<div class="title">
    		<img src="../../image/小竖条.png" alt="图片加载失败">
    		<span class="maybe">今日推荐</span>
    		<div class="more">
    			<span>更多</span>
    			<img src="../../image/jt.png" alt="图片加载失败">
    		</div>
    	</div>
    	<div class="content">
    		<img src="../../image/设计狮.png" alt="图片加载失败">
    		<div class="text">
    			<p class="textUp">UI设计师群组</p>
    			<span class="author">创建人：设计师小白菜</span>
    			<span class="time">创建时间：2015-12-13</span>
    			<p class="textDown">设计——牛人与牛人之间的较量</p>
    		</div>
    	</div>
    	<div class="content">
    		<img src="../../image/孙悟空.png" alt="图片加载失败">
    		<div class="text">
    			<p class="textUp">我们都不想成为孙悟空</p>
    			<span class="author">创建人：新世相</span>
    			<span class="time">创建时间：2015-12-13</span>
    			<p class="textDown">孙行者的荣辱之路</p>
    		</div>
    	</div>

    	<div class="title">
    		<img src="../../image/小竖条.png" alt="图片加载失败">
    		<span class="maybe">附近的圈子</span>
    		<div class="more">
    			<span>更多</span>
    			<img src="../../image/jt.png" alt="图片加载失败">
    		</div>
    	</div>
    	<div class="content">
    		<img src="../../image/游戏.png" alt="图片加载失败">
    		<div class="text">
    			<p class="textUp">游戏在路上</p>
    			<span class="author">创建人：设计师小白菜</span>
    			<span class="time">创建时间：2015-12-13</span>
    			<p class="textDown">设计——牛人与牛人之间的较量</p>
    		</div>
    	</div>
    	<div class="content">
    		<img src="../../image/单车.png" alt="图片加载失败">
    		<div class="text">
    			<p class="textUp">“单车猎人”</p>
    			<span class="author">创建人：新世相</span>
    			<span class="time">创建时间：2015-12-13</span>
    			<p class="textDown">设计——孙行者的荣辱之路</p>
    		</div>
    	</div>

    	<div class="title">
    		<img src="../../image/小竖条.png" alt="图片加载失败">
    		<span class="maybe">你可能感兴趣</span>
    		<div class="more">
    			<span>更多</span>
    			<img src="../../image/jt.png" alt="图片加载失败">
    		</div>
    	</div>
    	<div class="content">
    		<img src="../../image/游戏.png" alt="图片加载失败">
    		<div class="text">
    			<p class="textUp">游戏在路上</p>
    			<span class="author">创建人：设计师小白菜</span>
    			<span class="time">创建时间：2015-12-13</span>
    			<p class="textDown">设计——牛人与牛人之间的较量</p>
    		</div>
    	</div>
    	<div class="content">
    		<img src="../../image/单车.png" alt="图片加载失败">
    		<div class="text">
    			<p class="textUp">“单车猎人”</p>
    			<span class="author">创建人：新世相</span>
    			<span class="time">创建时间：2015-12-13</span>
    			<p class="textDown">设计——孙行者的荣辱之路</p>
    		</div>
    	</div>
    </div>
</template>
<script>
export default {
  name:"CirRecomment",
  data(){
    return{
    }
  }
}
</script>

<style scope lang=less>
.cirRecomment .title{
	height:68/75rem;
	line-height: 68/75rem;
	font-size: 18/75rem;
}
.cirRecomment .title img{
             width: 10/75rem;
             height: 35/75rem;
	margin:16/75rem 6/75rem 0 20/75rem;
	vertical-align: top;
}
.cirRecomment .title .maybe{
	display:inline-block;
	width: 198/75rem;
             font-size: 20/75rem;
}
.cirRecomment .title .more{
	display:inline-block;
	margin-left:408/75rem; 
}
.cirRecomment .title .more img{
             width:18/75rem;
             height:30/75rem;
	margin:18/75rem 0 0 10/75rem;
	vertical-align: top;
}
.cirRecomment .content{
	height:174/75rem;
	background-color: white;
	padding:20/75rem;
	margin-bottom:10/75rem;
}
.cirRecomment .content img{
            width: 156/75rem;
            height: 156/75rem;
}
.cirRecomment .content .text{
	width:520/75rem;
	height:174/75rem;
	margin-left:10/75rem;
	display: inline-block;
	vertical-align: top;
}
.cirRecomment .content .text .textUp{
	font-size: 32/75rem;
	margin-bottom:25/75rem;
}
.cirRecomment .content .text span{
             display: inline-block;
             width: 250/75rem;
	font-size: 20/75rem;
	color:#C1C1C1;
}
.cirRecomment .content .text .textDown{
	margin-top: 16/75rem;
	font-size: 20/75rem;
}
</style>