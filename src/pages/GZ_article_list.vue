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
              <div v-on:click="addNewArticle" class="btn" style="margin: 20px 0 0 0; width: 78px; height: 28px; line-height:28px; border-radius: 0; font-size: 12px;"><span class="iconfont"></span>新建</div>
              <!--<table width="100%">-->
                <!--<tr><th>标题</th><th>小区名称</th><th>发布时间</th><th>操作</th></tr>-->
                <!--<tr>-->
                  <!--<td>成都卓锦城六期小套二装修案例</td>-->
                  <!--<td>成都卓锦城六期</td>-->
                  <!--<td>2017-03-23</td>-->
                  <!--<td><span class="edit_btn">修改</span><span class="shanchu_btn">删除</span></td>-->
                <!--</tr>-->
              <!--</table>-->
              <el-table :data="tableData" stripe style="width: 100%">
                <el-table-column prop="date" label="标题" ></el-table-column>
                <el-table-column prop="name" label="小区名称"></el-table-column>
                <el-table-column prop="address" label="发布时间"></el-table-column>
                <el-table-column label="操作">
                  <template scope="scope">
                    <el-button  type="text" size="small">查看</el-button>
                    <el-button type="text" size="small">编辑</el-button>
                  </template>
                </el-table-column>
              </el-table>
              <el-pagination style="text-align:center;" layout="prev, pager, next" :total="50"></el-pagination>
            </div>
          </div>
        </div>
      </div>

    </div>

    <!--<div class="footer_box">-->
      <!--<div class="herf_box">-->
        <!--<div class="center_box">友情链接：<a target="_blank" href="https://www.baidu.com">百度</a></div>-->

      <!--</div>-->

    <!--</div>-->
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import api from '../fetch/api'
import * as _ from '../util/util'
import header from "../components/header.vue"

export default {
    data() {
        return {
          tableData: []
        }
    },
    components:{
      'v-header':header ,
    },
    created () {
        this.initData()
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
      addNewArticle () {
        this.$router.replace('/user/gzArtAdd');
      },
      changeMenu (url) {
        this.$router.replace('/user/'+url)
      },

    }
}
</script>
<style>
  @import "../assets/c/global.css";
  @import "../assets/c/change_mesg.css";
</style>
