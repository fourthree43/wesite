import logo from '../static/logo.png';
export default{
    path:'/mysite/home',
    name:'福建省地理遥感测绘信息应用中心',
    redirect:'/home',
    meta:{
        sysLogo:logo,
    },
    component:()=>import(/* webpackChunkName:"MySite" */ '../views/MySiteHome.vue'),
    children:[
        {
            name:'首页',
            path:'/home',
            meta:{
                title:'我们的网站！！！',
            },
            component:()=>import(/*  webpackChunkName:"Home" */ '../views/Home/index.vue'),
        },
        {
            name:'关于我们',
            path:'/aboutus',
            component:()=>import(/*  webpackChunkName:"AboutUs" */ '../views/AboutUs/index.vue'),
        },
        {
            name:'解决方案',
            path:'/resolve',
            component:()=>import(/*  webpackChunkName:"Resolve" */ '../views/Resolve/index.vue'),
        },
        {
            name:'咨询服务',
            path:'/consult',
            component:()=>import(/*  webpackChunkName:"Consult" */ '../views/Consult/index.vue'),
        },
        {
            name:'联系我们',
            path:'/contact',
            component:()=>import(/*  webpackChunkName:"Contact" */ '../views/Contact/index.vue'),
        },
    ]
}