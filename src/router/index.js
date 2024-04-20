// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import VendorRoutes from './vendorRoutes';
import CustomerRoutes from './customerRoutes';
import AdminRoutes from './adminRoutes';

const routes = [
    ...VendorRoutes,
    ...CustomerRoutes,
    ...AdminRoutes,
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
