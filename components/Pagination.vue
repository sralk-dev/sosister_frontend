<template>
  <div class="paginator">
    <ul class="pagination">
      <li @click="prevPage" class="pagination-item">Назад</li>

      <li
        v-for="i in countPages"
        :key="i"
        :class="{active: i == currentPage}"
        @click="setPage(i)"
        class="pagination-item"
      >{{i}}</li>

      <li @click="nextPage" class="pagination-item">Вперед</li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    countPages() {
      return this.$store.getters["recipes/countPages"];
    },
    currentPage() {
      return this.$store.getters["recipes/currentPage"];
    },
  },
  mounted() {
    if (this.$route.query.page) {
      this.$store.commit("recipes/setCurrentPage", this.$route.query.page);
    }
  },
  methods: {
    async prevPage() {
      let currentPage = this.currentPage;

      if (currentPage > 1) {
        currentPage -= 1;
        this.$store.commit("recipes/setCurrentPage", currentPage);
        this.$router.push(`?page=${currentPage}`);

        await this.$store.dispatch("recipes/fetchRecipes");
      }
    },
    async nextPage() {
      let currentPage = this.currentPage;
      if (currentPage < this.countPages) {
        currentPage += 1;
        this.$store.commit("recipes/setCurrentPage", currentPage);
        this.$router.push(`?page=${currentPage}`);

        await this.$store.dispatch("recipes/fetchRecipes");
      }
    },
    async setPage(page) {
      this.$store.commit("recipes/setCurrentPage", page);
      this.$router.push(`?page=${page}`);

      await this.$store.dispatch("recipes/fetchRecipes");
    },
  },
};
</script>

<style scoped>
.paginator {
  display: inline-block;
  margin: 0 0 30px 0;
}
.pagination {
}
.pagination-item {
  margin: 0 5px;
  padding: 5px;
  cursor: pointer;
}

.pagination-item:hover {
  color: #ff4a52;
}

.pagination-item.active {
  color: #ff4a52;
}
</style>