<template>
  <div>
    <Header />
    <section class="padding-bottom-45">
      <div class="container">
        <div class="row gutters-60">
          <div class="col-lg-8">
            <Nuxt />
          </div>
          <div class="col-lg-4 sidebar-widget-area sidebar-break-md">
            <Subscribe />
            <Categories />
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
import Footer from "../components/Footer";

export default {
  components: {
    Subscribe,
    Categories,
    Footer,
  },
};
</script>