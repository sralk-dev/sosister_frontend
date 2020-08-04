<template>
  <section class="category-page-wrap padding-top-80 padding-bottom-50">
    <div class="container">
      <div class="row">
        <CategoryItem v-for="category in categories" :key="category.id" :category="category" />
      </div>
    </div>
  </section>
</template>

<script>
import CategoryItem from "./CategoryItem";

export default {
  components: {
    CategoryItem,
  },
  computed: {
    categories() {
      return this.$store.getters["categories/categories"];
    },
  },
};
</script>
