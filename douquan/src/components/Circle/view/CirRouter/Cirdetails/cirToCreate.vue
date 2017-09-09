<template>
	<div class="cirToCreate">
		<div class="head">
			<router-link :to="{path:'/cir/create'}"><img src="../../../image/fh.png" alt="图片加载失败"></router-link>
			<router-view></router-view>
			<span>编辑逗圈资料</span>
		</div>
		<div class="con">
			<p class="jia">+</p>
			<p class="addIcon">添加头像</p>
			<p class="cirName">填写逗圈名称（2-18个字）</p>
			<p class="description">填写简介（0-56个字）</p>
			<p class="submit">提交</p>
		</div>
		<div class="tongyi">
			<div class="quan">
				<img src="../../../image/椭圆 1.png" alt="图片加载失败">
			</div>
			<span class="gray">我已阅读并同意</span><span class="black">服务声明</span>
		</div>
	</div>
</template>


<script>
export default {
  name:"CirToCreate",
  data(){
    return{
      id:1
    }
  }
}
</script>


<style scope lang=less>
.cirToCreate{
	background-color: white;
}
.cirToCreate .head{
	height:86/75rem;
	line-height: 86/75rem;
	border-bottom:2/75rem solid #B7B7B7;
	background-color: white;
}
.cirToCreate .head img{
	width: 18/75rem;
	height: 30/75rem;
	margin-left: 20/75rem;
	margin-right: 236/75rem;
}
.cirToCreate .head span{
	font-size: 32/75rem;
}
.cirToCreate .con{
	text-align: center;
	color:#B7B7B7;
}
.cirToCreate .con .jia{
	font-size: 70/75rem;
	color:#B7B7B7;
	margin-top: 254/75rem;
	margin-bottom: 30/75rem;
}
.cirToCreate .con .addIcon{
	font-size: 32/75rem;
	color:#B7B7B7;
}
.cirToCreate .con .cirName{
	width:510/75rem;
	margin:228/75rem auto 50/75rem auto;
	font-size: 28/75rem;
	padding:16/75rem 32/75rem;
	border-bottom: 1/74rem solid #999;
}
.cirToCreate .con .description{
	font-size: 28/75rem;
}
.cirToCreate .con .submit{
	width:360/75rem;
	height:70/75rem;
	line-height:70/75rem; 
	margin:285/75rem auto 30/75rem auto;
	background-color: #B7B7B7;
	border-radius: 4/75rem;
	color:white;
}
.cirToCreate .tongyi{
	width:360/75rem;
	margin:0 auto;
	height:320/75rem;
}
.cirToCreate .tongyi .quan{
	vertical-align:top;
	height:25/75rem;
	line-height:25/75rem;
	width: 25/75rem;
	text-align: center;
	border:1/75rem solid #b7b7b7;
	border-radius: 50%;	
	display: inline-block;
}
.cirToCreate .tongyi .quan img{
	height:18/75rem;
	width:18/75rem;
	margin-bottom: 4/75rem;
}
.cirToCreate .tongyi .gray{
	vertical-align: top;
	color:#b7b7b7;
	margin:0 18/75rem 0 6/75rem;
	font-size: 25/75rem;
}
.cirToCreate .tongyi .black{
	vertical-align: top;
	font-size: 25/75rem;
}
</style>