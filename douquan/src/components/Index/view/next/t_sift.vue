<template>
  <div class="t_sift">

   <div class="topics">
	 <img src="../../img/st.png" alt="" class="st">
     <span class="Adtopic">电视热评</span>
     <span>更多</span>
     <img src="../../img/jt.png" alt="" class="jt">
    </div>

    <div class="tv lkn" v-for="data in getTsift" :id='data.id'>
    	<img :src='data.img' alt="">
    	<div>
    		<h2>{{data.title}}</h2>
    		<p>{{data.content}}</p>
    		<p>{{data.comment}}</p>
    	</div>
    </div>

  	<div class="topics">
		 <img src="../../img/st.png" alt="" class="st">
  	   <span class="Adtopic">电影热评</span>
  	   <span>更多</span>
  	   <img src="../../img/jt.png" alt="" class="jt">
  	  </div>

  	<div class="movie dhxy">
    	<img src="../../img/jx1.png" alt="">
    	<div>
    		<h2>大话西游之大圣娶妻</h2>
    		<p>主演：周星驰、吴孟达、朱茵、罗家英</p>
    		<p>34566123人参与讨论</p>
    	</div>
    </div>
  </div>

</template>

<script>
 import getTsift from '../../../../utils/getUrl.js';
export default {
  name:"topic",
  data(){
    return{
    	getTsift:null
    }
  },
 created(){
  	this.$axios.get(getTsift.getTsift()).then(res=>{
  		this.getTsift=res.data.tv;
  	})
  }
}
</script>
<style lang=less>
	.t_siftt{
		margin: 0;
 		padding: 0;
 		font-size: 50/75rem;
	}
	.t_sift .topics{
		height: 68/75rem; 
		line-height: 68/75rem;
		font-size: 20/75rem;

	}
	.t_sift .topics .st{
		vertical-align: middle;
		margin:0 20/75rem;
		width: 10/75rem;
	}
	.jt{
		vertical-align: middle;
		height: 30/75rem;
		margin-left: 17/75rem;
	}
	.t_sift .topics .Adtopic{
		margin-right: 450/75rem;
	}
	 .t_sift .tv,.t_sift .movie{
	 	height: 230/75rem;
	 	width: 100%;
	 	background: white;
	 	padding-top:25/85rem;
	 }
	 .t_sift .tv div,.t_sift .movie div{
	 	display: inline-block;
	 	width: 540/75rem;
	 	margin-left: 27/75rem;
	 	vertical-align: top;
	 }
	 .t_sift .tv div p,.t_sift .movie div p{
	 	line-height: 40/75rem;
	 	margin-top: 19/75rem;
	 	color: #c1c1c1;
	 }
	 .t_sift .tv div h2,.t_sift .movie div h2{
	 	line-height: 50/75rem;
	 	font-size: 33/75rem;
		font-weight: 700;
	 }
	 .t_sift .tv img,.t_sift .movie img{
	 	vertical-align: top;
	 	margin-left: 16/75rem;
	 	width: 155/75rem;
	 	height: 205/75rem;
	 }
	 .ddby,.lkn{
	 	margin-top: 10/75rem;
	 }
	 .movie{
		margin-bottom: 45/75rem;
	}
</style>
