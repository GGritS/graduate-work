import { Product } from "../context/products";

export type ProductCardValue = Omit<Product, "fid"> & {
  quantity: number;
  description: string;
};

export type CustomerData = {
  firstName: string;
  address: string;
  phoneNumber: string;
};
