import {db} from '@/db/firebase/'

export const getInfo = (uid) => {
  return db.collection('users').where('userId', '==', uid).get()
}

export const withInfo = () => {
  return db.collection('users')
}
