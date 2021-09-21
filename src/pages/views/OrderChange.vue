<template>
  <div class="container">
    <draggable
      v-model="posts"
      @change="updateOrder"
      item-key="id"
      class="grid-3"
      handle=".handle"
    >
      <template #item="{element}">
        <transition-group tag="div" name="slide">
          <drag-card :key="element.id" :post="element" />
        </transition-group>
      </template>
    </draggable>
  </div>
</template>

<script>
import { API_URL } from "@/config.js";
import draggable from "vuedraggable";

import axios from "axios";

import DragCard from "@/components/cards/DragCard.vue";

export default {
  data() {
    return {
      posts: [],
    };
  },
  components: {
    DragCard,
    draggable,
  },
  methods: {
    async updateDB(item, newIndex) {
      await axios.put(API_URL + `/reorder/${item.id}`, {
        order: newIndex,
      });
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

      this.updateDB(this.posts[newIndex], newIndex + 1);
      this.posts[newIndex].order = newIndex + 1;

      if (newIndex - oldIndex > 0) this.reorder(oldIndex, newIndex, -1);
      else this.reorder(newIndex + 1, oldIndex + 1);
    },
  },
  created() {
    axios
      .get(API_URL)
      .then((res) => (this.posts = res.data.data))
      .catch((err) => console.error(err));
  },

  beforeRouteLeave(to, from, next) {
    //load any changes into store before navigating away
    this.$store.dispatch("posts/loadPosts").then(() => next());
  },
};
</script>

<style scoped>
.container {
  margin-top: 20px;
  margin-left: 10%;
  margin-right: 10%;
}

.grid-3 {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

.slide-move {
  transition: all 1s ease-out;
}
</style>
