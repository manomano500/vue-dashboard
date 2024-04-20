// src/router/adminRoutes.js
import AdminPage from "@/views/admin/AdminPage.vue";

const AdminRoutes = [
    {
        path: '/admin/dashboard',
        name: 'AdminDashboard',
        component: () => AdminPage
    },
    // Other admin routes
];

export default AdminRoutes;
