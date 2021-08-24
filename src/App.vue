<template>
  <the-header></the-header>
  <side-bar></side-bar>
  <div class="page">
    <router-view v-slot="{ Component, route }">
      <transition name="fade" mode="out-in">
        <component :is="Component" :key="route.path" />
      </transition>
    </router-view>
  </div>
</template>

<script>
import SideBar from "./components/layout/SideBar.vue";
import TheHeader from "./components/layout/TheHeader.vue";

export default {
  components: {
    TheHeader,
    SideBar,
  },
  created() {
    this.loadPosts();
  },
  methods: {
    async loadPosts() {
      try {
        await this.$store.dispatch("posts/loadPosts");
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style>
.page {
  margin-top: 5rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  /* margin-left: 10%;
  margin-right: 10%; */
}

body {
  background-image: url("https://static.vecteezy.com/system/resources/previews/002/225/671/original/cute-cat-kitten-head-cartoon-doodle-seamless-pattern-free-vector.jpg");
  background-position: left top;
  background-size: inherit;
  background-repeat: repeat;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
