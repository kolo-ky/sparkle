import Vue from 'vue'
import VueRouter from 'vue-router'
import {AUTH_LOGOUT} from '@/store/actions/auth'
import {USER_LOGOUT} from '@/store/actions/user'
import {store} from '@/store/'
import firebase from 'firebase'

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
      auth: null
    }
  },
  {
    name: 'create-event',
    path: '/create-event',
    component: CreateEvent,
    props: true,
    meta: {
      title: 'Создать событие',
      auth: true
    }
  },
  {
    name: 'profile',
    path: '/profile',
    component: Profile,
    props: true,
    meta: {
      title: 'Профиль',
      auth: true
    }
  },
  {
    name: 'sign-up',
    path: '/sign-up',
    component: Registration,
    props: true,
    meta: {
      title: 'Регистрация',
      auth: false
    }
  },
  {
    name: 'sign-in',
    path: '/sign-in',
    component: Login,
    props: true,
    meta: {
      title: 'Вход',
      auth: false
    }
  },
  {
    name: 'sign-out',
    path: '/sign-out',
    meta: {
      title: 'Выход',
      auth: true
    },
    beforeEnter: (from, to, next) => {
      store.dispatch(AUTH_LOGOUT)
      store.dispatch(USER_LOGOUT)
      next('sign-in')
    }
  }
]

export const router = new VueRouter({
  routes,
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.auth)) {
    if (!firebase.auth().currentUser) {
      next('sign-in')
    } else {
      next()
    }
  } else {
    next()
  }
})
