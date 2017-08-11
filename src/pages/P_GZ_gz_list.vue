<template>
  <div class="global_box">
    <div class="global_box_top">
      <v-header></v-header>
      <v-header-nav v-bind:menuTag="1"></v-header-nav>
    </div>
    <!--公用顶部end-->
    <div class="container findFm">
      <div class="tNavWrop">
        所在城区:
        <span class="tNav" v-bind:class="{'active' : cityCode ===0 }" v-on:click="cityClick(0)">全部</span>
        <span class="tNav" v-bind:class="{'active' : cityCode ===1 }" v-on:click="cityClick(1)">北京</span>
        <span class="tNav" v-bind:class="{'active' : cityCode ===2 }" v-on:click="cityClick(2)">成都</span>
        <!--<span class="tNav" v-bind:class="{'active' : cityCode ===1 }" v-on:click="">海淀区</span>-->
      </div>
      <div class="tNavWrop">
        出身工种:
        <span class="tNav " v-bind:class="{'active' : typeCode ===0 }" v-on:click="typeClick(0)">全部</span>
        <span class="tNav" v-bind:class="{'active' : typeCode ===1 }" v-on:click="typeClick(1)">木工</span>
        <span class="tNav" v-bind:class="{'active' : typeCode ===2 }" v-on:click="typeClick(2)">油漆工</span>
        <span class="tNav" v-bind:class="{'active' : typeCode ===2 }" v-on:click="typeClick(3)">电工</span>
      </div>
      <!--<div class="tNavWrop">-->
        <!--<div>面积:</div>-->
        <!--<span class="tNav " v-bind:class="{'active' : areaCode ===0 }" v-on:click="areaClick(0)">全部</span>-->
        <!--<span class="tNav" v-bind:class="{'active' : areaCode ===1 }" v-on:click="areaClick(1)">50以下</span>-->
        <!--<span class="tNav" v-bind:class="{'active' : areaCode ===2 }" v-on:click="areaClick(2)">50-80</span>-->
      <!--</div>-->
      <!--<div class="tNavWrop">-->
        <!--<div>预算:</div>-->
        <!--<span class="tNav "  v-bind:class="{'active' : yusuanCode ===0 }" v-on:click="yusuanClick(0)">全部</span>-->
        <!--<span class="tNav" v-bind:class="{'active' : yusuanCode ===1 }" v-on:click="yusuanClick(1)">5万以下</span>-->
        <!--<span class="tNav" v-bind:class="{'active' : yusuanCode ===2 }" v-on:click="yusuanClick(2)">5-8万</span>-->
      <!--</div>-->
      <div class="row foreman-list">
        <div class="col-md-3 list-con" v-for="item in artData" v-on:click="toDetail(item)">
          <div class="img_box">
            <img class="bc_img" v-bind:src="item.img" />
            <div class="foreman_name">{{item.title}}</div>
          </div>
          <div class="listbtn">免费预约</div>

        </div>
      </div>
    </div>

    <div class="footer_box">
      <div class="herf_box">
        <div class="center_box">友情链接：<a target="_blank" href="https://www.baidu.com">百度</a></div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  import api from '../fetch/api'
//  import * as _ from '../util/tool'
  import header from "../components/header.vue"
  import header_nav from "../components/header_nav.vue"
  import * as _ from '../util/util'

  export default {
    data() {
      return {
          cityCode:0,
          typeCode:0,
          areaCode:0,
          yusuanCode:0,
          artData : [{}]
//        username: '',
//        password: ''
      }
    },
    components:{
      'v-header':header ,
      'v-header-nav':header_nav
    },
    created(){
        this.requestArtList();
      //this.initData();
    },
    methods: {
//      ...mapActions({ setUserInfo: 'setUserInfo' }),
      cityClick (code) {
          this.cityCode= code;
          this.requestArtList();
      },
      typeClick (code) {
        this.typeCode= code;
        this.requestArtList();
      },
      areaClick (code) {
        this.areaCode= code;
        this.requestArtList();
      },
      yusuanClick (code) {
        this.yusuanCode= code;
        this.requestArtList();
      },
      toDetail (item) {
          console.log(item);
          if(item.src){
              window.open(item.src,"_blank");
          }
      },
      requestArtList () {
        let param=_.getCommonParam();
        alert("发送请求");
        this.artData=[{
            title:"测试1",
            name:"测试小区名称1",
            city:"成都",
            yusuan:"100W",
            src : "http://www.baidu.com",
            area:"10",
            img:"./static/img/test.jpg",
        },{
          title:"测试2",
          name:"测试小区名称2",
          city:"成都",
          yusuan:"200W",
          area:"10",
          img:"./static/img/test.jpg",
        },{
          title:"测试3",
          name:"测试小区名称3",
          city:"成都",
          area:"10",
          yusuan:"300W",
          img:"./static/img/test.jpg",
        },{
          title:"测试1",
          name:"测试小区名称1",
          city:"成都",
          yusuan:"100W",
          area:"10",
          img:"./static/img/test.jpg",
        },{
          title:"测试2",
          name:"测试小区名称2",
          city:"成都",
          yusuan:"200W",
          area:"10",
          img:"./static/img/test.jpg",
        },{
          title:"测试3",
          name:"测试小区名称3",
          city:"成都",
          area:"10",
          yusuan:"300W",
          img:"./static/img/test.jpg",
        }]
      },
      changeMenu (url) {
        this.$router.replace('/user/'+url)
      },
      initData () {
        let param = {common : {
            userid:localStorage.getItem("userid"),
            username:localStorage.getItem("username"),
            token:localStorage.getItem("token")
        }} ;
        api.getUserInfo(param).then(res => {
            console.log(res);
            if(res.code == 200) {
                this.user=res.data;
            }
        }).catch(error => {
            console.log(error);
        })
      },
      saveUserInfo () {
          let param=_.getCommonParam();
          let paramData = Object.assign(this.user,param);
          api.updateUserInfo(paramData). then (res => {
              if(res.code==200){
                  alert("修改成功");
                  this.initData();
              }
          }).catch(error => {
              console.log(error);
          })
      }
//      // 用户登录
//      _login() {
//        //window.location.href="/static/test.html";
//        if (!this.username || !this.password) {
//          _.alert('请填写完整')
//          return
//        }
//        let data = {
//          username: this.username,
//          password: this.password
//        }
//        this.$store.dispatch('setLoadingState', true)
//        api.Login(data)
//          .then(res => {
//            console.log(res)
//            if(res.success) {
//              // let userInfo = Object.assign()
//              this.$store.dispatch('setLoadingState', false)
//              this.setUserInfo(res.data)
//              this.$router.replace('/home')
//            }
//          })
//          .catch(error => {
//            console.log(error)
//          })
//      }
    }
  }
</script>
<style src="../../node_modules/bootstrap/dist/css/bootstrap.min.css" scoped></style>
<style src="../assets/c/global.css" scoped ></style>
<!--<style src="../assets/c/callForeMan.css" scoped></style>-->
<style src="../assets/sass/findForeman.scss" scoped lang="scss" type="text/css"></style>
<style scoped>
  .active {
    background:#57a126;
    color:#fff;
  }
</style>
<!--<style scoped>-->
  <!--@import "../assets/c/global.css";-->
  <!--@import "../assets/c/callForeMan.css";-->
<!--</style>-->
