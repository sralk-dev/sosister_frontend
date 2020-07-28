export const state = () => ({
  recipes: [
    { id: 1, title: "Хавка для души", category: 'Вкуснятина', rating: 4, description: "3geiojgei fedio jefoij efij ewoifj weoifj owei  iwejfoiwe j0 q0w kdpqwok", cookTime: 13, owner: "Lonh Gewfxz", likes: 17 },
    { id: 2, title: "Хавка для Самсы", category: 'Вкуснятина', rating: 4, description: "3geiojgei fedio jefoij efij ewoifj weoifj owei  iwejfoiwe j0 q0w kdpqwok", cookTime: 13, owner: "Lonh Gewfxz", likes: 17 },
    { id: 3, title: "Хавка для души", category: 'Курятина', rating: 2, description: "3geiojgei fedio jefoij efij ewoifj weoifj owei  iwejfoiwe j0 q0w kdpqwok", cookTime: 13, owner: "Lonh Gewfxz", likes: 17 },
    { id: 4, title: "Хавка для души", category: 'Вкуснятина', rating: 4, description: "3geiojgei fedio jefoij efij ewoifj weoifj owei  iwejfoiwe j0 q0w kdpqwok", cookTime: 13, owner: "Lonh Gewfxz", likes: 17 },
  ]
})

export const mutations = {}

export const actions = {}

export const getters = {
  recipes(state) {
    return state.recipes
  }
}