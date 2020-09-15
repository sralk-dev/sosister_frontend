<template>
  <section class="error-page-wrap padding-top-80 padding-bottom-80">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="error-content-box">
            <h2 class="item-title">Страница не найдена!</h2>
            <p class="item-details">Страница не найдена. Пройдите на главную по кнопке внизу.</p>
            <nuxt-link to="/" class="item-btn">Главная</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  destroyed: function () {
    this.$store.commit("error/resetError");
  },
};
</script>