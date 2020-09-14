<template>
  <div class="widget">
    <div class="section-heading heading-dark">
      <h3 class="item-heading">Топ категории</h3>
    </div>
    <div class="widget-categories">
      <ul>
        <li v-for="category in categories" :key="category.id">
          <nuxt-link :to="'categories/' + category.slug">
            {{category.title}}
            <span>{{category.recipes_count}}</span>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    categories() {
      return this.$store.getters["sidebar/categories"];
    },
  },
};
</script>