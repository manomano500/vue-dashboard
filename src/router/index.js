// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';

import AuthLayout from "@/views/dashboard/layouts/AuthLayout.vue";
import Login from "@/views/dashboard/auth/Login.vue";
import Signup from "@/views/dashboard/auth/Signup.vue";
import AdminLayout from "@/views/dashboard/layouts/AdminLayout.vue";
import DashboardPage from "@/views/dashboard/DashboardPage.vue";
import ProductsPage from "@/views/dashboard/ProductsPage.vue";
import VendorsPage from "@/views/dashboard/VendorsPage.vue";
import OrdersPage from "@/views/dashboard/OrdersPage.vue";


const routes = [

      // admin routes
    {
        path: "/admin",
        redirect: "/admin/dashboard",
        name: "Admin",
        // meta: { requiresAuth: true },
        component:  AdminLayout,
        children: [
            {path: "/admin/dashboard",name:"AdminDashboard", component:  DashboardPage},
            {path: "/admin/products",name:"Products", component:  ProductsPage},
            {path: "/admin/vendors",name:"Vendors", component:  VendorsPage},
            {path: "/admin/orders",name:"Orders", component:  OrdersPage},
            // {path: "/admin/test",name:"test", component:  OrdersPage},

        ],

    },


    // auth
    {
        path: '/auth',
        redirect: 'auth/login',
        name:'Auth',
        // meta: {isGuest :true},
        component: AuthLayout,
        children: [
            {path: '/login', name: 'Login', component: Login},
            {path: '/signup',name: 'Signup',component: Signup}
        ]
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;


