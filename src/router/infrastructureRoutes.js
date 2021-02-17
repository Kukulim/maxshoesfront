export default [
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/infrastructureViews/About.vue"
      )
  },
  {
    path: "/",
    name: "WelcomePage",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "WelcomePAge" */ "../views/infrastructureViews/WelcomePage.vue")
  }
];
