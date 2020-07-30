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
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Subscribe from "../components/sidebar/Subscribe";

export default {
  components: {
    Subscribe,
  },
};
</script>