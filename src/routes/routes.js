import config from "~/config";
// Merchant pages
import MerchantLayout from "../layouts/MerchantLayout/MerchantLayout";
import Dashboard from "../pages/merchant/Dashboard";
import Product from "../pages/merchant/Product";
import Home from "~/pages/client/Home";

// Public routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    // Merchants Client
    { path: config.routes.dashboard, component: Dashboard, layout: MerchantLayout },
    { path: config.routes.product, component: Product, layout: MerchantLayout },
    { path: config.routes.productAdd, component: Product, layout: MerchantLayout },
];

// Private routes for admin
const privateRoutes = [];

export { publicRoutes };
