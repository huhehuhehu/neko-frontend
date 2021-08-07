<template>
  <div class="container">
    <draggable v-model="posts" @change="updateOrder">
      <base-card
        v-for="post in posts"
        :key="post.id"
        :index="post.id"
        :title="post.title"
        :path="post.path"
      >
      </base-card>
    </draggable>
  </div>
</template>

<script>
import { API_URL } from "@/config.js";
import { VueDraggableNext } from "vue-draggable-next";

import axios from "axios";

import BaseCard from "@/components/BaseCard.vue";

export default {
  components: {
    BaseCard,
    draggable: VueDraggableNext,
  },
  data() {
    return {
      posts: [],
      list: [1, 2, 3, 4, 5, 6],
    };
  },
  async mounted() {
    //get API from Laravel Backend
    try {
      const response = await axios.get(API_URL);
      this.posts = response.data.data;
    } catch (error) {
      console.log(error.response.data);
    }
    // console.log(this.posts);
  },
  methods: {
    async updateDB(item, newIndex) {
      // console.log(newIndex);
      await axios.put(API_URL + `/reorder/${item.id}`, {
        order: newIndex,
      });
      // console.log(response);
    },
    reorder(start, finish, change = 1) {
      const sub = this.posts.slice(start, finish);
      sub.forEach((item) => {
        this.updateDB(item, item.order + change);
        item.order += change;
      });
    },
    updateOrder(event) {
      const oldIndex = event.moved.oldIndex;
      const newIndex = event.moved.newIndex;

      // console.log(oldIndex, newIndex);
      // console.log(this.posts);

      this.updateDB(this.posts[newIndex], newIndex + 1);
      this.posts[newIndex].order = newIndex + 1;

      if (newIndex - oldIndex > 0) this.reorder(oldIndex, newIndex, -1);
      else this.reorder(newIndex + 1, oldIndex + 1);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  margin-top: 20px;
  margin-left: 10%;
  margin-right: 10%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
</style>
