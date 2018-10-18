import firebase from 'firebase'

export const signUp = (email, password) => {
  return firebase.auth().createUserWithEmailAndPassword(email, password)
}

export const signIn = (email, password) => {
  return firebase.auth().signInWithEmailAndPassword(email, password)
}
