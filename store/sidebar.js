import SosisterApi from '../services/sosisterApi'

export const state = () => ({
  categories: [],
  latestRecipes: []
})

export const mutations = {
  setCategories(state, categories) {
    state.categories = categories
  },
  setLatestRecipe(state, latestRecipes) {
    state.latestRecipes = latestRecipes
  }
}

export const actions = {
  async fetchCategories({ commit }) {
    try {
      const categories = await SosisterApi.getTopCategories()

      commit('setCategories', categories.data.results)
    } catch (e) {
      commit("error/setError", { error: e.message, code: null }, { root: true });
    }
  },
  async fetchLatestRecipes({ commit }) {
    try {
      const latestRecipes = await SosisterApi.getLatestRecipes()

      commit('setLatestRecipe', latestRecipes.data.results.slice(0, 5))
    } catch (e) {
      commit("error/setError", { error: e.message, code: null }, { root: true });
    }
  }
}

export const getters = {
  categories(state) {
    return state.categories
  },
  latestRecipes(state) {
    return state.latestRecipes
  }
}