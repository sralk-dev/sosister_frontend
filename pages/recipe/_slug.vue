<template>
  <div>
    <Poster />
    <section class="single-recipe-wrap-layout2 padding-bottom-80">
      <div class="container">
        <div class="single-recipe-layout2">
          <Info />
          <div class="making-elements-wrap">
            <div class="row" style="margin: 0 0 30px 0">
              <div class="col-xl-6 col-12 align-self-stretch">
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
  </div>
</template>

<script>
import Poster from "../../components/detail/Poster";
import Info from "../../components/detail/Info";
import Ingredients from "../../components/detail/Ingredients";
import Nutritions from "../../components/detail/Nutritions";
import Directions from "../../components/detail/Directions";
import Social from "../../components/detail/Social";

export default {
  components: {
    Poster,
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