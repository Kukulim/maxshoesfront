export default [
    {
      path: "/employeeslist",
      name: "EmployeesList",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(
          /* webpackChunkName: "EmployeesList" */ "../views/employeeViews/EmployeesList.vue"
        )
    },

    {
      path: "/createemployee",
      name: "CreateEmployee",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(
          /* webpackChunkName: "CreateEmployee" */ "../views/employeeViews/CreateEmployee.vue"
        )
    },
  ];