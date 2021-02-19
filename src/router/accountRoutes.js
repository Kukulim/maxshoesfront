export default [
  {
    path: "/register",
    name: "Register",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "register" */ "../views/accountViews/Register.vue"
      )
  },
  {
    path: "/login",
    name: "Login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/accountViews/Login.vue")
  },
  {
    path: "/confirmemail",
    name: "ConfirmEmail",
    component: () =>
      import(
        /* webpackChunkName: "confirmemail" */ "../views/accountViews/ConfirmEmail.vue"
      )
  },
  {
    path: "/forgottenpassword",
    name: "ForgottenPassword",
    component: () =>
      import(
        /* webpackChunkName: "forgottenpassword" */ "../views/accountViews/ForgottenPassword.vue"
      )
  },
  {
    path: "/changepassword",
    name: "ChangePassword",
    component: () =>
      import(
        /* webpackChunkName: "forgottenpassword" */ "../views/accountViews/ChangePassword.vue"
      )
  },
  {
    path: "/contact",
    name: "Contact",
    component: () =>
      import(
        /* webpackChunkName: "contact" */ "../views/accountViews/Contact.vue"
      )
  },
  {
    path: "*",
    component: () =>
      import(/* webpackChunkName: "*" */ "../views/accountViews/Login.vue")
  }
];
