import Vue from 'vue'
import VueRouter from 'vue-router'
import {AUTH_LOGOUT} from '@/store/actions/auth'
import {store} from '@/store/'
import firebase from 'firebase'
import friends from './children/friends'
import events from './children/events'

const Events = () => import('@/views/pages/events/Events')
const Friends = () => import('@/views/pages/friends/Friends')
const Profile = () => import('@/views/pages/Profile')
const Login = () => import('@/views/pages/Login')
const Registration = () => import('@/views/pages/Registration')
const NotFound = () => import('@/views/pages/NotFound')

Vue.use(VueRouter)

export const routes = [
  {
    name: 'home',
    path: '/',
    redirect: {name: 'all-events'}
  },
  {
    name: 'events',
    path: '/events',
    component: Events,
    meta: {
      title: 'События',
      icon: 'event',
      auth: true
    },
    children: events,
    redirect: {name: 'all-events'}
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
      icon: 'how_to_reg',
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
