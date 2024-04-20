// src/router/customerRoutes.js
import CustomerPage from "@/views/coustomer/CustomerPage.vue";

const CustomerRoutes = [
    {
        path: '/customer/dashboard',
        name: 'CustomerDashboard',
        component: () => CustomerPage
    },
    // Other customer routes
];

export default CustomerRoutes;
