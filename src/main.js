import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index.js";

// import "bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

const app = createApp(App);

app.use(router);
app.use(store);

app.mount("#app");
