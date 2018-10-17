import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user'
import events from './modules/events'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    events,
    user
  },
  strict: process.env.NODE_ENV !== 'production'
})
