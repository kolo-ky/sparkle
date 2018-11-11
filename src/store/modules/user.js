import { USER_LOGIN, USER_LOGOUT, USER_DOC_REF, UPDATE_PROFILE } from '../actions/user'
import {CLEAR_ERROR, SET_LOADING, SET_ERROR} from '../actions/common'
import {getInfo, withInfo} from '@/db/firebase/user'
import model from './models/user'

export default {
  state: {
    profile: {},
    authenticated: false,
    model: model,
    refId: null
  },
  getters: {
    isAuthenticated: state => state.authenticated,
    profile: state => state.profile,
    getUserId: state => state.profile.userId,
    refId: state => state.refId,
    profileList (state) {
      return Object.keys(state.model).map(key => {
        if (state.profile[key]) {
          return {
            key,
            title: state.model[key].title,
            value: state.profile[key],
            validate: state.model[key].validate
          }
        } else {
          return {
            key,
            title: state.model[key].title,
            value: '',
            validate: state.model[key].validate
          }
        }
      })
    }
  },
  actions: {
    [USER_LOGIN]: ({commit}, user) => {
      commit(CLEAR_ERROR)
      commit(SET_LOADING, true)
      getInfo(user.uid)
        .then(querySnapshot => {
          if (querySnapshot.docs.length) {
            querySnapshot.forEach(doc => {
              commit(SET_LOADING, false)
              commit(USER_LOGIN, {
                ...doc.data(),
                email: user.email
              })
              commit(USER_DOC_REF, doc.ref.id)
            })
          } else {
            commit(SET_LOADING, false)
            commit(USER_LOGIN, {
              email: user.email
            })
          }
        })
        .catch(error => {
          commit(SET_LOADING, false)
          commit(SET_ERROR, error)
        })
    },
    [USER_LOGOUT]: ({commit}) => {
      commit(USER_LOGOUT)
    },
    [UPDATE_PROFILE]: ({commit, state}, user) => {
      commit(CLEAR_ERROR)
      commit(SET_LOADING, true)
      return withInfo(state.refId).update(user)
        .then(() => {
          commit(SET_LOADING, false)
          commit(UPDATE_PROFILE, user)
          return Promise.resolve()
        })
        .catch((error) => {
          commit(SET_LOADING, false)
          commit(SET_ERROR, error)
        })
    }
  },
  mutations: {
    [USER_LOGIN]: (state, user) => {
      state.profile = user
      state.authenticated = true
    },
    [UPDATE_PROFILE]: (state, user) => {
      state.profile = user
    },
    [USER_DOC_REF]: (state, refId) => {
      state.refId = refId
    },
    [USER_LOGOUT]: (state) => {
      state.profile = {}
      state.authenticated = false
    }
  }
}
