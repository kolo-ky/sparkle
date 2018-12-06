import {db} from '@/db/firebase/'

export const findPeople = (name) => {
  return db.collection('users').where('name', '>=', name).get()
}
