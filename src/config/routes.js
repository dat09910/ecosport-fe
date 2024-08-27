// routes.js

// Routes cho Client
export const routes = {
    home: "/",
    wishlist: "/wishlist",
    store: "/store",
    storeDetail: "/store-detail",
    cart: "/cart",
    blog: "/blog",
    blogDetail: "/blog-detail",
    productDetail: "/product-detail",
    profile: "/profile",
    shop: "/shop",
    compare: "/compare",
    checkout: "/checkout",
    login: "/login",
    register: "/register",

    // Merchants Client
    dashboard: "/dashboard",
};

// Routes cho Admin
export const routeAdmin = {
    adminDashboard: "/admin",
    adminCategory: "/admin/category",
    adminAddCategory: "/admin/category/add",
    adminEditCategory: "/admin/category/edit/:id",
    adminProduct: "/admin/product",
    adminAddProduct: "/admin/product/add",
    adminEditProduct: "/admin/product/edit/:id",
    adminPost: "/admin/post",
    adminAddPost: "/admin/post/add",
    adminEditPost: "/admin/post/edit/:id",
    adminVoucher: "/admin/voucher",
    adminAddVoucher: "/admin/voucher/add",
    adminEditVoucher: "/admin/voucher/edit/:id",
};
