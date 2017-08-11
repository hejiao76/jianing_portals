<template>
  <div class="global_box">
    <div class="global_box_top">
    <v-header></v-header>
    <!--公用顶部end-->
    </div>
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
            <el-form ref="form" :model="form" label-width="80px">
              <el-form-item label="文章标题">
                <el-input v-model="form.title" placeholder="请输入文章标题"></el-input>
              </el-form-item>
              <el-form-item label="类型">
                <el-radio-group v-model="form.type">
                  <el-radio label="家装"></el-radio>
                  <el-radio label="工装"></el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="小区名称">
                <el-input v-model="form.community" placeholder="请输入小区名称"></el-input>
              </el-form-item>
              <el-form-item label="房屋面积">
                <el-input v-model="form.area" placeholder="请输入房屋面积"></el-input>
              </el-form-item>
              <el-form-item label="装修预算">
                <el-input type="number" v-model="form.budget" placeholder="请输入装修预算"></el-input>
              </el-form-item>
              <el-form-item label="装修工期">
                <el-input type="number" v-model="form.workday" placeholder="请输入装修工期"></el-input>
              </el-form-item>
              <el-form-item label="图文介绍"> </el-form-item>
              <script id="container" name="content" type="text/plain"></script>
              <el-form-item>
                <el-button v-on:click="saveArt" type="primary" >立即创建</el-button>
                <el-button>取消</el-button>
              </el-form-item>
            </el-form>

          </div>
        </div>
      </div>

    </div>


  </div>
</template>

<script>
import { mapActions } from 'vuex'
import api from '../fetch/api'
import * as _ from '../util/util'
import header from "../components/header.vue"
import '../../static/ueditor/ueditor.config'
import '../../static/ueditor/ueditor.all'
import '../../static/ueditor/lang/zh-cn/zh-cn'

export default {
    data() {
        return {
          form : {
            title:'',
            type:'',
            community:'',
            area:'',
            budget:'',
            workday:'',
          },
          editor:''
        }
    },
    components:{
      'v-header':header ,
    },
    created () {
        this.rewriteUE();
        this.initData();
    },
  mounted() {
    var basePath="./static/ueditor/";
      this.editor = UE.getEditor('container',{
        UEDITOR_HOME_URL:basePath,
        imageFieldName:"file"
      });

  },
  destroyed() {
    this.editor.destroy();
  },
    methods: {
//        ...mapActions({ setUserInfo: 'setUserInfo' }),
      initData () {
        let param = _.getCommonParam();
        api.getArticleList(param).then(res => {
            if(res.code==200){
              this.tableData=res.data.result;
            }
        }).catch(error => {
            console.log(error);
        });
      },
      getUEContent ()  {
          return this.editor.getContent();
      },
      saveArt () {
          var param= _.getCommonParam();
          param = Object.assign(param,this.form);
          param.detail=this.getUEContent();
          console.log(param);
          api.saveArticle(param).then(res => {
              if(res.code == 200) {
                  alert("保存成功");
              }
          }).catch(error =>{
              console.log(error);
          });

      },
      changeMenu (url) {
        this.$router.replace('/user/'+url)
      },
      rewriteUE  (){
        UE.Editor.prototype.getActionUrl = function (action){
          console.log(action)
          if(action == 'config'){
            console.log("config");
            return './static/ueditor/ueditor.config.json?action=config';
          }
          if(action =='uploadimage' || action == 'uploadscrawl' || action =='uploadimage'){
            return '/action1/api/images/upload';
          }
          if(action =='uploadvideo'){
            return '';
          }
          if(action =='listimage'){
            return '';
          }
        }
      }

    }
}
</script>
<style>
  @import "../assets/c/global.css";
  @import "../assets/c/change_mesg.css";
</style>
