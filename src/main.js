// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import {router} from './router/'
import Vuetify from 'vuetify'
import {store} from './store/'
import firebase from 'firebase'
import {config} from './db/firebase/config/'
import { USER_REQUEST, USER_SUCCESS, USER_LOGIN, USER_LOGOUT } from './store/actions/user'

Vue.use(Vuetify)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp(config)

    firebase.auth().onAuthStateChanged((user) => {
      this.$store.dispatch(USER_REQUEST)
      if (user) {
        this.$store.dispatch(USER_SUCCESS)
        this.$store.dispatch(USER_LOGIN, user)
      } else {
        this.$store.dispatch(USER_LOGOUT)
        this.$router.push('/login')
      }
    })
  }
})
