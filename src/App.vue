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
    if (!this.darkMode) document.body.classList.remove("dark-theme");
    else document.body.classList.add("dark-theme");
  },
  methods: {
    toggleSidebar() {
      this.$refs.sidebar.toggleSidebar();
    },
    toggleDarkMode() {
      this.darkMode = !this.darkMode;
      localStorage.setItem("darkmode", this.darkMode);
      document.body.classList.toggle("dark-theme");
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
