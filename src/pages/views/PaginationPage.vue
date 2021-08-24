<template>
  <div class="container">
    <div id="load-icon" v-if="loading">
      <i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
    </div>
    <div v-else>
      <div class="grid">
        <base-card v-for="post in posts" :key="post.id" :post="post" />
      </div>
      <div class="page-navigation">
        <i class="fa fa-angle-double-left fa-fw" @click="firstPage"></i>
        <i class="fa fa-angle-left fa-fw" @click="pageDown"></i>
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
  methods: {
    firstPage() {
      this.posts = this.$store.getters["posts/getPerPage"]((this.page = 1) - 1);
    },
    lastPage() {
      this.posts = this.$store.getters["posts/getPerPage"](
        (this.page = this.maxPage) - 1
      );
    },
    pageUp() {
      if (this.page === this.maxPage) return;
      this.posts = this.$store.getters["posts/getPerPage"](++this.page - 1);
    },
    pageDown() {
      if (this.page === 1) return;
      this.posts = this.$store.getters["posts/getPerPage"](--this.page - 1);
    },
  },
  created() {
    axios
      .get(API_URL + "/length")
      .then((response) => {
        this.maxPage = Math.ceil(response.data.data / 4);
        this.loading = false;
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
  font-size: 24pt;
  text-align: center;
  background: rgba(100, 194, 231, 0.7);
  border: 1pt solid rgb(0, 53, 90);
  border-radius: 10px;
}

.fa {
  cursor: pointer;
}
</style>
