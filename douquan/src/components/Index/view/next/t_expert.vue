<template>
  <div class="t_expert" >

       <div class="img">
    		<img src="../../img/qz3.png" alt="">
    	</div>

    	<div class="topics">
			<img src="../../img/st.png" alt="" class="st">
    		<span class="Adtopic">达人话题</span>
    		<router-link :to="{path:'/t_expert/expert'}">更多</router-link>
    		<img src="../../img/jt.png" alt="" class="jt">
    	</div>
	 	<router-view></router-view>
         <div class="UI">
     		<h2>你真的适合做一名UI设计师吗？</h2>
     		<div class="Forum">
     			<span>设计圈</span>
     			<span>2016-5-28</span>
     			<span>评论56774</span>
     		</div>
     		<h4>作为大有可为的UI设计行业，吸引了无数青年才俊的进入， 很多人也想从事UI设计，有点想从其他行业转行。</h4>
     </div>

     <div class="design">
     	<h2>做UI如何提高自身的审美</h2>
     	<div>
     		<span>设计圈</span>
     		<span>2017-3-28</span>
     		<span>评论：34578</span>
     	</div>
     	<img src="../../img/qz1.png" alt="">
     </div>

      <div class="design Kanna">
     	<h2>阴阳师美图来一波</h2>
     	<div>
     		<span>设阴阳师手游部落</span>
     		<span>2017-4-28</span>
     		<span>评论：236689</span>
     	</div>
     	<img src="../../img/qz2.png" alt="">
     </div>

  </div>
</template>

<script>
export default {
  name:"topic",
  data(){
    return{
    }
  }

}
</script>
<style lang=less>
	.t_expert{
		margin: 0;
 		padding: 0;
 		font-size: 50/75rem;
	}
	.t_expert .topics{
		height: 65/75rem; 
		line-height: 65/75rem;
		font-size: 20/75rem;
		margin-top: -15/75rem;
	}
	.t_expert>.img>img{
 		width: 10rem;
 		height: 270/75rem;
 	}
	.t_expert .topics .st{
		vertical-align: middle;
		margin:0 20/75rem;
		width: 10/75rem;
		height: 40/75rem;
	}
	.jt{
		vertical-align: middle;
		height: 30/75rem;
		margin-top: -5/75rem;
		margin-left: 17/75rem;
	}
	.t_expert .topics .Adtopic{
		margin-right: 490/75rem;
	}
	.t_expert .UI,.t_expert .design{
		height: 267/75rem;
		background: white;
	}
	.t_expert  .UI h2,.t_expert .design h2{
		font-size: 33/75rem;
		font-weight: 700;
		margin-left: 22/75rem;
	}
	.t_expert .UI h4{
		font-size: 24/75rem;
		margin-left: 22/75rem;
		line-height: 40/75rem;
	}
	 .UI .Forum,.design div {
	 	margin-top: -50/75rem
	 }
	 .UI .Forum span,.t_expert .design span{
	 	font-size: 20/75rem;
	 	margin-left: 22/75rem;
		margin-right: 10/75rem;
		color: #c1c1c1;
	}
	.t_expert .design{
		margin-top: 10/75rem;
		position: relative;
	}
	.t_expert .design img{
		position: absolute;
		top:31/75rem;
		left:541/75rem;
		width: 200/75rem;
		height: 200/75rem;
	}
	.Kanna{
		margin-bottom: 45/75rem;
	}
	
</style>
