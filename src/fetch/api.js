import axios from 'axios'
import qs from 'qs'

import * as _ from '../util/tool'

// axios 配置
axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
axios.defaults.baseURL ='http://zxapi.familyku.com/'; // '/action';

//POST传参序列化
axios.interceptors.request.use((config) => {
    if(config.method  === 'post'){
        // config.data = qs.stringify(config.data);
    }
    return config;
},(error) =>{
     _.toast("错误的传参", 'fail');
    return Promise.reject(error);
});

//返回状态判断 返回状态拦截器
axios.interceptors.response.use((res) =>{
    if(!res.data.code){
        // _.toast(res.data.msg);
        return Promise.reject(res);
    }
    return res;
}, (error) => {
    console.log("网络异常", 'fail');
    return Promise.reject(error);
});

export function fetch(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, params)
            .then(response => {
                resolve(response.data);
            }, err => {
              debugger;
                reject(err);
            })
            .catch((error) => {
              debugger;
               reject(error)
            })
    })
}

export default {
    /**
     * 用户登录
     */
    Login(params) {
        return fetch('/api/user/login', params)
    },

    /**
     * 用户注册
     */
    Regist(params) {
        return fetch('/users/api/userRegist', params)
    },
    Register(params) {
      return fetch('/api/user/register',params)
    },

    /**
     * 发送注册验证码
     */
     RegistVerifiCode(tellphone) {
         return fetch('/users/api/registVerifiCode', {tellphone: tellphone})
     },

    /**
     * 获取约跑步列表
     */
    SportsList() {
        return fetch('/api/sportList')
    },

    /**
     * 获取约出行列表
     */
    TravelsList() {
        return fetch('/api/travelList')
    },

    /**
     * 获取约跑步详情
     */
    SportsDetail(id) {
        return fetch('/api/sportDetail', {sportId: id})
    },

    /**
     * 获取约出行详情
     */
    TravelsDetail(id) {
        return fetch('/api/travelDetail', {travelId: id})
    },

    /**
     * 获取出行活动点击次数
     */
    travelClicks(id) {
        return fetch('/api/travelClickNum', {travelId: id})
    },

    /**
     * 获取用户信息
     */
    UserInfo(id) {
        return fetch('/users/api/userInfo', {userId: id})
    },

    /**
     * 获取用户发布约行个数
     */
     getPubTotravelNum(id) {
         return fetch('/users/api/getPubTotravelNum', {userId: id})
     },

     /**
      * 获取用户自己发布的约行
      */
      getMyTravel(id) {
          return fetch('/users/api/myTravel', {userId: id})
      },

    /**
     * 发布约行活动
     */
    PostTravel(params) {
        return fetch()
    },

    /**
     * 获取全国JSON数据
     */
     getAddressJson() {
         return fetch('/api/address')
     },

    /**
     * 获取工长信息
     * @param param
     * @returns {*}
     */
    getUserInfo (param) {
         return fetch("/api/user/getUserInfo", param);
     },
    /**
     *修改用户信息
     * @param param
     * @returns {*}
     */
    updateUserInfo (param) {
      return fetch("/api/user/updateUserInfo", param);
    },
    /**
     * 修改用户密码
     * @param param
     * @returns {*}
     */
    updateUserPwd (param) {
      return fetch("/api/user/updateUserPwd", param);
    },
    /**
     * 获取文章列表
     * @param param
     * @returns {*}
     */
    getArticleList (param) {
      return fetch("/api/user/decorateCaseList", param);
    },
    /**
     * 保存文章
     * @param param
     * @returns {*}
     */
    saveArticle (param) {
      return fetch("/api/user/saveDecorateCase", param);
    },
    /**
     * 前端装修案例列表
     * @param param
     * @returns {*}
     */
    decorateCaseList (param) {
      return fetch("/api/decoratecase/decorateCaseList", param);
    },
    /**
     * 前端工长列表
     * @param param
     * @returns {*}
     */
    foremanList (param) {
      return fetch("/api/foreman/foremanList", param);
    },
    /**
     * 前端材料列表
     * @param param
     * @returns {*}
     */
    decorateCaiLiaoList (param) {
      return fetch("/api/decoratenew/decorateNewList", param);
    },
    /**
     * 前端装修那点事列表
     * @param param
     * @returns {*}
     */
    decorateThingsList (param) {
      return fetch("/api/decoratenew/decorateNewList", param);
    }



}
