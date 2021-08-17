<template>
  <div class="container">
    <base-card v-if="fav" :post="fav" />
    <div class="toggles">
      <button @click="toggle">Toggle</button>
    </div>
    <div class="movable" v-if="reordering">
      <draggable
        v-model="posts"
        @change="updateOrder"
        item-key="id"
        handle=".handle"
      >
        <template #item="{element}">
          <transition-group tag="div" name="columns">
            <drag-card :key="element.id" :post="element" />
          </transition-group>
        </template>
      </draggable>
    </div>
    <div class="grid" v-else>
      <base-card v-for="post in posts" :key="post.id" :post="post" />
    </div>
  </div>
</template>

<script>
import { API_URL } from "@/config.js";
import draggable from "vuedraggable";

import axios from "axios";

import BaseCard from "@/components/cards/BaseCard.vue";
import DragCard from "@/components/cards/DragCard.vue";

export default {
  components: {
    BaseCard,
    draggable,
    DragCard,
  },
  data() {
    return {
      reordering: false,
    };
  },
  computed: {
    posts() {
      return this.$store.getters["posts/posts"];
    },
    fav() {
      return this.$store.getters["posts/getById"](localStorage.getItem("fav"));
    },
  },
  created() {
    // try {
    //   const response = await axios.get(API_URL);
    //   this.posts = response.data.data;
    // } catch (error) {
    //   console.log(error.response.data);
    // }
    // this.posts = this.$store.getters["posts/posts"].length
    //   ? this.$store.getters["posts/posts"]
    //   : JSON.parse(sessionStorage.getItem("posts"));
    // this.fav = this.posts.find((x) => x.id == localStorage.getItem("fav"));
    // sessionStorage.setItem("posts", JSON.stringify(this.posts));
    // console.log(JSON.parse(sessionStorage.getItem("posts")));
    // console.log(this.$store.getters["posts/posts"]);
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
    toggle() {
      this.reordering = !this.reordering;
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
  /* display: grid;
  grid-template-columns: 1fr 1fr 1fr; */
}

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

.movable {
  column-count: 3;
  column-gap: 0;
}

.columns-move {
  transition: all 1s;
}
</style>
