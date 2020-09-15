import SosisterApi from '../services/sosisterApi'

export const state = () => ({
  recipe: null
})

export const mutations = {
  setRecipe(state, recipe) {
    state.recipe = recipe
  }
}

export const actions = {
  async fetchDetailRecipe({ commit }, slug) {
    try {
      const detailRecipe = await SosisterApi.getDetailRecipe(slug);

      commit('setRecipe', detailRecipe.data)
    } catch (e) {
      commit("error/setError", { error: e.message, code: null }, { root: true });
    }
  }
}

export const getters = {
  info(state) {
    const { id, title, categories, dtcreate, owner, views, cook_time, prep_time, description } = state.recipe

    return {
      id, title, categories, dtcreate, owner, views, description,
      cookTime: cook_time,
      prepTime: prep_time,
    }
  },

  ingredients(state) {
    return state.recipe.ingridients
  },

  nutritions(state) {
    const ingredients = state.recipe.ingridients
    let nutritions = {
      calories: 0,
      prots: 0,
      fats: 0,
      carbs: 0,
    }

    for (let i in ingredients) {
      nutritions = {
        calories: nutritions.calories + ingredients[i].calories,
        prots: nutritions.prots + ingredients[i].prots,
        fats: nutritions.fats + ingredients[i].fats,
        carbs: nutritions.carbs + ingredients[i].carbs,
      }
    }

    return [
      {
        title: 'Калории',
        value: nutritions.calories
      },
      {
        title: 'Белок',
        value: nutritions.prots
      },
      {
        title: 'Жиры',
        value: nutritions.fats
      },
      {
        title: 'Углеводы',
        value: nutritions.carbs
      }
    ]
  },

  directions(state) {
    return state.recipe.steps
  },

  poster(state) {
    return state.recipe.poster
  }
}