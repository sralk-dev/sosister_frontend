<template>
  <div class="widget">
    <div class="section-heading heading-dark">
      <h3 class="item-heading">Последние рецепты</h3>
    </div>
    <div class="widget-latest">
      <ul class="block-list">
        <LatestRecipeItem
          v-for="(recipe, idx) in latestRecipes"
          :key="recipe.id"
          :recipe="recipe"
          :index="idx"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import LatestRecipeItem from "./LatestRecipeItem";

export default {
  components: {
    LatestRecipeItem,
  },
  computed: {
    latestRecipes() {
      return this.$store.getters["sidebar/latestRecipes"];
    },
  },
};
</script>