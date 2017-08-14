<template>
  <div class="global_box">
    <div class="global_box_top">
    <v-header></v-header>
    </div>
    <div class="register">
      <div class="register-wrop">
        <div class="redister-top">工长注册</div>
        <div class="prompt">填写账号信息</div>
        <form class="form-horizontal">
          <div class="form-group">
            <label for="phonenum" class="col-sm-2 control-label">手机号:</label>
            <div class="col-sm-10">
              <input name="username" v-model="username" type="number" class="form-control" id="phonenum" placeholder="手机号">
            </div>
          </div>
          <div class="form-group">
            <label for="inputPassword1" class="col-sm-2 control-label">密码:</label>
            <div class="col-sm-10">
              <input name="password" v-model="password1" type="password" class="form-control" id="inputPassword1" placeholder="密码">
            </div>
          </div>
          <div class="form-group">
            <label for="inputPassword2" class="col-sm-2 control-label">确认密码:</label>
            <div class="col-sm-10">
              <input name="repassword" v-model="password2" type="password" class="form-control" id="inputPassword2" placeholder="确认密码">
            </div>
          </div>
          <div class="form-group">
            <label for="username" class="col-sm-2 control-label">真实姓名:</label>
            <div class="col-sm-10">
              <input name="realname" v-model="realname" type="text" class="form-control" id="username" placeholder="真实姓名">
            </div>
          </div>
          <div class="form-group">
            <label for="usernum" class="col-sm-2 control-label">身份证号:</label>
            <div class="col-sm-10">
              <input v-model="idcard" type="number" class="form-control" id="usernum" placeholder="身份证号">
            </div>
          </div>
          <div class="form-group">
            <label class="col-sm-2 control-label">所在区域:</label>
            <div class="col-sm-5">
              <select  v-model="provinceid" class="form-control">
                <option value="1">北京</option>
                <option value="2">成都</option>
                <option value="3">上海</option>
              </select>
            </div>
            <div class="col-sm-5">
              <select v-model="cityid" class="form-control">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
          </div>
          <div class="form-group">
            <label class="col-sm-2 control-label">出身工种:</label>
            <div class="col-sm-10">
              <input v-model="worktype" type="number" class="form-control" placeholder="出身工种">
            </div>
          </div>
          <div class="form-group">
            <label class="col-sm-2 control-label">从业年限:</label>
            <div class="col-sm-10">
              <select v-model="workyear" class="form-control">
                <option value="1">1年之内</option>
                <option value="2">1-3年</option>
                <option value="3">3-5年</option>
                <option value="4">5-10年</option>
                <option value="5">10年以上</option>
              </select>
            </div>
          </div>
          <div class="form-group">
            <label class="col-sm-2 control-label">QQ号码:</label>
            <div class="col-sm-10">
              <input v-model="qqnumber" type="number" class="form-control" placeholder="QQ号码">
            </div>
          </div>
          <div class="form-group">
            <label class="col-sm-2 control-label">售后服务:</label>
            <div class="col-sm-10">
              <input v-model="salesservice" type="number" class="form-control" placeholder="售后服务">
            </div>
          </div>
          <div class="form-group">
            <div class="col-sm-offset-2 col-sm-10">
              <label class="radio-inline" style="color:#57a126">
                <input v-model="xycheck" type="checkbox" name="inlineRadioOptions" id="inlineRadio1" value="option1">我同意宁家装修网的注册协议
              </label>
            </div>
          </div>
          <div class="form-group">
            <div class="col-sm-offset-2 col-sm-10 submitwrop">
              <button v-on:click="regist" type="button" class="btn btn-default">注册</button>
            </div>
          </div>
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
import util from "../util/util"

export default {
  data() {
    return {
      username: '',
      password1: '',
      password2:'',
      realname:'',
      idcard:'',
      provinceid:'',
      cityid:'',
      worktype:'',
      workyear:'',
      qqnumber:'',
      salesservice:'',
      xycheck:'',
      sendCode: false,
      timeOut: 60
    }
  },
  components:{
    'v-header':header ,
  },
  // computed: {
  //     sendCode() {

  //     }
  // },
  methods: {
    getVerifiCode () {
      if (!this.username) {
        _.alert('请输入手机号')
        return
      }
      api.RegistVerifiCode(this.username)
        .then(res => {
          this.sendCode = true
          this.setTimeOut()
        })
        .catch(err => {
          _.alert('短信发送失败')
        })
      // if (!REG_PHONE.test(this.username)) {
      //     alert('请输入有效手机号')
      //     return
      // }
    },
    setTimeOut () {
      let timer = setTimeout(() => {
        this.setTimeOut()
        if(this.timeOut > 0) {
          this.timeOut--
        }
      }, 1000)
      if(this.timeOut <= 0) {
        this.sendCode = false
        this.timeOut = 60
        clearTimeout(timer)
      }
    },
    regist () {
        alert("1111");
       // debugger;
        let telphoneReg = /^1[34578]\d{9}$/;
//        if(telphoneReg.test(this.username)){
//            alert("手机号输入不正确");
//        }

//      if (!this.username || !this.password || !this.verificode) {
//        _.alert('请填写完整')
//        return
//      }
      // if (!('/^1[34578]\d{9}$/').test(this.username)) {
      //     alert('请输入有效手机号')
      //     return
      // }
      // if (!('/^\w{6,15}$/').test(this.password)) {
      //     alert('请设置6－15位密码，可以使用数字、字母及下划线')
      //     return;
      // }
      let data = {
        username: this.username,
        password1: this.password1,
        password2: this.password2,
        realname:this.realname,
        idcard:this.idcard,
        provinceid:this.provinceid,
        provincename:this.provincename || "sssss",
        cityid:this.cityid,
        cityname:this.cityname || "ssss",
        areaid:this.areaid || "111",
        areaname:this.areaname || "111",
        worktype:this.worktype,
        workyear:this.workyear,
        qqnumber:this.qqnumber,
        salesservice:this.salesservice
      }
      //this.$store.dispatch('setLoadingState', true)
      api.Register(data)
        .then(res => {
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
  /*@import "../assets/c/global.css";*/
  /*@import "https://cdn.bootcss.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css";*/
  @import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
  @import "../assets/c/register.css";
</style>
