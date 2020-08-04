<template>
  <div class="col-lg-4 col-md-6 col-sm-6 col-12">
    <div class="category-box-layout1">
      <figure class="item-figure">
        <a href="single-recipe1.html">
          <img src="@/assets/img/product/product29.jpg" alt="Product" />
        </a>
      </figure>
      <div class="item-content">
        <h3 class="item-title">
          <nuxt-link :to="'categories/' + category.slug">{{category.title}}</nuxt-link>
        </h3>
        <span class="sub-title">{{category.recipeNums}} Recipes</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["category"],
};
</script>