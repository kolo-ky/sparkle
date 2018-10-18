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
  actions: { },
  mutations: { }
}
