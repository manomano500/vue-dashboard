// src/router/adminRoutes.js
import AdminLayout from "@/views/admin/layouts/AdminLayout.vue";
import DashboardPage from "@/views/admin/DashboardPage.vue";
import ProductsPage from "@/views/admin/ProductsPage.vue";
import VendorsPage from "@/views/admin/VendorsPage.vue";
import ShipmentcentersPage from "@/views/admin/ShipmentcentersPage.vue";
import OrdersPage from "@/views/admin/OrdersPage.vue";
import AuthLayout from "@/views/admin/layouts/AuthLayout.vue";
import Login from "@/views/admin/auth/Login.vue";
import Signup from "@/views/admin/auth/Signup.vue";

const AdminRoutes = [
    {
        path: "/admin",
        redirect: "/admin/dashboard",
        name: "Admin",
        component:  AdminLayout,
        children: [
            {path: "/admin/dashboard",name:"AdminDashboard", component:  DashboardPage},
            {path: "/admin/products",name:"Products", component:  ProductsPage},
            {path: "/admin/vendors",name:"Vendors", component:  VendorsPage},
            {path: "/admin/shipment-centers",name:"shipment-centers", component:  ShipmentcentersPage},
            {path: "/admin/orders",name:"Orders", component:  OrdersPage},
            {path: "/admin/test",name:"test", component:  OrdersPage},

        ],

    },
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

export default AdminRoutes;
