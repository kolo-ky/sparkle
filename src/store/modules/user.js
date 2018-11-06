import { USER_LOGIN, USER_LOGOUT, USER_LOAD_DATA } from '../actions/user'
import {CLEAR_ERROR, SET_LOADING} from '../actions/common'

export default {
  state: {
    uid: null,
    profile: {},
    authenticated: false
  },
  getters: {
    isAuthenticated: state => state.authenticated,
    getProfile: state => state.profile,
    getUid: state => state.uid
  },
  actions: {
    [USER_LOAD_DATA]: ({commit}) => {
      commit(CLEAR_ERROR)
      commit(SET_LOADING, true)
      commit(USER_LOAD_DATA)
      // commit(SET_LOADING, false)
    },
    [USER_LOGIN]: ({commit}, user) => {
      commit(USER_LOGIN, user)
    },
    [USER_LOGOUT]: ({commit}) => {
      commit(USER_LOGOUT)
    }
  },
  mutations: {
    [USER_LOAD_DATA]: (state) => {
      console.log('load data')
    },
    [USER_LOGIN]: (state, user) => {
      state.uid = user.uid
      state.authenticated = true
    },
    [USER_LOGOUT]: (state) => {
      state.profile = {}
      state.user = null
      state.authenticated = false
    }
  }
}
