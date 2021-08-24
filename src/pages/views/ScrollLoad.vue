<template>
  <div class="container">
    <base-card v-for="post in initialPosts" :key="post.id" :post="post" />
    <base-card v-for="post in posts" :key="post.id" :post="post" />
    <div id="load-icon" v-show="loading">
      <i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
    </div>
    <div id="loaded-message" v-show="fullyLoaded">
      No more neko below
    </div>
  </div>
</template>

<script>
import BaseCard from "@/components/layout/cards/BaseCard.vue";

// import { POST_PER_LOAD } from "@/config.js";

export default {
  components: {
    BaseCard,
  },
  data() {
    return {
      posts: [],
      page: 1,
      loading: false,
      fullyLoaded: false,
    };
  },
  computed: {
    initialPosts() {
      return this.$store.getters["posts/getPerPage"](0);
    },
  },
  methods: {
    getNextPosts() {
      let bottomOfWindow =
        document.documentElement.scrollTop + window.innerHeight ===
        document.documentElement.offsetHeight;
      if (bottomOfWindow) {
        this.loading = true;
        const data = this.$store.getters["posts/getPerPage"](this.page);
        if (!data.length) {
          this.fullyLoaded = true;
          window.removeEventListener("scroll", this.getNextPosts);
          this.loading = false;
          return;
        }
        this.posts.push(...data);
        this.page++;
        this.loading = false;
        // sessionStorage.setItem("posts", JSON.stringify(this.posts));
        // sessionStorage.setItem("page", this.page);
      }
    },
  },
  // created() {
  //   if (sessionStorage.getItem("page")) {
  //     this.posts = JSON.parse(sessionStorage.getItem("posts"));
  //     this.page = sessionStorage.getItem("page");
  //   }
  // },
  mounted() {
    window.addEventListener("scroll", this.getNextPosts);
  },
  unmounted() {
    window.removeEventListener("scroll", this.getNextPosts);
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
  padding-top: 10px;
}

#loaded-message {
  border: 1pt solid rgb(0, 53, 90);
  padding: 0 10px 10px 10px;
  border-radius: 10px;
  background: rgba(39, 106, 168, 0.7);
  text-align: center;
  color: white;
  font-family: "Papyrus", fantasy;
  font-size: 24pt;
  padding-top: 10px;
}
</style>
