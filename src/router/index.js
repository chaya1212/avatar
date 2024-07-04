import {createRouter, createWebHashHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CreatAvatar from '../views/CreatAvatar.vue'
import AvatarView from '../views/AvatarView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/create/avatar',
    name:'CreatAvatar',
    component: CreatAvatar
  },
  {
    path: '/create/view',
    name:'AvatarView',
    component: AvatarView
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
