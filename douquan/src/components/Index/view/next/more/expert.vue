<template>
  <div class="Expert">
      <div class="theme">
        <router-link :to="{path:'/t_expert'}">
        <img src="../../../img/hjt.png" alt="" class="hjt">
        </router-link>
        <span>逗趣话题</span>
        <img src="../../../img/dd.png" alt="" class="dd">
      </div>
    <div class="handTour">
      <img src="../../../img/tj2.png" alt=" ">
      <span>阴阳师手游部落</span>
     <router-link :to="{path:'/expert/mycir'}">进入圈子<img src="../../../img/jt.png" alt=""></router-link>
    </div>
    <router-view></router-view>
    <div class="review">
      <h2>阴阳师美图来一波</h2>
      <img src="../../../img/22.png" alt="">
      <div>
        <p>2016-11-11</p>
      </div>
  </div>

  <div class="nj">
    <h2>鸟姐镇楼～</h2>
    <img src="../../../img/ht2.png" alt="">
  </div>

  <div class="topics">
    <img src="../../../img/st.png" alt="" class="st">
      <span class="Adtopic">评论（124567）</span>
  </div>

    <div class="discuss" v-for="data in getExpert">
      <h2>{{data.title}}<span>{{data.time}}</span></h2>
      <img :src="data.img" alt="">
      <span>{{data.oo}}</span>
    </div>

  <div class="input">
      <input type="text" placeholder="发表评论">
      <button>发表</button>
    </div>
  </div>
</template>

<script>

 import getExpert from '../../../../../utils/getUrl.js';

export default {
  name:"topic",
  data(){
    return{
      getExpert:null
    }
  },
  created(){
    this.$axios.get(getExpert.getExpert()).then(res=>{
      this.getExpert=res.data.comment;
      console.log(this.getExpert)
    })
  }

}
</script>

<style scope lang=less>
  .Expert .theme{
    width: 100%;
    height: 89/75rem;
    background: white;
    line-height:89/75rem;
    border-bottom: 1px solid #aaa;
  }
  .Expert .theme .hjt{
    margin-left: 20/75rem;
    vertical-align: middle;
    width: 21/75rem;
  }
  .Expert .theme .dd{
    margin-left: 195/75rem;
    width: 63/75rem;
  }
  .Expert .theme span{
    margin-left: 195/75rem;
    font-size: 54/75rem;
    font-weight: 700;
    width: 21/75rem;
  }

  .Expert .handTour{
    width: 100%;
    height: 63/75rem;
    background: white;
    line-height:63/75rem;
    padding-bottom: 7/75rem;
  }
  .Expert .handTour a{
    font-size: 20/75rem;
    margin-left: 320/75rem;
  }
   .Expert .handTour a img{
    width: 20/75rem;
   }
  .Expert .handTour img,.Expert .discuss img{
    vertical-align: middle;
    margin-left: 20/75rem;
    width: 55/75rem;
  }
  .Expert .handTour span{
    font-size: 20/75rem;
    margin-left: 20/75rem;
    font-variant: 700;
  }
  .Expert .handTour .jt{
    margin-left: 450/75rem;
  }
  .Expert  .review{
    height: 158/75rem;
    margin-top: 10/75rem;
    background: white;
  }
  .Expert  .review div{
    display: inline-block;
  }
  .Expert  .review div p{
    font-size: 22/75rem;
  }
  .Expert  .review img{
    margin-left: 45/75rem;
    vertical-align: middle;
    width: 47/75rem;
  }
  .Expert  .review h2,{
    font-size: 34/75rem;
    margin-left: 20/75rem;
    font-weight: 700;
    margin-bottom: 22/75rem;
    padding-top: 22/75rem;
  }
  .Expert .nj{
    height: 518/75rem;
    background: white;
    margin-top: 10/75rem;
   
  }
  .Expert .nj h2{
    margin-left: 20/75rem;
    font-size: 34/75rem;
    font-weight: 700;
    padding: 22/75rem 0;

  }
  .Expert .nj img{
    margin-left: 173/75rem;
    width: 404/75rem;
    height: 404/75rem;
  }
  .Expert .topics{
    height: 49/75rem;
    line-height: 69/75rem;
    font-size: 20/75rem;
  }
  .Expert .topics .st{
    vertical-align: middle;
    margin:0 20/75rem;
  }
  .Expert .discuss{
    background: white;
    height: 114/75rem;
    margin-top: 20/75rem;
  }
  .Expert .discuss span{
    font-size: 20/75rem;
    color:#a1a1a1;
  }
  .Expertt.discuss h2 span{
    margin-left: 20/75rem;
    color:#a1a1a1;
  }
  .Expert .discuss h2{
    margin-left: 20/75rem;
    font-size: 29/75rem;
    font-weight: 700;
    padding-top: 21/75rem;
    padding-bottom: 10/75rem;
  }
  .input{
    margin-bottom: 100/75rem;
    text-align: center;
    background: white;
    border-top: 1px solid #aaa;
    height: 155/75rem; 
  }
  .input input{
    width: 712/75rem;
    height: 71/75rem;
    border-radius: 5/75rem;
    font-size: 29/75rem;
    border: 1px solid #aaa;
    margin-top: 15/75rem;
  }
  .input button{
    width: 100/75rem;
    margin-top: 10/75rem;
  }
</style>
