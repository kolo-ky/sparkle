import firebase from 'firebase'

export const signUp = (email, password) => {
  firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {
    console.log('registration completed successfully')
  }).catch(error => console.log(error))
}

export const signIn = (email, password) => {
  firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
    console.log('authorization was successful')
  }).catch(error => console.log(error))
}
