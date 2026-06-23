import {
  STATIC_COMPANY_PROFILE,
  STATIC_SOCIAL_LINKS,
  STATIC_STATISTICS,
  STATIC_CLIENTS,
  STATIC_CATEGORIES,
  STATIC_PRODUCTS,
  STATIC_COMPOUNDS,
  STATIC_MACHINERY,
  STATIC_CERTIFICATIONS,
  STATIC_AWARDS,
  STATIC_MACHINERY_PLANTS,
  STATIC_PRODUCT_CATEGORIES,
  STATIC_PRODUCT_CATEGORY_DETAILS,
} from "./staticData";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://bymer.pythonanywhere.com";

// Helper to handle absolute URL formatting for images served by Django
export function formatImageUrl(url) {
  if (!url) return null;
  if (url.startsWith("http://") || url.startsWith("https://") || url.startsWith("/")) {
    return url;
  }
  return `${BASE_URL}${url.startsWith("/") ? "" : "/"}${url}`;
}

export async function fetchCompanyProfile() {
  try {
    const res = await fetch(`${BASE_URL}/api/globals/company-profile/`, {
      next: { revalidate: 3600 }, // Cache for 1 hour in Next.js
    });
    if (!res.ok) throw new Error("Failed to fetch company profile");
    const data = await res.json();
    return {
      ...data,
      logo_url: data.logo_url ? formatImageUrl(data.logo_url) : null,
    };
  } catch (error) {
    console.warn("Using fallback company profile due to:", error.message);
    return STATIC_COMPANY_PROFILE;
  }
}

export async function fetchSocialLinks() {
  try {
    const res = await fetch(`${BASE_URL}/api/globals/social-links/`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) throw new Error("Failed to fetch social links");
    const data = await res.json();
    // Handle paginated responses or simple arrays
    const results = data.results || data;
    return Array.isArray(results) ? results : STATIC_SOCIAL_LINKS;
  } catch (error) {
    console.warn("Using fallback social links due to:", error.message);
    return STATIC_SOCIAL_LINKS;
  }
}

export async function fetchStatistics() {
  try {
    const res = await fetch(`${BASE_URL}/api/globals/statistics/`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) throw new Error("Failed to fetch statistics");
    const data = await res.json();
    const results = data.results || data;
    return Array.isArray(results) ? results : STATIC_STATISTICS;
  } catch (error) {
    console.warn("Using fallback statistics due to:", error.message);
    return STATIC_STATISTICS;
  }
}

export async function fetchClients() {
  try {
    const res = await fetch(`${BASE_URL}/api/clients/`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) throw new Error("Failed to fetch clients");
    const data = await res.json();
    const results = data.results || data;
    if (Array.isArray(results)) {
      return results.map((client) => ({
        ...client,
        image: formatImageUrl(client.image || client.logo_url),
      }));
    }
    return STATIC_CLIENTS;
  } catch (error) {
    console.warn("Using fallback client list due to:", error.message);
    return STATIC_CLIENTS;
  }
}

export function getProductCategoryHref(name) {
  const slug = name.trim().toLowerCase().replace(/\s+/g, "-");
  return `/products/${slug}`;
}

export async function fetchProductCategories() {
  try {
    const res = await fetch(`${BASE_URL}/api/product-categories/`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) throw new Error("Failed to fetch product categories");
    const data = await res.json();
    const results = data.results || data;
    return Array.isArray(results) ? results : STATIC_PRODUCT_CATEGORIES;
  } catch (error) {
    console.warn("Using fallback product categories due to:", error.message);
    return STATIC_PRODUCT_CATEGORIES;
  }
}

export async function fetchProductCategoryById(id) {
  try {
    const res = await fetch(`${BASE_URL}/api/product-categories/${id}/`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) throw new Error("Failed to fetch product category");
    return await res.json();
  } catch (error) {
    console.warn("Using fallback product category detail due to:", error.message);
    return STATIC_PRODUCT_CATEGORY_DETAILS[id] || { id, name: "", customers: [] };
  }
}

export async function resolveProductCategoryId(segment) {
  if (!segment) return null;
  const categories = await fetchProductCategories();
  const match = categories.find(
    (category) =>
      category.name.trim().toLowerCase().replace(/\s+/g, "-") === segment
  );
  return match?.id ?? null;
}

export async function fetchCategories() {
  try {
    const res = await fetch(`${BASE_URL}/api/catalog/categories/`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) throw new Error("Failed to fetch product categories");
    const data = await res.json();
    const results = data.results || data;
    return Array.isArray(results) ? results : STATIC_CATEGORIES;
  } catch (error) {
    console.warn("Using fallback product categories due to:", error.message);
    return STATIC_CATEGORIES;
  }
}

export async function fetchCustomerProducts(customerId) {
  if (!customerId) return [];

  try {
    const res = await fetch(`${BASE_URL}/api/products/?customer=${customerId}`, {
      next: { revalidate: 1800 },
    });
    if (!res.ok) throw new Error("Failed to fetch customer products");
    const data = await res.json();
    const results = data.results || data;
    if (!Array.isArray(results)) return [];

    return results.map((product) => ({
      ...product,
      image: product.image ? formatImageUrl(product.image) : null,
    }));
  } catch (error) {
    console.warn("Failed to load customer products:", error.message);
    return [];
  }
}

export async function fetchProductById(id) {
  if (!id) return null;

  try {
    const res = await fetch(`${BASE_URL}/api/products/${id}/`, {
      next: { revalidate: 1800 },
    });
    if (!res.ok) throw new Error("Failed to fetch product");
    const data = await res.json();
    return {
      ...data,
      image: data.image ? formatImageUrl(data.image) : null,
    };
  } catch (error) {
    console.warn("Failed to load product:", error.message);
    return null;
  }
}

export async function fetchProducts(categorySlug = null) {
  try {
    let url = `${BASE_URL}/api/catalog/products/`;
    if (categorySlug) {
      url += `?category=${categorySlug}`;
    }
    const res = await fetch(url, {
      next: { revalidate: 1800 },
    });
    if (!res.ok) throw new Error("Failed to fetch products");
    const data = await res.json();
    const results = data.results || data;
    if (Array.isArray(results)) {
      return results.map((prod) => ({
        ...prod,
        image_url: prod.image_url ? formatImageUrl(prod.image_url) : null,
      }));
    }
    throw new Error("Invalid products data format");
  } catch (error) {
    console.warn("Using fallback products list due to:", error.message);
    if (categorySlug) {
      return STATIC_PRODUCTS.filter(
        (p) => p.category_slug.toLowerCase() === categorySlug.toLowerCase()
      );
    }
    return STATIC_PRODUCTS;
  }
}

export function getMachineryPlantHref(plant) {
  if (plant.id === 1) return "/machinery";
  if (plant.id === 2) return "/machinery-plant-ii";
  return `/machinery/plant-${plant.id}`;
}

export async function fetchMachineryPlants() {
  try {
    const res = await fetch(`${BASE_URL}/api/machinery-plants/`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) throw new Error("Failed to fetch machinery plants");
    const data = await res.json();
    const results = data.results || data;
    return Array.isArray(results) ? results : STATIC_MACHINERY_PLANTS;
  } catch (error) {
    console.warn("Using fallback machinery plants due to:", error.message);
    return STATIC_MACHINERY_PLANTS;
  }
}

export async function fetchMachinery(plantId = null) {
  try {
    let url = `${BASE_URL}/api/machinery/`;
    if (plantId != null) {
      url += `?plant=${plantId}`;
    }
    const res = await fetch(url, {
      next: { revalidate: 1800 },
    });
    if (!res.ok) throw new Error("Failed to fetch machinery");
    const data = await res.json();
    const results = data.results || data;
    if (Array.isArray(results)) {
      return results.map((mach) => ({
        ...mach,
        image_url: mach.image_url
          ? formatImageUrl(mach.image_url)
          : mach.image
            ? formatImageUrl(mach.image)
            : null,
      }));
    }
    return [];
  } catch (error) {
    console.warn("Failed to fetch machinery:", error.message);
    return [];
  }
}

export async function fetchCertifications() {
  try {
    const res = await fetch(`${BASE_URL}/api/certifications/`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) throw new Error("Failed to fetch certifications");
    const data = await res.json();
    const results = data.results || data;
    if (Array.isArray(results)) {
      return results.map((cert) => ({
        ...cert,
        image: cert.image ? formatImageUrl(cert.image) : null,
      }));
    }
    return STATIC_CERTIFICATIONS;
  } catch (error) {
    console.warn("Using fallback certifications due to:", error.message);
    return STATIC_CERTIFICATIONS;
  }
}

export async function fetchAwards() {
  try {
    const res = await fetch(`${BASE_URL}/api/awards/`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) throw new Error("Failed to fetch awards");
    const data = await res.json();
    const results = data.results || data;
    if (Array.isArray(results)) {
      return results.map((award) => ({
        ...award,
        image: award.image ? formatImageUrl(award.image) : null,
      }));
    }
    return STATIC_AWARDS;
  } catch (error) {
    console.warn("Using fallback awards due to:", error.message);
    return STATIC_AWARDS;
  }
}

export async function submitContactInquiry(payload) {
  try {
    const res = await fetch(`${BASE_URL}/api/forms/contact/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      const errData = await res.json().catch(() => ({}));
      throw new Error(JSON.stringify(errData) || "Form submission failed");
    }
    return await res.json();
  } catch (error) {
    console.error("Error submitting form:", error.message);
    throw error;
  }
}

export async function submitCareerApplication(payload) {
  try {
    const res = await fetch(`${BASE_URL}/api/forms/career/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      const errData = await res.json().catch(() => ({}));
      throw new Error(JSON.stringify(errData) || "Career form submission failed");
    }
    return await res.json();
  } catch (error) {
    console.error("Error submitting career form:", error.message);
    throw error;
  }
}
