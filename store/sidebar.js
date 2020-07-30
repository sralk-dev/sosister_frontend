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
    const categories = await SosisterApi.getTopCategories()

    commit('setCategories', categories)
  },
  async fetchLatestRecipes({ commit }) {
    const latestRecipes = await SosisterApi.getLatestRecipes()

    commit('setLatestRecipe', latestRecipes)
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