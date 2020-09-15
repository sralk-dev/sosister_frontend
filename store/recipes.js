import SosisterApi from '../services/sosisterApi'

export const state = () => ({
  currentPage: 1,
  onPage: 10,
  count: 0,
  category: '',
  recipes: []
})

export const mutations = {
  setRecipes(state, recipes) {
    state.recipes = recipes
  },
  setCurrentPage(state, page) {
    state.currentPage = Number(page)
  },
  setCountRecipes(state, count) {
    state.count = count
  },
  setCategory(state, category) {
    state.category = category
  }
}

export const actions = {
  async fetchRecipes({ commit, state }) {
    try {
      const { currentPage, onPage, category } = state
      const result = await SosisterApi.getRecipes(currentPage, onPage, category)

      commit('setCountRecipes', result.data['count'])

      commit('setRecipes', result.data['results'])
    } catch (e) {
      commit("error/setError", { error: e.message, code: null }, { root: true });
    }
  }
}

export const getters = {
  recipes(state) {
    return state.recipes
  },
  countPages(state) {

    return Math.ceil(state.count / state.onPage)
  },
  currentPage(state) {
    return state.currentPage
  },
  showRecipes(state) {
    return state.recipes.length == 0 ? false : true
  }
}