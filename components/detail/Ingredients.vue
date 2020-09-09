<template>
  <div class="ingridients-wrap">
    <h3 class="item-title">
      <i class="fa fa-list-ul"></i>Ingredients
    </h3>
    <div v-for="ingredient in ingredients" :key="ingredient.slug" class="checkbox checkbox-primary">
      <input id="checkbox1" type="checkbox" />
      <label for="checkbox1">{{ingredient.base_weight}} {{ingredient.title}}</label>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    ingredients() {
      return this.$store.getters["detail/ingredients"];
    },
  },
};
</script>