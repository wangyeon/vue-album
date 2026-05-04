import { createWebHistory, createRouter, type RouteRecordRaw } from "vue-router";

import HomeView from "/vue-album/src/views/Home.vue";

const routes: Array<RouteRecordRaw> = [{ path: "/", component: HomeView}];

const router = createRouter( {
    history: createWebHistory( ) ,
    routes: routes,
}) ;

export default router;