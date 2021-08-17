<template>
  <div class="container" v-if="post">
    <div class="img-container">
      <img class="mastahpis" :src="post.path" />
    </div>
    <div class="details-container">
      <div class="actions">
        <img
          v-if="favorite"
          class="btn"
          src="@/assets/favorite-on.png"
          id="favorite-button"
        />
        <img
          v-else
          class="btn"
          src="@/assets/favorite-off.png"
          id="favorite-button"
          @click="toggleFav"
        />
        <router-link :to="{ name: 'edit', params: { index: id } }">
          <img class="btn" src="@/assets/edit.png" id="edit-button" />
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
      // title: "",
      // path: "",
      // description: "",
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
    // this.get(this.id);
    //check if this is the fav
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
}

.btn {
  height: 1.5rem;
  width: auto;
}

.btn:hover {
  cursor: pointer;
}
</style>
