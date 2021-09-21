<template>
  <router-link :to="'/post/' + post.id">
    <div class="card">
      <div class="title-container">
        <div id="title">
          {{ post.title }}
        </div>
      </div>
      <img :src="post.path" />
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
  border: 1pt solid rgb(0, 53, 90);
  padding: 0 10px 10px 10px;
  border-radius: 10px;
  background: rgba(100, 194, 231, 0.7);
  overflow: hidden;
}

img {
  padding-top: 10px;
  width: 100%;
}

.title-container {
  display: flex;
  height: 32pt;
}

a {
  text-decoration: none;
  color: inherit;
}

#title {
  font-size: 24pt;
  font-family: cursive;
  font-weight: bold;
  background-image: linear-gradient(
    to left,
    violet,
    indigo,
    blue,
    green,
    yellow,
    orange,
    red
  );
  -webkit-background-clip: text;
  color: transparent;
  overflow: hidden;
}

/* -webkit-column-break-inside: avoid; 
  page-break-inside: avoid; 
  break-inside: avoid;  */
</style>
