<template>
  <the-header></the-header>
  <div class="page">
    <router-view></router-view>
  </div>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";

export default {
  components: { TheHeader },
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
  background-position: center;
  background-size: inherit;
}
</style>
