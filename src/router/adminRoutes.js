// src/router/adminRoutes.js
import AdminLayout from "@/views/admin/layouts/AdminLayout.vue";
import DashboardPage from "@/views/admin/DashboardPage.vue";

const AdminRoutes = [
    {
        path: "/admin",
        redirect: "/admin/dashboard",
        name: "Admin",
        component:  AdminLayout,
        children: [
            {path: "/admin/dashboard",name:"AdminDashboard", component:  DashboardPage},

        ]
    },
    // Other admin routes
];

export default AdminRoutes;
