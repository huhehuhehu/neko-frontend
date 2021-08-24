<template>
  <div class="form-container">
    <form autocomplete="off" @submit.prevent="update" v-if="post">
      <label for="title">TITLE</label><br />
      <input
        type="text"
        v-model="post.title"
        id="title"
        placeholder="Input title here"
      />
      <br /><br />
      <label for="path">PATH</label><br />
      <textarea rows="5" v-model="post.path" placeholder="Input url here" />
      <br /><br />
      <label for="description">DESCRIPTION</label><br />
      <textarea
        rows="2"
        v-model="post.description"
        placeholder="Input description here"
      />
      <br />
      <button type="submit">SAVE</button>
    </form>
  </div>
</template>

<script>
export default {
  props: ["id"],
  computed: {
    post() {
      return this.$store.getters["posts/getById"](this.id);
    },
  },
  methods: {
    update() {
      this.$store
        .dispatch("posts/editPost", {
          id: this.id,
          title: this.post.title,
          path: this.post.path,
          description: this.post.description,
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
  margin-left: 10%;
  margin-right: 10%;
}

#title,
textarea {
  width: 100%;
  max-width: 100%;
}
</style>
