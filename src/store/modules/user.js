import { USER_LOGIN, USER_LOGOUT } from '../actions/user'

export default {
  state: {
    profile: {},
    authenticated: false
  },
  getters: {
    isAuthenticated: state => state.authenticated,
    getProfile: state => state.profile
  },
  actions: {
    [USER_LOGIN]: ({commit}, user) => {
      commit(USER_LOGIN, user)
    },
    [USER_LOGOUT]: ({commit}) => {
      commit(USER_LOGOUT)
    }
  },
  mutations: {
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
