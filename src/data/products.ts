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
 * URL da planilha do Google Sheets publicada em CSV.
 * Para ativar: No Google Sheets, vá em Arquivo > Compartilhar > Publicar na Web > Escolha a aba e selecione ".csv".
 * Cole a URL gerada na variável GOOGLE_SHEETS_CSV_URL abaixo ou no arquivo .env.
 */
export const GOOGLE_SHEETS_CSV_URL = process.env.GOOGLE_SHEETS_CSV_URL || "https://docs.google.com/spreadsheets/d/e/2PACX-1vSJ46S7bQHMnvva-haSQWKEQqP1njtqhGXopm5k4yCMTCnhfUq6k_n-0BCfhrJAL5bplG7ypWUkygnM/pub?output=csv";

/**
 * Função para buscar e converter a planilha pública do Google Sheets em array de Produtos.
 * Retorna os produtos da planilha ou o fallback local em products.json.
 */
export async function fetchProductsFromGoogleSheets(): Promise<Product[]> {
  if (!GOOGLE_SHEETS_CSV_URL) {
    return productsJson as Product[];
  }

  try {
    const response = await fetch(GOOGLE_SHEETS_CSV_URL);
    if (!response.ok) throw new Error(`Erro HTTP: ${response.status}`);
    const csvText = await response.text();
    
    const lines = csvText.split('\n').map(line => line.trim()).filter(Boolean);
    if (lines.length <= 1) return productsJson as Product[];

    // Converte CSV para objetos
    const headers = parseCSVLine(lines[0]);
    const parsedProducts: Product[] = [];

    for (let i = 1; i < lines.length; i++) {
      const values = parseCSVLine(lines[i]);
      if (values.length < headers.length) continue;

      const row: Record<string, string> = {};
      headers.forEach((h, idx) => {
        row[h.trim()] = values[idx] ? values[idx].trim() : '';
      });

      if (!row.id || !row.name) continue;

      parsedProducts.push({
        id: row.id,
        name: row.name,
        subtitle: row.subtitle || '',
        price: row.price || 'Sob Consulta',
        status: row.status || '',
        tagLeft: row.tagLeft || '',
        tagRight: row.tagRight || '',
        desc: row.desc || '',
        mainImage: row.mainImage || '/assets/raw_files/pen_silver.jpg',
        gallery: row.gallery ? row.gallery.split(',').map(s => s.trim()) : [row.mainImage],
        cardSpecs: {
          pena: row.cardSpecs_pena || '',
          material: row.cardSpecs_material || '',
          recarga: row.cardSpecs_recarga || ''
        },
        specs: parseSpecs(row.specs),
        highlights: parseHighlights(row.highlights)
      });
    }

    return parsedProducts.length > 0 ? parsedProducts : (productsJson as Product[]);
  } catch (error) {
    console.warn("Falha ao buscar Google Sheets, usando dados locais de fallback:", error);
    return productsJson as Product[];
  }
}

// Utilitário para parse de linha CSV lidando com aspas
function parseCSVLine(text: string): string[] {
  const result: string[] = [];
  let cur = '';
  let inQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (c === '"') {
      inQuotes = !inQuotes;
    } else if (c === ',' && !inQuotes) {
      result.push(cur);
      cur = '';
    } else {
      cur += c;
    }
  }
  result.push(cur);
  return result;
}

function parseSpecs(str?: string): { label: string; value: string }[] {
  if (!str) return [];
  return str.split(';').map(item => {
    const [label, value] = item.split(':');
    return { label: label?.trim() || '', value: value?.trim() || '' };
  }).filter(s => s.label);
}

function parseHighlights(str?: string): { icon: string; title: string; desc: string }[] {
  if (!str) return [];
  return str.split(';').map(item => {
    const parts = item.split('|');
    return {
      icon: parts[0]?.trim() || 'solar:shield-check-bold-duotone',
      title: parts[1]?.trim() || '',
      desc: parts[2]?.trim() || ''
    };
  }).filter(h => h.title);
}

// Exportação padrão síncrona de fallback
export const products: Product[] = productsJson as Product[];
