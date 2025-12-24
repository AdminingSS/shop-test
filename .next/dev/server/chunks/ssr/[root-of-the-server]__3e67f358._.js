module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/src/infrastructure/external/supabase.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supabase",
    ()=>supabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$esm$2f$wrapper$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/esm/wrapper.mjs [app-ssr] (ecmascript)");
;
const supabaseUrl = ("TURBOPACK compile-time value", "https://wisonuuhydlfgeancjib.supabase.co") || 'https://dummy.supabase.co';
const supabaseAnonKey = ("TURBOPACK compile-time value", "sb_publishable_BEb2JQYAOyyps7FEjT47hg_k9VwjPlI") || 'dummy-key';
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$esm$2f$wrapper$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createClient"])(supabaseUrl, supabaseAnonKey);
}),
"[project]/src/infrastructure/repositories/SupabaseProductRepository.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SupabaseProductRepository",
    ()=>SupabaseProductRepository
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$external$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/infrastructure/external/supabase.ts [app-ssr] (ecmascript)");
;
class SupabaseProductRepository {
    async fetchProducts(from, to) {
        const { data, error, count } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$external$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('products').select('*', {
            count: 'exact'
        }).order('quantity', {
            ascending: false
        }).order('id', {
            ascending: true
        }).range(from, to);
        return {
            data,
            count,
            error
        };
    }
    async fetchProductByIds(ids) {
        const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$external$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('products').select('*').in('id', ids);
        return data || [];
    }
}
}),
"[project]/src/application/use-cases/FetchProductsByIdsUseCase.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FetchProductsByIdsUseCase",
    ()=>FetchProductsByIdsUseCase
]);
class FetchProductsByIdsUseCase {
    productRepository;
    constructor(productRepository){
        this.productRepository = productRepository;
    }
    async execute(ids) {
        return await this.productRepository.fetchProductByIds(ids);
    }
}
}),
"[project]/src/presentation/controllers/useCartStore.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "selectTotalQuantity",
    ()=>selectTotalQuantity,
    "useCartStore",
    ()=>useCartStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/middleware.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$repositories$2f$SupabaseProductRepository$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/infrastructure/repositories/SupabaseProductRepository.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$application$2f$use$2d$cases$2f$FetchProductsByIdsUseCase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/application/use-cases/FetchProductsByIdsUseCase.ts [app-ssr] (ecmascript)");
;
;
;
;
const productRepository = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$repositories$2f$SupabaseProductRepository$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SupabaseProductRepository"]();
const fetchProductsByIdsUseCase = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$application$2f$use$2d$cases$2f$FetchProductsByIdsUseCase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FetchProductsByIdsUseCase"](productRepository);
const selectTotalQuantity = (state)=>state.cartItems.reduce((sum, item)=>sum + item.quantity, 0);
const useCartStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["persist"])((set, get)=>({
        cartItems: [],
        cartProductsData: [],
        isCartOpen: false,
        addToCart: (product)=>set((state)=>{
                if (product.quantity <= 0) return state;
                const existing = state.cartItems.find((i)=>i.productId === product.id);
                if (existing) {
                    if (existing.quantity >= product.quantity) return state;
                    return {
                        cartItems: state.cartItems.map((i)=>i.productId === product.id ? {
                                ...i,
                                quantity: i.quantity + 1,
                                productData: product
                            } : i)
                    };
                }
                return {
                    cartItems: [
                        ...state.cartItems,
                        {
                            productId: product.id,
                            quantity: 1,
                            productData: product
                        }
                    ]
                };
            }),
        removeFromCart: (productId)=>set((state)=>({
                    cartItems: state.cartItems.filter((i)=>i.productId !== productId)
                })),
        increaseQuantity: (productId)=>set((state)=>{
                const item = state.cartItems.find((i)=>i.productId === productId);
                if (item && item.quantity < item.productData.quantity) {
                    return {
                        cartItems: state.cartItems.map((i)=>i.productId === productId ? {
                                ...i,
                                quantity: i.quantity + 1
                            } : i)
                    };
                }
                return state;
            }),
        decreaseQuantity: (productId)=>set((state)=>{
                const item = state.cartItems.find((i)=>i.productId === productId);
                if (item && item.quantity > 1) {
                    return {
                        cartItems: state.cartItems.map((i)=>i.productId === productId ? {
                                ...i,
                                quantity: i.quantity - 1
                            } : i)
                    };
                }
                return {
                    cartItems: state.cartItems.filter((i)=>i.productId !== productId)
                };
            }),
        updateProductDataInCart: (product)=>set((state)=>({
                    cartItems: state.cartItems.map((item)=>item.productId === product.id ? {
                            ...item,
                            productData: product
                        } : item)
                })),
        refreshCartData: async ()=>{
            const { cartItems } = get();
            if (cartItems.length === 0) return;
            const ids = cartItems.map((i)=>i.productId);
            const data = await fetchProductsByIdsUseCase.execute(ids);
            if (data) {
                set({
                    cartItems: cartItems.map((item)=>{
                        const fresh = data.find((d)=>d.id === item.productId);
                        return fresh ? {
                            ...item,
                            productData: fresh
                        } : item;
                    })
                });
            }
        },
        openCart: ()=>set({
                isCartOpen: true
            }),
        closeCart: ()=>set({
                isCartOpen: false
            })
    }), {
    name: 'shopping-cart-storage',
    storage: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createJSONStorage"])(()=>localStorage)
}));
}),
"[project]/src/application/use-cases/FetchProductsUseCase.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FetchProductsUseCase",
    ()=>FetchProductsUseCase
]);
class FetchProductsUseCase {
    productRepository;
    constructor(productRepository){
        this.productRepository = productRepository;
    }
    async execute(from, to) {
        const { data, count, error } = await this.productRepository.fetchProducts(from, to);
        return {
            products: data || [],
            totalCount: count || 0,
            error
        };
    }
}
}),
"[project]/src/presentation/controllers/useProductStore.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useProductStore",
    ()=>useProductStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$repositories$2f$SupabaseProductRepository$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/infrastructure/repositories/SupabaseProductRepository.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$application$2f$use$2d$cases$2f$FetchProductsUseCase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/application/use-cases/FetchProductsUseCase.ts [app-ssr] (ecmascript)");
;
;
;
const productRepository = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$repositories$2f$SupabaseProductRepository$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SupabaseProductRepository"]();
const fetchProductsUseCase = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$application$2f$use$2d$cases$2f$FetchProductsUseCase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FetchProductsUseCase"](productRepository);
const useProductStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])((set, get)=>({
        products: [],
        totalCount: 0,
        isLoading: false,
        error: null,
        currentPage: 1,
        itemsPerPage: 9,
        fetchProducts: async ()=>{
            const { currentPage, itemsPerPage } = get();
            set({
                isLoading: true,
                error: null
            });
            const from = (currentPage - 1) * itemsPerPage;
            const to = from + itemsPerPage - 1;
            const { products, totalCount, error } = await fetchProductsUseCase.execute(from, to);
            if (error) {
                set({
                    error: error.message,
                    isLoading: false
                });
            } else {
                set({
                    products,
                    totalCount,
                    isLoading: false
                });
            }
        },
        setCurrentPage: (page)=>{
            set({
                currentPage: page
            });
            get().fetchProducts();
        }
    }));
}),
"[project]/src/presentation/hooks/useRealtimeSync.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useRealtimeSync",
    ()=>useRealtimeSync
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$external$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/infrastructure/external/supabase.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$controllers$2f$useProductStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/presentation/controllers/useProductStore.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$controllers$2f$useCartStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/presentation/controllers/useCartStore.ts [app-ssr] (ecmascript)");
;
;
;
;
const useRealtimeSync = ()=>{
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const channel = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$external$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].channel('global-updates').on('postgres_changes', {
            event: 'UPDATE',
            schema: 'public',
            table: 'products'
        }, (payload)=>{
            const updatedProduct = payload.new;
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$controllers$2f$useProductStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useProductStore"].setState((state)=>({
                    products: state.products.map((p)=>p.id === updatedProduct.id ? updatedProduct : p)
                }));
            const { cartItems, updateProductDataInCart } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$controllers$2f$useCartStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCartStore"].getState();
            const isInCart = cartItems.some((item)=>item.productId === updatedProduct.id);
            if (isInCart) {
                updateProductDataInCart(updatedProduct);
            }
        }).subscribe();
        return ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$external$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].removeChannel(channel);
        };
    }, []);
};
}),
"[project]/src/presentation/hooks/useSyncTabs.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSyncTabs",
    ()=>useSyncTabs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$controllers$2f$useCartStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/presentation/controllers/useCartStore.ts [app-ssr] (ecmascript)");
;
;
const useSyncTabs = ()=>{
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleStorageChange = (event)=>{
            if (event.key === 'shopping-cart-storage') {
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$controllers$2f$useCartStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCartStore"].persist.rehydrate();
            }
        };
        window.addEventListener('storage', handleStorageChange);
        return ()=>{
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);
};
}),
"[project]/src/presentation/components/CartItem.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$controllers$2f$useCartStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/presentation/controllers/useCartStore.ts [app-ssr] (ecmascript)");
;
;
const CartItem = ({ item })=>{
    const { removeFromCart, increaseQuantity, decreaseQuantity } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$controllers$2f$useCartStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCartStore"])();
    const productData = item?.productData;
    if (!productData) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-4 bg-red-100 rounded",
            children: "Product not found"
        }, void 0, false, {
            fileName: "[project]/src/presentation/components/CartItem.tsx",
            lineNumber: 17,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
    }
    const discountThreshold = 5;
    const discountRate = 0.10;
    const originalItemPrice = productData.price * item.quantity;
    let finalItemPrice = originalItemPrice;
    let isDiscountApplied = false;
    if (item.quantity > discountThreshold) {
        isDiscountApplied = true;
        finalItemPrice = originalItemPrice * (1 - discountRate);
    }
    const isOverStock = item.quantity > productData.quantity;
    const isLimitReached = item.quantity >= productData.quantity;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid grid-cols-1 md:grid-cols-3 gap-4 items-center p-4 bg-white shadow-sm rounded-lg mb-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center space-x-4 md:col-span-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: productData.image_url,
                        alt: productData.title,
                        className: "w-16 h-16 object-cover rounded shadow-sm"
                    }, void 0, false, {
                        fileName: "[project]/src/presentation/components/CartItem.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "font-semibold truncate max-w-xs",
                                children: productData.title
                            }, void 0, false, {
                                fileName: "[project]/src/presentation/components/CartItem.tsx",
                                lineNumber: 40,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-500",
                                children: [
                                    "Price: $",
                                    productData.price.toFixed(2)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/presentation/components/CartItem.tsx",
                                lineNumber: 41,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            isOverStock && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-red-500 text-xs font-bold mt-1",
                                children: [
                                    "⚠️ Available only ",
                                    productData.quantity,
                                    " pc. Decrease quantity."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/presentation/components/CartItem.tsx",
                                lineNumber: 44,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: `text-xs mt-1 font-medium ${isDiscountApplied ? 'text-green-600' : 'text-transparent'}`,
                                children: isDiscountApplied ? 'Discoint 10% for buying more than 5.' : '\u00A0'
                            }, void 0, false, {
                                fileName: "[project]/src/presentation/components/CartItem.tsx",
                                lineNumber: 49,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/presentation/components/CartItem.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/presentation/components/CartItem.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between md:justify-end space-x-4 md:col-span-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center border rounded-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>decreaseQuantity(item.productId),
                                className: "px-3 py-1 text-indigo-600 hover:bg-indigo-100 rounded-l-lg transition cursor-pointer",
                                title: "Decrease quantity",
                                children: "-"
                            }, void 0, false, {
                                fileName: "[project]/src/presentation/components/CartItem.tsx",
                                lineNumber: 58,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `px-3 py-1 border-l border-r ${isOverStock ? 'text-red-600 font-bold' : ''}`,
                                children: item.quantity
                            }, void 0, false, {
                                fileName: "[project]/src/presentation/components/CartItem.tsx",
                                lineNumber: 65,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                disabled: isLimitReached,
                                onClick: ()=>increaseQuantity(item.productId),
                                className: `px-3 py-1 rounded-r-lg transition ${isLimitReached ? 'text-gray-300 cursor-not-allowed' : 'text-indigo-600 hover:bg-indigo-100 cursor-pointer'}`,
                                title: isLimitReached ? "Quantity limit reached" : "Increase quantity",
                                children: "+"
                            }, void 0, false, {
                                fileName: "[project]/src/presentation/components/CartItem.tsx",
                                lineNumber: 68,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/presentation/components/CartItem.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-right w-32",
                        children: [
                            isDiscountApplied && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-400 line-through",
                                children: [
                                    "$",
                                    originalItemPrice.toFixed(2)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/presentation/components/CartItem.tsx",
                                lineNumber: 84,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-bold text-lg text-indigo-600",
                                children: [
                                    "$",
                                    finalItemPrice.toFixed(2)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/presentation/components/CartItem.tsx",
                                lineNumber: 86,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/presentation/components/CartItem.tsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>removeFromCart(item.productId),
                        className: "text-red-500 hover:text-red-700 transition p-2 cursor-pointer",
                        title: "Remove item from cart",
                        children: "✕"
                    }, void 0, false, {
                        fileName: "[project]/src/presentation/components/CartItem.tsx",
                        lineNumber: 89,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/presentation/components/CartItem.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/presentation/components/CartItem.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = CartItem;
}),
"[project]/src/presentation/components/ShoppingCart.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$controllers$2f$useCartStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/presentation/controllers/useCartStore.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$components$2f$CartItem$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/presentation/components/CartItem.tsx [app-ssr] (ecmascript)");
;
;
;
const calculateTotal = (cartItems)=>{
    const discountThreshold = 5;
    const discountRate = 0.10;
    let total = 0;
    cartItems.forEach((item)=>{
        const originalItemPrice = item.productData.price * item.quantity;
        if (item.quantity > discountThreshold) {
            total += originalItemPrice * (1 - discountRate);
        } else {
            total += originalItemPrice;
        }
    });
    return total;
};
const ShoppingCart = ()=>{
    const { cartItems } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$controllers$2f$useCartStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCartStore"])();
    const total = calculateTotal(cartItems);
    const hasInventoryErrors = cartItems.some((item)=>item.quantity > item.productData.quantity);
    if (cartItems.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-8 text-center bg-white rounded-lg shadow",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-500 text-lg",
                children: "Your cart is empty"
            }, void 0, false, {
                fileName: "[project]/src/presentation/components/ShoppingCart.tsx",
                lineNumber: 37,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/presentation/components/ShoppingCart.tsx",
            lineNumber: 36,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid grid-cols-1 lg:grid-cols-3 gap-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "lg:col-span-2 space-y-4",
                children: cartItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$components$2f$CartItem$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        item: item
                    }, item.productId, false, {
                        fileName: "[project]/src/presentation/components/ShoppingCart.tsx",
                        lineNumber: 46,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/src/presentation/components/ShoppingCart.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "lg:col-span-1 bg-white p-6 rounded-lg shadow-lg h-fit sticky top-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-semibold mb-4 text-gray-800",
                        children: "Summary"
                    }, void 0, false, {
                        fileName: "[project]/src/presentation/components/ShoppingCart.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3 border-t pt-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between font-bold text-2xl text-indigo-600",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Total sum:"
                                }, void 0, false, {
                                    fileName: "[project]/src/presentation/components/ShoppingCart.tsx",
                                    lineNumber: 58,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        "$",
                                        total.toFixed(2)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/presentation/components/ShoppingCart.tsx",
                                    lineNumber: 59,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/presentation/components/ShoppingCart.tsx",
                            lineNumber: 57,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/presentation/components/ShoppingCart.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        disabled: hasInventoryErrors,
                        className: `mt-6 w-full py-3 rounded-lg transition duration-200 font-bold text-lg ${hasInventoryErrors ? 'bg-gray-300 cursor-not-allowed text-gray-500' : 'bg-green-600 text-white hover:bg-green-700 cursor-pointer shadow-md'}`,
                        children: hasInventoryErrors ? 'Check Inventory' : 'Order Now'
                    }, void 0, false, {
                        fileName: "[project]/src/presentation/components/ShoppingCart.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    hasInventoryErrors && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 p-3 bg-red-50 rounded-md border border-red-100",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-red-600 text-xs text-center font-medium uppercase tracking-wider",
                            children: "⚠️ Not enough stock for some items"
                        }, void 0, false, {
                            fileName: "[project]/src/presentation/components/ShoppingCart.tsx",
                            lineNumber: 76,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/presentation/components/ShoppingCart.tsx",
                        lineNumber: 75,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/presentation/components/ShoppingCart.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/presentation/components/ShoppingCart.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = ShoppingCart;
}),
"[project]/src/app/cart/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CartPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$controllers$2f$useCartStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/presentation/controllers/useCartStore.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$hooks$2f$useRealtimeSync$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/presentation/hooks/useRealtimeSync.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$hooks$2f$useSyncTabs$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/presentation/hooks/useSyncTabs.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$components$2f$ShoppingCart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/presentation/components/ShoppingCart.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
function CartPage() {
    const { refreshCartData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$controllers$2f$useCartStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCartStore"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$hooks$2f$useRealtimeSync$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRealtimeSync"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$hooks$2f$useSyncTabs$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSyncTabs"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        refreshCartData();
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-100 p-4 md:p-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-3xl font-bold text-gray-800 mb-8",
                children: "Your Cart"
            }, void 0, false, {
                fileName: "[project]/src/app/cart/page.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$components$2f$ShoppingCart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/cart/page.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/cart/page.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__3e67f358._.js.map