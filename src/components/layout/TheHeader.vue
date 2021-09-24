<template>
  <header class="nav-bg">
    <div class="header-left">
      <span @click="toggleSidebar">
        <i class="fa fa-bars fa-fw" id="sidebar-toggle"></i>
      </span>
      <router-link to="/">
        <img id="logo" :src="require(`@/assets/logo-${logoExtension}.png`)" />
      </router-link>
    </div>
    <div class="header-right">
      <div class="dark-toggle" @click="toggleDarkMode">
        <i class="fa fa-sun-o fa-fw" id="sun"></i>
        <i class="fa fa-moon-o fa-fw" id="moon"></i>
      </div>
      <div class="container-avatar" @click="randomPost()">
        <img id="avatar" src="@/assets/yawn.png" />
        <span class="tooltip">RANDOM MASTAHPIS</span>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  emits: ["toggleSidebar", "toggleDarkMode"],
  props: ["darkMode"],
  computed: {
    logoExtension() {
      return this.darkMode ? "d" : "l";
    },
  },
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
}

/* items on the left */

.header-left {
  float: left;
  left: 0;
  width: 200px;
  height: 100%;
}

#sidebar-toggle {
  float: left;
  font-size: 16pt;
  padding-left: 10px;
  transform: translateY(125%);
  cursor: pointer;
}

#logo {
  cursor: pointer;
  float: right;
  padding-right: 15pt;
  max-height: 75px;
}

/* items on the right */

.header-right {
  float: right;
  height: 100%;
  display: inline-block;
}

.dark-toggle {
  float: left;
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

.container-avatar {
  float: right;
  cursor: pointer;
  max-height: 100%;
  margin-right: 15px;
  position: relative;
}

#avatar {
  max-height: 75px;
}

.tooltip {
  font-size: 8pt;
  font-weight: bold;
  color: black;
  position: absolute;
  text-align: center;
  padding-top: 10px;
  right: 5px;
  top: 80px;
  height: 25px;
  width: 180px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
  visibility: hidden;
}

.container-avatar:hover .tooltip {
  visibility: visible;
}
</style>
