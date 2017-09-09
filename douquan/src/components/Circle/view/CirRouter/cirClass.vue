<template>
    <div class= "cirClass">
    	<div class="title">
    		<img src="../../image/小竖条.png" alt="图片加载失败">
    		<span class="maybe">今日推荐</span>
    		<div class="more">
    			<span>更多</span>
    			<img src="../../image/jt.png" alt="图片加载失败">
    		</div>
    	</div>
    	<div class="content">
    		<ul> 
                                       <li v-for="(data,index) in CirClassa" v-bind:class='data.id'>
                                                   <img v-bind:src='data.img' alt="图片加载失败">
                                                   <p>{{data.title}}</p>
                                                   <span>{{data.menber}}</span>
                                       </li>
    			<!-- <li>
    				<img src="../../image/社恐.png" alt="图片加载失败">
    				<p>社交恐惧症</p>
    				<span>53569个恐友</span>
    			</li>
    			<li class="mid">
    				<img src="../../image/都知道.png" alt="图片加载失败">
    				<p>我们什么都…</p>
    				<span>103249个知友</span>
    			</li>
    			<li>
    				<img src="../../image/装.png" alt="图片加载失败">
    				<p>文艺青年装…</p>
    				<span>15693个装B玩意</span>
    			</li> -->
    		</ul>
    	</div>
    	

            <div class="title">
            <img src="../../image/小竖条.png" alt="图片加载失败">
            <span class="maybe">情感</span>
            <div class="more">
                <span>更多</span>
                <img src="../../image/jt.png" alt="图片加载失败">
            </div>
        </div>
        <div class="content">
            <ul>
                <li v-for="(data,index) in CirClassb" v-bind:class='data.id'>
                    <img v-bind:src="data.img" alt="图片加载失败">
                    <p>{{data.title}}</p>
                    <span>{{data.menber}}</span>
                </li>
               <!--   <li>
                    <img src="../../image/一个人.png" alt="图片加载失败">
                    <p>我习惯了一…</p>
                    <span>63589个玻璃心</span>
                </li>
                <li class="mid">
                    <img src="../../image/陌.png" alt="图片加载失败">
                    <p>亲爱的陌生人</p>
                    <span>125319个陌陌</span>
                </li>
                <li>
                    <img src="../../image/前任.png" alt="图片加载失败">
                    <p>我的极品前任</p>
                    <span>23369个成员</span>
                </li> -->
            </ul>
        </div>


        <div class="title">
            <img src="../../image/小竖条.png" alt="图片加载失败">
            <span class="maybe">兴趣</span>
            <div class="more">
                <span>更多</span>
                <img src="../../image/jt.png" alt="图片加载失败">
            </div>
        </div>
        <div class="content">
            <ul>
                <li v-for="(data,index) in CirClassc" v-bind:class='data.id'>
                    <img v-bind:src="data.img" alt="图片加载失败">
                    <p>{{data.title}}</p>
                    <span>{{data.menber}}</span>
                </li>
               <!--  <li>
                    <img src="../../image/背包客.png" alt="图片加载失败">
                    <p>我习惯了一…</p>
                    <span>63589个玻璃心</span>
                </li>
                <li class="mid">
                    <img src="../../image/maotouy.png" alt="图片加载失败">
                    <p>亲爱的陌生人</p>
                    <span>125319个陌陌</span>
                </li>
                <li>
                    <img src="../../image/爱看.png" alt="图片加载失败">
                    <p>我的极品前任</p>
                    <span>23369个成员</span>
                </li> -->
            </ul>
        </div>


    </div>
</template>
<script>
export default {
  name:"CirClass",
  data(){
    return{
        CirClassa:[],
        CirClassb:[],
        CirClassc:[]
    }
  },
  created(){
    this.$axios.get('/CirClassa').then(res=>{
        this.CirClassa = res .data.chat;
    });
    this.$axios.get('/CirClassb').then(res=>{
        this.CirClassb = res.data.emotion;
    });
     this.$axios.get('/CirClassc').then(res=>{
        this.CirClassc = res.data.interst;
    })

  }
}
</script>

<style scope lang=less>
.cirClass .title{
    height:68/75rem;
    line-height: 68/75rem;
    font-size: 18/75rem;
}
.cirClass .title img{
             width: 10/75rem;
             height: 35/75rem;
    margin:16/75rem 6/75rem 0 20/75rem;
    vertical-align: top;
}
.cirClass .title .maybe{
    display:inline-block;
    width: 189/75rem;
    font-size: 20/75rem;
}
.cirClass .title .more{
    display:inline-block;
    margin-left:408/75rem; 
}
.cirClass .title .more img{
    width:18/75rem;
    height:30/75rem;
    margin:18/75rem 0 0 10/75rem;
    vertical-align: top;
}
.cirClass .content{
	height:285/75rem;
	background-color: white;
	padding:20/75rem;
	margin-bottom:10/75rem;
}
.cirClass .content ul{
            height:285/75rem;
}
.cirClass .content li{
	width: 196/75rem;	
	margin: 0 ;
}
.cirClass .content li img{
	height:197/75rem;
	width: 197/75rem;
}
.cirClass .content li p{
	font-size: 25/75rem;
            line-height:  25/75rem;
            margin:-10/75rem 0 -10/75rem 0;
}
.cirClass .content li span{
             display: inline-block;
             width: 198/75rem;
	font-size: 18/75rem;
	color:#C1C1C1;
             line-height:  18/75rem;
             font-weight: normal;
}
.cirClass .content ul .mid{
	margin:0 54/75rem;
}
</style>