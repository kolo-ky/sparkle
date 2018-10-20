import { USER_REQUEST, USER_SUCCESS, USER_LOGIN, USER_LOGOUT } from '../actions/user'
import {LOADING, SUCCESS} from '@/constants/status'

export default {
  state: {
    profile: {},
    authenticated: false,
    status: ''
  },
  getters: {
    isAuthenticated: state => state.authenticated,
    userStatus: state => state.status,
    getProfile: state => state.profile
  },
  actions: {
    [USER_REQUEST]: ({commit}, user) => {
      commit(USER_REQUEST, user)
    },
    [USER_SUCCESS]: ({commit}, user) => {
      commit(USER_SUCCESS)
    },
    [USER_LOGIN]: ({commit}, user) => {
      commit(USER_LOGIN)
    },
    [USER_LOGOUT]: ({commit}) => {
      commit(USER_LOGOUT)
    }
  },
  mutations: {
    [USER_REQUEST]: (state) => {
      state.status = LOADING
    },
    [USER_SUCCESS]: (state) => {
      state.status = SUCCESS
    },
    [USER_LOGIN]: (state, user) => {
      // state.profile = user
      state.authenticated = true
    },
    [USER_LOGOUT]: (state) => {
      state.profile = {}
      state.authenticated = false
    }
  }
}
