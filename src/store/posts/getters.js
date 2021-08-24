import { POST_PER_LOAD } from "@/config.js";

export default {
  posts(state) {
    return state.posts;
  },
  getById: (state) => (id) => {
    return state.posts.find((post) => post.id == id);
  },
  getPerPage: (state) => (page) => {
    return state.posts.slice(page * POST_PER_LOAD, (page + 1) * POST_PER_LOAD);
  },
  total(state) {
    return state.posts.length;
  },
};
