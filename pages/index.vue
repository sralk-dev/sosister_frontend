<template>
  <div>
    <TrendingRecipes />
  </div>
</template>

<script>
import TrendingRecipes from "../components/TrendingRecipes";

export default {
  layout: "WithSidebar",
  components: {
    TrendingRecipes,
  },
  async fetch({ store }) {
    await store.dispatch("trendingRecipes/fetchTrendingRecipes");
  },
};
</script>

<style>
</style>
