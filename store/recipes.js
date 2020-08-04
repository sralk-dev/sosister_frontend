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
  async fetchRecipes({ commit }) {
    const recipes = await SosisterApi.getRecipes()
    commit('setRecipes', recipes)
  }
}

export const getters = {
  recipes(state) {
    return state.recipes
  }
}