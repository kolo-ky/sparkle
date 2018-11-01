const MyFriends = () => import('@/views/pages/friends/MyFriends')
const FindFriends = () => import('@/views/pages/friends/FindFriends')

export default [
  {
    name: 'my-friends',
    path: 'my-friends',
    component: MyFriends,
    meta: {
      title: 'Мои друзья',
      auth: true
    }
  },
  {
    name: 'find-friends',
    path: 'find-friends',
    component: FindFriends,
    meta: {
      title: 'Найти друзей',
      auth: true
    }
  }
]
