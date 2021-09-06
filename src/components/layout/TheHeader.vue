<template>
  <header>
    <div class="left-header">
      <span class="btn" @click="toggleSidebar">
        <i class="fa fa-bars fa-fw" id="btn"></i>
      </span>
      <router-link to="/">
        <img id="logo" src="@/assets/logo-l.png" />
      </router-link>
    </div>
    <span @click="randomPost()">
      <img id="avatar" src="@/assets/yawn.png" />
    </span>
  </header>
</template>

<script>
export default {
  emits: ["toggleSidebar"],
  methods: {
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
  /* right: 0; */
  overflow: hidden;

  background: rgb(5, 142, 170);
  background: linear-gradient(
    30deg,
    rgba(5, 142, 170, 1) 0%,
    rgba(35, 221, 172, 1) 100%
  );
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

#avatar {
  /* right: 0; */
  float: right;
  cursor: pointer;
  padding-right: 15pt;
  max-height: 100%;
}

#btn {
  float: left;
  color: pink;
  font-size: 16pt;
  padding-left: 10px;
  transform: translateY(125%);
}

#btn:hover {
  cursor: pointer;
}
</style>
