<template>
  <div class="global_box">
    <div class="global_box_top">
      <v-header></v-header>
      <v-header-nav v-bind:menuTag="1"></v-header-nav>
    </div>
    <div class="container material-list">
      <div class="row" >
        <div class="col-md-12 news-list-wrop" v-for="item in artData" v-on:click="toDetail(item)">
          <div class="col-md-5 material-img">
            <div class="img_box">
              <img class="bc_img" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1497762331782&di=72ea81ef6e902d00009a43d2f1cb7aa7&imgtype=0&src=http%3A%2F%2Fimg.biud.com.cn%2Fupload%2Fnews%2F2014-10-20%2Fphotos%2Fmiddle%2Fzhongyuangongchangying46037120141020111329215056487600.jpg" />
              <div class="foreman_name">推荐指数:
                <span class="glyphicon glyphicon-star"></span>
                <span class="glyphicon glyphicon-star"></span>
                <span class="glyphicon glyphicon-star"></span>
                <span class="glyphicon glyphicon-star-empty"></span>
                <span class="glyphicon glyphicon-star-empty"></span>
              </div>
            </div>
          </div>
          <div class="col-md-7">
            <div class="news-list-title">{{item.title}}</div>
            <div class="new-list-con">
              吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦吧啦 <span>[更多]</span>
            </div>
            <div class="row news-list-bt">
              <div class="col-md-3">使用位置:墙面</div>
              <div class="col-md-9" style="text-align: right">编辑:阿娇&nbsp;&nbsp;发表于:2017-09-09&nbsp;&nbsp;22:24:23</div>
            </div>
          </div>
        <!--</div>-->
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
<style src="../assets/sass/materialList.scss" scoped lang="scss" type="text/css"></style>
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
