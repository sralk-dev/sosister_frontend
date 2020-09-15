<template>
  <div>
    <Header />
    <div class="container">
      <ErrorIndicator v-if="hasError" />
      <Nuxt v-else />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header";
import Footer from "../components/Footer";
import ErrorIndicator from "../components/ErrorIndicator";

export default {
  components: {
    Header,
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