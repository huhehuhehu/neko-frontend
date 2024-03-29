<template>
  <div class="container">
    <div id="load-icon" v-if="loading">
      <i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
    </div>
    <div v-else>
      <div class="grid-container">
        <paged-card :posts="posts" />
      </div>
      <div class="page-nav-bar">
        <div class="page-numbers" @click="firstPage">
          <i class="fa fa-angle-double-left"></i>
        </div>
        <div class="page-numbers" @click="pageDown">
          <i class="fa fa-angle-left"></i>
        </div>
        <div
          v-for="pageNum in pageNav"
          :key="pageNum"
          class="page-numbers"
          :class="{ active: pageNum == page }"
          @click="goToPage(pageNum)"
        >
          {{ pageNum }}
        </div>
        <div class="page-numbers" @click="pageUp">
          <i class="fa fa-angle-right"></i>
        </div>
        <div class="page-numbers" @click="lastPage">
          <i class="fa fa-angle-double-right"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PagedCard from "@/components/cards/PagedCard.vue";

import axios from "axios";
import { API_URL } from "@/config.js";

const FIRST_PAGE = 1;
const MAX_NAV_LENGTH = 5;

export default {
  data() {
    return {
      posts: [],
      page: 1,
      maxPage: 1,
      loading: true,
      pageNavLength: 5,
    };
  },
  components: {
    PagedCard,
  },
  computed: {
    pageNav() {
      if (this.page <= 2)
        return Array.from({ length: this.pageNavLength }, (v, k) => k + 1);
      else if (this.page >= this.maxPage - 2)
        return Array.from(
          { length: this.pageNavLength },
          (v, k) =>
            k +
            this.maxPage -
            (this.maxPage < MAX_NAV_LENGTH
              ? this.maxPage - 1
              : MAX_NAV_LENGTH - 1)
        );
      else
        return Array.from(
          { length: this.pageNavLength },
          (v, k) => k + this.page - 2
        );
    },
  },
  watch: {
    "$route.query.page"() {
      this.posts = this.$store.getters["posts/getPerPage"](
        this.$route.query.page - 1
      );
    },
  },
  methods: {
    firstPage() {
      this.$router.push({ query: { page: (this.page = FIRST_PAGE) } });
    },
    lastPage() {
      this.$router.push({ query: { page: (this.page = this.maxPage) } });
    },
    pageUp() {
      if (this.page == this.maxPage) return;
      this.$router.push({ query: { page: ++this.page } });
    },
    pageDown() {
      if (this.page == FIRST_PAGE) return;
      this.$router.push({ query: { page: --this.page } });
    },
    goToPage(page) {
      this.$router.push({ query: { page: page } });
      this.page = page;
    },
  },
  created() {
    axios
      .get(API_URL + "/length")
      .then((response) => {
        this.maxPage = Math.ceil(response.data.data / 4);
        if (this.maxPage < MAX_NAV_LENGTH) this.pageNavLength = this.maxPage;
        this.loading = false;
        if (this.$route.query.page) this.page = this.$route.query.page;
        else this.$router.push({ query: { page: this.page } });
        this.posts = this.$store.getters["posts/getPerPage"](this.page - 1);
      })
      .catch((error) => console.log(error.response.data));
  },
};
</script>

<style scoped>
.container {
  margin-top: 20px;
  margin-left: 10%;
  margin-right: 10%;
  min-width: 750px;
}

#load-icon {
  border: 1pt solid rgb(0, 53, 90);
  padding: 0 10px 10px 10px;
  border-radius: 10px;
  background: rgba(100, 194, 231, 0.7);
  text-align: center;
  color: white;
  font-size: 50pt;
  padding-top: 10px;
}

.page-nav-bar {
  display: flex;
  font-size: 24pt;
  align-items: center;
  justify-content: center;
  background: rgba(80, 80, 80, 0.7);
  border: 1pt solid rgb(0, 53, 90);
  border-radius: 10px;
}

.page-numbers {
  padding-left: 10px;
  padding-right: 10px;
  height: 100%;
}

i:hover,
.page-numbers:hover,
.page-numbers.active {
  cursor: pointer;
  background: black;
}
</style>
