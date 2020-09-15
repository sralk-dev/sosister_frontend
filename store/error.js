export const state = () => ({
  code: null,
  error: null,
})

export const mutations = {
  setError(state, { error, code }) {
    state.error = error
    //state.code = code
  },
  resetError(state) {
    state.error = null
    state.code = null
  }
}

export const actions = {

}

export const getters = {
  hasError(state) {
    return state.error == null ? false : true
  },
  error(state) {
    return {
      code: state.code,
      error: state.error
    }
  }
}