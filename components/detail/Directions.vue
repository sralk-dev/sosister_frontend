<template>
  <div class="direction-wrap-layout2">
    <div class="section-heading2 heading-dark">
      <h2 class="item-heading">Инструкция приготовления</h2>
    </div>
    <div v-for="(direction, index) in directions" :key="direction.id" class="direction-box-layout2">
      <div class="serial-number">
        <h4 class="number-title">{{index + 1 > 10 ? index + 1 : '0' + (index + 1)}}</h4>
        <span>Шаг</span>
      </div>
      <div class="item-content">
        <span class="item-title directions-item">{{direction.title}}</span>
        <p>{{direction.description}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    directions() {
      return this.$store.getters["detail/directions"];
    },
  },
};
</script>