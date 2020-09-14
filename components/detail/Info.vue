<template>
  <div>
    <div class="ctg-name">
      <nuxt-link
        v-for="category in info.categories"
        :to="'../categories/' + category.slug"
        :key="category.slug"
      >{{category.title + ' '}}</nuxt-link>
    </div>
    <h2 class="item-title">{{info.title}}</h2>
    <div class="d-flex align-items-center justify-content-between flex-wrap mb-5">
      <ul class="entry-meta">
        <li class="single-meta">
          <i class="fa fa-calendar"></i>
          {{date}}
        </li>
        <li class="single-meta">
          <a href="#">
            <i class="fa fa-user"></i>
            <span>{{info.owner.username}}</span>
          </a>
        </li>
        <li class="single-meta">
          <RecipeRating :curRating="5" />
        </li>
      </ul>
      <ul class="action-item">
        <li>
          <button>
            <i class="fa fa-print"></i>
          </button>
        </li>
        <li class="action-share-hover">
          <button>
            <i class="fa fa-share-alt"></i>
          </button>
          <div class="action-share-wrap">
            <a href="#" title="facebook">
              <i class="fa fa-facebook-f"></i>
            </a>
            <a href="#" title="twitter">
              <i class="fa fa-twitter"></i>
            </a>
            <a href="#" title="linkedin">
              <i class="fa fa-linkedin"></i>
            </a>
            <a href="#" title="pinterest">
              <i class="fa fa-pinterest-p"></i>
            </a>
            <a href="#" title="skype">
              <i class="fa fa-skype"></i>
            </a>
            <a href="#" title="rss">
              <i class="fa fa-rss"></i>
            </a>
          </div>
        </li>
      </ul>
    </div>
    <div class="item-feature">
      <ul>
        <li>
          <div class="feature-wrap">
            <div class="media">
              <div class="feature-icon">
                <i class="fa fa-clock-o"></i>
              </div>
              <div class="media-body space-sm">
                <div class="feature-title">Подготовка</div>
                <div class="feature-sub-title">{{info.prepTime}} мин.</div>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="feature-wrap">
            <div class="media">
              <div class="feature-icon">
                <i class="fa fa-cutlery"></i>
              </div>
              <div class="media-body space-sm">
                <div class="feature-title">Готовка</div>
                <div class="feature-sub-title">{{info.cookTime}} мин.</div>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="feature-wrap">
            <div class="media">
              <div class="feature-icon">
                <i class="fa fa-users"></i>
              </div>
              <div class="media-body space-sm">
                <div class="feature-title">Сервировка</div>
                <div class="feature-sub-title">10 персон</div>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="feature-wrap">
            <div class="media">
              <div class="feature-icon">
                <i class="fa fa-eye"></i>
              </div>
              <div class="media-body space-sm">
                <div class="feature-title">Просмотры</div>
                <div class="feature-sub-title">{{info.views}}</div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <p class="item-description">{{info.description}}</p>
  </div>
</template>


<script>
import RecipeRating from "../../widgets/RecipeRating";

export default {
  components: {
    RecipeRating,
  },
  computed: {
    info() {
      return this.$store.getters["detail/info"];
    },
    date() {
      return this.info.dtcreate.slice(0, 10);
    },
  },
};
</script>