import productsData from './products.json';

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

export const products: Product[] = productsData as Product[];
