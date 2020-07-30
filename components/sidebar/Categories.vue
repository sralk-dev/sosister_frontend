<template>
  <div class="widget">
    <div class="section-heading heading-dark">
      <h3 class="item-heading">CATEGORIES</h3>
    </div>
    <div class="widget-categories">
      <ul>
        <li v-for="category in categories" :key="category.id">
          <nuxt-link to="#">
            {{category.title}}
            <span>{{category.count}}</span>
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