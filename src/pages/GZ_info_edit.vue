<template>
  <div class="global_box">
    <div class="global_box_top">
    <v-header></v-header>
    </div>
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
            <a class="active" href="javascript:">
              <li v-on:click="changeMenu('gzInfoEdit')">修改基本信息 </li>
            </a>
            <a  href="javascript:">
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
											手机号:
										</span>
                  <label><input name="name" class="change_input" type="text" v-bind:value="user.username"></label>
                </div>
                <div class="form_list">
										<span class="title_name">
											身份证号:
										</span>
                  <label><input name="name" class="change_input" type="text" v-bind:value="user.idcard"></label>
                </div>
                <div class="form_list">
										<span class="title_name">
											真实姓名:
										</span>
                  <label><input name="name" class="change_input" type="text" v-bind:value="user.realname"></label>
                </div>
                <div class="form_list">
										<span class="title_name">
											QQ号码:
										</span>
                  <label><input name="name" class="change_input" type="text" v-bind:value="user.qqnumber"></label>
                </div>
                <div class="form_list">
										<span class="title_name">
											所在区域:
										</span>

                    <select  v-model="user.provinceid" class="form-control" style="width:20%;display: inline-block">
                      <option value="1">北京</option>
                      <option value="2">成都</option>
                      <option value="3">上海</option>
                    </select>

                    <select v-model="user.cityid" class="form-control" style="width:20%;display: inline-block">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>

                </div>
                <div class="form_list">
										<span class="title_name">
											出身工种:
										</span>
                  <label><input v-model="user.worktype" name="name" class="change_input" type="text"></label>
                </div>
                <div class="form_list">
										<span class="title_name">
											从业年限:
										</span>
                  <label>
                    <select v-model="user.workyear" class="form-control">
                    <option value="1">1年之内</option>
                    <option value="2">1-3年</option>
                    <option value="3">3-5年</option>
                    <option value="4">5-10年</option>
                    <option value="5">10年以上</option>
                  </select></label>
                </div>
                <div class="form_list">
										<span class="title_name">
											售后服务:
										</span>
                  <label><input v-model="user.salesservice" name="name" class="change_input" type="text"></label>
                </div>
                <div class="form_list">
										<span class="title_name">
											工作理念:
										</span>
                  <label><input v-model="user.intro" name="name" class="change_input" type="text"></label>
                </div>
                <div class="form_list">
										<span class="title_name">
											个人介绍:
										</span>
                  <label><textarea v-model="user.info" name="name" class="change_input" style="min-height: 200px; padding: 15px 0;"> </textarea> </label>
                </div>
                <input v-on:click="saveUserInfo" value="注 册" type="button" class="btn"  />
              </form>
            </div>

            <div class="change_list">
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

            <div class="change_list ">
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
//  import * as _ from '../util/tool'
  import header from "../components/header.vue"
  import * as _ from '../util/util'

  export default {
    data() {
      return {
          user:{},
//        username: '',
//        password: ''
      }
    },
    components:{
      'v-header':header ,
    },
    created(){
      this.initData();
    },
    methods: {
//      ...mapActions({ setUserInfo: 'setUserInfo' }),
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
<style src="../assets/c/global.css" scoped ></style>
<style src="../assets/c/change_mesg.css" scoped ></style>
<style>
  @import "../assets/c/global.css";
  @import "../assets/c/change_mesg.css";
</style>
