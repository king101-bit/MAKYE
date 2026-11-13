export type Product = {
  id: number;
  name: string;
  details: string;
  price: number;
  category: string;
  images: string[];
  colors: string[];
  sizes: string[];
};

export type ShopQuery = {
  q?: string;
  category?: string;
  price?: string;
  sort?: string;
};

export const CATEGORIES = ["Backpacks", "Totes", "Clothing"];

export const PRICE_RANGES = [
  { value: "0-10000", label: "Under ₦10,000" },
  { value: "10000-20000", label: "₦10,000 to ₦20,000" },
  { value: "20000-", label: "Over ₦20,000" },
];

const url = process.env.API_URL;

export async function getProduct(id: string): Promise<Product | null> {
  if (!/^\d+$/.test(id)) return null;

  const res = await fetch(`${url}/products/${id}`);
  if (res.status === 404 || res.status === 422) return null;
  if (!res.ok) throw new Error(`Failed to fetch product: ${res.status}`);

  return res.json();
}

export async function getProducts(query: ShopQuery = {}): Promise<Product[]> {
  const params = new URLSearchParams();
  if (query.q?.trim()) params.set("q", query.q.trim());
  if (query.category) params.set("category", query.category);
  if (query.price) params.set("price", query.price);
  if (query.sort) params.set("sort", query.sort);

  const res = await fetch(`${url}/products?${params}`);
  if (!res.ok) throw new Error(`Failed to fetch products: ${res.status}`);

  return res.json();
}

export const formatPrice = (n: number) => `₦${n.toLocaleString("en-NG")}`;
