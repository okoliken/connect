import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Register from "../views/authentication/Register.vue";
import Login from "../views/authentication/Login.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    props: true,
  },
  {
    path: "/About",
    name: "About",
    component: About,
  },
  ,
  {
    path: "/authentication/Register",
    name: "Register",
    component: Register,
  },
  {
    path: "/authentication/Login",
    name: "Login",
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
