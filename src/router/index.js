import Vue from "vue";
import VueRouter from "vue-router";

// 引入组件
// import Index from "@/components/Index"
// 要告诉 vue 使用 vueRouter
Vue.use(VueRouter);

const routes = [{
        path: "/",
        redirect: "/index",
    },
    {
        path: "/index",
        component: () => import('@/components/Index')
    },
    {
        path: "/classify",
        component: () => import('@/views/classify')
    }
]

var router = new VueRouter({
    routes
})
export default router;