<template>
  <div class="widget">
    <div class="section-heading heading-dark">
      <h3 class="item-heading">SUBSCRIBE &amp; FOLLOW</h3>
    </div>
    <div class="widget-follow-us">
      <ul>
        <li v-for="link in links" :key="link.url" class="single-item">
          <a :href="link.url">
            <i :class="link.classIcon"></i>
            {{link.title}}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { title: "LIKE ME ON", url: "#facebook", classIcon: "fa fa-facebook" },
        { title: "LIKE ME", url: "#twitter", classIcon: "fa fa-twitter" },
        { title: "LIKE ME", url: "#instagram", classIcon: "fa fa-instagram" },
        {
          title: "Subscribe",
          url: "#youtube",
          classIcon: "fa fa-youtube-play",
        },
      ],
    };
  },
};
</script>