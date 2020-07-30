<template>
  <footer class="ranna-bg-dark">
    <div class="container">
      <div class="footer-logo">
        <nuxt-link to="/">
          <img src="@/assets/img/logo-light.png" class="img-fluid" alt="footer-logo" />
        </nuxt-link>
      </div>
      <div class="footer-menu">
        <ul>
          <li v-for="link in links" :key="link.url">
            <a :href="link.url">{{link.title}}</a>
          </li>
        </ul>
      </div>
      <div class="copyright">© All Right Reserved 2019</div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { title: "FACEBOOK", url: "#facebook" },
        { title: "TWITTER", url: "#twitter" },
        { title: "INSTAGRAM", url: "#instagram" },
        { title: "YOUTUBE", url: "#youtube" },
      ],
    };
  },
};
</script>