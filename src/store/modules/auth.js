import {AUTH_REQUEST, AUTH_SUCCESS, AUTH_ERROR, AUTH_LOGOUT} from '../actions/auth'
import {USER_LOGIN, USER_LOGOUT} from '../actions/user'
import {LOADING, SUCCESS, ERROR} from '@/constants/status'
import {signIn, signOut} from '@/db/firebase/auth'

export default {
  state: {
    status: ''
  },
  getters: {
    authStatus: state => state.status
  },
  actions: {
    [AUTH_REQUEST]: ({commit, dispatch}, user) => {
      return new Promise((resolve, reject) => {
        commit(AUTH_REQUEST)
        signIn(user.username, user.password)
          .then(response => {
            commit(AUTH_SUCCESS)
            dispatch(USER_LOGIN)
            resolve(response)
          })
          .catch(error => {
            commit(AUTH_ERROR, error)
            reject(error)
          })
      })
    },
    [AUTH_LOGOUT]: ({commit, dispatch}) => {
      return new Promise((resolve, reject) => {
        commit(AUTH_REQUEST)
        signOut()
          .then(() => {
            commit(AUTH_LOGOUT)
            dispatch(USER_LOGOUT)
            resolve()
          })
          .catch(error => {
            commit(AUTH_ERROR, error)
            reject(error)
          })
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
