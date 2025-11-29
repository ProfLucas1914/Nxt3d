import { LucideIcon } from "lucide-react";

export type Category = "Todos" | "Brinquedos" | "Decorativos" | "Utilidades" | "Action Figures" | "Cosplay" | "Protótipos";

export type MaterialType = "PLA" | "PETG" | "ABS" | "TPU";

export interface ProductVariation {
  size: "Pequeno" | "Médio" | "Grande" | "Personalizado";
  dimensions: string;
  price: string;
}

export interface CatalogItem {
  id: string;
  title: string;
  description: string;
  longDescription?: string; // Detailed description for the popup
  priceStart: string; // Display price (e.g. "from R$ XX")
  images: string[]; // Array of images for carousel
  tags: string[];
  category: Category;
  featured?: boolean;
  isPromotional?: boolean; // New flag for promo filter
  weight?: string;
  dimensions?: string; // Default dimensions
  materialType: MaterialType; // Specific enum for filtering
  variations?: ProductVariation[]; // Array of size/price variations
}

export interface Material {
  name: string;
  description: string;
  durability: number; // 1-10
  detail: number; // 1-10
  color: string;
  icon: LucideIcon;
}

export interface PriceRow {
  service: string;
  unit: string;
  price: string;
  details?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}