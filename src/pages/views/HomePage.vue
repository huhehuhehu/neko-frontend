<template>
  <div class="container">
    <div class="favorite" v-if="fav">
      <div class="title">
        <span id="favorite-text">FAVORITE</span>
        <i class="fa fa-star fa-fw"></i>
      </div>
      <base-card :post="fav" />
    </div>
    <div class="grid-3">
      <base-card v-for="post in posts" :key="post.id" :post="post" />
    </div>
  </div>
</template>

<script>
import BaseCard from "@/components/cards/BaseCard.vue";

export default {
  components: {
    BaseCard,
  },
  computed: {
    posts() {
      return this.$store.getters["posts/posts"];
    },
    fav() {
      return this.$store.getters["posts/getById"](localStorage.getItem("fav"));
    },
  },
};
</script>

<style scoped>
.container {
  margin-top: 20px;
  margin-left: 10%;
  margin-right: 10%;
  min-width: 750px;
}

.grid-3 {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

.favorite {
  margin-bottom: 20px;
}

.title {
  text-align: end;
}

#favorite-text {
  font-size: 24pt;
  font-weight: bold;
}

.fa-star {
  /* position: relative; */
  top: 10px;
  color: yellow;
  font-size: 30pt;
}
</style>
