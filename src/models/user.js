// import { USER_LOAD_DATA } from '@/store/actions/user'
import {store} from '@/store/'
import {db} from '@/db/firebase/'

export default class User {
  // constructor () {
  // }
  loadUserData () {
    db.collection('users').where('userId', '==', store.getters.getUid).get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        let data = doc.data()
        console.log(`${data.name}`)
      })
    }).catch(error => console.log(error))
    // store.dispatch(USER_LOAD_DATA)
  }
}
