import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import AccountRoutes from "@/router/accountRoutes";
import InfrastructureRoutes from "@/router/infrastructureRoutes";

let allRoutes = [];
allRoutes = allRoutes.concat(AccountRoutes).concat(InfrastructureRoutes);

const routes = allRoutes;

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
