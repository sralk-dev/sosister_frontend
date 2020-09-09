<template>
  <div class="nutrition-wrap">
    <h3 class="item-title">
      <i class="fa fa-info"></i>Nutrition
    </h3>
    <ul class="nutrition-list">
      <li v-for="nutrition in nutritions" :key="nutrition">
        <div class="nutrition-name">{{nutrition.title}}</div>
        <div class="nutrition-value">{{nutrition.value}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    nutritions() {
      return this.$store.getters["detail/nutritions"];
    },
  },
};
</script>