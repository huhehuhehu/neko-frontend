<template>
  <div class="form-container">
    <form autocomplete="off" @submit.prevent="store">
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
  data() {
    return {
      title: "",
      path: "",
      description: "",
    };
  },
  methods: {
    store() {
      // axios
      //   .post(API_URL, {
      //     title: this.title,
      //     path: this.path,
      //     description: this.description,
      //   })
      //   .then(() => {
      //     this.title = "";
      //     this.path = "";
      //     this.description = "";
      //   })
      //   .catch((error) => {
      //     //assign state validation with error
      //     this.validation = error.response.data;
      //   });

      this.$store
        .dispatch("posts/addPost", {
          title: this.title,
          path: this.path,
          description: this.description,
        })
        .then(() => {
          this.title = "";
          this.path = "";
          this.description = "";
        })
        .catch((err) => {
          console.log(err.message);
        });
    },
  },
};
</script>

<style scoped>
.form-container {
  width: 95%;
}

#title,
textarea {
  width: 100%;
  max-width: 100%;
}
</style>
