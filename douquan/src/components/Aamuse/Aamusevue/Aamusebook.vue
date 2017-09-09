<template>
     <div>
		 <div class="newBook">
	 	<div class="shuDi">
	 	<span>新书速递</span>
        <router-link :to="{path:'/amuse/book/delivery',query:{bookType:'newBook'}}">更多 <img src="../../../../static/img/right.png" ></router-link>
	 	</div>
            <router-link v-for="(newBook,index) in newBooks" :key="index" :to="{path:'/amuse/book/delivery/details',query:{bookMess:newBook.name}}" tag="div" class="message" >
	 		    <div class="messLeft">
	 			<img :src="newBook.data">
	 			</div>
                <div class="messRight">
	 			<p>{{newBook.title}}</p>
	 			<p>作者：{{newBook.autor}}</p>
	 			<p>评论数:{{newBook.num}}</p>
	 			</div>
	 		</router-link>

       <router-view></router-view>
	 </div>

	  <div class="newBook">
	 	<div class="shuDi">
	 	<span>杂志速食</span>
        <router-link :to="{path:'/amuse/book/delivery',query:{bookType:'magain'}}">更多 <img src="../../../../static/img/right.png" > </router-link>
	 	</div>
            <router-link v-for="(magain,index) in magains" :key="index" :to="{path:'/amuse/book/delivery/details',query:{bookMess:magain.name}}" tag="div" class="message" >
	 		    <div class="messLeft">
	 			<img :src="magain.data">
	 			</div>
                <div class="messRight">
	 			<p>{{magain.title}}</p>
	 			<p>作者：{{magain.autor}}</p>
	 			<p>评论数:{{magain.num}}</p>
	 			</div>
	 		</router-link>

	 </div>
     <div class="hotBook">
             <p>热书分类</p>
             <div class="imgBox">
             <img src="../../../../static/img/book20.png">
             <img src="../../../../static/img/book21.png">
             <img src="../../../../static/img/book22.png">
             </div>
             <div class="bgBox">
             	 <span>传记名著</span>
             	 <span>青春宫情</span>
             	 <span>成功励志</span>
             </div>
     </div>
	 </div>
</template>
<script type="text/javascript">
     import getUrl from '../../../utils/getUrl.js';
	 export default{
	 	name:'Vidio',
	 	data(){
	 		return{
	 			newBooks:null,
	 			magains:null,
	 		}
	 	},
	 	methods:{

	 	},
	 	created(){
	 		this.$axios.get(getUrl.getUrl()).then(res=>{
	 			  this.newBooks=res.data.newBook.splice(0,2);
	 			  this.magains= res.data.magain.splice(0,2);			
	 		})
	 	}
	 }
</script>
<style lang="less" scoped>
	.newBook{background:white;margin-top:24/75rem;overflow:hidden;
       a{float:right;margin-right:26/75rem;}
       .messRight,.messLeft{float:left;
       	 font-size:25/75rem;
       	 p{margin-top:19/75rem;}
       	 p:last-child{margin-top:40/75rem;}
         img{width:90/75rem;height:160/75rem;}
       }

       .messLeft{margin-right:25/75rem;}
       .message{margin:30/75rem 0 30/75rem 20/75rem;overflow:hidden;float:left;width:355/75rem;}
       .messLeft{margin-right:18/75rem;}
       .message{margin:30/75rem 0 41/75rem 20/75rem;overflow:hidden;float:left;width:355/75rem;}
       .shuDi{margin:45/75rem 23/75rem;
       	img{width:26/75rem;height:30/75rem;vertical-align: middle;margin-left:8/75rem;}
           a{color:#5483c2;}
         }
      }
      .hotBook{background:white;margin-top:24/75rem;overflow:hidden;position:relative;
      	        p{margin:45/75rem 0 40/75rem 20/75rem;}
      	        .imgBox{
      	        	img{width:230/75rem;height:300/75rem;margin-left:10/75rem;}
      	        }                
                .bgBox{width:10rem;height:300/75rem;background:rgba(0,0,0,0.3);position:absolute; top:118/75rem;
                	span{position:absolute;color:black;top:90/75rem;}
                	span:first-child{left:70/75rem;}
                	span:nth-child(2){left:300/75rem;}
                	span:last-child{left:550/75rem;}
                }
      }
</style>