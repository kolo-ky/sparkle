import { USER_LOGIN, USER_LOGOUT } from '../actions/user'
import {CLEAR_ERROR, SET_LOADING, SET_ERROR} from '../actions/common'
import {getInfo} from '@/db/firebase/user'

export default {
  state: {
    profile: {},
    authenticated: false,
    model: {
      name: {
        title: 'Имя',
        value: ''
      },
      surname: {
        title: 'Фамилия',
        value: ''
      },
      email: {
        title: 'Почта',
        value: ''
      },
      bio: {
        title: 'О себе',
        value: ''
      }
    }
  },
  getters: {
    isAuthenticated: state => state.authenticated,
    profile: state => state.profile,
    getUserId: state => state.profile.userId,
    profileList (state) {
      return Object.keys(state.model).map(key => {
        if (state.profile[key]) {
          return {
            title: state.model[key].title,
            value: state.profile[key]
          }
        } else {
          return {
            title: state.model[key].title,
            value: ''
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
    }
  },
  mutations: {
    [USER_LOGIN]: (state, user) => {
      state.profile = user
      state.authenticated = true
    },
    [USER_LOGOUT]: (state) => {
      state.profile = {}
      state.authenticated = false
    }
  }
}
