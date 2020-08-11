<template>
  <li class="single-item">
    <div class="item-img">
      <nuxt-link to="#">
        <img src="@/assets/img/product/latest1.jpg" alt="Post" />
      </nuxt-link>
      <div class="count-number">{{index + 1}}</div>
    </div>
    <div class="item-content">
      <div class="item-ctg">{{recipe.category}}</div>
      <h4 class="item-title">
        <nuxt-link to="#">{{recipe.title}}</nuxt-link>
      </h4>
      <div class="item-post-by">
        <nuxt-link to="#">
          <i class="fa fa-user"></i>
          <span>by</span>
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