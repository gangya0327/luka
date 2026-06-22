import { getSetting } from "@/api/setting"

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
    async fetchSetting(ctx) {
      ctx.commit('setLoading', true)
      const res = await getSetting()
      ctx.commit('setData', res)
      ctx.commit('setLoading', false)
    }
  },
}