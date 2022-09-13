import {createRouter, createWebHistory} from "vue-router"
import HelloWorldVue from "../components/HelloWorld.vue";
const routes =[
    {path: "/", name: "HelloWorldVue", component: HelloWorldVue},

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