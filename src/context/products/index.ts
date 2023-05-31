import { ReactNode } from "react";
import { Order } from "../orders";

export type ProductsContextProviderTypes = {
  products: Product[];
  handleAddProduct: (product: Omit<Product, "id" | "fid">) => void;
  handleEditProduct: (product: Product) => void;
  handleRemoveProduct: (fid: string) => void;
  dateState: DateSate;
  handleDateStateChange: (date: Date | null, params: string) => void;
  isWrongDateOrder: boolean;
  preparedDate: PreparedDateSate;
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

export type DateSate = {
  start: Date | null;
  end: Date | null;
};
export type PreparedDateSate = {
  start: string | null;
  end: string | null;
};
