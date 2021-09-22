<template>
  <header class="bg" :class="{ 'dark-theme': darkMode }">
    <div class="left-header">
      <span class="btn" @click="toggleSidebar">
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
      <i
        class="fa fa-sun-o fa-fw"
        :class="{ 'dark-theme': darkMode }"
        id="sun"
      ></i>
      <i
        class="fa fa-moon-o fa-fw"
        :class="{ 'dark-theme': darkMode }"
        id="moon"
      ></i>
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
  transform: translateY(40%);
  font-size: 24pt;
  margin-right: 10px;
  cursor: pointer;
  max-height: 30pt;
  overflow: hidden;
}

#sun {
  position: absolute;
  color: yellow;
  transform: translateY(15%);
  transition: transform 0.5s ease-out;
}

.dark-theme #sun {
  transform: translateY(-150%);
}

#moon {
  color: white;
  transform: translateY(150%);
  transition: transform 0.5s ease-out;
}

.dark-theme #moon {
  transform: translateY(0);
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
</style>
