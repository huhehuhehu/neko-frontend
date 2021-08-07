//import vue router
import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./pages/HomePage.vue";
import FileCreate from "./pages/forms/FileCreate.vue";
import FileEdit from "./pages/forms/FileEdit.vue";
import DetailedCard from "./pages/views/DetailedCard.vue";

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
    path: "/edit",
    component: FileEdit,
    name: "edit",
    props: true,
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

export default router;
