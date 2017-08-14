<template>
  <div class="global_box">
    <div class="global_box_top">
    <v-header></v-header>
    </div>
    <div class="container foreman-info">

      <div class="row top-nav">首页&nbsp;&nbsp;&gt;&nbsp;&nbsp;<span>案例详情</span></div>
      <div class="row foreman-info">
        <div class="col-md-3"><img class="bc_img" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1497762331782&di=72ea81ef6e902d00009a43d2f1cb7aa7&imgtype=0&src=http%3A%2F%2Fimg.biud.com.cn%2Fupload%2Fnews%2F2014-10-20%2Fphotos%2Fmiddle%2Fzhongyuangongchangying46037120141020111329215056487600.jpg" /></div>
        <div class="col-md-9" style="padding-left:20px;">
          <div class="man-name">
            <span>和师傅</span>——工作理念:吧啦吧啦吧啦
          </div>
          <div class="row" style="margin-top:15px;">
            <div class="col-md-6">所在区域：北京-海淀</div>
            <div class="col-md-6">出生工种：木工</div>
          </div>
          <div class="row" style="margin-top:15px;">
            <div class="col-md-6">从业年限：10年</div>
            <div class="col-md-6">售后时间：整体2年 水电5年</div>
          </div>
          <div class="listbtn">免费预约</div>
        </div>
      </div>
      <div class="row" style="margin:20px 0px;">
        个人介绍:
      </div>
      <div class="user-info">个人介绍</div>
      <div class="renovation-title">装修案例展示</div>
      <div class="row renovation-list">
        <div class="col-md-3 list-con">
          <img src="../assets/img/logo.png" alt="">
          <div class="case-bt">
            <div class="row">
              <div class="col-md-4">小区名称:</div>
              <div class="col-md-8">万科第五成</div>
            </div>
            <div class="row">
              <div class="col-md-6">双流区-100㎡</div>
              <div class="col-md-6">预算-200w</div>
            </div>
          </div>
        </div>
        <div class="col-md-3 list-con">
          <img src="../assets/img/logo.png" alt="">
          <div class="case-bt">
            <div class="row">
              <div class="col-md-4">小区名称:</div>
              <div class="col-md-8">万科第五成</div>
            </div>
            <div class="row">
              <div class="col-md-6">双流区-100㎡</div>
              <div class="col-md-6">预算-200w</div>
            </div>
          </div>
        </div>
        <div class="col-md-3 list-con">
          <img src="../assets/img/logo.png" alt="">
          <div class="case-bt">
            <div class="row">
              <div class="col-md-4">小区名称:</div>
              <div class="col-md-8">万科第五成</div>
            </div>
            <div class="row">
              <div class="col-md-6">双流区-100㎡</div>
              <div class="col-md-6">预算-200w</div>
            </div>
          </div>
        </div>
        <div class="col-md-3 list-con">
          <img src="../assets/img/logo.png" alt="">
          <div class="case-bt">
            <div class="row">
              <div class="col-md-4">小区名称:</div>
              <div class="col-md-8">万科第五成</div>
            </div>
            <div class="row">
              <div class="col-md-6">双流区-100㎡</div>
              <div class="col-md-6">预算-200w</div>
            </div>
          </div>
        </div>

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
  @import "../assets/c/foreManInfo.css";
</style>
