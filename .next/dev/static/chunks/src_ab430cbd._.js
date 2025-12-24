(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/infrastructure/external/supabase.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supabase",
    ()=>supabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$esm$2f$wrapper$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/esm/wrapper.mjs [app-client] (ecmascript)");
;
const supabaseUrl = ("TURBOPACK compile-time value", "https://wisonuuhydlfgeancjib.supabase.co") || 'https://dummy.supabase.co';
const supabaseAnonKey = ("TURBOPACK compile-time value", "sb_publishable_BEb2JQYAOyyps7FEjT47hg_k9VwjPlI") || 'dummy-key';
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$esm$2f$wrapper$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClient"])(supabaseUrl, supabaseAnonKey);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/infrastructure/repositories/SupabaseProductRepository.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SupabaseProductRepository",
    ()=>SupabaseProductRepository
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$external$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/infrastructure/external/supabase.ts [app-client] (ecmascript)");
;
class SupabaseProductRepository {
    async fetchProducts(from, to) {
        const { data, error, count } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$external$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('products').select('*', {
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
        const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$external$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('products').select('*').in('id', ids);
        return data || [];
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/application/use-cases/FetchProductsByIdsUseCase.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/presentation/controllers/useCartStore.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "selectTotalQuantity",
    ()=>selectTotalQuantity,
    "useCartStore",
    ()=>useCartStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/middleware.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$repositories$2f$SupabaseProductRepository$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/infrastructure/repositories/SupabaseProductRepository.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$application$2f$use$2d$cases$2f$FetchProductsByIdsUseCase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/application/use-cases/FetchProductsByIdsUseCase.ts [app-client] (ecmascript)");
;
;
;
;
const productRepository = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$repositories$2f$SupabaseProductRepository$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SupabaseProductRepository"]();
const fetchProductsByIdsUseCase = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$application$2f$use$2d$cases$2f$FetchProductsByIdsUseCase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FetchProductsByIdsUseCase"](productRepository);
const selectTotalQuantity = (state)=>state.cartItems.reduce((sum, item)=>sum + item.quantity, 0);
const useCartStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["persist"])((set, get)=>({
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
    storage: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createJSONStorage"])(()=>localStorage)
}));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/application/use-cases/FetchProductsUseCase.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/presentation/controllers/useProductStore.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useProductStore",
    ()=>useProductStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$repositories$2f$SupabaseProductRepository$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/infrastructure/repositories/SupabaseProductRepository.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$application$2f$use$2d$cases$2f$FetchProductsUseCase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/application/use-cases/FetchProductsUseCase.ts [app-client] (ecmascript)");
;
;
;
const productRepository = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$repositories$2f$SupabaseProductRepository$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SupabaseProductRepository"]();
const fetchProductsUseCase = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$application$2f$use$2d$cases$2f$FetchProductsUseCase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FetchProductsUseCase"](productRepository);
const useProductStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])((set, get)=>({
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/presentation/hooks/useRealtimeSync.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useRealtimeSync",
    ()=>useRealtimeSync
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$external$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/infrastructure/external/supabase.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$controllers$2f$useProductStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/presentation/controllers/useProductStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$controllers$2f$useCartStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/presentation/controllers/useCartStore.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
;
const useRealtimeSync = ()=>{
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useRealtimeSync.useEffect": ()=>{
            const channel = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$external$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].channel('global-updates').on('postgres_changes', {
                event: 'UPDATE',
                schema: 'public',
                table: 'products'
            }, {
                "useRealtimeSync.useEffect.channel": (payload)=>{
                    const updatedProduct = payload.new;
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$controllers$2f$useProductStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProductStore"].setState({
                        "useRealtimeSync.useEffect.channel": (state)=>({
                                products: state.products.map({
                                    "useRealtimeSync.useEffect.channel": (p)=>p.id === updatedProduct.id ? updatedProduct : p
                                }["useRealtimeSync.useEffect.channel"])
                            })
                    }["useRealtimeSync.useEffect.channel"]);
                    const { cartItems, updateProductDataInCart } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$controllers$2f$useCartStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCartStore"].getState();
                    const isInCart = cartItems.some({
                        "useRealtimeSync.useEffect.channel.isInCart": (item)=>item.productId === updatedProduct.id
                    }["useRealtimeSync.useEffect.channel.isInCart"]);
                    if (isInCart) {
                        updateProductDataInCart(updatedProduct);
                    }
                }
            }["useRealtimeSync.useEffect.channel"]).subscribe();
            return ({
                "useRealtimeSync.useEffect": ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$infrastructure$2f$external$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].removeChannel(channel);
                }
            })["useRealtimeSync.useEffect"];
        }
    }["useRealtimeSync.useEffect"], []);
};
_s(useRealtimeSync, "OD7bBpZva5O2jO+Puf00hKivP7c=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/presentation/hooks/useSyncTabs.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSyncTabs",
    ()=>useSyncTabs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$controllers$2f$useCartStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/presentation/controllers/useCartStore.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
const useSyncTabs = ()=>{
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useSyncTabs.useEffect": ()=>{
            const handleStorageChange = {
                "useSyncTabs.useEffect.handleStorageChange": (event)=>{
                    if (event.key === 'shopping-cart-storage') {
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$controllers$2f$useCartStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCartStore"].persist.rehydrate();
                    }
                }
            }["useSyncTabs.useEffect.handleStorageChange"];
            window.addEventListener('storage', handleStorageChange);
            return ({
                "useSyncTabs.useEffect": ()=>{
                    window.removeEventListener('storage', handleStorageChange);
                }
            })["useSyncTabs.useEffect"];
        }
    }["useSyncTabs.useEffect"], []);
};
_s(useSyncTabs, "OD7bBpZva5O2jO+Puf00hKivP7c=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/presentation/components/Header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$controllers$2f$useCartStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/presentation/controllers/useCartStore.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
const Header = ()=>{
    _s();
    const totalQuantity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$controllers$2f$useCartStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCartStore"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$controllers$2f$useCartStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectTotalQuantity"]);
    const openCart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$controllers$2f$useCartStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCartStore"])({
        "Header.useCartStore[openCart]": (state)=>state.openCart
    }["Header.useCartStore[openCart]"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "mb-8 flex justify-between items-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-3xl font-bold text-gray-800 animate-in fade-in slide-in-from-top-4 duration-500",
                children: "Shop"
            }, void 0, false, {
                fileName: "[project]/src/presentation/components/Header.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: openCart,
                className: `relative p-3 text-white rounded-lg shadow transition-all duration-200 cursor-pointer transform hover:scale-105 ${totalQuantity > 0 ? 'bg-indigo-600 hover:bg-indigo-700 animate-pulse' : 'bg-gray-400 hover:bg-gray-500'}`,
                children: [
                    "🛒 ",
                    totalQuantity > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center animate-bounce",
                        children: totalQuantity
                    }, void 0, false, {
                        fileName: "[project]/src/presentation/components/Header.tsx",
                        lineNumber: 23,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "ml-2",
                        children: totalQuantity > 0 ? `Cart (${totalQuantity})` : 'Cart'
                    }, void 0, false, {
                        fileName: "[project]/src/presentation/components/Header.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/presentation/components/Header.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/presentation/components/Header.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Header, "vPej17UN7Joba73dddzzy+h3ynk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$controllers$2f$useCartStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCartStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$controllers$2f$useCartStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCartStore"]
    ];
});
_c = Header;
const __TURBOPACK__default__export__ = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/presentation/components/ProductCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$controllers$2f$useCartStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/presentation/controllers/useCartStore.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
const fallbackImageUrl = 'https://placehold.co/400x300?text=No+Image';
const ProductCard = ({ product })=>{
    _s();
    const { addToCart, increaseQuantity, decreaseQuantity, removeFromCart, cartItems } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$controllers$2f$useCartStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCartStore"])();
    const [recentlyAdded, setRecentlyAdded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const cartItem = cartItems.find((item)=>item.productId === product.id);
    const quantityInCart = cartItem ? cartItem.quantity : 0;
    const isOutOfStock = product.quantity <= 0;
    const isLimitReached = quantityInCart >= product.quantity;
    const isInventoryExceeded = quantityInCart > product.quantity;
    const handleAddToCart = ()=>{
        addToCart(product);
        setRecentlyAdded(true);
        setTimeout(()=>setRecentlyAdded(false), 2000);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full transform transition duration-300 hover:shadow-xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: product.image_url,
                alt: product.title,
                className: "w-full h-48 object-cover",
                onError: (e)=>{
                    e.currentTarget.src = fallbackImageUrl;
                }
            }, void 0, false, {
                fileName: "[project]/src/presentation/components/ProductCard.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-5 flex flex-col grow",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl font-semibold text-gray-800 line-clamp-2",
                        title: product.title,
                        children: product.title
                    }, void 0, false, {
                        fileName: "[project]/src/presentation/components/ProductCard.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-1 flex flex-col",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: `text-sm font-medium ${isOutOfStock ? 'text-red-500' : 'text-green-600'}`,
                                children: isOutOfStock ? 'Not available in stock' : `In stock: ${product.quantity} pc.`
                            }, void 0, false, {
                                fileName: "[project]/src/presentation/components/ProductCard.tsx",
                                lineNumber: 55,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            isInventoryExceeded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[11px] text-red-600 font-bold animate-pulse bg-red-50 px-2 py-1 rounded mt-1",
                                children: "⚠️ Cart exceeds stock!"
                            }, void 0, false, {
                                fileName: "[project]/src/presentation/components/ProductCard.tsx",
                                lineNumber: 60,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/presentation/components/ProductCard.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-2 text-gray-600 line-clamp-2 grow",
                        children: product.description
                    }, void 0, false, {
                        fileName: "[project]/src/presentation/components/ProductCard.tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-2xl font-bold text-indigo-600",
                                children: [
                                    "$",
                                    product.price.toFixed(2)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/presentation/components/ProductCard.tsx",
                                lineNumber: 71,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-36 flex justify-end items-center",
                                children: quantityInCart === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    disabled: isOutOfStock,
                                    onClick: handleAddToCart,
                                    className: `px-4 py-2 rounded-lg transition-all duration-300 w-full h-10 cursor-pointer transform ${recentlyAdded ? 'bg-green-500 text-white scale-105 shadow-lg animate-pulse' : isOutOfStock ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-indigo-600 text-white hover:bg-indigo-700 hover:scale-105'}`,
                                    title: "Add to cart",
                                    children: recentlyAdded ? '✓ Added!' : 'Add to Cart'
                                }, void 0, false, {
                                    fileName: "[project]/src/presentation/components/ProductCard.tsx",
                                    lineNumber: 77,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center space-x-2 h-10",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>decreaseQuantity(product.id),
                                            className: "w-10 h-10 bg-indigo-100 text-indigo-600 rounded-lg hover:bg-indigo-200 transition flex items-center justify-center cursor-pointer",
                                            title: "Decrease quantity",
                                            children: "-"
                                        }, void 0, false, {
                                            fileName: "[project]/src/presentation/components/ProductCard.tsx",
                                            lineNumber: 93,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `font-semibold ${isInventoryExceeded ? 'text-red-600' : ''}`,
                                            children: quantityInCart
                                        }, void 0, false, {
                                            fileName: "[project]/src/presentation/components/ProductCard.tsx",
                                            lineNumber: 100,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            disabled: isLimitReached,
                                            onClick: ()=>increaseQuantity(product.id),
                                            className: `w-10 h-10 rounded-lg transition flex items-center justify-center ${isLimitReached ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-indigo-100 text-indigo-600 hover:bg-indigo-200 cursor-pointer'}`,
                                            title: "Increase quantity",
                                            children: "+"
                                        }, void 0, false, {
                                            fileName: "[project]/src/presentation/components/ProductCard.tsx",
                                            lineNumber: 103,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>removeFromCart(product.id),
                                            className: "w-10 h-10 text-red-500 hover:text-red-700 transition flex items-center justify-center cursor-pointer",
                                            title: "Remove from cart",
                                            children: "✕"
                                        }, void 0, false, {
                                            fileName: "[project]/src/presentation/components/ProductCard.tsx",
                                            lineNumber: 115,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/presentation/components/ProductCard.tsx",
                                    lineNumber: 92,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/presentation/components/ProductCard.tsx",
                                lineNumber: 75,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/presentation/components/ProductCard.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/presentation/components/ProductCard.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/presentation/components/ProductCard.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ProductCard, "YK6xDk0KjH6N1GbpKD9m9uKx85E=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$controllers$2f$useCartStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCartStore"]
    ];
});
_c = ProductCard;
const __TURBOPACK__default__export__ = ProductCard;
var _c;
__turbopack_context__.k.register(_c, "ProductCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/presentation/components/ProductList.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$components$2f$ProductCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/presentation/components/ProductCard.tsx [app-client] (ecmascript)");
;
;
const ProductList = ({ products })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "container mx-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-2xl font-semibold mb-6 text-gray-800",
                children: "Products showcase"
            }, void 0, false, {
                fileName: "[project]/src/presentation/components/ProductList.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
                children: products.map((product, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "animate-in fade-in slide-in-from-bottom-4 duration-500",
                        style: {
                            animationDelay: `${index * 100}ms`
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$components$2f$ProductCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            product: product
                        }, void 0, false, {
                            fileName: "[project]/src/presentation/components/ProductList.tsx",
                            lineNumber: 22,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, product.id, false, {
                        fileName: "[project]/src/presentation/components/ProductList.tsx",
                        lineNumber: 17,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/src/presentation/components/ProductList.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/presentation/components/ProductList.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = ProductList;
const __TURBOPACK__default__export__ = ProductList;
var _c;
__turbopack_context__.k.register(_c, "ProductList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/presentation/components/Pagination.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const Pagination = ({ itemsPerPage, totalItems, currentPage, paginate })=>{
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    if (totalPages <= 1) return null;
    const getPageNumbers = ()=>{
        const pages = [];
        const showMax = 5;
        if (totalPages <= showMax) {
            for(let i = 1; i <= totalPages; i++)pages.push(i);
        } else {
            pages.push(1);
            if (currentPage > 3) pages.push('...');
            const start = Math.max(2, currentPage - 1);
            const end = Math.min(totalPages - 1, currentPage + 1);
            for(let i = start; i <= end; i++){
                pages.push(i);
            }
            if (currentPage < totalPages - 2) pages.push('...');
            pages.push(totalPages);
        }
        return pages;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "mt-8 flex justify-center items-center space-x-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                disabled: currentPage === 1,
                onClick: ()=>paginate(currentPage - 1),
                className: "px-3 py-2 rounded-lg border border-indigo-300 text-indigo-600 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-indigo-50 transition cursor-pointer",
                children: "←"
            }, void 0, false, {
                fileName: "[project]/src/presentation/components/Pagination.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "flex items-center space-x-2",
                children: getPageNumbers().map((number, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: number === '...' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "px-2 text-gray-400",
                            children: "..."
                        }, void 0, false, {
                            fileName: "[project]/src/presentation/components/Pagination.tsx",
                            lineNumber: 52,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>paginate(number),
                            className: `w-10 h-10 rounded-lg transition font-medium cursor-pointer ${currentPage === number ? 'bg-indigo-600 text-white shadow-lg scale-110' : 'bg-white text-indigo-600 border border-indigo-200 hover:bg-indigo-100'}`,
                            children: number
                        }, void 0, false, {
                            fileName: "[project]/src/presentation/components/Pagination.tsx",
                            lineNumber: 54,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    }, index, false, {
                        fileName: "[project]/src/presentation/components/Pagination.tsx",
                        lineNumber: 50,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/src/presentation/components/Pagination.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                disabled: currentPage === totalPages,
                onClick: ()=>paginate(currentPage + 1),
                className: "px-3 py-2 rounded-lg border border-indigo-300 text-indigo-600 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-indigo-50 transition cursor-pointer",
                children: "→"
            }, void 0, false, {
                fileName: "[project]/src/presentation/components/Pagination.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/presentation/components/Pagination.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Pagination;
const __TURBOPACK__default__export__ = Pagination;
var _c;
__turbopack_context__.k.register(_c, "Pagination");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/presentation/components/ProductManager.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$controllers$2f$useProductStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/presentation/controllers/useProductStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$components$2f$ProductList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/presentation/components/ProductList.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$components$2f$Pagination$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/presentation/components/Pagination.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
const ProductManager = ()=>{
    _s();
    const { products, totalCount, isLoading, error, currentPage, itemsPerPage, fetchProducts, setCurrentPage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$controllers$2f$useProductStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProductStore"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProductManager.useEffect": ()=>{
            fetchProducts();
        }
    }["ProductManager.useEffect"], []);
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-8 text-center",
            children: "Loading..."
        }, void 0, false, {
            fileName: "[project]/src/presentation/components/ProductManager.tsx",
            lineNumber: 26,
            columnNumber: 16
        }, ("TURBOPACK compile-time value", void 0));
    }
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-8 text-center text-red-600",
            children: [
                "Error: ",
                error
            ]
        }, void 0, true, {
            fileName: "[project]/src/presentation/components/ProductManager.tsx",
            lineNumber: 30,
            columnNumber: 16
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$components$2f$ProductList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                products: products
            }, void 0, false, {
                fileName: "[project]/src/presentation/components/ProductManager.tsx",
                lineNumber: 35,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$components$2f$Pagination$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                itemsPerPage: itemsPerPage,
                totalItems: totalCount,
                currentPage: currentPage,
                paginate: setCurrentPage
            }, void 0, false, {
                fileName: "[project]/src/presentation/components/ProductManager.tsx",
                lineNumber: 36,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/presentation/components/ProductManager.tsx",
        lineNumber: 34,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ProductManager, "dpwyRrEwCnTLMFI4RqlELineJaU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$controllers$2f$useProductStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProductStore"]
    ];
});
_c = ProductManager;
const __TURBOPACK__default__export__ = ProductManager;
var _c;
__turbopack_context__.k.register(_c, "ProductManager");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/presentation/components/CartItem.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$controllers$2f$useCartStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/presentation/controllers/useCartStore.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
const CartItem = ({ item })=>{
    _s();
    const { removeFromCart, increaseQuantity, decreaseQuantity } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$controllers$2f$useCartStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCartStore"])();
    const productData = item?.productData;
    if (!productData) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-3 p-4 bg-white shadow-sm rounded-lg border border-gray-100",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start space-x-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: productData.image_url,
                        alt: productData.title,
                        className: "w-14 h-14 object-cover rounded shadow-sm shrink-0",
                        onError: (e)=>{
                            e.currentTarget.src = 'https://placehold.co/56x56?text=No+Img';
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/presentation/components/CartItem.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 min-w-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "font-semibold text-sm sm:text-base leading-tight mb-1",
                                children: productData.title
                            }, void 0, false, {
                                fileName: "[project]/src/presentation/components/CartItem.tsx",
                                lineNumber: 48,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-600",
                                children: [
                                    "$",
                                    productData.price.toFixed(2),
                                    " each"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/presentation/components/CartItem.tsx",
                                lineNumber: 49,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            isOverStock && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-red-500 text-xs font-bold mt-2",
                                children: [
                                    "⚠️ Only ",
                                    productData.quantity,
                                    " available"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/presentation/components/CartItem.tsx",
                                lineNumber: 52,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            isDiscountApplied && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-green-600 text-xs font-medium mt-1",
                                children: "🎉 10% discount applied!"
                            }, void 0, false, {
                                fileName: "[project]/src/presentation/components/CartItem.tsx",
                                lineNumber: 58,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/presentation/components/CartItem.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/presentation/components/CartItem.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between pt-2 border-t border-gray-100",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center border rounded-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>decreaseQuantity(item.productId),
                                        className: "px-2 py-1 text-indigo-600 hover:bg-indigo-50 rounded-l-lg transition text-sm",
                                        title: "Decrease quantity",
                                        children: "-"
                                    }, void 0, false, {
                                        fileName: "[project]/src/presentation/components/CartItem.tsx",
                                        lineNumber: 69,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `px-3 py-1 border-l border-r font-medium text-sm ${isOverStock ? 'text-red-600' : ''}`,
                                        children: item.quantity
                                    }, void 0, false, {
                                        fileName: "[project]/src/presentation/components/CartItem.tsx",
                                        lineNumber: 76,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        disabled: isLimitReached,
                                        onClick: ()=>increaseQuantity(item.productId),
                                        className: `px-2 py-1 rounded-r-lg transition text-sm ${isLimitReached ? 'text-gray-300 cursor-not-allowed' : 'text-indigo-600 hover:bg-indigo-50'}`,
                                        title: isLimitReached ? "Quantity limit reached" : "Increase quantity",
                                        children: "+"
                                    }, void 0, false, {
                                        fileName: "[project]/src/presentation/components/CartItem.tsx",
                                        lineNumber: 79,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/presentation/components/CartItem.tsx",
                                lineNumber: 68,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>removeFromCart(item.productId),
                                className: "text-red-500 hover:text-red-700 transition p-2 rounded-full hover:bg-red-50",
                                title: "Remove item",
                                children: "✕"
                            }, void 0, false, {
                                fileName: "[project]/src/presentation/components/CartItem.tsx",
                                lineNumber: 93,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/presentation/components/CartItem.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-right",
                        children: [
                            isDiscountApplied && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-400 line-through",
                                children: [
                                    "$",
                                    originalItemPrice.toFixed(2)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/presentation/components/CartItem.tsx",
                                lineNumber: 104,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-bold text-lg text-indigo-600",
                                children: [
                                    "$",
                                    finalItemPrice.toFixed(2)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/presentation/components/CartItem.tsx",
                                lineNumber: 106,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/presentation/components/CartItem.tsx",
                        lineNumber: 102,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/presentation/components/CartItem.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/presentation/components/CartItem.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(CartItem, "RrRvIBK6VJmMnuUGSdb87afg0ao=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$controllers$2f$useCartStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCartStore"]
    ];
});
_c = CartItem;
const __TURBOPACK__default__export__ = CartItem;
var _c;
__turbopack_context__.k.register(_c, "CartItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/presentation/components/CartSidebar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$controllers$2f$useCartStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/presentation/controllers/useCartStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$components$2f$CartItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/presentation/components/CartItem.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
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
const CartSidebar = ({ isOpen, onClose })=>{
    _s();
    const { cartItems } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$controllers$2f$useCartStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCartStore"])();
    const total = calculateTotal(cartItems);
    const hasInventoryErrors = cartItems.some((item)=>item.quantity > item.productData.quantity);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`,
                onClick: onClose
            }, void 0, false, {
                fileName: "[project]/src/presentation/components/CartSidebar.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col h-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between p-6 border-b border-gray-200 bg-white sticky top-0 z-10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl font-bold text-gray-800",
                                    children: "Shopping Cart"
                                }, void 0, false, {
                                    fileName: "[project]/src/presentation/components/CartSidebar.tsx",
                                    lineNumber: 58,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: onClose,
                                    className: "text-gray-400 hover:text-gray-600 transition-colors text-3xl leading-none cursor-pointer",
                                    children: "×"
                                }, void 0, false, {
                                    fileName: "[project]/src/presentation/components/CartSidebar.tsx",
                                    lineNumber: 59,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/presentation/components/CartSidebar.tsx",
                            lineNumber: 57,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 overflow-y-auto p-6",
                            children: cartItems.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center py-12",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-6xl mb-4",
                                        children: "🛒"
                                    }, void 0, false, {
                                        fileName: "[project]/src/presentation/components/CartSidebar.tsx",
                                        lineNumber: 71,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-500 text-lg",
                                        children: "Your cart is empty"
                                    }, void 0, false, {
                                        fileName: "[project]/src/presentation/components/CartSidebar.tsx",
                                        lineNumber: 72,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-400 text-sm mt-2",
                                        children: "Add some products to get started!"
                                    }, void 0, false, {
                                        fileName: "[project]/src/presentation/components/CartSidebar.tsx",
                                        lineNumber: 73,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/presentation/components/CartSidebar.tsx",
                                lineNumber: 70,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: cartItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "animate-in slide-in-from-right-5 duration-300",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$components$2f$CartItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            item: item
                                        }, void 0, false, {
                                            fileName: "[project]/src/presentation/components/CartSidebar.tsx",
                                            lineNumber: 82,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, item.productId, false, {
                                        fileName: "[project]/src/presentation/components/CartSidebar.tsx",
                                        lineNumber: 78,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/src/presentation/components/CartSidebar.tsx",
                                lineNumber: 76,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/presentation/components/CartSidebar.tsx",
                            lineNumber: 68,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        cartItems.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border-t border-gray-200 p-6 bg-gray-50 sticky bottom-0",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-center text-xl font-bold text-indigo-600",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Total:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/presentation/components/CartSidebar.tsx",
                                                lineNumber: 94,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    "$",
                                                    total.toFixed(2)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/presentation/components/CartSidebar.tsx",
                                                lineNumber: 95,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/presentation/components/CartSidebar.tsx",
                                        lineNumber: 93,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        disabled: hasInventoryErrors,
                                        className: `w-full py-4 rounded-lg transition-all duration-200 font-bold text-lg ${hasInventoryErrors ? 'bg-gray-300 cursor-not-allowed text-gray-500' : 'bg-green-600 text-white hover:bg-green-700 hover:shadow-lg cursor-pointer transform hover:scale-[1.02]'}`,
                                        children: hasInventoryErrors ? 'Check Inventory' : 'Checkout Now'
                                    }, void 0, false, {
                                        fileName: "[project]/src/presentation/components/CartSidebar.tsx",
                                        lineNumber: 98,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    hasInventoryErrors && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-3 bg-red-50 rounded-md border border-red-100 animate-in fade-in duration-300",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-red-600 text-sm text-center font-medium",
                                            children: "⚠️ Not enough stock for some items"
                                        }, void 0, false, {
                                            fileName: "[project]/src/presentation/components/CartSidebar.tsx",
                                            lineNumber: 111,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/presentation/components/CartSidebar.tsx",
                                        lineNumber: 110,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/presentation/components/CartSidebar.tsx",
                                lineNumber: 92,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/presentation/components/CartSidebar.tsx",
                            lineNumber: 91,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/presentation/components/CartSidebar.tsx",
                    lineNumber: 55,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/presentation/components/CartSidebar.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
_s(CartSidebar, "JmRW3sBHiNNQX55iTaS5TNusuCM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$controllers$2f$useCartStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCartStore"]
    ];
});
_c = CartSidebar;
const __TURBOPACK__default__export__ = CartSidebar;
var _c;
__turbopack_context__.k.register(_c, "CartSidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$controllers$2f$useCartStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/presentation/controllers/useCartStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$hooks$2f$useRealtimeSync$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/presentation/hooks/useRealtimeSync.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$hooks$2f$useSyncTabs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/presentation/hooks/useSyncTabs.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$components$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/presentation/components/Header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$components$2f$ProductManager$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/presentation/components/ProductManager.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$components$2f$CartSidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/presentation/components/CartSidebar.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
function Page() {
    _s();
    const { refreshCartData, isCartOpen, closeCart } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$controllers$2f$useCartStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCartStore"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$hooks$2f$useRealtimeSync$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRealtimeSync"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$hooks$2f$useSyncTabs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncTabs"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Page.useEffect": ()=>{
            refreshCartData();
        }
    }["Page.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-100 p-4 md:p-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$components$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$components$2f$ProductManager$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$components$2f$CartSidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: isCartOpen,
                onClose: closeCart
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
_s(Page, "BDstY64b5IMME/Yq98lFaa+J8mE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$controllers$2f$useCartStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCartStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$hooks$2f$useRealtimeSync$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRealtimeSync"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$presentation$2f$hooks$2f$useSyncTabs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncTabs"]
    ];
});
_c = Page;
var _c;
__turbopack_context__.k.register(_c, "Page");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_ab430cbd._.js.map