import Vue from 'vue'
import Router from 'vue-router'

import Home from '../pages/Home'
import Sport from '../pages/Sport'
import Travel from '../pages/Travel'
import Detail from '../pages/Detail'
import User from '../pages/User'
import Login from '../pages/Login'
import Regist from '../pages/Regist'
import Register from '../pages/Register'
import UserInfo from '../pages/UserInfo'
import Set from '../pages/Set'
import Post from '../pages/Post'
import UserMsg from '../pages/UserMsg'
import Navbar from '../pages/Navbar'
import NotFound from '../pages/NotFound'
import GZInfo from '../pages/GZ_info.vue'
import GZInfoEdit from '../pages/GZ_info_edit.vue'
import GZArticleList from '../pages/GZ_article_list.vue'
import GZArticleAdd from '../pages/GZ_article_add.vue'
import GZResetPwd from '../pages/GZ_reset_pwd.vue'
import GZYuYueList from '../pages/GZ_yuyue_list.vue'
import PGZArticleList from '../pages/P_GZ_article_list.vue'
import PGZGZList from '../pages/P_GZ_gz_list.vue'
import PGZCaiLiaoList from '../pages/P_GZ_jiancai_list.vue'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/sport',
      name: 'sport',
      component: Sport
    },
    {
      path: '/travel',
      name: 'travel',
      component: Travel
    },
    {
      path: '/sport/:id',
      name: 'detail',
      component: Detail
    },
    {
      path: '/travel/:id',
      name: 'detail',
      component: Detail
    },
    {
      path: '/user',
      name: 'user',
      component: User
    },
    {
			path: '/user/login',
			component: Login
		},
		{
			path: '/user/regist',
			component: Regist
		},
    {
      path: '/user/register',
      component: Register
    },
    {
      path: '/user/gzInfo',
      component:GZInfo
    },
    {
      path: '/user/gzInfoEdit',
      component:GZInfoEdit
    },
    {
      path: '/user/gzRePwd',
      component:GZResetPwd
    },
    {
      path: '/user/gzArtList',
      component:GZArticleList
    },
    {
      path: '/user/gzArtAdd',
      component:GZArticleAdd
    },
    {
      path: '/user/gzYuYue',
      component:GZYuYueList
    },
    {
      path: '/pgz_article',
      component:PGZArticleList
    },
    {
      path: '/pgz_gzlist',
      component:PGZGZList
    },
    {
      path: '/pgz_cailiaolist',
      component:PGZCaiLiaoList
    },
		{
			path: '/user/info',
			component: UserInfo
		},
		{
			path: '/user/set',
			component: Set
		},
		{
			path: '/user/post',
			component: Post
		},
		{
			path: '/user/msg',
			component: UserMsg
		},
    {
			path: '/user/navbar',
			component: Navbar
		},
    {
      path: '*',
      name: 'notfound',
      component: NotFound
    }
  ]
})
