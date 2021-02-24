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
  },
  {
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
  {
    path: "/notificationdetails/:notification.id",
    name: "NotificationDetails",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "NotificationDetails" */ "../views/notoficationViews/NotificationDetails.vue"
      ),
    props: r => ({ mynotification: r.params.mynotification })
  },
  {
    path: "/notificationcreate",
    name: "NotificationCreate",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "NotificationCreate" */ "../views/notoficationViews/NotificationCreate.vue"
      )
  },
  {
    path: "/notificacionsallcustomers",
    name: "NotificacionsAllCustomers",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "NotificationCreate" */ "../views/notoficationViews/NotificacionsAllCustomers.vue"
      )
  },
  {
    path: "/notificationedit/:notification.id",
    name: "NotificationEdit",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "NotificationEdit" */ "../views/notoficationViews/NotificationEdit.vue"
      ),
    props: r => ({ notification: r.params.notification })
  }
];
