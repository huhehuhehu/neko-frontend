import axios from "axios";
import { API_URL } from "@/config.js";

import router from "@/router.js";

export default {
  async addPost(context, payload) {
    await axios
      .post(API_URL, {
        title: payload.title,
        path: payload.path,
        description: payload.description,
      })
      .then(() => {
        context.dispatch("loadPosts");
      });
  },
  loadPosts(context) {
    axios
      .get(API_URL)
      .then((response) => context.commit("setPosts", response.data.data));
  },
  editPost(context, payload) {
    const id = payload.id;
    axios
      .put(API_URL + `/${payload.id}`, {
        title: payload.title,
        path: payload.path,
        description: payload.description,
      })
      .then(() => {
        context.dispatch("loadPosts").then(() => {
          router.push(`/post/${id}`);
        });
      });
  },
};
