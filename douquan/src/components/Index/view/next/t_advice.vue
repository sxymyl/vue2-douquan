<template>
  <div class="t_advice">

    <div class="img">
    	<img src="../../img/sytj1.png" alt="">
    </div>

    <div class="topics">
	<img src="../../img/st.png" alt="" class="st">
    <span class="Adtopic">话题推荐</span>
    <router-link :to="{path:'/t_advice/adtopic'}">更多</router-link>
    <img src="../../img/jt.png" alt="" class="jt">
    </div>
	 <router-view></router-view>
    <div class="dog">
   	 <h2>狗狗也有社交恐惧症吗？</h2>
   	 <div class="single_dog">
   	 	<span>单身狗聚集地</span>
   	 	<span>2017-4-17</span>
   	 	<span>评论数：4328</span>
   	 </div>
    </div>

     <div class="deer_boy">
     	<h2>没有想到你是这样的小鹿男！</h2>
     	<div class="Kanna">
     		<span>阴阳师手游部落</span>
     		<span>2016-2-28</span>
     		<span>评论：6890</span>
     	</div>
     	<h4>小鹿男强势来写，爽到你不敢想象</h4>
     	<img src="../../img/sytj2.png" alt="">
     </div>

     <div class="music">
		<img src="../../img/st.png" alt="" class="st">
     	<span>最新单曲</span>
     	<div>
     		<img src="../../img/sytj6.png" alt="" class="music_img">
     		<img src="../../img/sytj3.png" alt="" class="music_img">
     		<img src="../../img/sytj4.png" alt="" >
     	</div>
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
<style scope lang=less>
 	.t_advice{
 		margin: 0;
 		padding: 0;
 		font-size: 50/75rem;
 	}
 	.t_advice>.img img{
 		width: 10rem;
 		height: 270/75rem;
 	}
	.t_advice .topics{
		height: 65/75rem;
		line-height: 65/75rem;
		font-size: 20/75rem;
		margin-top: -15/75rem;
	}
	.t_advice .topics .st{

		vertical-align: middle;
		margin:0 20/75rem;
		width: 10/75rem;

	}
	.t_advice .topics .Adtopic{
		margin-right: 450/75rem;
	}
	.jt{
		vertical-align: middle;
		height: 30/75rem;
		margin-top: -5/75rem;
		margin-left: 17/75rem;
	}
	.t_advice .dog{
		width: 100%;
		height: 215/75rem;
		background: white;
	}
	.t_advice .dog h2,.t_advice .deer_boy h2{
		font-size: 33/75rem;
		font-weight: 700;
		margin-left: 22/75rem;
	}
	.t_advice .dog .single_dog,.t_advice .deer_boy .Kanna{
		font-size: 24/75rem;
		margin-left: 22/75rem;
		margin-top:-20/75rem;
	}
	.t_advice .dog .single_dog span{
		margin-right: 40/75rem;
		color: #c1c1c1;
	}
	.t_advice .deer_boy{
		height: 267/75rem;
		background: white;
		margin-top: 10/75rem;
		position: relative;
	}
	.t_advice .deer_boy h4{
		font-size: 24/75rem;
		margin-left: 22/75rem;
		margin-top:-45/75rem;

	}
	.t_advice .deer_boy span{
		margin-right: 10/75rem;
		color: #c1c1c1;
		margin-top: 30/75rem;
	}
	.t_advice .deer_boy img{
		position: absolute;
		top:21/75rem;
		left:541/75rem;
		width: 200/75rem;
		height: 195/75rem
	}
	.t_advice .music{
		margin-bottom: 45/75rem;
	}
	.t_advice .music .st{
		height: 35/75rem;
		margin-left: 20/75rem;
		vertical-align: middle;

	}
	.t_advice .music span{
		font-size: 20/75rem;
		font-weight: 700;
	
	}
	.t_advice .music>div img{
		width: 197/76rem;
		height: 145/75rem;
	}
	.t_advice .music div{
		margin-left: 20/75rem;
	}
	 .t_advice .music .music_img{
		margin-right: 40/75rem;
	 }
</style>
