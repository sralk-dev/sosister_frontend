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
    const categories = await SosisterApi.getTopCategories()

    commit('setCategories', categories)
  }
}

export const getters = {
  categories(state) {
    return state.categories
  }
}