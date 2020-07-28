<template>
  <section class="padding-bottom-45">
    <div class="container">
      <div class="row gutters-60">
        <div class="col-lg-8">
          <div class="section-heading heading-dark">
            <h2 class="item-heading">TRENDING RECIPES</h2>
          </div>
          <div class="row">
            <RecipePreview :recipe="recipes[0]" :top="true" />
            <RecipePreview v-for="recipe in recipes.slice(1)" :key="recipe.id" :recipe="recipe" />
          </div>
        </div>
      </div>
    </div>
  </section>
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