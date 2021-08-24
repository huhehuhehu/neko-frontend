<template>
  <div class="container" v-if="post">
    <div class="img-container">
      <img class="mastahpis" :src="post.path" />
    </div>
    <div class="details-container">
      <div class="actions">
        <span :class="{ 'is-fav': favorite }" @click="toggleFav">
          <i class="fa fa-star fa-fw"></i>
        </span>
        <router-link :to="{ name: 'edit', params: { index: id } }">
          <i class="fa fa-pencil-square-o fa-fw"></i>
          <!-- <img class="btn" src="@/assets/edit.png" id="edit-button" /> -->
        </router-link>
      </div>
      <h1 id="title">{{ post.title }}</h1>
      <p id="desc">{{ post.description }}</p>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
// import { API_URL } from "@/config.js";

export default {
  props: ["id"],
  data() {
    return {
      favorite: false,
    };
  },
  computed: {
    post() {
      return this.$store.getters["posts/getById"](this.id);
    },
  },
  methods: {
    toggleFav() {
      localStorage.setItem("fav", this.id);
      this.favorite = true;
    },
    // get() {
    //   axios
    //     .get(API_URL + `/${this.id}`)
    //     .then((response) => {
    //       this.title = response.data.data.title;
    //       this.path = response.data.data.path;
    //       this.description = response.data.data.description;
    //     })
    //     .catch((error) => {
    //       console.log(error.response.data);
    //     });
    // },
  },
  created() {
    //check if this is the favorite one
    if (localStorage.getItem("fav") == this.id) this.favorite = true;
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

.mastahpis {
  width: 100%;
  /* height: auto; */
}

.details-container {
  padding: 0pt 10pt 10pt 10pt;
  background: rgba(24, 238, 174, 0.6);
}

#title {
  margin: 0;
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
  margin: 0;
  font-family: cursive;
  font-size: 18pt;
  font-weight: bold;
  text-align: justify;
}

.actions {
  float: right;
  font-size: 20pt;
  color: beige;
}

.actions:hover {
  cursor: pointer;
}

.is-fav .fa-star {
  color: yellow;
}

a,
a:visited,
a:hover,
a:active {
  color: inherit;
}

p {
  white-space: pre-wrap;
}
</style>
