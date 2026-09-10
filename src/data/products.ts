import productsJson from './products.json';

export interface Product {
  id: string;
  name: string;
  subtitle: string;
  price: string;
  status: string;
  tagLeft: string;
  tagRight: string;
  desc: string;
  mainImage: string;
  gallery: string[];
  specs: { label: string; value: string }[];
  cardSpecs: { pena: string; material: string; recarga: string };
  highlights: { icon: string; title: string; desc: string }[];
}

/**
 * Produtos exportados estaticamente a partir de src/data/products.json
 */
export const products: Product[] = (productsJson as any).products as Product[];

export async function fetchProductsFromGoogleSheets(): Promise<Product[]> {
  return products;
}

