<template>
  <ul class="item-rating">
    <li v-for="fill in correctRating" :key="fill * 10" class="star-fill">
      <i class="fa fa-star"></i>
    </li>
    <li v-for="empty in (maxRating - correctRating)" :key="empty" class="star-empty">
      <i class="fa fa-star"></i>
    </li>
    <li>
      <span>
        {{correctRating}}
        <span>/ {{maxRating}}</span>
      </span>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      maxRating: 5,
    };
  },
  props: ["curRating"],
  computed: {
    correctRating() {
      if (this.curRating > this.maxRating) {
        return this.maxRating;
      } else if (this.curRating < 0) {
        return 0;
      } else {
        return this.curRating;
      }
    },
  },
};
</script>