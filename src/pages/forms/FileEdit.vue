<template>
  <div class="form-container">
    <form autocomplete="off" @submit.prevent="update">
      <label for="title">TITLE</label><br />
      <input
        type="text"
        v-model="title"
        id="title"
        placeholder="Input title here"
      />
      <br /><br />
      <label for="path">PATH</label><br />
      <textarea rows="5" v-model="path" placeholder="Input url here" />
      <br /><br />
      <label for="description">DESCRIPTION</label><br />
      <textarea
        rows="2"
        v-model="description"
        placeholder="Input description here"
      />
      <br />
      <button type="submit">SAVE</button>
    </form>
  </div>
</template>

<script>
// import axios from "axios";
// import { API_URL } from "@/config.js";

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
      // axios
      //   .get(API_URL + `/${this.id}`)
      //   .then((response) => {
      //     //assign state posts with response data
      //     this.title = response.data.data.title;
      //     this.path = response.data.data.path;
      //     this.description = response.data.data.description;
      //   })
      //   .catch((error) => {
      //     console.log(error.response.data);
      //   });
      const post = this.$store.getters["posts/getById"](this.id);
      this.title = post.title;
      this.path = post.path;
      this.description = post.description;
    },
    update() {
      // axios
      //   .put(API_URL + `/${this.id}`, {
      //     title: this.title,
      //     path: this.path,
      //     description: this.description,
      //   })
      //   .then(() => {
      //     this.$router.push(`/post/${this.id}`);
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //   });
      this.$store
        .dispatch("posts/editPost", {
          id: this.id,
          title: this.title,
          path: this.path,
          description: this.description,
        })
        .catch((err) => {
          console.log(err.message);
        });
    },
  },
  created() {
    this.get();
  },
};
</script>

<style scoped>
.form-container {
  width: 95%;
  margin-left: auto;
  margin-right: auto;
}

#title,
textarea {
  width: 100%;
  max-width: 100%;
}
</style>
