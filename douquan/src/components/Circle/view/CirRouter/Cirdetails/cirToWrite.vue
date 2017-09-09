<template>
	<div class="cirToWrite">
		<div class="head">
			<router-link :to="{path:'/expert/mycir'}"><img src="../../../image/fh.png" alt="图片加载失败"></router-link>
			<router-view></router-view>
			<span>编辑新话题</span>
		</div>
		<div class="con">
			<p>添加标题</p>
			<span>添加内容</span>
		</div>
	</div>
</template>
<script>
export default {
  name:"CirToWrite",
  data(){
    return{
      id:1
    }
  }
}
</script>
<style scope lang=less>
.cirToWrite{
	height:1330/75rem;
	background-color: white;
}
.cirToWrite .head{
	height:86/75rem;
	line-height: 86/75rem;
	border-bottom:2/75rem solid #B7B7B7;
	background-color: white;
}
.cirToWrite .head img{
	width: 18/75rem;
	height: 30/75rem;
	margin-left: 20/75rem;
	margin-right: 236/75rem;
}
.cirToWrite .head span{
	font-size: 32/75rem;
}
.cirToWrite .con{
	padding:20/75rem;
	color:#B5B5B5;
}	
.cirToWrite .con p{
	font-size: 28/75rem;
	padding-bottom: 20/75rem;
	border-bottom: 1/75rem solid #b5b5b5;
}
.cirToWrite .con span{
	font-size:18/75rem;
}
</style>

