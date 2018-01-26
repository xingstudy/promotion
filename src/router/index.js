import Vue from 'vue'
import Router from 'vue-router'
import Base from 'pages/Base'
import Login from 'pages/Login'
import AssetList from 'pages/asset/AssetList'
import Home from 'pages/Home'
import UserList from 'pages/accounts/UserList'
import GroupList from 'pages/accounts/GroupList'
import RoleList from 'pages/accounts/RoleList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: '登入',
      component: Login
    },
    {
      path: '/',
      name: 'Dashboard',
      component: Base,
      redirect: 'home',
      children: [
        {path: 'home', component: Home, name: '首页'},
        {
          path: 'group_list',
          component: GroupList,
          name: '区域组管理',
          meta: {
            requireAuth: true
          }
        },
      ]
    },
    {
      path: '/accounts',
      name: '会员管理',
      component: Base,
      redirect: '/accounts/user_list',
      children: [
        {
          path: 'user_list',
          component: UserList,
          name: '会员信息',
          meta: {
            requireAuth: true
          }
        },
        {
          path: 'role_list',
          component: RoleList,
          name: '角色管理',
          meta: {
            requireAuth: true
          }
        }
      ]
    }
  ]
})