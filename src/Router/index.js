import { createRouter, createWebHistory } from "vue-router";
import Posts from "../views/Posts.vue";
import Post from "../views/Post.vue";

const routes = [

  { path: "/posts", name: "Posts", component: Posts },
  { path: "/posts/:id", name: "Post", component: Post, params:true },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;