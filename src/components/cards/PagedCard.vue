<template>
  <transition-group appear name="fade-in" tag="div" class="grid">
    <base-card v-for="post in posts" :key="post.id" :post="post" />
  </transition-group>
</template>

<script>
import BaseCard from "@/components/cards/BaseCard.vue";

export default {
  components: {
    BaseCard,
  },
  props: ["posts"],
};
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.fade-in-enter-from {
  opacity: 0;
  transform: scale(0.1) translate3d(90%, 70%, 0);
}

.fade-in-enter-active {
  transition: all 0.5s ease-out;
}
</style>
