<template>
  <div>
    <Recipes />
  </div>
</template>

<script>
import Recipes from "../components/Recipes";

export default {
  components: {
    Recipes,
  },
  async fetch({ store }) {
    await store.dispatch("recipes/fetchRecipes");
  },
};
</script>