<template>
  <the-header
    :darkMode="darkMode"
    @toggle-dark-mode="toggleDarkMode"
    @toggle-sidebar="toggleSidebar"
  ></the-header>
  <side-bar :darkMode="darkMode" ref="sidebar"></side-bar>
  <div class="content">
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
  data() {
    return {
      darkMode: false,
    };
  },
  created() {
    this.loadPosts();
    this.darkMode = localStorage.getItem("darkmode") || false;
  },
  methods: {
    toggleSidebar() {
      this.$refs.sidebar.toggleSidebar();
    },
    toggleDarkMode() {
      this.darkMode = !this.darkMode;
      localStorage.setItem("darkmode", this.darkMode);
    },
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
.content {
  margin-top: 75px;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

body {
  font-family: "Papyrus", fantasy;
  background-image: url("https://static.vecteezy.com/system/resources/previews/002/225/671/original/cute-cat-kitten-head-cartoon-doodle-seamless-pattern-free-vector.jpg");
  background-position: left top;
  background-size: inherit;
  background-repeat: repeat;
}

.bg-light {
  background: rgb(5, 142, 170);
  background: linear-gradient(
    160deg,
    rgba(5, 142, 170, 1) 0%,
    rgba(35, 221, 172, 1) 100%
  );
}

.bg-dark {
  background: rgb(70, 70, 70);
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
