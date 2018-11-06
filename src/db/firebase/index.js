import firebase from 'firebase'
import 'firebase/firestore'
import {config} from './config/'

export const firebaseApp = firebase.initializeApp(config)
export const db = firebaseApp.firestore()
db.settings({
  timestampsInSnapshots: true
})
