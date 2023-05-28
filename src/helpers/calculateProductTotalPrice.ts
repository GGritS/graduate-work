import { ProductCardValue } from "../types";

export const calculateProductTotalPrice = (product: ProductCardValue) => {
  return product.quantity * product.price;
};
