const MyEvents = () => import('@/views/pages/events/MyEvents')
const FriendsEvents = () => import('@/views/pages/events/FriendsEvents')
const AllEvents = () => import('@/views/pages/events/AllEvents')
const CreateEvent = () => import('@/views/pages/events/CreateEvent')

export default [
  {
    name: 'all-events',
    path: 'all-events',
    component: AllEvents,
    meta: {
      title: 'Все события',
      auth: true
    }
  },
  {
    name: 'my-events',
    path: 'my-events',
    component: MyEvents,
    meta: {
      title: 'Мои события',
      auth: true
    }
  },
  {
    name: 'friends-events',
    path: 'friends-events',
    component: FriendsEvents,
    meta: {
      title: 'События друзей',
      auth: true
    }
  },
  {
    name: 'create-event',
    path: 'create-event',
    component: CreateEvent,
    meta: {
      title: 'Создать событие',
      auth: true
    }
  }
]
