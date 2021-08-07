<template>
  <div class="container">
    <div class="img-container">
      <img :src="path" />
      <div class="actions">
        <router-link :to="{ name: 'edit', params: { index: id } }">
          <button>edit</button>
        </router-link>
      </div>
    </div>
    <div class="details-container">
      <h1 id="title">{{ title }}</h1>
      <p id="desc">{{ description }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { API_URL } from "@/config.js";

export default {
  props: ["id"],
  data() {
    return {
      title: "",
      path: "",
      description: "",
    };
  },
  methods: {
    get() {
      axios
        .get(API_URL + `/${this.id}`)
        .then((response) => {
          this.title = response.data.data.title;
          this.path = response.data.data.path;
          this.description = response.data.data.description;
        })
        .catch((error) => {
          console.log(error.response.data);
        });
    },
  },
  mounted() {
    this.get(this.id);
  },
};
</script>

<style scoped>
.container {
  margin-right: 5%;
  margin-left: 5%;
}

.img-container {
  margin-top: 10px;
  padding: 10pt;
  background: rgba(24, 238, 174, 0.6);
}

.details-container {
  padding: 10pt;
  background: rgba(24, 238, 174, 0.6);
}

img {
  width: 100%;
  /* height: auto; */
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
}

#desc {
  font-family: cursive;
  font-size: 18pt;
  font-weight: bold;
}
</style>
