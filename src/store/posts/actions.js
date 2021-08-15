import axios from "axios";
import { API_URL } from "@/config.js";

export default {
  addPost(context, payload) {
    axios
      .post(API_URL, {
        title: payload.title,
        path: payload.path,
        description: payload.description,
      })
      .then(() => {
        context.dispatch("loadPosts");
      })
      .catch((error) => {
        throw error;
      });
  },
  async loadPosts(context) {
    const response = await axios.get(API_URL);
    context.commit("setPosts", response.data.data);
  },
  editPost(context, payload) {
    axios
      .put(API_URL + `/${payload.id}`, {
        title: payload.title,
        path: payload.path,
        description: payload.description,
      })
      .then(() => {
        context.dispatch("loadPosts");
        return;
      })
      .catch((error) => {
        //assign state validation with error
        throw error;
      });
  },
};
