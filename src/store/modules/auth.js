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
  actions: { },
  mutations: { }
}
