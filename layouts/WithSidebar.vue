<template>
  <div>
    <Header />
    <ErrorIndicator v-if="hasError" />
    <section v-else class="padding-bottom-45">
      <div class="container">
        <div class="row gutters-60">
          <div class="col-lg-8">
            <Nuxt />
          </div>
          <div class="col-lg-4 sidebar-widget-area sidebar-break-md">
            <Subscribe />
            <Categories />
            <LatestRecipes />
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import Subscribe from "../components/sidebar/Subscribe";
import Categories from "../components/sidebar/Categories";
import LatestRecipes from "../components/sidebar/LatestRecipes";
import Footer from "../components/Footer";
import ErrorIndicator from "../components/ErrorIndicator";

export default {
  components: {
    Subscribe,
    Categories,
    LatestRecipes,
    Footer,
    ErrorIndicator,
  },
  computed: {
    hasError() {
      return this.$store.getters["error/hasError"];
    },
  },
};
</script>