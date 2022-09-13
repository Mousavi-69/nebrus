import {createRouter, createWebHistory} from "vue-router"
import Heder from "../components/Heder.vue";
import MainPageVue from "../pages/MainPage.vue";
const routes =[
    {path: "/", name: "MainPageVue", component: MainPageVue},

];
const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        return { top: 0 ,  margin: 0,
          padding: 0}
      }
})
export default router