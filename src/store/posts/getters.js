export default {
  posts(state) {
    return state.posts;
  },
  getById: (state) => (id) => {
    return state.posts.find((post) => post.id == id);
  },
};
