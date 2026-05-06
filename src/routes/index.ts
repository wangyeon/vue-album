import { createWebHashHistory, createRouter, type RouteRecordRaw } from "vue-router";

import HomeView from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [{ path: "/", component: HomeView}];

const router = createRouter( {
    history: createWebHashHistory( ) ,
    // history: createWebHistory( ) ,
    routes: routes,
}) ;

export default router;