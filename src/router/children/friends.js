const MyFriends = () => import('@/views/pages/MyFriends')
const FindFriends = () => import('@/views/pages/FindFriends')

export default [
  {
    name: 'my-friends',
    path: 'my-friends',
    component: MyFriends,
    meta: {
      title: 'Мои друзья',
      icon: 'group',
      auth: true
    }
  },
  {
    name: 'find-friends',
    path: 'find-friends',
    component: FindFriends,
    meta: {
      title: 'Найти друзей',
      icon: 'group',
      auth: true
    }
  }
]
