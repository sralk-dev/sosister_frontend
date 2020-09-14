<template>
  <div class="ingridients-wrap">
    <h3 class="item-title">
      <i class="fa fa-list-ul"></i>Ингредиенты
    </h3>
    <div v-for="ingredient in ingredients" :key="ingredient.slug" class="checkbox checkbox-primary">
      <input :id="'checkbox-' + ingredient.slug" type="checkbox" />
      <label :for="'checkbox-' + ingredient.slug">{{ingredient.base_weight}} {{ingredient.title}}</label>
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