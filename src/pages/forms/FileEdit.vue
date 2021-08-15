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
import axios from "axios";
import { API_URL } from "@/config.js";

export default {
  data() {
    return {
      id: "",
      title: "",
      path: "",
      description: "",
      validation: "",
    };
  },
  methods: {
    get() {
      axios
        .get(API_URL + `/${this.id}`)
        .then((response) => {
          //assign state posts with response data
          this.title = response.data.data.title;
          this.path = response.data.data.path;
          this.description = response.data.data.description;
        })
        .catch((error) => {
          console.log(error.response.data);
        });
    },
    update() {
      axios
        .put(API_URL + `/${this.id}`, {
          title: this.title,
          path: this.path,
          description: this.description,
        })
        .then(() => {
          this.$router.push(`/post/${this.id}`);
        })
        .catch((error) => {
          //assign state validation with error
          this.validation = error.response.data;
        });
    },
  },
  mounted() {
    this.id = this.$route.params.index;
    this.get();
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
