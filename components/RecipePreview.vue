<template>
  <div>
    <div class="product-box-layout1">
      <figure class="item-figure">
        <nuxt-link :to="'/recipe/' + recipe.slug">
          <img v-if="recipe.poster" :src="recipe.poster" alt="Product" />
          <img v-else src="@/assets/img/product/product5.jpg" alt="Product" />
        </nuxt-link>
      </figure>
      <div class="item-content">
        <span class="sub-title">
          <nuxt-link
            v-for="category in recipe.categories"
            :to="'../categories/' + category.slug"
            :key="category.slug"
          >{{category.title + ' '}}</nuxt-link>
        </span>
        <h3 class="item-title">
          <nuxt-link :to="'recipe/' + recipe.slug">{{recipe.title}}</nuxt-link>
        </h3>
        <RecipeRating :curRating="5" />
        <p>{{recipe.description}}</p>
        <ul class="entry-meta">
          <li>
            <a href="#">
              <i class="fa fa-clock-o"></i>
              {{recipe.cook_time}} мин.
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa fa-user"></i>
              <span>{{recipe.owner.username}}</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import RecipeRating from "../widgets/RecipeRating";

export default {
  components: {
    RecipeRating,
  },
  props: ["recipe", "top"],
};
</script>