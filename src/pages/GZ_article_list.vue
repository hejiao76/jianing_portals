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
            <a  href="javascript:">
              <li v-on:click="changeMenu('gzRePwd')">修改密码</li>
            </a>
            <a class="active" href="javascript:">
              <li v-on:click="changeMenu('gzArtList')">装修案例</li>
            </a>
            <a href="javascript:">
              <li v-on:click="changeMenu('gzYuYue')">我的预约</li>
            </a>
          </ul>

          <div class="change_box">
            <div class="change_list active">
              <div class="btn" style="margin: 20px 0 0 0; width: 78px; height: 28px; line-height:28px; border-radius: 0; font-size: 12px;"><span class="iconfont"></span>新建</div>
              <table width="100%">
                <tr><th>标题</th><th>小区名称</th><th>发布时间</th><th>操作</th></tr>
                <tr>
                  <td>成都卓锦城六期小套二装修案例</td>
                  <td>成都卓锦城六期</td>
                  <td>2017-03-23</td>
                  <td><span class="edit_btn">修改</span><span class="shanchu_btn">删除</span></td>
                </tr>
              </table>
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
