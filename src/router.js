//import vue router
import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./pages/views/HomePage.vue";
import FileCreate from "./pages/forms/FileCreate.vue";
import FileEdit from "./pages/forms/FileEdit.vue";
import DetailedCard from "./pages/views/DetailedCard.vue";

import SearchPage from "./pages/views/SearchPage.vue";

//routes to be lazy loaded
const OrderChange = () => import("./pages/views/OrderChange.vue");
const ScrollLoad = () => import("./pages/views/ScrollLoad.vue");
const PaginationPage = () => import("./pages/views/PaginationPage.vue");

//define routes
const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    component: HomePage,
  },
  {
    path: "/reorder",
    component: OrderChange,
  },
  {
    path: "/scroll",
    component: ScrollLoad,
  },
  {
    path: "/paged",
    component: PaginationPage,
  },
  {
    path: "/post/:id",
    component: DetailedCard,
    props: true,
  },
  {
    path: "/add",
    component: FileCreate,
  },
  {
    path: "/edit/:id",
    component: FileEdit,
    props: true,
  },
  {
    path: "/search",
    component: SearchPage,
  },
  { path: "/:notFound(.*)", redirect: "/" },
];

//create router
const router = createRouter({
  history: createWebHistory(),
  routes, // config routes
});

//scroll to top every route change
router.beforeEach(() => {
  window.scrollTo(0, 0);
});

// router.beforeEach(function(to, _, next) {
//   if (to.meta.auth) {
//     let pass = prompt("What's the code?");
//     if (pass !== "magnetman") {
//       next(false);
//     }
//   }
//   next();
// });

export default router;
