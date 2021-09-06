<template>
  <header :class="{ 'bg-light': !darkMode, 'bg-dark': darkMode }">
    <div class="left-header">
      <span class="btn f-pink" @click="toggleSidebar">
        <i class="fa fa-bars fa-fw" id="btn"></i>
      </span>
      <router-link to="/">
        <img v-if="!darkMode" id="logo" src="@/assets/logo-l.png" />
        <img v-else id="logo" src="@/assets/logo-d.png" />
      </router-link>
    </div>
    <span @click="randomPost()">
      <img id="avatar" src="@/assets/yawn.png" />
    </span>
    <div class="dark-toggle" @click="toggleDarkMode">
      <i v-if="!darkMode" class="fa fa-sun-o fa-fw" id="sun"></i>
      <i v-else class="fa fa-moon-o fa-fw" id="moon"></i>
    </div>
  </header>
</template>

<script>
export default {
  emits: ["toggleSidebar", "toggleDarkMode"],
  props: ["darkMode"],
  methods: {
    toggleDarkMode() {
      this.$emit("toggleDarkMode");
    },
    toggleSidebar() {
      this.$emit("toggleSidebar");
    },
    randomPost() {
      const id = Math.ceil(Math.random() * this.$store.getters["posts/total"]);
      this.$router.push(`/post/${id}`);
    },
  },
};
</script>

<style scoped>
header {
  z-index: 750;
  position: fixed;
  top: 0;
  width: 100%;
  height: 75px;
  left: 0;
  overflow: hidden;
}

.left-header {
  float: left;
  left: 0;
  width: 200px;
}

#logo {
  float: right;
  cursor: pointer;
  padding-right: 15pt;
  max-height: 75px;
}

.dark-toggle {
  float: right;
  transform: translateY(35%);
  font-size: 24pt;
  margin-right: 10px;
  cursor: pointer;
}

.dark-toggle #sun {
  color: yellow;
}

.dark-toggle #moon {
  color: white;
}

#avatar {
  float: right;
  cursor: pointer;
  padding-right: 15pt;
  max-height: 100%;
}

#btn {
  float: left;
  font-size: 16pt;
  padding-left: 10px;
  transform: translateY(125%);
  cursor: pointer;
}

.f-pink {
  color: pink;
}
</style>
