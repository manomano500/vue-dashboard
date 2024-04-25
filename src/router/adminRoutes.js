// src/router/adminRoutes.js
import AdminLayout from "@/views/admin/layouts/AdminLayout.vue";
import DashboardPage from "@/views/admin/DashboardPage.vue";
import ProductsPage from "@/views/admin/ProductsPage.vue";
import VendorsPage from "@/views/admin/VendorsPage.vue";
import ShipmentcentersPage from "@/views/admin/ShipmentcentersPage.vue";
import OrdersPage from "@/views/admin/OrdersPage.vue";

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

        ]
    },
    // Other admin routes
];

export default AdminRoutes;
