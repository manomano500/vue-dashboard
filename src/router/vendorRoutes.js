// src/router/vendorRoutes.js
import VendorPage from "@/views/vendor/VendorPage.vue";

const VendorRoutes = [
    {
        path: '/vendor/dashboard',
        name: 'VendorDashboard',
        component: () => VendorPage
    }
    // Other vendor routes
];

export default VendorRoutes;
