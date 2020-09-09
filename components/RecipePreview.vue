<template>
  <div>
    <div class="product-box-layout1">
      <figure class="item-figure">
        <a :href="'recipe/' + recipe.slug">
          <img v-if="recipe.poster" :src="recipe.poster" alt="Product" />
          <img v-else src="@/assets/img/product/product5.jpg" alt="Product" />
        </a>
      </figure>
      <div class="item-content">
        <span class="sub-title">Категория</span>
        <h3 class="item-title">
          <a :href="'recipe/' + recipe.slug">{{recipe.title}}</a>
        </h3>
        <RecipeRating :curRating="5" />
        <p>{{recipe.description}}</p>
        <ul class="entry-meta">
          <li>
            <a href="#">
              <i class="fa fa-clock-o"></i>
              {{recipe.cook_time}} Mins
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa fa-user"></i>by
              <span>{{recipe.owner.username}}</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa fa-heart"></i>
              <span>{{5}}</span> Likes
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