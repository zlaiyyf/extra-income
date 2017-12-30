import Vue from 'vue'
import Router from 'vue-router'
const Index = () => import('@/pages/Index')
const Projects = () => import('@/pages/Projects')
const Expert = () => import('@/pages/Expert')
const UserInfo = () => import('@/pages/UserInfo')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/myProjects',
      name: 'projects',
      component: Projects
    },
    {
      path: '/expert',
      name: 'expert',
      component: Expert
    },
    {
      path: '/userInfo',
      name: 'userInfo',
      component: UserInfo
    }
  ]
})
