<template>
  <div class="container">
    <div id="load-icon" v-if="loading">
      <i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
    </div>
    <div v-else>
      <!-- <div class="grid"> -->
      <transition-group name="slide-fade" tag="div" class="grid">
        <base-card v-for="post in posts" :key="post.id" :post="post" />
      </transition-group>
      <!-- </div> -->
      <div class="page-navigation">
        <i class="fa fa-angle-double-left fa-fw" @click="firstPage"></i>
        <i class="fa fa-angle-left fa-fw" @click="pageDown"></i>
        <div
          v-for="pageNum in pageNav"
          :key="pageNum"
          :class="{ 'page-numbers': true, active: pageNum == page }"
          @click="goToPage(pageNum)"
        >
          {{ pageNum }}
        </div>
        <i class="fa fa-angle-right fa-fw" @click="pageUp"></i>
        <i class="fa fa-angle-double-right fa-fw" @click="lastPage"></i>
      </div>
    </div>
  </div>
</template>

<script>
import BaseCard from "@/components/layout/cards/BaseCard.vue";

import axios from "axios";
import { API_URL } from "@/config.js";

const FIRST_PAGE = 1;

export default {
  data() {
    return {
      posts: [],
      page: 1,
      maxPage: 1,
      loading: true,
    };
  },
  components: {
    BaseCard,
  },
  computed: {
    pageNav() {
      if (this.page <= 2) return Array.from({ length: 5 }, (v, k) => k + 1);
      else if (this.page >= this.maxPage - 2)
        return Array.from({ length: 5 }, (v, k) => k + this.maxPage - 4);
      else return Array.from({ length: 5 }, (v, k) => k + this.page - 2);
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
      if (this.page == 1) return;
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

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
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

.page-navigation {
  display: flex;
  font-size: 24pt;
  align-items: center;
  justify-content: center;
  background: rgba(100, 194, 231, 0.7);
  border: 1pt solid rgb(0, 53, 90);
  border-radius: 10px;
}

.page-numbers {
  padding-left: 10px;
  padding-right: 10px;
}

i:hover,
.page-numbers:hover,
.page-numbers.active {
  cursor: pointer;
  background: rgb(62, 62, 110);
}

.slide-fade-enter-active {
  transition: all 1s ease-in;
}

/* .slide-fade-leave-active {
  transition: all 0.8s ease;
} */

.slide-fade-enter-from, 
.slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
