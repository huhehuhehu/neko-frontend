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
    <div
      class="top-btn nav-bg"
      :class="{ active: showBtn }"
      @click="scrollToTop"
    >
      <i class="fa fa-arrow-circle-up fa-fw" />
    </div>
  </div>
</template>

<script>
import BaseCard from "@/components/cards/BaseCard.vue";

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
      showBtn: false,
    };
  },
  computed: {
    initialPosts() {
      return this.$store.getters["posts/getPerPage"](0);
    },
  },
  methods: {
    handleScroll() {
      let bottomOfWindow =
        document.documentElement.scrollTop + window.innerHeight ===
        document.documentElement.offsetHeight;
      if (document.documentElement.scrollTop > 3000) {
        this.showBtn = true;
      } else {
        this.showBtn = false;
      }
      if (bottomOfWindow) {
        this.loading = true;
        const data = this.$store.getters["posts/getPerPage"](this.page);
        if (!data.length) {
          this.fullyLoaded = true;
          window.removeEventListener("scroll", this.handleScroll);
          this.loading = false;
          return;
        }
        this.posts.push(...data);
        this.page++;
        this.loading = false;
      }
    },
    scrollToTop() {
      document.documentElement.scrollTop = 0;
    },
  },

  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
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

.top-btn {
  position: fixed;
  cursor: pointer;
  right: 5vw;
  bottom: 5vh;
  font-size: 3vw;
  width: 3vw;
  height: 3vw;
  border-radius: 3vw;
  transform: translateY(300%);
  transition: transform 0.5s linear;
}

.top-btn.active {
  transform: translateY(0);
}

.fa {
  transform: translate(-11.5%, -19%);
}
</style>
