<template>
  <div>
    <h1>{{$route.params.category}}</h1>
    <Recipes />
  </div>
</template>

<script>
import Recipes from "../../components/Recipes";

export default {
  components: {
    Recipes,
  },
  async fetch({ store, route }) {
    if (route.query.page) {
      store.commit("recipes/setCurrentPage", route.query.page);
    } else {
      store.commit("recipes/setCurrentPage", 1);
    }
    store.commit("recipes/setCategory", route.params.category);
    await store.dispatch("recipes/fetchRecipes");
  },
};
</script>