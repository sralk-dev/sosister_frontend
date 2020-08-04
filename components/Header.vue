<template>
  <header class="header-one">
    <div id="header-main-menu" class="header-main-menu header-sticky">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-3 col-sm-4 col-4 possition-static">
            <div class="site-logo-mobile">
              <a href="index.html" class="sticky-logo-light">
                <img src="@/assets/img/logo-light.png" alt="Site Logo" />
              </a>
              <a href="index.html" class="sticky-logo-dark">
                <img src="@/assets/img/logo-dark.png" alt="Site Logo" />
              </a>
            </div>
            <nav class="site-nav">
              <ul :class="{active: isActive}" id="site-menu" class="site-menu">
                <li>
                  <nuxt-link to="/">Главная</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/categories">Категории</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/recipes">Рецепты</nuxt-link>
                </li>
              </ul>
            </nav>
          </div>
          <div
            class="col-lg-4 col-md-9 col-sm-8 col-8 d-flex align-items-center justify-content-end"
          >
            <div class="nav-action-elements-layout1">
              <ul>
                <li>
                  <button
                    type="button"
                    class="login-btn"
                    data-toggle="modal"
                    data-target="#myModal"
                  >
                    <i class="fa fa-user"></i>Войти
                  </button>
                </li>
                <li>
                  <a href="submit-recipe.html" class="fill-btn">
                    <i class="fa fa-plus"></i>Добавить рецепт
                  </a>
                </li>
              </ul>
            </div>
            <div
              @click="isActive = !isActive"
              :class="{active: isActive}"
              class="mob-menu-open toggle-menu"
            >
              <span class="bar"></span>
              <span class="bar"></span>
              <span class="bar"></span>
              <span class="bar"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="header-bottom d-none d-lg-block">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 d-none d-lg-block">
            <div class="nav-action-elements-layout2">
              <ul class="nav-social">
                <li>
                  <nuxt-link to="#" title="facebook">
                    <i class="fa fa-facebook-f"></i>
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="#" title="twitter">
                    <i class="fa fa-twitter"></i>
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="#" title="pinterest">
                    <i class="fa fa-pinterest-p"></i>
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="#" title="skype">
                    <i class="fa fa-skype"></i>
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="#" title="rss">
                    <i class="fa fa-rss"></i>
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="#" title="google-plus">
                    <i class="fa fa-google-plus-g"></i>
                  </nuxt-link>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-4 d-none d-lg-block">
            <div class="site-logo-desktop">
              <nuxt-link to="/" class="main-logo">
                <img src="@/assets/img/logo-dark.png" alt="Site Logo" />
              </nuxt-link>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="nav-action-elements-layout3">
              <ul>
                <li>
                  <div class="header-search-box">
                    <nuxt-link to="#search" title="Search" class="search-button">
                      <i class="fa fa-search"></i>
                    </nuxt-link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
    };
  },
};
</script>

<style scoped>
.site-menu .active {
  display: block;
}
</style>