<template>
  <section class="single-recipe-wrap-layout2 padding-bottom-80">
    <div class="container">
      <div class="single-recipe-layout2">
        <Info />
        <div class="making-elements-wrap">
          <div class="row">
            <div class="col-xl-6 col-12 align-self-center">
              <Ingredients />
            </div>
            <div class="col-xl-6 col-12 align-self-stretch">
              <Nutritions />
            </div>
          </div>
        </div>
        <Directions />
      </div>
    </div>
  </section>
</template>

<script>
import Info from "../../components/detail/Info";
import Ingredients from "../../components/detail/Ingredients";
import Nutritions from "../../components/detail/Nutritions";
import Directions from "../../components/detail/Directions";
import Social from "../../components/detail/Social";

export default {
  components: {
    Info,
    Ingredients,
    Nutritions,
    Directions,
    Social,
  },
  async fetch({ store, route }) {
    await store.dispatch("detail/fetchDetailRecipe", route.params.slug);
  },
};
</script>