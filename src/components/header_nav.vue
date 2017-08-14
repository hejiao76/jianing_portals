<template>
  <!--<div class="header">-->
    <!--<div class="header-icon" v-show="backDisplay" @click="goBack"><i class="icon">&#xe622;</i></div>-->
    <!--<div class="header-cont"><p>{{title}}</p></div>-->
    <!--<div class="header-icon" v-show="menuDisplay" @click="showBar"><i class="icon">&#xe634;</i></div>-->
    <!--<div class="header-icon" v-show="mapDisplay" @click="getMap"><i class="icon map-icon">&#xe600;</i></div>-->
  <!--</div>-->
  <div class="center_box nav_center">
    <img src="../assets/img/logo.png" />
    <ul class="nav_title">
      <a href="javascript:" v-on:click="changeMenu(0)" v-bind:class="{active : 0===menuTag}">
        <li>首页</li>
      </a>
      <a href="javascript:" v-on:click="changeMenu(1)" v-bind:class="{active : 1===menuTag}">
        <li>找工长</li>
      </a>
      <a href="javascript:" v-on:click="changeMenu(2)" v-bind:class="{active : 2===menuTag}">
        <li>装修案列</li>
      </a>
      <a href="javascript:" v-on:click="changeMenu(3)" v-bind:class="{active : 3===menuTag}">
        <li>装修建材库</li>
      </a>
      <a href="javascript:" v-on:click="changeMenu(4)" v-bind:class="{active : 4===menuTag}">
        <li>装修那点事</li>
      </a>
      <a href="javascript:" v-on:click="changeMenu(5)" v-bind:class="{active : 5===menuTag}">
        <li>关于我们</li>
      </a>
    </ul>
  </div>
</template>

<script>
  export default {
    props: {
      menuTag:0
    },
    data() {
      return {

      }
    },
    methods: {
      changeMenu (param) {
          switch (param){
            case 0 :
                window.location.href="index.html";
                break;
            case 1 :
              this.$router.replace('/pgz_gzlist');
              break;
            case 2 :
              this.$router.replace('/pgz_article');
              break;
              //window.location.href="index.html";
            case 3 :
              this.$router.replace('/pgz_cailiaolist');
              break;
            case 4 :
              this.$router.replace('/pgz_thingslist');
              break;
          }
        //this.$router.replace('/user/'+url);
      },
      showWxImg () {
        alert("官方微信");
      },
      gzreg () {
        alert("工长入驻");
        this.$router.replace("/user/register");
      },
      gzlogin () {
        alert("工长登录");
        this.$router.replace("/user/login");
      },
      gzInfo () {
          alert("工长个人信息")
          this.$router.replace("/user/gzInfoEdit")
      },
      bjgz () {
         alert("北京工装");
      },
      bjjz () {
        alert("北京家装");
      },
      goBack () {
        window.history.back()
      },
      getMap () {
        alert('开发中')
      },
      showBar () {
        this.$store.dispatch('setNavState', true)
      }
    }
  }
</script>
<style>
  @import "../assets/c/global.css";
</style>
<!--<style lang="scss" scoped>-->
<!--@import '../assets/css/function';-->

<!--.header{-->
  <!--position: fixed;-->
  <!--transform: translateZ(0);-->
  <!--top: 0;-->
  <!--z-index: 4;-->
  <!--height: px2rem(100px);-->
  <!--width: 100%;-->
  <!--background: #76D49B;-->
  <!--display: flex;-->
  <!--flex-direction: row;-->
  <!--.header-icon{-->
    <!--flex:1;-->
    <!--text-align: center;-->
    <!--&gt;i{-->
      <!--line-height: px2rem(100px);-->
    <!--}-->
    <!--.map-icon{-->
      <!--font-size: 22px;-->
    <!--}-->
  <!--}-->

  <!--.header-cont {-->
    <!--flex: 6;-->
    <!--padding-left: px2rem(40px);-->
      <!--&gt;p{-->
        <!--line-height: px2rem(100px);-->
        <!--color: #ffffff;-->
        <!--font-size:17px;-->
      <!--}-->
    <!--}-->
  <!--}-->
<!--</style>-->
