<template>
  <header>
    <router-link to="/">
      <h1 id="title">
        House of cats
      </h1></router-link
    >
    <router-link to="/add"
      ><img id="avatar" src="@/assets/yawn.png"
    /></router-link>
  </header>
</template>

<style scoped>
header {
  position: fixed;
  top: 0;
  width: 100%;
  height: 5rem;
  left: 0;
  right: 0;
  overflow: hidden;

  background: rgb(5, 142, 170);
  background: linear-gradient(
    40deg,
    rgba(5, 142, 170, 1) 0%,
    rgba(35, 221, 172, 1) 100%
  );
}

header h1 {
  color: rgb(192, 216, 196);
  font-family: "Papyrus", fantasy;
  float: left;
  padding-left: 15pt;
}

#avatar {
  /* right: 0; */
  float: right;
  padding-right: 15pt;
  max-height: 100%;
}
</style>
