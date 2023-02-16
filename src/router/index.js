import { createRouter, createWebHashHistory } from "vue-router";
import defaultRoutes from "./defaultRoutes";
const router = createRouter({
    routes:defaultRoutes,
    history:createWebHashHistory()
})
export default router