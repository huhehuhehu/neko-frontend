//import vue router
import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./pages/views/HomePage.vue";
import FileCreate from "./pages/forms/FileCreate.vue";
import FileEdit from "./pages/forms/FileEdit.vue";
import DetailedCard from "./pages/views/DetailedCard.vue";

import SearchPage from "./pages/views/SearchPage.vue";

//define a routes
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
    name: "edit",
    props: true,
  },
  {
    path: "/search",
    component: SearchPage,
  },
  { path: "/:notFound(.*)", redirect: "/" },
  // {
  //     path: '/create',
  //     name: 'post.create',
  //     component: () => import( /* webpackChunkName: "post.create" */ '@/views/post/Create.vue')
  // },
];

//create router
const router = createRouter({
  history: createWebHistory(),
  routes, // config routes
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
