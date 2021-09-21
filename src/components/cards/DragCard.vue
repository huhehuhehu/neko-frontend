<template>
  <div class="card">
    <div class="title-container">
      <div id="title">
        {{ post.title }}
      </div>
      <div class="handle">&#9776;</div>
    </div>
    <img :src="post.path" />
  </div>
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
  -webkit-column-break-inside: avoid;
  page-break-inside: avoid;
  break-inside: avoid;
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

.handle {
  font-size: 24pt;
  font-family: cursive;
  font-weight: bold;
  flex: 1;
}

.handle,
.handle:active {
  cursor: move;
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
  flex: 19;
}
</style>
