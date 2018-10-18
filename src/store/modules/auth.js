import {AUTH_REQUEST, AUTH_SUCCESS, AUTH_ERROR, AUTH_LOGOUT} from '../actions/auth'
import {USER_REQUEST} from '../actions/user'
import {signIn} from '@/db/firebase/auth'

export default {
  namespaced: true,
  state: {
    token: localStorage.getItem('user-token') || '',
    status: '',
    hasLoadedOnce: false
  },
  getters: {
    isAuthenticated: state => !!state.token,
    authStatus: state => state.status
  },
  actions: {
    [AUTH_REQUEST]: ({commit, dispatch}, user) => {
      return new Promise((resolve, reject) => {
        commit(AUTH_REQUEST)
        signIn(user.name, user.password)
          .then(response => {
            localStorage.setItem('user-token', response.token)
            commit(AUTH_SUCCESS, response)
            dispatch(USER_REQUEST)
            resolve(response)
          })
          .catch(error => {
            commit(AUTH_ERROR, error)
            localStorage.removeItem('user-token')
            reject(error)
          })
      })
    },
    [AUTH_LOGOUT]: ({commit, dispatch}) => {
      return new Promise((resolve, reject) => {
        commit(AUTH_LOGOUT)
        localStorage.removeItem('user-token')
        resolve()
      })
    }
  },
  mutations: {
    [AUTH_REQUEST]: (state) => {
      state.status = 'loading'
    },
    [AUTH_SUCCESS]: (state, resp) => {
      state.status = 'success'
      state.token = resp.token
      state.hasLoadedOnce = true
    },
    [AUTH_ERROR]: (state) => {
      state.status = 'error'
      state.hasLoadedOnce = true
    },
    [AUTH_LOGOUT]: (state) => {
      state.token = ''
    }
  }
}
