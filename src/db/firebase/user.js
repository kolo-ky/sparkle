import {db} from '@/db/firebase/'

export const getInfo = (uid) => {
  return db.collection('users').where('userId', '==', uid).get()
}

export const withInfo = (refId) => {
  return db.collection('users').doc(refId)
}
