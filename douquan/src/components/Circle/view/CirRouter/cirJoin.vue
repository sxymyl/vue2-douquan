<template>
    <div class= "cirJoin">
    	<div class="title">
    		<img src="../../image/小竖条.png" alt="图片加载失败">
    		<span class="maybe">今日推荐</span>
    		<div class="more">
    			<span>更多</span>
    			<img src="../../image/jt.png" alt="图片加载失败">
    		</div>
    	</div>
    	<div class="content">
    		<img src="../../image/长征路.png" alt="图片加载失败">
    		<div class="text">
    			<p class="textUp">长征路远心更远</p>
    			<p class="author">创建人：背着书包的小二</p>
    			<span class="huati">123</span>
    			<p class="textDown">未来的路还很长，让我心怀坚定的信念，一步一步慢慢走，无论我们的人生路，还是长征路…</p>
    		</div>
    	</div>

    	<div class="content">
    		<img src="../../image/知更鸟.png" alt="图片加载失败">
    		<div class="text">
    			<p class="textUp">被杀死的那只知更鸟</p>
    			<p class="author">创建人：安静的念</p>
    			<span class="huati">34</span>
    			<p class="textDown">知更鸟不在玉米地里筑巢，只给人们带来悦耳的叫声，愉悦人们</p>
    		</div>
    	</div>

    	<div class="content">
    		<img src="../../image/吐槽.png" alt="图片加载失败">
    		<div class="text">
    			<p class="textUp">我们看剧爱吐槽</p>
    			<p class="author">创建人：Queen.Lareina</p>
    			<span class="huati">34</span>
    			<p class="textDown">什么剧都看，就是爱吐槽！</p>
    		</div>
    	</div>

    	<div class="content">
    		<img src="../../image/同一本书.png" alt="图片加载失败">
    		<div class="text">
    			<p class="textUp">最近我们读了同一本书</p>
    			<p class="author">创建人：我昨天叫何宝荣</p>
    			<span class="huati">6</span>
    			<p class="textDown">读书是精神享受的过程，拒绝低俗浮躁。欢迎每一个尊重别人思想、又有独立思考能力的人来…</p>
    		</div>
    	</div>

	<div class="goFind">
		<span class="more">更多精彩的逗圈</span>
		<p class="goMore">去发现</p>
	</div>


    </div>
</template>
<script>
export default {
  name:"CirJoin",
  data(){
    return{
      id:1
    }
  }
}
</script>

<style scope lang=less>
.cirJoin .title{
	height:68/75rem;
	line-height: 68/75rem;
	font-size: 18/75rem;
}
.cirJoin .title img{
             width: 10/75rem;
             height: 35/75rem;
	margin:16/75rem 6/75rem 0 20/75rem;
	vertical-align: top;
}
.cirJoin .title .maybe{
	display:inline-block;
	width: 198/75rem;
             font-size: 20/75rem;
}
.cirJoin .title .more{
	display:inline-block;
	margin-left:408/75rem; 
}
.cirJoin .title .more img{
             width:18/75rem;
             height:30/75rem;
	margin:18/75rem 0 0 10/75rem;
	vertical-align: top;
}
.cirJoin .content{
	height:140/75rem;
	background-color: white;
	padding:15/75rem;
	margin-bottom:10/75rem;
	position:relative;
}
.cirJoin .content img{
	width:140/75rem;
	height:140/75rem;
}
.cirJoin .content .text{
	width:500/75rem;
	height:174/75rem;
	margin-left:20/75rem;
	display: inline-block;
	vertical-align: top;
}
.cirJoin .content .text .textUp{
	font-size: 24/75rem;
	margin-bottom:20/75rem;
}
.cirJoin .content .text .author{
	font-size: 15/75rem;
	color:#C1C1C1;
}
.cirJoin .content .text .huati{
	font-size: 12/75rem;
	color:white;
	background-color: #5483C2;
	position:absolute;
	right: 20/75rem;
	top:60/75rem;
	border-radius: 15/75rem;
	padding:4/75rem 6/75rem;
}
.cirJoin .content .text .textDown{
	width:475/75rem;
	height:60/75rem;
	margin-top: 10/75rem;
	font-size: 12/75rem;
	line-height: 1.4em;
	font-weight: normal;
	overflow: hidden;
}
.cirJoin .goFind{
	height:70/75rem;
	line-height:70/75rem; 
	width: 100%;
	background-color: white;
	font-size: 28/75rem;
	position:fixed;
	bottom:110/75rem;
	padding:0 20/75rem;
}
.cirJoin .goFind .goMore{
	display:inline-block;
	width: 140/75rem;
	height: 50/75rem;
	line-height: 50/75rem;
	text-align: center;
	border:1/75rem solid #5483C2;
	border-radius: 8/75rem;
	margin-left: 360/75rem;
}
</style>