<template>
  <div class="container">
    <form @submit.prevent="search">
      <input v-model="searchTerm" class="search-bar" type="text" />
    </form>
    <div class="grid">
      <base-card v-for="post in posts" :key="post.id" :post="post" />
    </div>
  </div>
</template>

<script>
import { API_URL } from "@/config.js";

import axios from "axios";

import BaseCard from "@/components/layout/cards/BaseCard.vue";

export default {
  components: {
    BaseCard,
  },
  data() {
    return {
      posts: [],
      searchTerm: "",
    };
  },
  created() {
    //get API from Laravel Backend
    axios
      .get(API_URL)
      .then((response) => (this.posts = response.data.data))
      .catch((error) => console.log(error.response.data));

    // console.log(this.posts);
  },
  methods: {
    search() {
      axios
        .get(API_URL + "/search", { params: { param: this.searchTerm } })
        .then((response) => {
          this.posts = response.data.data;
          // console.log(response.data.data);
          // console.log(this.posts);
        })
        .catch((error) => console.log(error.response.data));
      this.searchTerm = "";
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  margin-top: 20px;
  margin-left: 10%;
  margin-right: 10%;
  /* display: grid;
  grid-template-columns: 1fr 1fr 1fr; */
}

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

.grid-move {
  transition: all 0.3s;
}

.search-bar {
  margin-bottom: 10pt;
}
</style>
