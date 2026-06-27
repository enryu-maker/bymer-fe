"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  fetchProductCategoryById,
  fetchProductCategories,
  fetchCustomerProducts,
  fetchProductsByCategory,
  fetchProductById,
  resolveProductCategoryId,
} from "@/lib/api";

const ProductsCatalogContext = createContext(null);

function segmentKey(segment) {
  return segment || "default";
}

function defaultUiState(isSegmentPage) {
  return {
    filterMode: isSegmentPage ? null : "customer",
    activeCustomerId: null,
    activeProductId: null,
    searchQuery: "",
  };
}

export function ProductsCatalogProvider({ children }) {
  const [categories, setCategories] = useState({});
  const [customerProducts, setCustomerProducts] = useState({});
  const [categoryProducts, setCategoryProducts] = useState({});
  const [productDetails, setProductDetails] = useState({});
  const [uiBySegment, setUiBySegment] = useState({});
  const [loadingCategories, setLoadingCategories] = useState({});
  const [loadingCustomerProducts, setLoadingCustomerProducts] = useState({});
  const [loadingCategoryProducts, setLoadingCategoryProducts] = useState({});
  const [loadingProductDetails, setLoadingProductDetails] = useState({});

  const categoriesRef = useRef(categories);
  const customerProductsRef = useRef(customerProducts);
  const categoryProductsRef = useRef(categoryProducts);
  const productDetailsRef = useRef(productDetails);
  const inflightRef = useRef({});

  categoriesRef.current = categories;
  customerProductsRef.current = customerProducts;
  categoryProductsRef.current = categoryProducts;
  productDetailsRef.current = productDetails;

  const getUiState = useCallback(
    (segment) => {
      const key = segmentKey(segment);
      return uiBySegment[key] || defaultUiState(Boolean(segment));
    },
    [uiBySegment]
  );

  const updateUiState = useCallback((segment, partial) => {
    const key = segmentKey(segment);
    setUiBySegment((prev) => ({
      ...prev,
      [key]: {
        ...(prev[key] || defaultUiState(Boolean(segment))),
        ...partial,
      },
    }));
  }, []);

  const ensureCategory = useCallback(async (segment) => {
    const key = segmentKey(segment);
    const cached = categoriesRef.current[key];
    if (cached?.loaded) return cached;

    if (inflightRef.current[`category:${key}`]) {
      return inflightRef.current[`category:${key}`];
    }

    const request = (async () => {
      setLoadingCategories((prev) => ({ ...prev, [key]: true }));
      try {
        let categoryId = null;

        if (segment) {
          categoryId = await resolveProductCategoryId(segment);
        } else {
          const list = await fetchProductCategories();
          categoryId = list[0]?.id ?? null;
        }

        if (!categoryId) {
          const empty = {
            categoryId: null,
            categoryName: "",
            customers: [],
            loaded: true,
          };
          setCategories((prev) => ({ ...prev, [key]: empty }));
          return empty;
        }

        const detail = await fetchProductCategoryById(categoryId);
        const customerList = detail.customers || [];
        const data = {
          categoryId,
          categoryName: detail.name || "",
          customers: customerList,
          loaded: true,
        };

        setCategories((prev) => ({ ...prev, [key]: data }));

        const isSegmentPage = Boolean(segment);
        setUiBySegment((prev) => {
          if (prev[key]) return prev;
          return {
            ...prev,
            [key]: {
              ...defaultUiState(isSegmentPage),
              activeCustomerId: isSegmentPage ? null : customerList[0]?.id ?? null,
            },
          };
        });

        return data;
      } catch (err) {
        console.error("Failed to load product category customers", err);
        const empty = {
          categoryId: null,
          categoryName: "",
          customers: [],
          loaded: true,
        };
        setCategories((prev) => ({ ...prev, [key]: empty }));
        return empty;
      } finally {
        setLoadingCategories((prev) => ({ ...prev, [key]: false }));
        delete inflightRef.current[`category:${key}`];
      }
    })();

    inflightRef.current[`category:${key}`] = request;
    return request;
  }, []);

  const ensureCustomerProducts = useCallback(async (customerId) => {
    if (!customerId) return [];

    const cached = customerProductsRef.current[customerId];
    if (cached) return cached;

    const inflightKey = `customer:${customerId}`;
    if (inflightRef.current[inflightKey]) {
      return inflightRef.current[inflightKey];
    }

    const request = (async () => {
      setLoadingCustomerProducts((prev) => ({ ...prev, [customerId]: true }));
      try {
        const data = await fetchCustomerProducts(customerId);
        setCustomerProducts((prev) => ({ ...prev, [customerId]: data }));
        setProductDetails((prev) => {
          const next = { ...prev };
          data.forEach((product) => {
            next[product.id] = product;
          });
          return next;
        });
        return data;
      } catch (err) {
        console.error("Failed to load customer products", err);
        setCustomerProducts((prev) => ({ ...prev, [customerId]: [] }));
        return [];
      } finally {
        setLoadingCustomerProducts((prev) => ({ ...prev, [customerId]: false }));
        delete inflightRef.current[inflightKey];
      }
    })();

    inflightRef.current[inflightKey] = request;
    return request;
  }, []);

  const ensureCategoryProducts = useCallback(async (categoryId) => {
    if (!categoryId) return [];

    const cached = categoryProductsRef.current[categoryId];
    if (cached) return cached;

    const inflightKey = `categoryProducts:${categoryId}`;
    if (inflightRef.current[inflightKey]) {
      return inflightRef.current[inflightKey];
    }

    const request = (async () => {
      setLoadingCategoryProducts((prev) => ({ ...prev, [categoryId]: true }));
      try {
        const data = await fetchProductsByCategory(categoryId);
        setCategoryProducts((prev) => ({ ...prev, [categoryId]: data }));
        setProductDetails((prev) => {
          const next = { ...prev };
          data.forEach((product) => {
            next[product.id] = product;
          });
          return next;
        });
        return data;
      } catch (err) {
        console.error("Failed to load category products", err);
        setCategoryProducts((prev) => ({ ...prev, [categoryId]: [] }));
        return [];
      } finally {
        setLoadingCategoryProducts((prev) => ({ ...prev, [categoryId]: false }));
        delete inflightRef.current[inflightKey];
      }
    })();

    inflightRef.current[inflightKey] = request;
    return request;
  }, []);

  const ensureProductDetail = useCallback(async (productId) => {
    if (!productId) return null;

    const cached = productDetailsRef.current[productId];
    if (cached) return cached;

    for (const list of Object.values(categoryProductsRef.current)) {
      const fromList = list.find((item) => String(item.id) === String(productId));
      if (fromList) {
        setProductDetails((prev) => ({ ...prev, [productId]: fromList }));
        return fromList;
      }
    }

    const inflightKey = `product:${productId}`;
    if (inflightRef.current[inflightKey]) {
      return inflightRef.current[inflightKey];
    }

    const request = (async () => {
      setLoadingProductDetails((prev) => ({ ...prev, [productId]: true }));
      try {
        const data = await fetchProductById(productId);
        if (data) {
          setProductDetails((prev) => ({ ...prev, [productId]: data }));
        }
        return data;
      } catch {
        return null;
      } finally {
        setLoadingProductDetails((prev) => ({ ...prev, [productId]: false }));
        delete inflightRef.current[inflightKey];
      }
    })();

    inflightRef.current[inflightKey] = request;
    return request;
  }, []);

  const value = useMemo(
    () => ({
      categories,
      customerProducts,
      categoryProducts,
      productDetails,
      loadingCategories,
      loadingCustomerProducts,
      loadingCategoryProducts,
      loadingProductDetails,
      getUiState,
      updateUiState,
      ensureCategory,
      ensureCustomerProducts,
      ensureCategoryProducts,
      ensureProductDetail,
    }),
    [
      categories,
      customerProducts,
      categoryProducts,
      productDetails,
      loadingCategories,
      loadingCustomerProducts,
      loadingCategoryProducts,
      loadingProductDetails,
      getUiState,
      updateUiState,
      ensureCategory,
      ensureCustomerProducts,
      ensureCategoryProducts,
      ensureProductDetail,
    ]
  );

  return (
    <ProductsCatalogContext.Provider value={value}>
      {children}
    </ProductsCatalogContext.Provider>
  );
}

export function useProductsCatalog(segment) {
  const {
    categories,
    customerProducts,
    categoryProducts,
    loadingCategories,
    loadingCustomerProducts,
    loadingCategoryProducts,
    getUiState,
    updateUiState,
    ensureCategory: loadCategory,
    ensureCustomerProducts,
    ensureCategoryProducts,
  } = useContext(ProductsCatalogContext) ?? {};

  if (!loadCategory) {
    throw new Error("useProductsCatalog must be used within a ProductsCatalogProvider");
  }

  const key = segmentKey(segment);
  const isSegmentPage = Boolean(segment);
  const category = categories[key];
  const ui = getUiState(segment);

  const products =
    ui.filterMode === "customer" && ui.activeCustomerId
      ? customerProducts[ui.activeCustomerId] || []
      : [];

  const categoryProductList = category?.categoryId
    ? categoryProducts[category.categoryId] || []
    : [];

  const categoryLoading =
    Boolean(loadingCategories[key]) && !category?.loaded;

  const productsLoading =
    ui.filterMode === "customer" &&
    Boolean(ui.activeCustomerId) &&
    Boolean(loadingCustomerProducts[ui.activeCustomerId]) &&
    !customerProducts[ui.activeCustomerId];

  const categoryProductsLoading =
    ui.filterMode === "product" &&
    Boolean(category?.categoryId) &&
    Boolean(loadingCategoryProducts[category.categoryId]) &&
    !categoryProducts[category.categoryId];

  const ensureCategory = useCallback(
    () => loadCategory(segment),
    [loadCategory, segment]
  );

  const setFilterMode = useCallback(
    (mode) =>
      updateUiState(segment, {
        filterMode: mode,
        activeCustomerId: null,
        activeProductId: null,
        searchQuery: "",
      }),
    [updateUiState, segment]
  );

  const setActiveCustomerId = useCallback(
    (id) => updateUiState(segment, { activeCustomerId: id }),
    [updateUiState, segment]
  );

  const setActiveProductId = useCallback(
    (id) => updateUiState(segment, { activeProductId: id }),
    [updateUiState, segment]
  );

  const setSearchQuery = useCallback(
    (query) => updateUiState(segment, { searchQuery: query }),
    [updateUiState, segment]
  );

  return {
    isSegmentPage,
    categoryId: category?.categoryId ?? null,
    categoryName: category?.categoryName ?? "",
    customers: category?.customers ?? [],
    products,
    categoryProducts: categoryProductList,
    filterMode: ui.filterMode,
    activeCustomerId: ui.activeCustomerId,
    activeProductId: ui.activeProductId,
    searchQuery: ui.searchQuery,
    categoryLoading,
    productsLoading,
    categoryProductsLoading,
    setFilterMode,
    setActiveCustomerId,
    setActiveProductId,
    setSearchQuery,
    ensureCategory,
    ensureCustomerProducts,
    ensureCategoryProducts,
  };
}

export function useProductDetail(productId) {
  const {
    productDetails,
    loadingProductDetails,
    ensureProductDetail: loadProductDetail,
  } = useContext(ProductsCatalogContext) ?? {};

  if (!loadProductDetail) {
    throw new Error("useProductDetail must be used within a ProductsCatalogProvider");
  }

  const cached = productId ? productDetails[productId] : null;
  const loading =
    Boolean(productId) &&
    Boolean(loadingProductDetails[productId]) &&
    !cached;

  const ensureProductDetail = useCallback(
    () => loadProductDetail(productId),
    [loadProductDetail, productId]
  );

  return {
    product: cached,
    loading,
    ensureProductDetail,
  };
}
