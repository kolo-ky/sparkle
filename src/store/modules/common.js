import { SET_LOADING, SET_ERROR, CLEAR_ERROR } from '../actions/common'
import {errors} from '@/db/firebase/firebaseErrors'

export default {
  state: {
    loading: false,
    error: null
  },
  getters: {
    loading: state => state.loading,
    error: state => state.error ? state.error.code ? errors[state.error.code] : state.error : state.error
  },
  actions: {
    [SET_LOADING]: ({commit}, payload) => {
      commit(SET_LOADING, payload)
    },
    [SET_ERROR]: ({commit}, payload) => {
      commit(SET_ERROR, payload)
    },
    [CLEAR_ERROR]: ({commit}) => {
      commit(CLEAR_ERROR)
    }
  },
  mutations: {
    [SET_LOADING]: (state, payload) => {
      state.loading = payload
    },
    [SET_ERROR]: (state, payload) => {
      state.error = payload
    },
    [CLEAR_ERROR]: state => {
      state.error = null
    }
  }
}
