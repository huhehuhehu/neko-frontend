<template>
  <router-link :to="'/post/' + post.id">
    <div :id="post.id" class="card">
      <div class="img-container">
        <img :src="post.path" />
        <div class="bg-container" />
        <div class="title">
          {{ post.title }}
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: ["post"],
};
</script>

<style scoped>
.card {
  position: relative;
}

.img-container {
  position: relative;
  line-height: 0;
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.9s ease-out;
}

.img-container:hover {
  transform: scale(1.16);
  z-index: 700;
}

a {
  text-decoration: none;
  color: inherit;
}

img {
  width: 100%;
}

/* overview */

.bg-container {
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgb(34, 34, 34);
  background: linear-gradient(
    0deg,
    rgba(34, 34, 34, 0.804359243697479) 0%,
    rgba(99, 99, 99, 0.5998774509803921) 40%,
    rgba(255, 255, 255, 0) 100%
  );
  top: 0;
  visibility: hidden;
}

.title {
  position: absolute;
  left: 20px;
  bottom: 1.5vw;
  font-size: 1.5vw;
  font-weight: bold;
  white-space: nowrap;
  visibility: hidden;
  /* overflow: hidden;
  text-overflow: ellipsis; */
}

.card:hover .bg-container {
  visibility: visible;
}

.card:hover .title {
  visibility: visible;
}
</style>
