<template>
  <section class="recipe-without-sidebar-wrap padding-bottom-22">
    <div class="container">
      <Pagination />
      <div class="row">
        <RecipePreview
          v-for="recipe in recipes"
          :key="recipe.id"
          :recipe="recipe"
          class="col-lg-4 col-md-6 col-sm-6 col-12"
        />
      </div>
    </div>
  </section>
</template>

<script>
import RecipePreview from "./RecipePreview";
import Pagination from "./Pagination";

export default {
  components: {
    RecipePreview,
    Pagination,
  },
  computed: {
    recipes() {
      return this.$store.getters["recipes/recipes"];
    },
  },
};
</script>
