<template>
  <section class="single-recipe-main-banner">
    <div class="rc-carousel nav-control-layout4">
      <div class="item-figure" :style="poster"></div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    poster() {
      const poster = this.$store.getters["detail/poster"];
      const height = poster ? "500px" : "60px";
      return {
        height: height,
        backgroundImage: `url(${poster})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      };
    },
  },
};
</script>