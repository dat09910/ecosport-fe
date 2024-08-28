import config from "~/config";
// Merchant pages
import MerchantLayout from "../layouts/MerchantLayout/MerchantLayout";
import Dashboard from "../pages/merchant/Dashboard";
import Product from "../pages/merchant/Product";

// Public routes
const publicRoutes = [
    // Merchants Client
    { path: config.routes.dashboard, component: Dashboard, layout: MerchantLayout },
    { path: config.routes.product, component: Product, layout: MerchantLayout },
];

// Private routes for admin
const privateRoutes = [];

export { publicRoutes, privateRoutes };
