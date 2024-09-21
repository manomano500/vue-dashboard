// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';

import AuthLayout from "@/views/admin/layouts/AuthLayout.vue";
import Login from "@/views/admin/auth/Login.vue";
import Signup from "@/views/admin/auth/Signup.vue";
import AdminLayout from "@/views/admin/layouts/AdminLayout.vue";
import DashboardPage from "@/views/admin/DashboardPage.vue";
import ProductsPage from "@/views/admin/ProductsPage.vue";
import VendorsPage from "@/views/admin/VendorsPage.vue";
import ShipmentcentersPage from "@/views/admin/ShipmentcentersPage.vue";
import OrdersPage from "@/views/admin/OrdersPage.vue";


const routes = [






    // admin routes
    {
        path: "/",
        redirect: "/admin/dashboard",
        name: "Admin",
        // meta: { requiresAuth: true },
        component:  AdminLayout,
        children: [
            {path: "/admin/dashboard",name:"AdminDashboard", component:  DashboardPage},
            {path: "/admin/products",name:"Products", component:  ProductsPage},
            {path: "/admin/vendors",name:"Vendors", component:  VendorsPage},
            {path: "/admin/shipment-centers",name:"shipment-centers", component:  ShipmentcentersPage},
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


