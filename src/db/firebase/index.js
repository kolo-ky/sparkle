import firebase from 'firebase'
import {config} from './config/'

export const firebaseApp = firebase.initializeApp(config)
const db = firebaseApp.database()
export const dbEventsRef = db.ref('events')
export const dbUserRef = db.ref('user')
