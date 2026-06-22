import { getBannerList } from "@/api/banner"

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
    async fetchBanner(ctx) {
      if (ctx.state.data.length) return
      ctx.commit('setLoading', true)
      const res = await getBannerList()
      ctx.commit('setData', res)
      ctx.commit('setLoading', false)
    }
  },
}