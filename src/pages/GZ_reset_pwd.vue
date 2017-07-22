<template>
  <div class="global_box">
    <v-header></v-header>
    <!--公用顶部end-->
    <div class="idecoration_list_details_box center_box">
      <div class="Breadcrumbs">
        <a href="index.html">首页</a><span class="iconfont icon-jikediancanicon13"></span><a href="decoration_list_details.html" class="active">修改个人信息</a>
      </div>
      <div class="center_box">
        <div class="change_left_box">
          <img class="head_img" src="../assets/img/logo.png" />
          <div class="edit_btn_head">修改头像</div>
        </div>
        <div class="change_right_box">
          <ul class="nav_right">
            <a class="" href="javascript:">
              <li v-on:click="changeMenu('gzInfoEdit')">修改基本信息 </li>
            </a>
            <a class="active"  href="javascript:">
              <li v-on:click="changeMenu('gzRePwd')">修改密码</li>
            </a>
            <a href="javascript:">
              <li v-on:click="changeMenu('gzArtList')">装修案例</li>
            </a>
            <a href="javascript:">
              <li v-on:click="changeMenu('gzYuYue')">我的预约</li>
            </a>
          </ul>

          <div class="change_box">
            <div class="change_list active">
              <form id="form1" action="" method="post">
                <div class="form_list">
										<span class="title_name">
											旧密码:
										</span>
                  <label><input name="name" class="change_input" type="text"></label>
                </div>
                <div class="form_list">
										<span class="title_name">
											密码:
										</span>
                  <label><input name="name" class="change_input" type="text"></label>
                </div>
                <div class="form_list">
										<span class="title_name">
											确认密码:
										</span>
                  <label><input name="name" class="change_input" type="text"></label>
                </div>
                <input value="修改密码" type="submit" class="btn"  />
              </form>

            </div>
          </div>
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
      changeMenu (url) {
        this.$router.replace('/user/'+url)
      },
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
  @import "../assets/c/change_mesg.css";
</style>
