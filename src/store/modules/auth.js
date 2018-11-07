import {AUTH_REGISTER, AUTH_LOGIN, AUTH_LOGOUT} from '../actions/auth'
import {USER_LOGIN, USER_LOGOUT} from '../actions/user'
import {SET_LOADING, SET_ERROR, CLEAR_ERROR} from '../actions/common'
import {signUp, signIn, signOut} from '@/db/firebase/auth'

export default {
  actions: {
    [AUTH_REGISTER]: ({commit, dispatch}, user) => {
      commit(CLEAR_ERROR)
      commit(SET_LOADING, true)
      return signUp(user.username, user.password)
        .then(response => {
          commit(SET_LOADING, false)
          dispatch(USER_LOGIN, response.user)
          return Promise.resolve(response)
        })
        .catch(error => {
          commit(SET_LOADING, false)
          commit(SET_ERROR, error)
        })
    },
    [AUTH_LOGIN]: ({commit, dispatch}, user) => {
      commit(CLEAR_ERROR)
      commit(SET_LOADING, true)
      return signIn(user.username, user.password)
        .then(response => {
          commit(SET_LOADING, false)
          dispatch(USER_LOGIN, response.user)
          return Promise.resolve(response)
        })
        .catch(error => {
          commit(SET_LOADING, false)
          commit(SET_ERROR, error)
        })
    },
    [AUTH_LOGOUT]: ({commit, dispatch}) => {
      commit(SET_LOADING, true)
      signOut()
        .then(() => {
          commit(SET_LOADING, false)
          dispatch(USER_LOGOUT)
        })
        .catch(error => {
          commit(SET_LOADING, false)
          commit(SET_ERROR, error)
        })
    }
  }
}
