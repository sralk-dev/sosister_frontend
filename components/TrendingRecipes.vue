<template>
  <div>
    <div class="section-heading heading-dark">
      <h2 class="item-heading">TRENDING RECIPES</h2>
    </div>
    <div class="row">
      <RecipePreview v-if="recipes.length != 0" :recipe="recipes[0]" :top="true" />
      <RecipePreview v-for="recipe in recipes.slice(1)" :key="recipe.id" :recipe="recipe" />
    </div>
  </div>
</template>

<script>
import RecipePreview from "./RecipePreview";

export default {
  components: {
    RecipePreview,
  },
  computed: {
    recipes() {
      return this.$store.getters["trendingRecipes/recipes"];
    },
  },
};
</script>