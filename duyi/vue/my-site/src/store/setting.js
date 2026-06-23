import { getSetting } from "@/api/setting"
import { pageTitle } from '@/utils'

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
      const data = await getSetting()
      ctx.commit('setData', data)
      ctx.commit('setLoading', false)
      if (data.siteTitle) {
        pageTitle.setSiteTitle(data.siteTitle)
      }
    }
  },
}