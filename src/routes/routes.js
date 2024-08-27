import config from "~/config";
// Merchant pages
import MerchantLayout from "../layouts/MerchantLayout/MerchantLayout";
import Dashboard from "../pages/merchant/Dashboard";

// Public routes
const publicRoutes = [
    // Merchants Client
    { path: config.routes.dashboard, component: Dashboard, layout: MerchantLayout },
];

// Private routes for admin
const privateRoutes = [];

export { publicRoutes, privateRoutes };
