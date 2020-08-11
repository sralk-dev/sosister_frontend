import SosisterApi from '../services/sosisterApi'

export const state = () => ({
  currentPage: 1,
  onPage: 10,
  count: 0,
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
  }
}

export const actions = {
  async fetchRecipes({ commit, state }) {
    const { currentPage, onPage } = state
    const result = await SosisterApi.getRecipes(currentPage, onPage)

    commit('setCountRecipes', result.data['count'])

    commit('setRecipes', result.data['results'])
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
  }
}