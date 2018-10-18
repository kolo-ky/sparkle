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
    path: '/sign-up',
    component: Registration,
    props: true,
    meta: {
      title: 'Регистрация'
    }
  },
  {
    path: '/sign-in',
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
