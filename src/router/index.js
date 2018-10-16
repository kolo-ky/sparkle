import Vue from 'vue'
import VueRouter from 'vue-router'

const Events = () => import('@/views/pages/Events')
const CreateEvent = () => import('@/views/pages/CreateEvent')
const Profile = () => import('@/views/pages/Profile')

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
  }
]

export const router = new VueRouter({
  routes,
  mode: 'history'
})
