import SosisterApi from '../services/sosisterApi'

export const state = () => ({
  recipes: []
})

export const mutations = {
  setRecipes(state, recipes) {
    state.recipes = recipes
  }
}

export const actions = {
  async fetchTrendingRecipes({ commit }) {
    const recipes = await SosisterApi.getTrendingRecipes()
    commit('setRecipes', recipes)
  }
}

export const getters = {
  recipes(state) {
    return state.recipes
  }
}