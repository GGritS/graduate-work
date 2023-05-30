import { ReactNode } from "react";

export type ProductsContextProviderTypes = {
  products: Product[];
  handleAddProduct: (product: Omit<Product, "id" | "fid">) => void;
  handleEditProduct: (product: Product) => void;
  handleRemoveProduct: (fid: string) => void;
};

export type ProductsContextProviderProps = {
  children: ReactNode;
};

export type Product = {
  fid: string;
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
};
