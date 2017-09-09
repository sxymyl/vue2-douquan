<template>
    <div class= "cirCreate">
	<div class="title">
    		<img src="../../image/小竖条.png" alt="图片加载失败">
    		<span class="maybe">我加入的逗圈</span>
    		<div class="more">
    			<span>更多</span>
    			<img src="../../image/jt.png" alt="图片加载失败">
    		</div>
    	</div>

    	<div class="content" v-for="(data,index) in CirCreate">
    		<img v-bind:src="data.img" alt="图片加载失败">
    		<div class="text">
    			<p class="textUp">{{data.title}}</p>
    			<p class="author">{{data.menber}}</p>
    			<p class="textDown">{{data.text}}</p>
    		</div>
    	</div>

    	<!-- <div class="content">
    		<img src="../../image/爱狗1.png" alt="图片加载失败">
    		<div class="text">
    			<p class="textUp">爱狗俱乐部</p>
    			<p class="author">拥有148905成员</p>
    			<p class="textDown">我们是爱狗俱乐部，欢迎大家分享爱狗知识及经验，禁止虐狗或宣扬吃狗，可以有自己的立场…</p>
    		</div>
    	</div>

    	<div class="content">
    		<img src="../../image/做书2.png" alt="图片加载失败">
    		<div class="text">
    			<p class="textUp">做书的青年们</p>
    			<p class="author">拥有12704成员</p>
    			<p class="textDown">鲁迅先生说过：青年又何须寻那挂着金字招牌的导师呢？</p>
    		</div>
    	</div>

    	<div class="content">
    		<img src="../../image/论文.png" alt="图片加载失败">
    		<div class="text">
    			<p class="textUp">那些年写过得论文</p>
    			<p class="author">拥有7708成员</p>
    			<p class="textDown">次次论文都是拖到最后，次次论文都要熬夜通宵写——一写论文我就想退学……</p>
    		</div>
    	</div> -->


    	<div class="goCreate">
		<p><router-link :to="{path:'/cir/create/to'}">去创建</router-link></p>
		<router-view></router-view>		
	</div>

    </div>
</template>
<script>
export default {
  name:"CirCreate",
  data(){
    return{
    	CirCreate:[]
    }
  },
  created(){
    this.$axios.get('/CirCreate').then(res=>{
        this.CirCreate = res .data.chat;
    });
   
  }

}
</script>

<style scope lang=less>
.cirCreate .title{
	height:68/75rem;
	line-height: 68/75rem;
	font-size: 18/75rem;
}
.cirCreate .title img{
	width: 10/75rem;
             height: 35/75rem;
	margin:16/75rem 6/75rem 0 20/75rem;
	vertical-align: top;
}
.cirCreate .title .maybe{
	display:inline-block;
	width: 200/75rem;
}
.cirCreate .title .more{
	display:inline-block;
	margin-left:408/75rem; 
}
.cirCreate .title .more img{
	width:18/75rem;
             height:30/75rem;
	margin:18/75rem 0 0 10/75rem;
	vertical-align: top;
}
.cirCreate .content{
	height:140/75rem;
	background-color: white;
	padding:20/75rem;
	margin-bottom:10/75rem;
	position:relative;
}
.cirCreate .content img{
	width:140/75rem;
	height:140/75rem;
}
.cirCreate .content .text{
	width:500/75rem;
	height:174/75rem;
	margin-left:20/75rem;
	display: inline-block;
	vertical-align: top;
}
.cirCreate .content .text .textUp{
	font-size: 26/75rem;
	margin-bottom:26/75rem;
}
.cirCreate .content .text .author{
	font-size: 18/75rem;
	color:#C1C1C1;
}
.cirCreate .content .text .huati{
	font-size: 14/75rem;
	color:white;
	background-color: #5483C2;
	position:absolute;
	right: 20/75rem;
	top:60/75rem;
	border-radius: 15/75rem;
	padding:4/75rem 6/75rem;
}
.cirCreate .content .text .textDown{
	font-weight: normal;
	width:475/75rem;
	height:60/75rem;
	margin-top: 12/75rem;
	font-size: 14/75rem;
	line-height: 1.4em;
	overflow: hidden;
}
.cirCreate .goCreate{
	height:70/75rem;
	line-height:70/75rem; 
	width: 100%;
	font-size: 28/75rem;
	position:fixed;
	bottom:110/75rem;
	padding:0 20/75rem;
	text-align: center;
}
.cirCreate .goCreate p{
	display:inline-block;
	width: 140/75rem;
	height: 50/75rem;
	line-height: 50/75rem;
	text-align: center;
	border:1/75rem solid #5483C2;
	border-radius: 8/75rem;
}
</style>