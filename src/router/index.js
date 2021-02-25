import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import AccountRoutes from "@/router/accountRoutes";
import InfrastructureRoutes from "@/router/infrastructureRoutes";
import NotificationRoutes from "@/router/notificationRoutes";
import EmployeeRoutes from "@/router/employeeRoutes";

let allRoutes = [];
allRoutes = allRoutes
  .concat(AccountRoutes)
  .concat(NotificationRoutes)
  .concat(InfrastructureRoutes)
  .concat(EmployeeRoutes);

const routes = allRoutes;

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
