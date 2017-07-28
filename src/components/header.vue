<template>
  <!--<div class="header">-->
    <!--<div class="header-icon" v-show="backDisplay" @click="goBack"><i class="icon">&#xe622;</i></div>-->
    <!--<div class="header-cont"><p>{{title}}</p></div>-->
    <!--<div class="header-icon" v-show="menuDisplay" @click="showBar"><i class="icon">&#xe634;</i></div>-->
    <!--<div class="header-icon" v-show="mapDisplay" @click="getMap"><i class="icon map-icon">&#xe600;</i></div>-->
  <!--</div>-->
  <div class="global_box_top">
    <div class="nav_top" style="background: #57a126; color: #FFFFFF;">
      <div class="center_box">
        您好<a href="javascript:;" v-on:click="gzInfo">牟元狗</a>，欢迎来到家宁装修网
        <div class="where_box"><span class="iconfont icon-location"></span><span id="city">北京</span><span>【更换】</span></div>
        <ul class="nav_right">
          <a>
            <li v-on:click="showWxImg">官方微信 </li>
          </a>
          <a>
            <li v-on:click="gzreg">工长入驻</li>
          </a>
          <a>
            <li v-on:click="gzlogin">工长登录</li>
          </a>
          <a>
            <li v-on:click="bjgz">北京工装</li>
          </a>
          <a>
            <li v-on:click="bjjz">北京家装</li>
          </a>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      title: String,
      menuDisplay: Boolean,
      backDisplay: Boolean,
      mapDisplay: Boolean
    },
    data() {
      return {

      }
    },
    methods: {
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
