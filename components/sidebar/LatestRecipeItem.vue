<template>
  <li class="single-item">
    <div class="item-img">
      <nuxt-link :to="'recipe/' + recipe.slug">
        <img v-if="recipe.poster" :src="recipe.poster" alt="Product" />
        <img v-else src="@/assets/img/product/latest1.jpg" alt="Product" />
      </nuxt-link>
      <div class="count-number">{{index + 1}}</div>
    </div>
    <div class="item-content">
      <div class="item-ctg">
        <nuxt-link
          v-for="category in recipe.categories"
          :to="'../categories/' + category.slug"
          :key="category.slug"
        >{{category.title + ' '}}</nuxt-link>
      </div>
      <h4 class="item-title">
        <nuxt-link :to="'recipe/' + recipe.slug">{{recipe.title}}</nuxt-link>
      </h4>
      <div class="item-post-by">
        <nuxt-link to="#">
          <i class="fa fa-user"></i>
          {{recipe.owner.username}}
        </nuxt-link>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  props: ["recipe", "index"],
};
</script>