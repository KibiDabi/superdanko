export interface NavigationItem {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  mainNav: Array<{
    title: string;
    items: Array<{
      title: string;
      href: string;
      description: string;
      items: any[];
    }>;
  }>;
  footerNav: Array<{
    title: string;
    items: {
      title: string;
      href: string;
    }[];
  }>;
}

export interface navLinksConfig {
  categories: Array<{
    name: string;
    description: string;
    subcategories: Array<{
      name: string;
      description: string;
      image: string;
      slug: string;
    }>;
  }>;
}

export type ProductsTableType = {
  id: string;
  name: string;
  description: string;
  image_url: string;
  variants: Variant[];
};

export type CategoryTableType = {
  id: string;
  name: string;
  slug: string;
  description: string | null;
};

export type SubcategoryTableType = {
  id: string;
  name: string;
  slug: string;
  description: string;
  image_url: string;
  category_id: string;
};

export type VariantTableType = {
  id: string;
  product_id: string;
  size: string;
  price: number;
};

export type SectionTextProps = {
  tagline?: React.ReactNode;
  title?: React.ReactNode;
  text?: React.ReactNode;
  buttonText?: React.ReactNode;
  href: string;
  align?: "left" | "center" | "right";
  animated?: boolean;
};

export type CartItemSchema = {
  cart_item_id: string;
  product_id: string;
  product_name: string;
  product_image: string;
  product_price: number;
  variant_price: number;
  variant_id: string;
  variant_size: string;
  quantity: number;
};

export type SubcategoryWithProducts = {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  category: string;
  products: Product[];
};

export type SubcategoryWithProducts2 = {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  products: Product[];
};

export type Product = {
  id: string;
  name: string;
  description: string;
  image_url: string;
  variants: Variant[];
};

export type Variant = {
  id: string;
  size: string;
  price: number;
};

export type CategoryWithSubcategories = {
  category: string;
  subcategories: SubcategoryWithProducts2[];
};

export type StoredFile = {
  id: string;
  name: string;
  image_url: string;
};
