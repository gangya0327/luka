import { adminLogin, getInfo } from '@/api/user'
import { removeToken } from '@/utils/auth'
import { resetRouter } from '@/router'

const getDefaultState = () => {
  return {
    user: null
  }
}

const state = getDefaultState()

const mutations = {
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState())
  },
  SET_USER: (state, payload) => {
    state.user = payload
  }
}

const actions = {
  // user login
  login({ commit }, userInfo) {
    return new Promise((resolve, reject) => {
      adminLogin(userInfo).then(response => {
        const { data } = response
        if (data) {
          commit('SET_USER', data)
          resolve()
        } else {
          reject(response)
        }
      }).catch(error => {
        reject(error)
      })
    })
  },

  // get user info
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      getInfo().then(response => {
        if (typeof response === 'string') {
          response = JSON.parse(response)
          if (response.code === 401) {
            reject(response.msg)
          }
        } else {
          commit('SET_USER', response.data)
          resolve()
        }
      })

      getInfo(state.token).then(response => {
        const { data } = response

        if (!data) {
          return reject(response)
        }

        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  // user logout
  logout({ commit, state }) {
    return new Promise((resolve, reject) => {
      removeToken() // must remove  token  first
      resetRouter()
      commit('RESET_STATE')
      resolve()
    })
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      removeToken() // must remove  token  first
      commit('RESET_STATE')
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

