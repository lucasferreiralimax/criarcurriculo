import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      // route level code-splitting
      // this generates a separate chunk (Home.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/login",
      name: "login",
      // route level code-splitting
      // this generates a separate chunk (Login.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/help",
      name: "help",
      // route level code-splitting
      // this generates a separate chunk (Help.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/HelpView.vue"),
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/hash",
      name: "hash",
      // route level code-splitting
      // this generates a separate chunk (Hash.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/HashView.vue"),
    },
  ],
});

// router.beforeEach(async (to, from) => {
  // if (
    // make sure the user is authenticated
    // !localStorage.getItem('curriculo-auth') &&
    // ❗️ Avoid an infinite redirect
    // to.name !== 'login' &&
    // to.name !== 'help' &&
    // to.name !== 'about'
  // ) {
    // redirect the user to the login page
    // return { name: 'login' }
  // }
// });

export default router;
