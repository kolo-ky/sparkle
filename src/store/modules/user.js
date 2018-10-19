import { USER_REQUEST, USER_ERROR, USER_SUCCESS } from '../actions/user'
import Vue from 'vue'
import { AUTH_LOGOUT } from '../actions/auth'
import {onAuth} from '@/db/firebase/user'

export default {
  namespaced: true,
  state: {
    status: '',
    profile: {}
  },
  getters: {
    getProfile: state => state.profile,
    isProfileLoaded: state => !!state.profile.name
  },
  actions: {
    [USER_REQUEST]: ({commit, dispatch}) => {
      commit(USER_REQUEST)
      onAuth()
        .then(resp => {
          commit(USER_SUCCESS, resp)
        })
        .catch(resp => {
          commit(USER_ERROR)
          // if resp is unauthorized, logout, to
          dispatch(AUTH_LOGOUT)
        })
    }
  },
  mutations: {
    [USER_REQUEST]: (state) => {
      state.status = 'loading'
    },
    [USER_SUCCESS]: (state, resp) => {
      state.status = 'success'
      Vue.set(state, 'profile', resp)
    },
    [USER_ERROR]: (state) => {
      state.status = 'error'
    },
    [AUTH_LOGOUT]: (state) => {
      state.profile = {}
    }
  }
}
