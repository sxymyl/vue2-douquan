<template>
  <div id="app">
    <router-view></router-view>
    <ul class="nav">
      <li ><router-link :to="{path:'/'}">
           <img src="./components/Circle/image/zhuye.png" alt=""><br>
            <span >首页</span> 
      </router-link>
      </li >
      <li ><router-link :to="{path:'/cir'}">
          <img src="./components/Circle/image/quan.png" alt=""><br>
          <span> 逗圈</span>
        </router-link>
      </li>
      <li ><router-link :to="{path:'/amuse'}">
            <img src="./components/Circle/image/sytj7.png" alt=""><br>
            <span>论逗</span>
      </router-link></li>
      <li ><router-link :to="{path:'/my'}">
            <img src="./components/Circle/image/sytj9.png" alt=""><br>
            <span>我的</span>
      </router-link></li>
    </ul>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'app',
  data(){
    return {}
  },
}
</script>


<style lang=less>
.router-link-active{
  color:#5483C2;
}

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
  display: block;
}
body {
  line-height: 1;
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
a {
  color: inherit;
  text-decoration: none;
}
body {
  background: #f0f2f5;
  font-family: "Helvetica Neue",Helvetica,Arial,"Hiragino Sans GB","Hiragino Sans GB W3","Microsoft YaHei UI","Microsoft YaHei","WenQuanYi Micro Hei",sans-serif;
  color: #444;
  font-size: 40/75rem;
}
#app .nav{
   position: fixed;
   bottom: 0px;

   height:104/75rem;
   width:100%;
   background-color: white;
   font-size:30/75rem;

}
#app .nav li {
  display: inline-block;
  width:24%;
  text-align:center;
}
#app .nav li img{
  margin-top:14/75rem;
  width: 40/75rem;
  height: 40/75rem;
}
#app .nav li span{
  margin-top:10/75rem;
}
</style>
