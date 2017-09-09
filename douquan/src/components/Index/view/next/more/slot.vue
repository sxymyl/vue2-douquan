<template>
  <div class="Slot">
  	<div class="theme">
  		<router-link :to="{path:'/t_slot'}">
  		<img src="../../../img/hjt.png" alt="" class="hjt">
  		</router-link>
  		<span>今日槽点</span>
  		<img src="../../../img/dd.png" alt="" class="dd">
  	</div>

  	<div class="Shits">
  		<img src="../../../img/jrcd2.png" alt="" class="dxq">
  		<span>逗小趣</span>
  		<p>
  		<span>@逗小趣 </span>希特勒自传《我的奋斗》进日本教材，日本网友：政府疯了！
  		</p>
  		<p class="Shits_more">#逗趣放槽点#</p>
  		<img src="../../../img/xtl.png" alt="" class="xtl">
  	</div>

  	<div class="topics">
		<img src="../../../img/st.png" alt="" class="st">
    	<span class="Adtopic">评论（124567）</span>
    </div>

    <div class="discuss" v-for="data in getSlot" :id='data.id'>
      <h2>{{data.title}}<span>{{data.time}}</span></h2>
      <img :src="data.img" alt="">
      <span>{{data.oo}}</span>
    </div>

  </div>
</template>

<script>
 import getSlot from '../../../../../utils/getUrl.js';
export default {
  name:"topic",
  data(){
    return{
      getSlot:null
    }
  },
  created(){
        this.$axios.get(getSlot.getSlot()).then(res=>{
         this.getSlot=res.data.comment;
         console.log(this.getSlot)
    })
  }

}
</script>

<style scope lang=less>
	.Slot .theme{
 		width: 100%;
 		height: 89/75rem;
 		background: white;
 		line-height:89/75rem;
 		border-bottom: 1px solid #aaa;
 	}
 	.Slot .theme .hjt{
 		margin-left: 20/75rem;
 		vertical-align: middle;
 		width: 21/75rem;
 	}
 	.Slot .theme .dd{
 		margin-left: 195/75rem;
 		width: 63/75rem;
 	}
 	.Slot .theme span{
 		margin-left: 195/75rem;
 		font-size: 54/75rem;
 		font-weight: 700;
 		width: 21/75rem;
 	}
 	.Slot .Shits{
 		height:565/75rem;
 		background: white;
 	}
 	.Slot .Shits .dxq,.Slot .discuss img{
 		margin-left: 20/75rem;
 		vertical-align: middle;
    width: 55/75rem;

 	}
 	.Slot .Shits>span{
 		font-size: 22/75rem;
 		font-weight: 700;
 	}
  .Slot .Shits .xtl{
    width: 405/75rem;
    height: 295/75rem;
  }
 	.Slot .Shits>p{
 		/*margin:20/75rem;*/
 	}
 	.Slot .Shits>p>span{
 		font-size: 23/75rem;
 		color: #a1a1a1;
 		margin:0 20/75rem;
 	}
 	.Slot .Shits>p{
 		font-size: 21/75rem;
 		font-weight: 700;
 	}
 	.Shits_more{
 		margin-left: 120/75rem;
 		color:#a1a1a1;
 	}
 	.Slot .Shits img{
		margin-left: 170/75rem;
		margin-top: 25/75rem;
 	}

 	.Slot .topics{
		height: 69/75rem;
		line-height: 69/75rem;
		font-size: 20/75rem;
	}
	.Slot .topics .st{
		vertical-align: middle;
		margin:0 20/75rem;
	}
	.Slot .discuss{
		background: white;
		height: 114/75rem;
		margin-top: 20/75rem;
	} 
	.Slot .discuss span{
		font-size: 20/75rem;
 		color:#a1a1a1;
	}
	.Slot .discuss h2 span{
		margin-left: 20/75rem;
 		color:#a1a1a1;
	}
	.Slot .discuss h2{
		margin-left: 20/75rem;
		font-size: 29/75rem;
		font-weight: 700;
		padding-top: 21/75rem;
    padding-bottom: 10/75rem;
	}
	#com4{
		margin-bottom: 105/75rem;
		border-bottom: 1px solid #a1a1a1;
	}

</style>
