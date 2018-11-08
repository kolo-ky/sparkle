import { USER_LOGIN, USER_LOGOUT } from '../actions/user'
import {CLEAR_ERROR, SET_LOADING, SET_ERROR} from '../actions/common'
import {getInfo} from '@/db/firebase/user'

export default {
  state: {
    profile: {},
    authenticated: false
  },
  getters: {
    isAuthenticated: state => state.authenticated,
    getProfile: state => state.profile,
    getUserId: state => state.profile.userId
  },
  actions: {
    [USER_LOGIN]: ({commit}, user) => {
      commit(CLEAR_ERROR)
      commit(SET_LOADING, true)
      getInfo(user.uid)
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            commit(SET_LOADING, false)
            commit(USER_LOGIN, {
              email: user.email,
              ...doc.data()
            })
          })
        })
        .catch(error => {
          commit(SET_LOADING, false)
          commit(SET_ERROR, error)
        })
    },
    [USER_LOGOUT]: ({commit}) => {
      commit(USER_LOGOUT)
    }
  },
  mutations: {
    [USER_LOGIN]: (state, user) => {
      state.profile = user
      state.authenticated = true
    },
    [USER_LOGOUT]: (state) => {
      state.profile = {}
      state.authenticated = false
    }
  }
}
