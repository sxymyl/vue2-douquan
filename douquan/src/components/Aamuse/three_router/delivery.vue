<template>
<div>
	<div class="deliveryHead">
	<router-link :to="{path:'/amuse/book'}"><img src="../../../../static/img/left.png"></router-link>
	<span>{{flag?'新书速递':'杂志速食'}}</span>
	</div>

	<div class="deliveryContainer">
		<router-link tag="div" v-for="(newBook,index) in newBooks" :to="{path:'/amuse/book/delivery/details',query:{bookMess:newBook.name}}"  :key="index" >
			<img :src="newBook.data">
            <p class="deliveryTitle">{{newBook.title}}</p>
            <p>评论数：{{newBook.num}}</p>
		</router-link>
	</div>
</div>	
</template>
<script type="text/javascript">
     import getUrl from '../../../utils/getUrl.js';
	 export default{
	 	 name:'delivery',
	 	 data(){
	 	 	return {
	 	 		newBooks:'',
	 	 		flag:true
	 	 	}
	 	 },
	 	 methods:{

	 	 },
	 	 created(){
	 	 	 if(this.$route.query.bookType=='magain'){
	 	 	 	  this.flag=false;
	 	 	 }
             this.$axios.get(getUrl.getUrl()).then(res=>{
             	  for(var i in res.data){
             	  	   if(i==this.$route.query.bookType){
             	  	   	     this.newBooks=res.data[i]
             	  	   }
             	  }
                  
             })
	 	 }
	 }
</script>
<style lang="less" scoped>
	 .deliveryHead{background: white;font-weight:800;text-align: center;padding-top: 9/75rem;height:87/75rem;line-height:87/75rem; overflow:hidden;
        img{float:left;margin:21/75rem;width:30/75rem;height:50/75rem;}
        span{margin-right:60/75rem;}
	   }
	   .deliveryContainer{width:700/75rem;margin:0 auto;}
	   img{width:188/75rem;height:240/75rem;}
	   .deliveryContainer div{display: inline-block;font-size: 30/75rem;margin: 30/75rem 0 20/75rem 35/75rem;

	   	.deliveryTitle{font-size:35/75rem;font-weight:500;}
         p{margin-top:20/75rem;}
	   	}
	
</style>