import Vue from 'vue'
import VueRouter from 'vue-router'

const Events = () => import('@/views/pages/Events')
const CreateEvent = () => import('@/views/pages/CreateEvent')
const Profile = () => import('@/views/pages/Profile')
const Login = () => import('@/views/pages/Login')
const Registration = () => import('@/views/pages/Registration')

Vue.use(VueRouter)

export const routes = [
  {
    name: 'events',
    path: '/',
    component: Events,
    meta: {
      title: 'События',
      auth: false
    }
  },
  {
    path: '/create-event',
    component: CreateEvent,
    props: true,
    meta: {
      title: 'Создать событие',
      auth: true
    }
  },
  {
    path: '/profile',
    component: Profile,
    props: true,
    meta: {
      title: 'Профиль',
      auth: true
    }
  },
  {
    path: '/sign-up',
    component: Registration,
    props: true,
    meta: {
      title: 'Регистрация',
      auth: false
    }
  },
  {
    path: '/sign-in',
    component: Login,
    props: true,
    meta: {
      title: 'Логин',
      auth: false
    }
  }
]

export const router = new VueRouter({
  routes,
  mode: 'history'
})
