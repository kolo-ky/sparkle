import Vue from 'vue'
import VueRouter from 'vue-router'
import {AUTH_LOGOUT} from '@/store/actions/auth'
import {store} from '@/store/'
import firebase from 'firebase'
import friends from './children/friends'

const Events = () => import('@/views/pages/Events')
const CreateEvent = () => import('@/views/pages/CreateEvent')
const Friends = () => import('@/views/pages/Friends')
const Profile = () => import('@/views/pages/Profile')
const Login = () => import('@/views/pages/Login')
const Registration = () => import('@/views/pages/Registration')
const NotFound = () => import('@/views/pages/NotFound')

Vue.use(VueRouter)

export const routes = [
  {
    name: 'events',
    path: '/',
    component: Events,
    meta: {
      title: 'События',
      icon: 'event',
      auth: null
    }
  },
  {
    name: 'friends',
    path: '/friends',
    component: Friends,
    meta: {
      title: 'Друзья',
      icon: 'group',
      auth: true
    },
    children: friends,
    redirect: {name: 'my-friends'}
  },
  {
    name: 'create-event',
    path: '/create-event',
    component: CreateEvent,
    props: true,
    meta: {
      title: 'Создать событие',
      icon: 'event_note',
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
      icon: 'person',
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
      icon: 'person_add',
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
      icon: 'input',
      auth: false
    }
  },
  {
    name: 'sign-out',
    path: '/sign-out',
    meta: {
      title: 'Выход',
      icon: 'exit_to_app',
      auth: true
    },
    beforeEnter: (from, to, next) => {
      Vue.prototype.$confirm('Вы дейстивтельно хотите выйти?').then(res => {
        if (res) {
          store.dispatch(AUTH_LOGOUT)
          next({name: 'sign-in'})
        }
      })
    }
  },
  {
    path: '*',
    component: NotFound
  }
]

export const router = new VueRouter({
  routes,
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.auth)) {
    if (!firebase.auth().currentUser) {
      next({name: 'sign-in'})
    } else {
      next()
    }
  } else {
    next()
  }
})
