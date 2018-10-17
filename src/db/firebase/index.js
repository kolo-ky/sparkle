import firebase from 'firebase'
import {config} from './config/'

const firebaseApp = firebase.initializeApp(config)
const db = firebaseApp.database()
export const dbEventsRef = db.ref('events')
