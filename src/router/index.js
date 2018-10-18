import Vue from 'vue'
import VueRouter from 'vue-router'

const Events = () => import('@/views/pages/Events')
const CreateEvent = () => import('@/views/pages/CreateEvent')
const Profile = () => import('@/views/pages/Profile')
const Login = () => import('@/views/pages/Login')

Vue.use(VueRouter)

export const routes = [
  {
    name: 'events',
    path: '/',
    component: Events,
    meta: {
      title: 'События'
    }
  },
  {
    path: '/create-event',
    component: CreateEvent,
    props: true,
    meta: {
      title: 'Создать событие'
    }
  },
  {
    path: '/profile',
    component: Profile,
    props: true,
    meta: {
      title: 'Профиль'
    }
  },
  {
    path: '/login',
    component: Login,
    props: true,
    meta: {
      title: 'Логин'
    }
  }
]

export const router = new VueRouter({
  routes,
  mode: 'history'
})
