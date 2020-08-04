<template>
  <div>
    <Categories />
  </div>
</template>

<script>
import Categories from "../../components/Categories";

export default {
  components: {
    Categories,
  },
  async fetch({ store }) {
    await store.dispatch("categories/fetchCategories");
  },
};
</script>