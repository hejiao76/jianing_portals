<template>
  <div class="global_box">
    <v-header></v-header>
    <!--<div class="global_box_top">-->
      <!--<div class="nav_top" style="background: #57a126; color: #FFFFFF;">-->
        <!--<div class="center_box">-->
          <!--您好，欢迎来到家宁装修网-->
          <!--<div class="where_box"><span class="iconfont icon-location"></span><span id="city">北京</span><span>【更换】</span></div>-->
          <!--<ul class="nav_right">-->
            <!--<a>-->
              <!--<li>官方微信 </li>-->
            <!--</a>-->
            <!--<a>-->
              <!--<li>工长入驻</li>-->
            <!--</a>-->
            <!--<a>-->
              <!--<li>工长登录</li>-->
            <!--</a>-->
            <!--<a>-->
              <!--<li>北京工装</li>-->
            <!--</a>-->
            <!--<a>-->
              <!--<li>北京家装</li>-->
            <!--</a>-->
          <!--</ul>-->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->
    <!--公用顶部end-->
    <div class="center_bc">
      <img class="bc_img_login" src="../assets/img/login_banner.jpg"  />
      <div class="login_box">
        <div class="top_logo"><img src="../assets/img/logo.png" /> <span>工长登录</span></div>
        <form action="" method="post">
          <div class="input_box">
            <span class="iconfont icon-ordinarymobile"></span>
            <input name="username" v-model="username" @keyup.enter.native="handleLogin" type="text" placeholder="请输入手机号" />
          </div>
          <div class="input_box" style="margin-top:20px ;">
            <span class="iconfont icon-mima"></span>
            <input name="password" v-model="password" type="password" placeholder="请输入密码" />
          </div>

          <a href="#" class="wangji_word">忘记密码?</a>
          <input  class="btn" v-on:click="_login" type="button" value="登录"/>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import api from '../fetch/api'
import * as _ from '../util/tool'
import header from "../components/header.vue"

export default {
    data() {
        return {
            username: '',
            password: ''
        }
    },
    components:{
      'v-header':header ,
    },
    methods: {
        ...mapActions({ setUserInfo: 'setUserInfo' }),

        // 用户登录
        _login() {
            //window.location.href="/static/test.html";
            if (!this.username || !this.password) {
                _.alert('请填写完整')
                return
            }
            let data = {
                username: this.username,
                password: this.password
            }
            this.$store.dispatch('setLoadingState', true)
            api.Login(data)
                .then(res => {
                    console.log(res)
                    if(res.success) {
                        // let userInfo = Object.assign()
                        this.$store.dispatch('setLoadingState', false)
                        this.setUserInfo(res.data)
                        this.$router.replace('/home')
                    }
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }
}
</script>
<style>
  @import "../assets/c/global.css";
  @import "../assets/c/login.css";
  @import "https://at.alicdn.com/t/font_adkaonfr6xvquxr.css";
</style>
<!--<style lang="scss" scoped>-->
<!--@import '../assets/css/function';-->


<!--.login{-->
    <!--width:100%;-->
    <!--height: 100%;-->
    <!--overflow:hidden;-->
    <!--background-color: #323542;-->
    <!--padding-bottom: px2rem(260px);-->
    <!--.title{-->
        <!--width:100%;-->
        <!--height:auto;-->
        <!--overflow:hidden;-->
        <!--font-size:18px;-->
        <!--text-align:center;-->
        <!--height:px2rem(200px);-->
        <!--color:#fff;-->
    <!--}-->
    <!--.coordinates-icon{-->
        <!--width:px2rem(400px);-->
        <!--height:px2rem(250px);-->
        <!--margin:px2rem(50px) auto;-->
        <!--position:relative;-->
        <!--.coordinates{-->
            <!--width:px2rem(150px);-->
            <!--overflow:hidden;-->
            <!--position:absolute;-->
            <!--z-index:8;-->
            <!--left: 32%;-->
            <!--img{-->
                <!--width:100%;-->
                <!--height:auto;-->
            <!--}-->
        <!--}-->
        <!--.circle-1-1{-->
            <!--width:100%;-->
            <!--height:px2rem(150px);-->
            <!--overflow:hidden;-->
            <!--border:1px solid rgba(255,255,255,0.5);-->
            <!--border-radius:100%;-->
            <!--background-color:#3a3d4a;-->
            <!--position:absolute;-->
            <!--bottom:0;-->
            <!--z-index:1;-->
            <!--opacity:0;-->
        <!--}-->
        <!--.circle-2-2{-->
            <!--width:px2rem(230px);-->
            <!--height:px2rem(80px);-->
            <!--overflow:hidden;-->
            <!--border:1px solid rgba(255,255,255,0.4);-->
            <!--border-radius:100%;-->
            <!--background-color:#4e515c;-->
            <!--left:75%;-->
            <!--margin-left:px2rem(-217px);-->
            <!--bottom:px2rem(35px);-->
            <!--position:absolute;-->
            <!--z-index:2;-->
            <!--opacity:0;-->
        <!--}-->
        <!--.circle-3-3{-->
            <!--width:px2rem(130px);-->
            <!--height:px2rem(50px);-->
            <!--overflow:hidden;-->
            <!--border:1px solid rgba(255,255,255,0.3);-->
            <!--border-radius:100%;-->
            <!--background-color:#71747d;-->
            <!--z-index:3;-->
            <!--left:35%;-->
            <!--margin-left:px2rem(-8px);-->
            <!--bottom:px2rem(50px);-->
            <!--position:absolute;-->
            <!--opacity:0;-->
        <!--}-->
    <!--}-->
    <!--.login-form{-->
        <!--width:px2rem(600px);-->
        <!--height:auto;-->
        <!--margin:0 auto;-->
        <!--.common-div{-->
            <!--width:100%;-->
            <!--height:px2rem(80px);-->
            <!--overflow:hidden;-->
            <!--border-radius:4px;-->
            <!--margin-bottom: px2rem(50px);-->
            <!--&gt;.common-icon{-->
                <!--float:left;-->
                <!--width:px2rem(40px);-->
                <!--height:px2rem(40px);-->
                <!--line-height: px2rem(40px);-->
                <!--overflow:hidden;-->
                <!--margin:px2rem(20px);-->
                <!--text-align: center;-->
                <!--img{-->
                    <!--width:100%;-->
                    <!--height:auto;-->
                <!--}-->
            <!--}-->
            <!--&gt;input{-->
                <!--float:left;-->
                <!--line-height: px2rem(80px);-->
                <!--background-color:transparent;-->
                <!--border:none;-->
                <!--outline:none;-->
                <!--font-size:16px;-->
                <!--color:#fff;-->
            <!--}-->
        <!--}-->
        <!--.user-name,.user-pasw{-->
            <!--background-color:rgba(255,255,255,0.1);-->
        <!--}-->
        <!--.login-btn{-->
            <!--background-color:#0bd38a;-->
            <!--color:#fff;-->
            <!--font-size:20px;-->
            <!--text-align:center;-->
            <!--height:px2rem(100px);-->
            <!--line-height:px2rem(100px);-->
            <!--margin-bottom: px2rem(50px);-->
            <!--border-radius:4px;-->
        <!--}-->
    <!--}-->
    <!--.forgets{-->
        <!--width:px2rem(600px);-->
        <!--height:auto;-->
        <!--margin:0 auto;-->
        <!--&gt;a{-->
            <!--color:#fff;-->
            <!--opacity:0.2;-->
            <!--font-size:16px;-->
            <!--+a{-->
                <!--float:right;-->
            <!--}-->
        <!--}-->
    <!--}-->
<!--}-->

<!--.topAct{-->
    <!--animation:topAct 3s ease-in-out infinite;-->
    <!-- -webkit-animation:topAct 3s ease-in-out infinite;-->
    <!-- -moz-animation:topAct 3s ease-in-out infinite;-->
    <!-- -o-animation:topAct 3s ease-in-out infinite;-->
    <!-- -ms-animation:topAct 3s ease-in-out infinite;-->
<!--}-->
<!--@keyframes topAct-->
<!--{-->
    <!--0% {top:px2rem(-100px);}-->
    <!--50% {top:px2rem(-30px);}-->
    <!--100%{top:px2rem(-100px);}-->
<!--}-->
<!--@-webkit-keyframes topAct-->
<!--{-->
    <!--0% {top:px2rem(-100px);}-->
    <!--50% {top:px2rem(-30px);}-->
    <!--100%{top:px2rem(-100px);}-->
<!--}-->
<!--@-moz-keyframes topAct-->
<!--{-->
    <!--0% {top:px2rem(-100px);}-->
    <!--50% {top:px2rem(-30px);}-->
    <!--100%{top:px2rem(-100px);}-->
<!--}-->

<!--.circle-show{-->
    <!--animation:circleShow 3s ease-in-out infinite 1s;-->
    <!-- -webkit-animation:circleShow 3s ease-in-out infinite 1s;-->
    <!-- -moz-animation:circleShow 3s ease-in-out infinite 1s;-->
    <!-- -ms-animation:circleShow 3s ease-in-out infinite 1s;-->
    <!-- -o-animation:circleShow 3s ease-in-out infinite 1s;-->
<!--}-->
<!--@keyframes circleShow-->
<!--{-->
    <!--0% {opacity:0;}-->
    <!--50% {opacity:1;}-->
    <!--100%{opacity:0;}-->
<!--}-->
<!--@-webkit-keyframes circleShow-->
<!--{-->
    <!--0% {opacity:0;}-->
    <!--50% {opacity:1;}-->
    <!--100%{opacity:0;}-->
<!--}-->
<!--@-moz-keyframes circleShow-->
<!--{-->
    <!--0% {opacity:0;}-->
    <!--50% {opacity:1;}-->
    <!--100%{opacity:0;}-->
<!--}-->

<!--.circle-show-1{-->
    <!--animation:circleShow1 3s ease-in-out infinite 1.2s;-->
    <!-- -webkit-animation:circleShow1 3s ease-in-out infinite 1.2s;-->
    <!-- -moz-animation:circleShow1 3s ease-in-out infinite 1.2s;-->
    <!-- -ms-animation:circleShow1 3s ease-in-out infinite 1.2s;-->
    <!-- -o-animation:circleShow1 3s ease-in-out infinite 1.2s;-->
<!--}-->
<!--@keyframes circleShow1-->
<!--{-->
    <!--0% {opacity:0;}-->
    <!--50% {opacity:1;}-->
    <!--100%{opacity:0;}-->
<!--}-->
<!--@-webkit-keyframes circleShow1-->
<!--{-->
    <!--0% {opacity:0;}-->
    <!--50% {opacity:1;}-->
    <!--100%{opacity:0;}-->
<!--}-->
<!--@-moz-keyframes circleShow1-->
<!--{-->
    <!--0% {opacity:0;}-->
    <!--50% {opacity:1;}-->
    <!--100%{opacity:0;}-->
<!--}-->

<!--.circle-show-2{-->
    <!--animation:circleShow2 3s ease-in-out infinite 1.4s;-->
    <!-- -webkit-animation:circleShow2 3s ease-in-out infinite 1.4s;-->
    <!-- -moz-animation:circleShow2 3s ease-in-out infinite 1.4s;-->
    <!-- -ms-animation:circleShow2 3s ease-in-out infinite 1.4s;-->
    <!-- -o-animation:circleShow2 3s ease-in-out infinite 1.4s;-->
<!--}-->
<!--@keyframes circleShow2-->
<!--{-->
    <!--0% {opacity:0;}-->
    <!--50% {opacity:1;}-->
    <!--100%{opacity:0;}-->
<!--}-->
<!--@-webkit-keyframes circleShow2-->
<!--{-->
    <!--0% {opacity:0;}-->
    <!--50% {opacity:1;}-->
    <!--100%{opacity:0;}-->
<!--}-->
<!--@-moz-keyframes circleShow2-->
<!--{-->
    <!--0% {opacity:0;}-->
    <!--50% {opacity:1;}-->
    <!--100%{opacity:0;}-->
<!--}-->
<!--</style>-->
