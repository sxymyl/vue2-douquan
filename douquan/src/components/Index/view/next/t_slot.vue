<template>
  <div class="t_slot">

    <div class="topics">
	 	<img src="../../img/st.png" alt="" class="st">
     	<span class="Adtopic">逗趣放槽点</span>
     	<router-link :to="{path:'/t_slot/slot'}">更多</router-link>
     	<img src="../../img/jt.png" alt="" class="jt">
    </div>
	 <router-view></router-view>

    <div class="hitler" v-for="(data,index) in getTslot" :id='data.id'>
    	<h2>{{data.title}}</h2>
    	<img v-bind:src='data.img'>
    	<p><span>{{data.transmit}}</span><span>{{data.comment}}</span></p>
    </div>
  </div>
</template>

<script>
 import getTslot from '../../../../utils/getUrl.js';
export default {
  name:"topic",
  data(){
    return{
    	getTslot:null
    }
  },
  created(){
  	this.$axios.get(getTslot.getTslot()).then(res=>{
  		this.getTslot=res.data.slot;
  	})
  }

}
</script>
<style lang=less>
	.t_slot{
		margin: 0;
 		padding: 0;
 		font-size: 20/75rem;
	}
	.t_slot .topics{
		height: 48/75rem;
		line-height: 68/75rem;
		font-size: 20/75rem;
	}
	.t_slot .topics .st{
		vertical-align: middle;
		margin:0 20/75rem;
		width: 10/75rem;
	}
	.jt{
		vertical-align: middle;
		height: 30/75rem;
		margin-left: 17/75rem;
	}
	.t_slot .topics .Adtopic{
		margin-right: 450/75rem;
	}
	.t_slot .hitler{
		width: 100%;
		height: 350/75rem;
		background: white;
	}
	.t_slot .hitler h2,.t_slot #cp h2{
		line-height: 50/75rem;
	 	font-size: 33/75rem;
		font-weight: 700;
		margin-left: 20/75rem;
		margin-top: 25/75rem;
	}
	.t_slot .hitler img{
		margin-left: 20/75rem;
		vertical-align: top;
		width: 200/75rem;
		height: 200/75rem;
		margin-top: 25/75rem;
	}
	.t_slot .hitler p{
		display: inline-block;
	}
	.t_slot .hitler p span{
		margin: 0 35/75rem 15/75rem;
	}
	.t_slot #cp{
		width: 100%;
		height: 400/75rem;
		background: white;
	}
	#cyx{
		margin-bottom: 45/75rem;
	}
</style>
