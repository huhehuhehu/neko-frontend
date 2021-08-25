<template>
  <header>
    <router-link to="/">
      <h1 id="title">
        House of cats
      </h1></router-link
    >
    <span @click="randomPost()"
      ><img id="avatar" src="@/assets/yawn.png"
    /></span>
  </header>
</template>

<script>
export default {
  methods: {
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
  height: 5rem;
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

header h1 {
  color: pink;
  font-family: "Papyrus", fantasy;
  font-size: 24pt;
  float: left;
  padding-left: 15pt;
}

#avatar {
  /* right: 0; */
  float: right;
  cursor: pointer;
  padding-right: 15pt;
  max-height: 100%;
}
</style>
