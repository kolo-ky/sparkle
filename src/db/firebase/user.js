import firebase from 'firebase'

export const onAuth = () => {
  return firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in.
    } else {
      // No user is signed in.
    }
  })
}
