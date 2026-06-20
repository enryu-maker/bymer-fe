import {
  STATIC_COMPANY_PROFILE,
  STATIC_SOCIAL_LINKS,
  STATIC_STATISTICS,
  STATIC_CLIENTS,
  STATIC_CATEGORIES,
  STATIC_PRODUCTS,
  STATIC_COMPOUNDS,
  STATIC_MACHINERY,
} from "./staticData";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://bymerbe.pythonanywhere.com";

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
    const res = await fetch(`${BASE_URL}/api/content/clients/`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) throw new Error("Failed to fetch clients");
    const data = await res.json();
    const results = data.results || data;
    if (Array.isArray(results)) {
      return results.map((client) => ({
        ...client,
        logo_url: formatImageUrl(client.logo_url),
      }));
    }
    return STATIC_CLIENTS;
  } catch (error) {
    console.warn("Using fallback client list due to:", error.message);
    return STATIC_CLIENTS;
  }
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

export async function fetchProducts(categorySlug = null) {
  try {
    let url = `${BASE_URL}/api/catalog/products/`;
    if (categorySlug) {
      url += `?category=${categorySlug}`;
    }
    const res = await fetch(url, {
      next: { revalidate: 1800 }, // Cache for 30 mins
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

export async function fetchMachinery(plant = null) {
  try {
    let url = `${BASE_URL}/api/catalog/machinery/`;
    if (plant) {
      // plant should be 'plant_1' or 'plant_2'
      url += `?plant=${plant}`;
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
        image_url: mach.image_url ? formatImageUrl(mach.image_url) : null,
      }));
    }
    throw new Error("Invalid machinery data format");
  } catch (error) {
    console.warn("Using fallback machinery list due to:", error.message);
    if (plant) {
      return STATIC_MACHINERY.map((m) => ({
        ...m,
        plant: plant,
        plant_display: plant === "plant_1" ? "Plant I" : "Plant II",
      }));
    }
    return STATIC_MACHINERY;
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
