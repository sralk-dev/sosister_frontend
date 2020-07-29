<template>
  <div class="col-12" :class="{'col-md-6 col-sm-6 col-12': !top}">
    <div class="product-box-layout1">
      <figure class="item-figure">
        <a href="single-recipe1.html">
          <img src="@/assets/img/product/product5.jpg" alt="Product" />
        </a>
      </figure>
      <div class="item-content">
        <span class="sub-title">{{recipe.category}}</span>
        <h3 class="item-title">
          <a href="single-recipe1.html">{{recipe.title}}</a>
        </h3>
        <RecipeRating :curRating="recipe.score" />
        <p>{{recipe.description}}</p>
        <ul class="entry-meta">
          <li>
            <a href="#">
              <i class="fa fa-clock-o"></i>
              {{recipe.cookime}} Mins
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa fa-user"></i>by
              <span>{{recipe.owner}}</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa fa-heart"></i>
              <span>{{recipe.likes}}</span> Likes
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