import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user'
import auth from './modules/auth'
import events from './modules/events'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    events,
    user,
    auth
  },
  strict: process.env.NODE_ENV !== 'production'
})
