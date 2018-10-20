import {AUTH_REQUEST, AUTH_SUCCESS, AUTH_ERROR, AUTH_LOGOUT} from '../actions/auth'
import {LOADING, SUCCESS, ERROR} from '@/constants/status'
import {signIn} from '@/db/firebase/auth'

export default {
  state: {
    status: ''
  },
  getters: {
    authStatus: state => state.status
  },
  actions: {
    [AUTH_REQUEST]: ({commit}, user) => {
      return new Promise((resolve, reject) => {
        commit(AUTH_REQUEST)
        signIn(user.username, user.password)
          .then(response => {
            commit(AUTH_SUCCESS)
            resolve(response)
          })
          .catch(error => {
            commit(AUTH_ERROR, error)
            reject(error)
          })
      })
    },
    [AUTH_LOGOUT]: ({commit}) => {
      return new Promise((resolve, reject) => {
        commit(AUTH_LOGOUT)
        resolve()
      })
    }
  },
  mutations: {
    [AUTH_REQUEST]: (state) => {
      state.status = LOADING
    },
    [AUTH_SUCCESS]: (state) => {
      state.status = SUCCESS
    },
    [AUTH_ERROR]: (state) => {
      state.status = ERROR
    },
    [AUTH_LOGOUT]: (state) => {
      state.status = SUCCESS
    }
  }
}
