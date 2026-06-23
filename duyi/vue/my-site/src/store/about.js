import { getAbout } from "@/api/about"

export default {
  namespaced: true,
  state: {
    isLoading: false,
    data: []
  },
  mutations: {
    setLoading(state, payload) {
      state.isLoading = payload
    },
    setData(state, payload) {
      state.data = payload
    }
  },
  actions: {
    async fetchAbout(ctx) {
      if (ctx.state.data.length) return
      ctx.commit('setLoading', true)
      const res = await getAbout()
      ctx.commit('setData', res)
      ctx.commit('setLoading', false)
    }
  },
}