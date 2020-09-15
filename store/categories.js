import SosisterApi from '../services/sosisterApi'

export const state = () => ({
  categories: []
})

export const mutations = {
  setCategories(state, categories) {
    state.categories = categories
  }
}

export const actions = {
  async fetchCategories({ commit }) {
    try {
      const categories = await SosisterApi.getCategories()

      commit('setCategories', categories.data.results)
    } catch (e) {
      commit("error/setError", { error: e.message, code: null }, { root: true });
    }
  }
}

export const getters = {
  categories(state) {
    return state.categories
  }
}