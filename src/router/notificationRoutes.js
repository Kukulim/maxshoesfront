export default [
  {
    path: "/notificationlist",
    name: "NotificationList",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "NotificationList" */ "../views/notoficationViews/NotificationList.vue"
      )
  },  {
    path: "/notificationwelcome",
    name: "NotificationWelcome",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "NotificationWelcome" */ "../views/notoficationViews/NotificationWelcome.vue"
      )
  },

];
