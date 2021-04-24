import Vue from 'vue';
import VueRouter from 'vue-router';
import MySite from './mysite';

Vue.use(VueRouter);

const routes = [
    {
        path:'/',
        name:'Main',
        redirect:'/home',
        component:()=>import(/* webpackChunkName:"Main" */ '../views/Main.vue'),
        children:[MySite],
    },
]

const router = new VueRouter({
    routes,
});
export default router;