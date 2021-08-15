import { createStore } from "vuex";
import postsModule from "./posts/index.js";

const store = createStore({
  modules: {
    posts: postsModule,
  },
});

export default store;
