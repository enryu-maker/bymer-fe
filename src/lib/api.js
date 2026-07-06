import {
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
const ORG_API_BASE_URL = process.env.NEXT_PUBLIC_ORG_API_URL || BASE_URL;

// Helper to handle absolute URL formatting for images served by Django
export function formatImageUrl(url) {
  if (!url) return null;
  if (url.startsWith("http://") || url.startsWith("https://") || url.startsWith("/")) {
    return url;
  }
  return `${BASE_URL}${url.startsWith("/") ? "" : "/"}${url}`;
}

export function formatOrgImageUrl(url) {
  if (!url) return null;
  if (url.startsWith("http://") || url.startsWith("https://")) {
    return url;
  }
  return `${ORG_API_BASE_URL}${url.startsWith("/") ? "" : "/"}${url}`;
}

export function sortBySequence(items = []) {
  return [...items].sort((a, b) => {
    const seqA = a.sequence ?? 0;
    const seqB = b.sequence ?? 0;
    if (seqA !== seqB) return seqA - seqB;
    return 0;
  });
}

async function fetchAllPaginatedResults(url, options = {}) {
  const items = [];
  let nextUrl = url;

  while (nextUrl) {
    const res = await fetch(nextUrl, options);
    if (!res.ok) throw new Error(`Failed to fetch ${url}`);

    const data = await res.json();

    if (Array.isArray(data)) {
      return data;
    }

    if (Array.isArray(data.results)) {
      items.push(...data.results);
      nextUrl = data.next || null;
      continue;
    }

    break;
  }

  return items;
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
    const detail = await res.json();
    if (Array.isArray(detail.customers)) {
      detail.customers = sortBySequence(detail.customers);
    }
    return detail;
  } catch (error) {
    console.warn("Using fallback product category detail due to:", error.message);
    const fallback = STATIC_PRODUCT_CATEGORY_DETAILS[id] || { id, name: "", customers: [] };
    return {
      ...fallback,
      customers: sortBySequence(fallback.customers || []),
    };
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

export async function fetchProductsByCategory(categoryId) {
  if (!categoryId) return [];

  try {
    const res = await fetch(`${BASE_URL}/api/products/?category=${categoryId}`, {
      next: { revalidate: 1800 },
    });
    if (!res.ok) throw new Error("Failed to fetch category products");
    const data = await res.json();
    const results = data.results || data;
    if (!Array.isArray(results)) return [];

    return results.map((product) => ({
      ...product,
      image: product.image ? formatImageUrl(product.image) : null,
    }));
  } catch (error) {
    console.warn("Failed to load category products:", error.message);
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

export function getMachineryPlantListHref(plantId) {
  if (plantId === 1) return "/machinery";
  if (plantId === 2) return "/machinery-plant-ii";
  return `/machinery/plant-${plantId}`;
}

export function getMachineryHref(id) {
  return `/machinery/${id}`;
}

export function normalizeMachinery(mach) {
  const plant = mach.plant;
  const plantId = typeof plant === "object" ? plant?.id : plant;
  const plantName = typeof plant === "object" ? plant?.name : plantId ? `Plant ${plantId}` : null;

  return {
    id: mach.id,
    name: mach.name || "",
    image: mach.image_url
      ? formatImageUrl(mach.image_url)
      : mach.image
        ? formatImageUrl(mach.image)
        : null,
    qty: mach.qty ?? mach.total_machines ?? null,
    plantId,
    plantName,
    capacity: mach.capacity || mach.tonnage_or_capacity || null,
    make: mach.make || null,
    year: mach.year ?? mach.year_of_purchase ?? null,
    platenSize: mach.platen_size || mach.platen_size_or_dimensions || null,
    createdAt: mach.created_at || null,
    updatedAt: mach.updated_at || null,
  };
}

function isMeaningfulValue(value) {
  if (value == null || value === "") return false;
  if (typeof value === "string" && value.trim() === "-") return false;
  return true;
}

export function getMachinerySpecLines(machine) {
  const lines = [];

  if (isMeaningfulValue(machine.make)) {
    lines.push({ label: "Make", value: machine.make });
  }
  if (machine.qty != null) {
    lines.push({
      label: "Quantity",
      value: `${machine.qty} Unit${machine.qty === 1 ? "" : "s"}`,
    });
  }
  if (isMeaningfulValue(machine.capacity)) {
    lines.push({ label: "Capacity", value: machine.capacity });
  }
  if (isMeaningfulValue(machine.platenSize)) {
    lines.push({ label: "Platen Size", value: machine.platenSize });
  }
  if (machine.year != null) {
    lines.push({ label: "Year of Purchase", value: String(machine.year) });
  }
  if (isMeaningfulValue(machine.plantName)) {
    lines.push({ label: "Plant", value: machine.plantName });
  }

  return lines;
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
      return sortBySequence(results.map((mach) => normalizeMachinery(mach)));
    }
    return [];
  } catch (error) {
    console.warn("Failed to fetch machinery:", error.message);
    return [];
  }
}

export async function fetchQAMachinery() {
  try {
    const plants = await fetchMachineryPlants();
    const qaPlant = plants.find((plant) => plant.name?.trim().toLowerCase() === "qa");
    if (!qaPlant?.id) {
      console.warn("QA plant not found in machinery plants");
      return [];
    }

    const res = await fetch(`${BASE_URL}/api/machinery/?plant=${qaPlant.id}`, {
      cache: "no-store",
    });
    if (!res.ok) throw new Error("Failed to fetch QA machinery");
    const data = await res.json();
    const results = data.results || data;
    if (Array.isArray(results)) {
      return sortBySequence(results.map((mach) => normalizeMachinery(mach)));
    }
    return [];
  } catch (error) {
    console.warn("Failed to fetch QA machinery:", error.message);
    return [];
  }
}

export async function fetchMachineryById(id) {
  try {
    const res = await fetch(`${BASE_URL}/api/machinery/${id}/`, {
      next: { revalidate: 1800 },
    });
    if (!res.ok) return null;
    const data = await res.json();
    return normalizeMachinery(data);
  } catch (error) {
    console.warn("Failed to fetch machinery detail:", error.message);
    return null;
  }
}

export async function fetchCertifications() {
  try {
    const res = await fetch(`${BASE_URL}/api/certifications/`, {
      cache: "no-store",
    });
    if (!res.ok) throw new Error("Failed to fetch certifications");
    const data = await res.json();
    const results = data.results || data;
    if (Array.isArray(results)) {
      return sortBySequence(
        results.map((cert) => ({
          ...cert,
          image: cert.image ? formatImageUrl(cert.image) : null,
        }))
      );
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
      return sortBySequence(
        results.map((award) => ({
          ...award,
          image: award.image ? formatImageUrl(award.image) : null,
        }))
      );
    }
    return STATIC_AWARDS;
  } catch (error) {
    console.warn("Using fallback awards due to:", error.message);
    return STATIC_AWARDS;
  }
}

export async function fetchTestimonials() {
  try {
    const results = await fetchAllPaginatedResults(`${BASE_URL}/api/testimonials/`, {
      cache: "no-store",
    });

    if (!Array.isArray(results)) return [];

    return results.map((testimonial) => ({
      ...testimonial,
      image: testimonial.image ? formatImageUrl(testimonial.image) : null,
    }));
  } catch (error) {
    console.warn("Failed to fetch testimonials:", error.message);
    return [];
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

export async function submitQuoteInquiry(payload, drawingFile = null) {
  try {
    const formData = new FormData();

    formData.append("full_name", payload.full_name);
    formData.append("company_name", payload.company_name);
    formData.append("email", payload.email);
    formData.append("phone", payload.phone);

    if (payload.industry) {
      formData.append("industry", payload.industry);
    }
    if (payload.product_required) {
      formData.append("product_required", payload.product_required);
    }
    formData.append("project_requirements", payload.project_requirements);

    if (drawingFile) {
      formData.append("drawing", drawingFile);
    }

    const res = await fetch(`${BASE_URL}/api/quote/`, {
      method: "POST",
      body: formData,
    });

    if (!res.ok) {
      const errData = await res.json().catch(() => ({}));
      throw new Error(JSON.stringify(errData) || "Quote submission failed");
    }
    return await res.json();
  } catch (error) {
    console.error("Error submitting quote:", error.message);
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

export async function fetchOrgPlants() {
  try {
    const res = await fetch(`${ORG_API_BASE_URL}/api/org-plants/`, {
      cache: "no-store",
    });
    if (!res.ok) throw new Error("Failed to fetch org plants");
    const data = await res.json();
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.warn("Failed to fetch org plants:", error.message);
    return [];
  }
}

export async function fetchOrgMemberTree(plantSlug) {
  try {
    const res = await fetch(
      `${ORG_API_BASE_URL}/api/org-members/tree/?plant_slug=${encodeURIComponent(plantSlug)}`,
      { cache: "no-store" }
    );
    if (!res.ok) throw new Error("Failed to fetch org tree");
    const data = await res.json();
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.warn("Failed to fetch org tree:", error.message);
    return [];
  }
}
