import Vue from 'vue'
import VueRouter from 'vue-router'

const Events = () => import('@/views/pages/Events')
const CreateEvent = () => import('@/views/pages/CreateEvent')
const Profile = () => import('@/views/pages/Profile')

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: {name: 'events'}
  },
  {
    name: 'events',
    path: '/',
    component: Events
  },
  {
    path: '/create-event',
    component: CreateEvent,
    props: true
  },
  {
    path: '/profile',
    component: Profile,
    props: true
  }
]

export const router = new VueRouter({
  routes,
  mode: 'history'
})
